"use client"

import { useState } from "react"
import { ModeHeader } from "@/components/mode-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function ArtPage() {
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
      const response = await fetch("/api/generate-art", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) throw new Error("Generation failed")
      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <ModeHeader mode="art" title="Art Mode" subtitle="Generate beautiful images with AI" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="p-8 bg-card">
              <h2 className="text-xl font-bold text-foreground mb-4">Create Your Image</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Describe your image</label>
                  <Textarea
                    placeholder="A serene landscape with mountains, a crystal-clear lake, and northern lights in the night sky..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    disabled={loading}
                    className="min-h-32"
                  />
                </div>

                {error && <div className="p-3 bg-destructive/10 text-destructive rounded-lg text-sm">{error}</div>}

                <Button onClick={handleGenerate} disabled={loading || !prompt.trim()} className="w-full" size="lg">
                  {loading ? "Generating..." : "Generate Image"}
                </Button>
              </div>
            </Card>

            {/* Info Section */}
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="font-semibold text-foreground mb-3">Tips for best results:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Be specific about style and mood</li>
                <li>• Include details about composition</li>
                <li>• Mention lighting and colors</li>
                <li>• Specify artistic style if desired</li>
              </ul>
            </Card>
          </div>

          {/* Preview Section */}
          <div>
            <Card className="p-8 bg-card h-full flex flex-col justify-center items-center min-h-96">
              {loading ? (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
                  <p className="text-muted-foreground">Generating your image...</p>
                </div>
              ) : result ? (
                <div className="space-y-4 w-full">
                  <img
                    src={result.imageUrl || "/placeholder.svg"}
                    alt="Generated art"
                    className="w-full rounded-lg border border-border"
                  />
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Prompt: {result.prompt}</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Download Image
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <p className="text-muted-foreground">Your generated image will appear here</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
