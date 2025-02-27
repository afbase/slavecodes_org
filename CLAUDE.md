# CLAUDE.md - Guide for Agentic Coding Assistants

## Build Commands
- Build site: `zola build`
- Development server: `zola serve`
- Preview with drafts: `zola serve --drafts`
- Build with base URL: `zola build --base-url $URL`

## Content Structure
- Main content in `/content` directory
- Slave codes in `/content/codes/`
- Blog posts in `/content/blog/`
- Authors in `/content/authors/`

## Style Guidelines
- Follow existing Markdown conventions in similar files
- Use front matter for metadata (title, date, author, etc.)
- Include proper attribution for historical documents
- Maintain language file organization (en, es, fr, pt)
- Respect Creative Commons Attribution-NonCommercial-ShareAlike 4.0 license
- For multilanguage content, use language-specific files in subdirectories

## Theme
- Based on AdiDoks theme - respect its templating structure
- Template customizations in `/themes/adidoks/templates/`