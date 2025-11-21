"use client"

import { useState } from "react"
import { ModeHeader } from "@/components/mode-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function DiagramPage() {
  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState("")

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt")
      return
    }

    setLoading(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch("/api/generate-diagram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Generation failed")
      }
      const data = await response.json()
      setResult(data)
    } catch (err) {
      console.log("[v0] Client error:", err instanceof Error ? err.message : err)
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <ModeHeader mode="diagram" title="Diagram Mode" subtitle="Create scalable SVG diagrams" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="p-8 bg-card">
              <h2 className="text-xl font-bold text-foreground mb-4">Create Your Diagram</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Describe your diagram</label>
                  <Textarea
                    placeholder="A flowchart showing the user registration process with decision points..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={loading}
                    className="min-h-32"
                  />
                </div>

                {error && <div className="p-3 bg-destructive/10 text-destructive rounded-lg text-sm">{error}</div>}

                <Button onClick={handleGenerate} disabled={loading || !prompt.trim()} className="w-full" size="lg">
                  {loading ? "Generating..." : "Generate Diagram"}
                </Button>
              </div>
            </Card>

            {/* Info Section */}
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="font-semibold text-foreground mb-3">Diagram types:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Flowcharts and workflows</li>
                <li>• Architecture diagrams</li>
                <li>• Wireframes and mockups</li>
                <li>• Network and system diagrams</li>
              </ul>
            </Card>
          </div>

          {/* Preview Section */}
          <div>
            <Card className="p-8 bg-card h-full flex flex-col justify-center items-center min-h-96">
              {loading ? (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto" />
                  <p className="text-muted-foreground">Generating your diagram...</p>
                </div>
              ) : result ? (
                <div className="space-y-4 w-full">
                  <div
                    className="w-full border border-border rounded-lg bg-white p-4"
                    dangerouslySetInnerHTML={{ __html: result.svgContent }}
                  />
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Prompt: {result.prompt}</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Download SVG
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-3">📊</div>
                  <p className="text-muted-foreground">Your generated diagram will appear here</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
