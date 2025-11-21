Art Page
========

Location: ``app/art/page.tsx``

The Art Mode page where users can generate images using AI.

Layout
------

The page is divided into two main sections:

1. **Input Section** (left):
   - Textarea for entering prompts
   - Generate button
   - Tips for best results
   - Error display

2. **Preview Section** (right):
   - Loading state with spinner
   - Generated image display
   - Download button
   - Prompt display

Features
--------

- **Prompt Input**: Multi-line textarea for describing the desired image
- **Real-time Generation**: Shows loading state during generation
- **Error Handling**: Displays error messages if generation fails
- **Image Preview**: Displays the generated image
- **Download Functionality**: Button to download the generated image

State Management
----------------

The page uses React hooks:

- ``prompt``: Stores the user's input
- ``loading``: Tracks generation status
- ``result``: Stores the API response
- ``error``: Stores error messages

API Integration
---------------

The page calls ``/api/generate-art`` with a POST request containing the prompt.

**Request:**
   .. code-block:: json

      {
         "prompt": "User's description"
      }

**Response Handling:**
   - On success: Displays the generated image
   - On error: Shows error message to the user

Tips Section
------------

Provides guidance for writing effective prompts:
- Be specific about style and mood
- Include details about composition
- Mention lighting and colors
- Specify artistic style if desired

UI Components Used
------------------

- ``ModeHeader``: Page header with navigation
- ``Card``: Container for input and preview sections
- ``Textarea``: Prompt input field
- ``Button``: Generate and download buttons

