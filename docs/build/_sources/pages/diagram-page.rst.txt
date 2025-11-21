Diagram Page
============

Location: ``app/diagram/page.tsx``

The Diagram Mode page where users can generate SVG diagrams using AI.

Layout
------

The page follows the same two-column layout as the Art page:

1. **Input Section** (left):
   - Textarea for entering prompts
   - Generate button
   - Diagram types information
   - Error display

2. **Preview Section** (right):
   - Loading state with spinner
   - Generated SVG diagram display
   - Download button
   - Prompt display

Features
--------

- **Prompt Input**: Multi-line textarea for describing the desired diagram
- **Real-time Generation**: Shows loading state during generation
- **Error Handling**: Displays error messages if generation fails
- **SVG Preview**: Renders the generated SVG directly in the page
- **Download Functionality**: Button to download the SVG

State Management
----------------

The page uses React hooks:

- ``prompt``: Stores the user's input
- ``loading``: Tracks generation status
- ``result``: Stores the API response with SVG content
- ``error``: Stores error messages

API Integration
---------------

The page calls ``/api/generate-diagram`` with a POST request containing the prompt.

**Request:**
   .. code-block:: json

      {
         "prompt": "User's description"
      }

**Response Handling:**
   - On success: Renders the SVG using ``dangerouslySetInnerHTML``
   - On error: Shows error message to the user

SVG Rendering
-------------

The generated SVG is rendered directly in the DOM using React's ``dangerouslySetInnerHTML`` prop. The SVG is wrapped in a container with proper styling for display.

**Note:** In production, you may want to sanitize the SVG content before rendering.

Diagram Types
-------------

The page provides information about supported diagram types:
- Flowcharts and workflows
- Architecture diagrams
- Wireframes and mockups
- Network and system diagrams

UI Components Used
------------------

- ``ModeHeader``: Page header with navigation
- ``Card``: Container for input and preview sections
- ``Textarea``: Prompt input field
- ``Button``: Generate and download buttons

Differences from Art Page
--------------------------

- Uses ``dangerouslySetInnerHTML`` to render SVG instead of an ``<img>`` tag
- Different loading spinner color (accent instead of primary)
- Different placeholder icon (📊 instead of 🎨)
- Different tips section focused on diagram types

