// Visual Plan Schema

export interface VisualElement {
  id: string
  type: "shape" | "text" | "image" | "icon"
  position: { x: number; y: number }
  size: { width: number; height: number }
  properties: Record<string, any>
}

export interface VisualPlan {
  id: string
  mode: "art" | "diagram"
  title: string
  description: string
  prompt: string
  elements: VisualElement[]
  metadata: {
    style: string
    composition: string
    colors: string[]
    lighting?: string
  }
  createdAt: Date
  updatedAt: Date
}

export interface ArtGenerationRequest {
  prompt: string
  style?: string
  aspectRatio?: "1:1" | "16:9" | "9:16"
}

export interface DiagramGenerationRequest {
  prompt: string
  diagramType?: string
  layout?: string
}

export interface GenerationResult {
  success: boolean
  visualPlan: VisualPlan
  outputUrl: string
  format: string
}
