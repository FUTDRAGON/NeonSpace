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

-   React Compiler is enabled globally (Next.js experimental.reactCompiler); avoid manual useMemo/useCallback unless profiling proves an escape hatch is needed
-   Effects rule: useEffect only to sync with the outside world (subscriptions, timers, DOM APIs, network/cache, logging/metrics, imperative widgets); do not use effects for pure computation or derived state
-   useLayoutEffect only for pre-paint DOM read/write to avoid flicker; otherwise default to useEffect
-   Keep components pure and deterministic; prefer render-time derivation over effect-set state
-   Effects are not allowed in Server Components; place effects in Client Components only
