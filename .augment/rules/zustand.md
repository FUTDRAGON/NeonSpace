---
type: 'agent_requested'
description: 'Apply to Zustand stores: immer middleware, slice splitting, and file placement.'
---

# Zustand Stores

## Middleware
- Always wrap stores with the immer middleware for ergonomic immutable updates.
- Optional: you may combine with devtools if helpful in development.

## Slices
- Split store logic into feature-focused slices for better DX and smaller files.
- Compose slices in the store entry (index.ts) to build the full store shape.

## Location
- Each store lives at src/store/STORENAME/index.ts.
- Place slice modules alongside it: src/store/STORENAME/*.ts.

## Example (skeleton)
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

