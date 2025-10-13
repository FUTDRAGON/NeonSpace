# Platform & Operations

## Commands & Packages

- Always use pnpm for commands
- Never edit package.json scripts/dependencies manually; use pnpm commands

## Safety

- Do not run git commands without explicit permission
- Exception: read-only git status/diff allowed when crafting commit messages (see Commit Messages rules).

## Platform

- Hosted on Vercel

## Caching

- Prefer HTTP cache headers or ISR for global/static data

## Client Data

- Use TanStack Query for per-user or highly dynamic data

## Analytics

- See "Documentation & Content Standards" rules for analytics widgets and links.

## Context & Retrieval

- When working on something "specific", refresh knowledge with Context7 MCP before proposing changes

## Cross-references

- See [Governance & Collaboration](governance-collaboration.md) for meta rules and collaboration guidelines
- See [Process & Branching](process-branching-ci.md) for workflow and CI/CD policies
- See [Documentation & Content](docs-content-standards.md) for analytics and documentation guidelines
- See [Frontend Architecture](frontend-architecture.md) for code structure and component guidelines