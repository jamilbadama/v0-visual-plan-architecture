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

    // Generate visual plan for art
    const { text: visualPlan } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `You are an expert art director. Create a detailed visual plan for generating an image based on this description:

"${prompt}"

Provide a JSON structure with:
- title: A concise title for the image
- elements: Array of main visual elements
- style: Art style and mood
- composition: Layout and framing description
- colors: Color palette description
- lighting: Lighting and shadow description
- renderingInstructions: Detailed instructions for rendering

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

    // For demonstration, simulate image generation
    // In production, you would call an image generation API (DALL-E, Midjourney, etc.)
    const imageUrl = `/placeholder.svg?height=512&width=512&query=${encodeURIComponent(prompt)}`

    return Response.json({
      success: true,
      prompt,
      visualPlan: parsedPlan,
      imageUrl,
      format: "image/png",
    })
  } catch (error) {
    console.error("[v0] Art generation error:", error instanceof Error ? error.message : error)
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Generation failed",
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
