---
type: 'agent_requested'
description: 'Apply to imports, file layout, and code readability.'
---

# Project Structure

## Imports

-   Always use absolute imports via alias (base at src).

## Layout

-   Source layout under src/{types,hooks,components}; scope locally (file/folder/parent) unless widely reused

## Readability

-   Use newline separation between logical code blocks for readability (DX)

## State Management (Zustand)

-   Stores live under src/store/STORENAME/index.ts
-   Organize per-store slices as separate files in the same directory (src/store/STORENAME/\*.ts), imported and combined in index.ts
