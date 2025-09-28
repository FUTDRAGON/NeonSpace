---
type: 'agent_requested'
description: 'Apply to component architecture, library choice, and accessibility decisions.'
---

# UI Components

## Libraries & Choices

-   Prefer shadcn; you may use https://tweakcn.com to adjust/preview component variants
-   You may build custom components for tighter control and reduced bloat when beneficial

## Accessibility

-   Always ensure a11y (WCAG 2.2 AA): labels, roles, focus states, keyboard nav, color contrast

## Structure & Size

-   One component per file; export default function
-   Keep components small and focused; extract concerns even if not yet reusable

## Effects & Compiler

-   See “React Compiler & Effects” rules for effect/compiler guidance (to avoid duplication).
