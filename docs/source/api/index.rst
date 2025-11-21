API Routes
==========

The application exposes two main API endpoints for generating visual content.

.. toctree::
   :maxdepth: 2

   generate-art
   generate-diagram

Overview
--------

All API routes are located in the ``app/api/`` directory and follow Next.js App Router conventions. They handle POST requests and return JSON responses.

Common Response Format
----------------------

Success Response:
   .. code-block:: json

      {
         "success": true,
         "prompt": "user prompt",
         "visualPlan": { },
         "format": "image/png"
      }

Error Response:
   .. code-block:: json

      {
         "error": "Error message",
         "details": "Stack trace (optional)"
      }

Authentication
---------------

Currently, the API routes do not require authentication. In production, you should add authentication middleware.

