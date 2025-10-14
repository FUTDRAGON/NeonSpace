# Frontend Architecture

## Project Structure

### Imports

- Always use absolute imports via alias (base at src)

### Layout

- Source layout under src/{types,hooks,components}; scope locally (file/folder/parent) unless widely reused

### Readability

- Use newline separation between logical code blocks for readability (DX)
- Prefer descriptive variable and property names; avoid abstract names like `c` or `v`

### Comments & Documentation

- Use descriptive comment headers that explain purpose, not just what (e.g., `# TypeScript Status Labels` not `# TypeScript`)
- Add comments before logical sections to create visual breaks and aid scanning
- Keep comments concise but meaningful - optimize for quick understanding
- Use consistent comment style across files for pattern recognition

### Cognitive Load Optimization

- Minimize cognitive overload with clear visual grouping
- Use descriptive headers that explain the purpose of each section
- Avoid scattered, repetitive operations - consolidate when possible
- Structure code with logical flow that's easy to scan and understand

## UI Components

### Libraries & Choices

- Prefer shadcn; you may use https://tweakcn.com to adjust/preview component variants
- You may build custom components for tighter control and reduced bloat when beneficial

### Accessibility

- Always ensure a11y (WCAG 2.2 AA): labels, roles, focus states, keyboard nav, color contrast

### Structure & Size

- One component per file; export default function
- Keep components small and focused; extract concerns even if not yet reusable

## Styling & Responsive

### Framework

- Use Tailwind CSS v4

### Responsive

- Use tailwind-clamp for fluid, responsive sizing (clamp-based scales)

### Plugins

- Include @tailwindcss/forms for improved form element defaults
- Include @tailwindcss/typography for rich prose styling

### Theming

- Project is dark-only (no theme switching)

### Workflow

- Desktop-first workflow; implement mobile when explicitly requested

## State Management

### Zustand Stores

#### Middleware

- Always wrap stores with the immer middleware for ergonomic immutable updates
- Optional: you may combine with devtools if helpful in development

#### Slices

- Split store logic into feature-focused slices for better DX and smaller files
- Compose slices in the store entry (index.ts) to build the full store shape

#### Location

- Each store lives at src/store/STORENAME/index.ts
- Place slice modules alongside it: src/store/STORENAME/*.ts

#### Example (skeleton)

```ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

// counter.slice.ts
export type CounterSlice = {
  count: number;
  inc: () => void;
};
export const createCounterSlice = (): CounterSlice => ({
  count: 0,
  inc: () => {},
});

// index.ts (store entry)
export type StoreState = CounterSlice; // + other slices
export const useStore = create<StoreState>()(
  immer((set, get) => ({
    ...createCounterSlice(),
    // other slices merged here
  }))
);
```

## React Compiler & Effects

### React Compiler

- React Compiler is enabled globally (Next.js experimental.reactCompiler)
- Use idiomatic hooks patterns; rely on compiler for optimization
- Use useMemo/useCallback only when profiling indicates a specific performance bottleneck

### Effects

- useEffect only to sync with the outside world (subscriptions, timers, DOM APIs, network/cache, logging/metrics, imperative widgets); do not use effects for pure computation or derived state
- useLayoutEffect only for pre-paint DOM read/write to avoid flicker; otherwise default to useEffect

### Component Purity

- Keep components pure and deterministic; prefer render-time derivation over effect-set state

### Server vs Client

- No effects in Server Components; place effects in Client Components only

## Cross-references

- See [Governance & Collaboration](governance-collaboration.md) for meta rules and collaboration guidelines
- See [Platform & Operations](platform-operations.md) for DevOps and safety rules
- See [Documentation & Content](docs-content-standards.md) for content and documentation guidelines