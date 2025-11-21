"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-foreground">Visual Plan</h1>
          <p className="text-muted-foreground text-sm mt-1">AI-powered visual content generation</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4 text-balance">Create Beautiful Visuals with AI</h2>
            <p className="text-xl text-muted-foreground text-balance">
              Choose your creation mode and let AI bring your ideas to life
            </p>
          </div>

          {/* Mode Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Art Mode Card */}
            <Link href="/art">
              <Card className="h-full p-8 cursor-pointer hover:shadow-lg hover:border-primary transition-all bg-card hover:bg-accent/5">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-primary rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">🎨</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Art Mode</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Generate stunning images using advanced AI models. Perfect for illustrations, concept art, and
                      visual designs.
                    </p>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      Image Generation
                    </span>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                      PNG/JPEG
                    </span>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Diagram Mode Card */}
            <Link href="/diagram">
              <Card className="h-full p-8 cursor-pointer hover:shadow-lg hover:border-accent transition-all bg-card hover:bg-accent/5">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-accent rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">📊</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Diagram Mode</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Create scalable diagrams, flowcharts, and technical illustrations as SVG. Editable and perfect for
                      documentation.
                    </p>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                      Diagram Creation
                    </span>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      SVG
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </div>

          {/* Features Section */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">How it works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Write Your Prompt</h4>
                  <p className="text-sm text-muted-foreground">Describe what you want to create in natural language</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">AI Generates Visual Plan</h4>
                  <p className="text-sm text-muted-foreground">AI creates a detailed plan for your visual content</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Download Your Creation</h4>
                  <p className="text-sm text-muted-foreground">Get your finished visual in your preferred format</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>Visual Plan powered by AI SDK and OpenAI</p>
        </div>
      </footer>
    </main>
  )
}
