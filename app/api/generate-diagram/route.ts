import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

function parseJsonResponse(text: string): Record<string, any> {
  let cleaned = text.trim()

  // Remove markdown code blocks if present
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.replace(/^```json\s*/, "").replace(/```\s*$/, "")
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```\s*/, "").replace(/```\s*$/, "")
  }

  cleaned = cleaned.trim()
  return JSON.parse(cleaned)
}

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json()

    if (!prompt || typeof prompt !== "string") {
      return Response.json({ error: "Invalid prompt" }, { status: 400 })
    }

    // Generate visual plan for diagram
    const { text: visualPlan } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `You are an expert diagram designer. Create a detailed visual plan for generating a diagram based on this description:

"${prompt}"

Provide a JSON structure with:
- title: A concise title for the diagram
- type: Type of diagram (flowchart, architecture, wireframe, etc.)
- elements: Array of diagram elements with positions
- connections: Relationships between elements
- layout: Layout algorithm (hierarchical, circular, grid, etc.)
- styling: Colors, fonts, and visual hierarchy
- svgInstructions: Detailed SVG generation instructions

Format as valid JSON only. Do not include markdown formatting, code blocks, or any text outside the JSON.`,
    })

    console.log("[v0] Visual plan response:", visualPlan.substring(0, 200))

    let parsedPlan: Record<string, any>
    try {
      parsedPlan = parseJsonResponse(visualPlan)
    } catch (parseError) {
      console.error("[v0] Failed to parse visual plan:", visualPlan)
      throw new Error(
        `Invalid JSON in visual plan: ${parseError instanceof Error ? parseError.message : "Unknown error"}`,
      )
    }

    // Generate SVG from the plan
    const { text: svgContent } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `Based on this diagram plan, generate a complete, valid SVG code:

${JSON.stringify(parsedPlan, null, 2)}

Requirements:
- Return ONLY valid SVG XML code, no explanation
- Use viewBox="0 0 800 600"
- Include proper styling for readability
- Use descriptive shapes and text elements
- Make it visually appealing
- Do not include markdown formatting or code blocks
- Return only the SVG code wrapped in <svg> tags.`,
    })

    const cleanedSvg = svgContent.trim()
    if (!cleanedSvg.startsWith("<svg")) {
      console.error("[v0] Invalid SVG response:", cleanedSvg.substring(0, 200))
      throw new Error("SVG generation did not produce valid SVG code")
    }

    return Response.json({
      success: true,
      prompt,
      visualPlan: parsedPlan,
      svgContent: cleanedSvg,
      format: "image/svg+xml",
    })
  } catch (error) {
    console.error("[v0] Diagram generation error:", error instanceof Error ? error.message : error)
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Generation failed",
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
