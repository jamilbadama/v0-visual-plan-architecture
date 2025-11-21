Overview
========

Visual Plan Architecture is a Next.js-based web application that leverages AI to generate visual content. The application provides an intuitive interface for users to create images and diagrams through natural language prompts.

Architecture
------------

The application is built with:

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **AI SDK**: Vercel AI SDK for AI model integration
- **OpenAI GPT-4o-mini**: AI model for generating visual plans
- **Radix UI**: Accessible component primitives

Project Structure
-----------------

::

   v0-visual-plan-architecture/
   ├── app/                    # Next.js App Router pages and API routes
   │   ├── api/               # API route handlers
   │   │   ├── generate-art/  # Art generation endpoint
   │   │   └── generate-diagram/ # Diagram generation endpoint
   │   ├── art/               # Art mode page
   │   ├── diagram/           # Diagram mode page
   │   ├── layout.tsx         # Root layout
   │   └── page.tsx           # Home page
   ├── components/            # React components
   │   ├── ui/                # UI component library
   │   ├── mode-header.tsx    # Mode header component
   │   └── theme-provider.tsx # Theme provider
   ├── lib/                   # Utility functions and types
   │   ├── types.ts           # TypeScript type definitions
   │   └── utils.ts           # Utility functions
   └── docs/                  # Documentation

Key Features
------------

1. **Dual Mode Generation**
   - Art Mode: Generate images with detailed visual plans
   - Diagram Mode: Create SVG diagrams with structured layouts

2. **AI-Powered Planning**
   - Generates detailed visual plans before creation
   - Includes composition, style, colors, and lighting information
   - Structured JSON output for programmatic use

3. **Modern UI/UX**
   - Responsive design with dark mode support
   - Intuitive interface with clear mode selection
   - Real-time generation feedback

4. **Type Safety**
   - Full TypeScript implementation
   - Well-defined interfaces for all data structures

Workflow
--------

1. User enters a natural language prompt describing desired visual
2. Application sends prompt to AI model
3. AI generates a detailed visual plan (JSON structure)
4. Visual plan is used to create the final output
5. User can download the generated content

