---
type: 'agent_requested'
description: 'Apply to crafting commit messages.'
---

# Commit Messages

- Use single-sentence Conventional Commits (feat/fix/docs/chore/refactor; optional scope). For large changes, add a short bullet list of secondary changes below.
- Base the message strictly on the actual diff (staged and unstaged) via the context engine; do not call out formatting-only edits unless explicitly requested.
- Prefer Context7/codebase diffs; do not run terminal git commands unless the user explicitly asks.

