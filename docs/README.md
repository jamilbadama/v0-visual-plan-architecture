# Documentation

This directory contains the Sphinx documentation for the Visual Plan Architecture project.

## Building the Documentation

### Prerequisites

1. Python 3.x installed
2. Virtual environment activated (see main project README)

### Build Steps

1. **Activate the virtual environment:**
   ```powershell
   # Windows PowerShell
   ..\venv\Scripts\Activate.ps1
   ```

2. **Build HTML documentation:**
   ```bash
   sphinx-build -b html source build
   ```

   Or use the Makefile:
   ```bash
   make html
   ```

3. **View the documentation:**
   Open `build/index.html` in your web browser.

## Documentation Structure

- `source/` - Source reStructuredText files
- `build/` - Generated HTML output (not committed to git)
- `Makefile` / `make.bat` - Build scripts

## Adding New Documentation

1. Create a new `.rst` file in the appropriate directory under `source/`
2. Add it to the relevant `index.rst` file's toctree
3. Rebuild the documentation

## Theme

The documentation uses the `sphinx_rtd_theme` (Read the Docs theme) for a modern, professional appearance.

