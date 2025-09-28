---
type: 'agent_requested'
description: 'Apply to branching policy and CI/CD enforcement in NeonSpace.'
---

# Branching & CI/CD Policy (NeonSpace)

## Branching policy

- Only dev can open PRs to prev; only prev can open PRs to main.
- Workflows should validate PR base/head accordingly.

## CI/CD gates

- Allow main CI/CD only if checks pass.
- Deploy preview/production only after main CI/CD succeeds.
- Upload build artifacts only for PRs targeting prev or main (since only those trigger preview/production deployments).

## Fail-fast checks & labeling

- Run checks in sequence with fail-fast semantics:
  - After TypeScript failure: add fail label and exit.
  - After lint failure: add fail label and exit.
  - Format failures: add label but do not exit.
- Apply labels immediately after each check, not at the end.

## Organization & readability

- Consolidate related operations (especially label management) per check.
- Use clear visual grouping and comments to reduce cognitive load.
- Keep patterns consistent across workflows.

