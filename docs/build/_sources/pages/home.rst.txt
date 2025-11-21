Home Page
=========

Location: ``app/page.tsx``

The main landing page that provides an overview of the application and allows users to select between Art Mode and Diagram Mode.

Features
--------

- **Hero Section**: Main heading and description
- **Mode Selection Cards**: Two cards for Art and Diagram modes
- **Features Section**: "How it works" explanation
- **Footer**: Application credits

Mode Selection Cards
--------------------

Each mode card displays:
- Icon representing the mode
- Title and description
- Tags indicating output format
- Hover effects for interactivity

The cards link to:
- ``/art`` for Art Mode
- ``/diagram`` for Diagram Mode

How It Works Section
--------------------

A three-step explanation of the application workflow:

1. **Write Your Prompt**: Describe what you want to create
2. **AI Generates Visual Plan**: AI creates a detailed plan
3. **Download Your Creation**: Get your finished visual

Implementation
--------------

The page is a client component (``"use client"``) that uses React hooks for state management, though the current implementation doesn't require much state.

The page uses:
- Tailwind CSS for styling
- Next.js Link component for navigation
- Card component for mode selection
- Responsive grid layout

