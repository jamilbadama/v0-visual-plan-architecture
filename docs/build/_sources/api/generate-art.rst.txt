Generate Art API
================

Endpoint: ``POST /api/generate-art``

Generates a visual plan and image URL for art creation based on a text prompt.

Request
-------

**Headers:**
   - ``Content-Type: application/json``

**Body:**
   .. code-block:: json

      {
         "prompt": "A serene landscape with mountains, a crystal-clear lake, and northern lights in the night sky"
      }

**Parameters:**
   - ``prompt`` (string, required): Natural language description of the desired image

Response
--------

**Success (200):**
   .. code-block:: json

      {
         "success": true,
         "prompt": "A serene landscape...",
         "visualPlan": {
            "title": "Serene Mountain Landscape",
            "elements": ["mountains", "lake", "northern lights"],
            "style": "Realistic, atmospheric",
            "composition": "Wide landscape with foreground lake",
            "colors": "Deep blues, greens, purples",
            "lighting": "Soft moonlight with aurora glow",
            "renderingInstructions": "Detailed instructions..."
         },
         "imageUrl": "/placeholder.svg?height=512&width=512&query=...",
         "format": "image/png"
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

- **title**: Concise title for the image
- **elements**: Array of main visual elements
- **style**: Art style and mood description
- **composition**: Layout and framing description
- **colors**: Color palette description
- **lighting**: Lighting and shadow description
- **renderingInstructions**: Detailed instructions for rendering

Implementation Details
----------------------

The endpoint uses OpenAI's GPT-4o-mini model to:

1. Parse and understand the user's prompt
2. Generate a structured visual plan as JSON
3. Return the plan along with a placeholder image URL

**Note:** In the current implementation, the image URL is a placeholder. In production, you would integrate with an image generation API (DALL-E, Midjourney, Stable Diffusion, etc.) to generate the actual image.

Example Usage
-------------

.. code-block:: javascript

   const response = await fetch('/api/generate-art', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         prompt: 'A futuristic cityscape at sunset with flying cars'
      })
   });
   
   const data = await response.json();
   console.log(data.visualPlan);

