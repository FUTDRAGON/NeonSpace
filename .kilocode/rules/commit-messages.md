# Commit Messages

- Use single-sentence Conventional Commits (feat/fix/docs/chore/refactor; optional scope). For large changes, add a short bullet list of secondary changes below.
- Capitalize the first word after the colon (e.g., "docs: Fix badges" not "docs: fix badges").
- Add spaces after commas in parentheses (e.g., "(word, word)" not "(word,word)").
- Base the message strictly on the actual diff (staged and unstaged) via the context engine; do not call out formatting-only edits unless explicitly requested.
- Prefer Context7/codebase diffs; do not run terminal git commands unless the user explicitly asks.

## Process & permissions (NeonSpace)

- Always inspect the repo's diffs before crafting the message: staged and unstaged. Never guess.
- You have permission to run read-only git commands in this repo for this purpose (git status, git diff). Do not modify state.
- Prefer the smallest scope: start from the staged diff; if ambiguity remains, include unstaged context or ask the user to clarify.
- Keep cognitive load minimal; keep the subject a single-sentence Conventional Commit; list secondary changes as brief bullets only when warranted.

## Cross-references

- See [Governance & Collaboration](governance-collaboration.md) for meta rules and collaboration guidelines
- See [Process & Branching](process-branching-ci.md) for workflow and CI/CD policies