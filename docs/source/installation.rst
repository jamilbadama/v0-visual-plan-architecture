Installation
============

This guide provides detailed instructions for installing and setting up the Visual Plan Architecture application on your local machine.

Prerequisites
-------------

Before installing the application, ensure you have the following installed:

System Requirements
~~~~~~~~~~~~~~~~~~~~

- **Operating System**: Windows, macOS, or Linux
- **Node.js**: Version 18.0.0 or higher
- **Package Manager**: pnpm (recommended), npm, or yarn
- **Git**: For cloning the repository
- **OpenAI API Key**: Required for AI-powered features

Checking Your Environment
~~~~~~~~~~~~~~~~~~~~~~~~~

Verify that Node.js is installed:

.. code-block:: bash

   node --version

Verify that npm/pnpm is installed:

.. code-block:: bash

   npm --version
   # or
   pnpm --version

If Node.js is not installed, download it from `nodejs.org <https://nodejs.org/>`_.

Installing pnpm (Optional but Recommended)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you don't have pnpm installed, you can install it globally:

.. code-block:: bash

   npm install -g pnpm

Or using other methods:

.. code-block:: bash

   # Using Homebrew (macOS)
   brew install pnpm

   # Using standalone script
   curl -fsSL https://get.pnpm.io/install.sh | sh -

Installation Steps
------------------

Step 1: Clone the Repository
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Clone the repository to your local machine:

.. code-block:: bash

   git clone <repository-url>
   cd v0-visual-plan-architecture

Replace ``<repository-url>`` with the actual repository URL.

Step 2: Install Dependencies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Navigate to the project directory and install all required dependencies:

.. code-block:: bash

   pnpm install

If you're using npm instead:

.. code-block:: bash

   npm install

This will install all dependencies listed in ``package.json``, including:

- Next.js framework
- React and React DOM
- OpenAI SDK
- Tailwind CSS
- Radix UI components
- And other required packages

Step 3: Environment Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Create a ``.env.local`` file in the root directory of the project:

.. code-block:: bash

   # On Unix-based systems (macOS, Linux)
   touch .env.local

   # On Windows (PowerShell)
   New-Item .env.local

Add the following environment variables to ``.env.local``:

.. code-block:: env

   OPENAI_API_KEY=your_openai_api_key_here

Getting Your OpenAI API Key
^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. Go to `OpenAI Platform <https://platform.openai.com/>`_
2. Sign in or create an account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and paste it into your ``.env.local`` file

**Important**: Never commit your ``.env.local`` file to version control. It's already included in ``.gitignore``.

Optional Environment Variables
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

You can also configure these optional variables:

.. code-block:: env

   NEXT_PUBLIC_APP_URL=http://localhost:3000

Step 4: Verify Installation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Verify that the installation was successful by checking the project structure:

.. code-block:: bash

   # Check if node_modules exists
   ls node_modules

   # Check if .env.local exists
   ls .env.local

Step 5: Run the Development Server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Start the development server:

.. code-block:: bash

   pnpm dev

Or with npm:

.. code-block:: bash

   npm run dev

The application should now be running at ``http://localhost:3000``.

Open your browser and navigate to the URL to verify the application is working correctly.

Installation Methods
--------------------

Standard Installation
~~~~~~~~~~~~~~~~~~~~~

The steps above describe the standard installation method using the package manager.

Docker Installation (Optional)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you prefer using Docker, you can create a ``Dockerfile`` and ``docker-compose.yml`` for containerized deployment. This is useful for consistent environments across different systems.

Production Installation
~~~~~~~~~~~~~~~~~~~~~~~

For production deployment:

1. Build the application:

   .. code-block:: bash

      pnpm build

2. Start the production server:

   .. code-block:: bash

      pnpm start

Troubleshooting
---------------

Common Installation Issues
~~~~~~~~~~~~~~~~~~~~~~~~~~

**Issue: Node.js version incompatible**
   - **Solution**: Update Node.js to version 18 or higher
   - Check version: ``node --version``
   - Download from: `nodejs.org <https://nodejs.org/>`_

**Issue: pnpm command not found**
   - **Solution**: Install pnpm globally or use npm instead
   - Install pnpm: ``npm install -g pnpm``
   - Or use: ``npm install`` instead of ``pnpm install``

**Issue: Permission errors during installation**
   - **Solution**: On Unix systems, you may need to use ``sudo``
   - Or configure npm/pnpm to use a different directory
   - Fix npm permissions: `npm docs <https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally>`_

**Issue: Dependencies fail to install**
   - **Solution**: Clear cache and reinstall
   - Clear npm cache: ``npm cache clean --force``
   - Delete ``node_modules`` and ``package-lock.json`` or ``pnpm-lock.yaml``
   - Reinstall: ``pnpm install`` or ``npm install``

**Issue: Port 3000 already in use**
   - **Solution**: Use a different port
   - Set PORT environment variable: ``PORT=3001 pnpm dev``
   - Or kill the process using port 3000

**Issue: Environment variables not loading**
   - **Solution**: Ensure ``.env.local`` is in the root directory
   - Restart the development server after creating/modifying ``.env.local``
   - Check that variable names match exactly (case-sensitive)

**Issue: Build errors after installation**
   - **Solution**: Clear build cache and rebuild
   - Delete ``.next`` directory: ``rm -rf .next`` (Unix) or ``rmdir /s .next`` (Windows)
   - Rebuild: ``pnpm build``

Verification Checklist
----------------------

After installation, verify the following:

- [ ] Node.js version 18+ is installed
- [ ] All dependencies are installed (``node_modules`` exists)
- [ ] ``.env.local`` file exists with ``OPENAI_API_KEY`` set
- [ ] Development server starts without errors
- [ ] Application loads at ``http://localhost:3000``
- [ ] No console errors in the browser
- [ ] API endpoints are accessible

Next Steps
----------

Once installation is complete, you can:

- Read the :doc:`getting-started` guide for usage instructions
- Explore the :doc:`overview` for architecture details
- Check the :doc:`api/index` for API documentation
- Review :doc:`components/index` for component usage

Additional Resources
--------------------

- `Next.js Installation Guide <https://nextjs.org/docs/getting-started/installation>`_
- `pnpm Documentation <https://pnpm.io/motivation>`_
- `OpenAI API Setup <https://platform.openai.com/docs/quickstart>`_
- `Node.js Download <https://nodejs.org/en/download/>`_

