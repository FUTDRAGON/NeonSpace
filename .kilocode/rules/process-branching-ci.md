# Process & Branching CI/CD

## Branching policy

- Only dev can open PRs to prev; only prev can open PRs to main
- Workflows should validate PR base/head accordingly

## CI/CD gates

- Allow main CI/CD only if checks pass
- Deploy preview/production only after main CI/CD succeeds
- Upload build artifacts only for PRs targeting prev or main (since only those trigger preview/production deployments)

## Fail-fast checks & labeling

- Run checks in sequence with fail-fast semantics:
  - After TypeScript failure: add fail label and exit
  - After lint failure: add fail label and exit
  - Format failures: add label but do not exit
- Apply labels immediately after each check, not at the end

## Workflow readability & cognitive load

### Visual structure

- Use clear comment headers to group related steps: `# TypeScript Status Labels`
- Add blank lines between logical sections for visual separation
- Group related operations together (e.g., all label management for one check)

### Label management

- Consolidate multiple label operations into single steps using `gh cli`
- Use multi-line `run: |` blocks to group related label changes
- Always use `gh pr edit` commands for consistency across all workflows

### Step organization

- Group by function, not by success/failure (e.g., all TypeScript-related steps together)
- Use consistent patterns across workflows
- Prefer fewer, more comprehensive steps over many small steps
- Keep related conditional logic close together

## Organization & readability

- Consolidate related operations (especially label management) per check
- Use clear visual grouping and comments to reduce cognitive load
- Keep patterns consistent across workflows

## Cross-references

- See [Governance & Collaboration](governance-collaboration.md) for meta rules and collaboration guidelines
- See [Platform & Operations](platform-operations.md) for DevOps and safety rules
- See [Commit Messages](commit-messages.md) for commit message standards