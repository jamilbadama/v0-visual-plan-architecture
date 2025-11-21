Generate Diagram API
====================

Endpoint: ``POST /api/generate-diagram``

Generates a visual plan and SVG content for diagram creation based on a text prompt.

Request
-------

**Headers:**
   - ``Content-Type: application/json``

**Body:**
   .. code-block:: json

      {
         "prompt": "A flowchart showing the user registration process with decision points"
      }

**Parameters:**
   - ``prompt`` (string, required): Natural language description of the desired diagram

Response
--------

**Success (200):**
   .. code-block:: json

      {
         "success": true,
         "prompt": "A flowchart showing...",
         "visualPlan": {
            "title": "User Registration Flowchart",
            "type": "flowchart",
            "elements": [
               {
                  "id": "start",
                  "type": "process",
                  "label": "Start Registration"
               }
            ],
            "connections": [
               {
                  "from": "start",
                  "to": "validate"
               }
            ],
            "layout": "hierarchical",
            "styling": {
               "colors": ["#3b82f6", "#10b981"],
               "font": "Arial"
            },
            "svgInstructions": "Detailed SVG generation instructions..."
         },
         "svgContent": "<svg viewBox=\"0 0 800 600\">...</svg>",
         "format": "image/svg+xml"
      }

**Error (400):**
   .. code-block:: json

      {
         "error": "Invalid prompt"
      }

**Error (500):**
   .. code-block:: json

      {
         "error": "Generation failed",
         "details": "Error stack trace"
      }

Visual Plan Structure
---------------------

The ``visualPlan`` object contains:

- **title**: Concise title for the diagram
- **type**: Type of diagram (flowchart, architecture, wireframe, etc.)
- **elements**: Array of diagram elements with positions
- **connections**: Relationships between elements
- **layout**: Layout algorithm (hierarchical, circular, grid, etc.)
- **styling**: Colors, fonts, and visual hierarchy
- **svgInstructions**: Detailed SVG generation instructions

SVG Generation
--------------

The endpoint performs a two-step process:

1. **Visual Plan Generation**: Uses GPT-4o-mini to create a structured plan
2. **SVG Generation**: Uses GPT-4o-mini again to generate valid SVG XML code based on the plan

The generated SVG:
- Uses ``viewBox="0 0 800 600"``
- Includes proper styling for readability
- Contains descriptive shapes and text elements
- Is ready for direct use or further editing

Example Usage
-------------

.. code-block:: javascript

   const response = await fetch('/api/generate-diagram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         prompt: 'A system architecture diagram showing frontend, backend, and database layers'
      })
   });
   
   const data = await response.json();
   // Use data.svgContent directly in HTML
   document.getElementById('diagram').innerHTML = data.svgContent;

Supported Diagram Types
-----------------------

- Flowcharts and workflows
- Architecture diagrams
- Wireframes and mockups
- Network and system diagrams
- Organizational charts
- Process diagrams

