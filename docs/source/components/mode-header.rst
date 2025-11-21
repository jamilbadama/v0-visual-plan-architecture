ModeHeader Component
====================

Location: ``components/mode-header.tsx``

A reusable header component used in Art and Diagram mode pages.

Props
-----

.. code-block:: typescript

   interface ModeHeaderProps {
      mode: "art" | "diagram"
      title: string
      subtitle: string
   }

**Properties:**
   - ``mode``: The mode type ("art" or "diagram")
   - ``title``: Main title text
   - ``subtitle``: Subtitle text displayed below the title

Usage
-----

.. code-block:: tsx

   import { ModeHeader } from "@/components/mode-header"

   export default function ArtPage() {
      return (
         <main>
            <ModeHeader 
               mode="art" 
               title="Art Mode" 
               subtitle="Generate beautiful images with AI" 
            />
            {/* Page content */}
         </main>
      )
   }

Features
--------

- Sticky header that stays at the top when scrolling
- Backdrop blur effect for modern appearance
- "Back to Home" button for navigation
- Responsive design with proper spacing
- Theme-aware styling using Tailwind CSS

Implementation
--------------

The component renders:
- A link to the home page with the "Visual Plan" branding
- The mode title and subtitle
- A "Back to Home" button using the Button component

The header uses ``sticky top-0`` positioning and includes a backdrop blur effect for a modern look.

