Pages
=====

The application uses Next.js App Router with pages defined in the ``app/`` directory.

.. toctree::
   :maxdepth: 2

   home
   art-page
   diagram-page

Page Structure
--------------

All pages are React Server Components by default, with client-side interactivity added using the ``"use client"`` directive where needed.

Routing
--------

- ``/`` - Home page with mode selection
- ``/art`` - Art generation page
- ``/diagram`` - Diagram generation page

Each page is a separate route in the Next.js application.

