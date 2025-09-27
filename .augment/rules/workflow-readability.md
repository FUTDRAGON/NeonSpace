---
type: 'agent_requested'
description: 'Apply to GitHub Actions workflows, CI/CD structure, and workflow organization.'
---

# Workflow Readability & Cognitive Load

## Visual Structure

-   Use clear comment headers to group related steps: `# TypeScript Status Labels`
-   Add blank lines between logical sections for visual separation
-   Group related operations together (e.g., all label management for one check)

## Label Management

-   Consolidate multiple label operations into single steps using `gh cli`
-   Use multi-line `run: |` blocks to group related label changes
-   Always use `gh pr edit` commands for consistency across all workflows

## Step Organization

-   Group by function, not by success/failure (e.g., all TypeScript-related steps together)
-   Use consistent patterns across workflows
-   Prefer fewer, more comprehensive steps over many small steps
-   Keep related conditional logic close together
