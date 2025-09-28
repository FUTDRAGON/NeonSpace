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
-   Prefer descriptive variable and property names; avoid abstract names like `c` or `v`

## Comments & Documentation

-   Use descriptive comment headers that explain purpose, not just what (e.g., `# TypeScript Status Labels` not `# TypeScript`)
-   Add comments before logical sections to create visual breaks and aid scanning
-   Keep comments concise but meaningful - optimize for quick understanding
-   Use consistent comment style across files for pattern recognition

## Cognitive Load Optimization

-   Minimize cognitive overload with clear visual grouping
-   Use descriptive headers that explain the purpose of each section
-   Avoid scattered, repetitive operations - consolidate when possible
-   Structure code with logical flow that's easy to scan and understand

## State Management

-   See "Zustand Stores" rules for store structure, slices, and middleware.
