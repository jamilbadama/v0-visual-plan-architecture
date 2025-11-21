import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ModeHeaderProps {
  mode: "art" | "diagram"
  title: string
  subtitle: string
}

export function ModeHeader({ mode, title, subtitle }: ModeHeaderProps) {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Visual Plan
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            {title} • {subtitle}
          </p>
        </div>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </header>
  )
}
