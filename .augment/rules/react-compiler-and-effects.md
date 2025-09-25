---
type: 'agent_requested'
description: 'Apply automatically when working on React/Next components, hooks, effects, or performance.'
---

# React Compiler & Effects

## React Compiler

-   React Compiler is enabled globally (Next.js experimental.reactCompiler); avoid manual useMemo/useCallback unless profiling proves an escape hatch is needed.

## Effects

-   useEffect only to sync with the outside world (subscriptions, timers, DOM APIs, network/cache, logging/metrics, imperative widgets); do not use effects for pure computation or derived state.
-   useLayoutEffect only for pre-paint DOM read/write to avoid flicker; otherwise default to useEffect.

## Component Purity

-   Keep components pure and deterministic; prefer render-time derivation over effect-set state.

## Server vs Client

-   No effects in Server Components; place effects in Client Components only.
