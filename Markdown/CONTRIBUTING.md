# This document provides an overview for all who contribute to NeonSpace.

## Labels Guide

### Automation / CI Status

| Label Title             | When to use it                                                               |
| ----------------------- | ---------------------------------------------------------------------------- |
| Formatting Drift        | When Biome reports formatting differences during `pnpm run lint` or in CI.   |
| Formatting Synchronized | When CI auto-formats files with Biome and pushes/notes the change.           |
| Diagnostics Failing     | When Biome lint or TypeScript jobs fail in CI.                               |
| Lint Stable             | When all Biome lint checks pass in CI.                                       |
| Types Stable            | When the TypeScript type-check job passes in CI.                             |
| Test Failure            | When any test job fails in CI.                                               |
| Test Stable             | When all test jobs pass in CI.                                               |
| Build Failure           | When the build job fails in CI.                                              |
| Build Stable            | When the build job succeeds in CI.                                           |
| Preview Deployed        | When a preview URL is successfully deployed for this PR.                     |
| Preview Failed          | When preview deployment for this PR fails.                                   |
| Automated Dependency PR | On PRs opened by Dependabot (should be applied automatically by automation). |
| Package Changes         | When package manifests or lockfiles change in the PR.                        |
| Breaking Change         | When the PR introduces a semver-major or public API breaking change.         |

### Issue Types

| Label Title               | When to use it                                                                  |
| ------------------------- | ------------------------------------------------------------------------------- |
| System Malfunction        | When reporting a bug or regression.                                             |
| Feature Upgrade           | When proposing or implementing a new capability or enhancement.                 |
| Clarification Needed      | When more information is required to proceed (ask for specifics).               |
| Contributor Help Needed   | When community assistance is desired to move the issue/PR forward.              |
| First Mission             | When an issue is beginner-friendly and well-scoped for first-time contributors. |
| Documentation Update      | When the work is about docs, guides, or examples.                               |
| Design Update             | When design/UX work is needed or being delivered.                               |
| Performance Boost         | When the goal is to improve speed, memory, or efficiency.                       |
| Security Hardening        | When addressing a vulnerability or tightening security posture.                 |
| Accessibility Improvement | When improving WCAG/a11y compliance or usability.                               |
| UX Improvement            | When improving flows, clarity, or interaction quality.                          |
| Maintenance Chore         | When doing cleanup, housekeeping, or non-functional maintenance.                |
| Duplicate                 | When this is already tracked elsewhere; link the canonical issue/PR.            |
| Invalid                   | When not actionable, not reproducible, or out of scope.                         |
| Won't Fix                 | When acknowledged but intentionally not planned.                                |
| Roadmap Milestone         | When tied to a specific milestone/epic on the roadmap.                          |

### PR Scope / Areas

| Label Title    | When to use it                                                      |
| -------------- | ------------------------------------------------------------------- |
| Cockpit        | When changing frontend UI, styling, or client-side app code.        |
| Engine Room    | When changing backend/server logic, APIs, or services.              |
| Module Bay     | When modifying shared UI components/design system.                  |
| Data Core      | When editing DB schemas, queries, migrations, or storage.           |
| Comms Link     | When updating API routes, contracts, or external integrations.      |
| Env Controls   | When changing configuration, environment variables, or secrets.     |
| Hull Plating   | When refactoring or improving code quality with no behavior change. |
| Patch          | When fixing a defect (bug fix PR).                                  |
| New Module     | When introducing a new feature or user-facing capability.           |
| Star Map       | When the PR is documentation-only.                                  |
| Launch Pad     | When touching CI, tests, build, or workflow automation.             |
| Flight Systems | When working on infrastructure, IaC, runtime, or pipelines.         |
| Simulator      | When adding/modifying automated tests only.                         |
| Launch         | When preparing releases: versioning, changelog, packaging.          |
| Crew Tools     | When adjusting developer tooling, dev scripts, or DX.               |

### Priority / Severity

| Label Title  | When to use it                                                           |
| ------------ | ------------------------------------------------------------------------ |
| P0 Critical  | When production is down, data at risk, or an immediate hotfix is needed. |
| P1 High      | When urgent and should be prioritized in the next sprint/hotfix.         |
| P2 Medium    | When normal priority within standard planning.                           |
| P3 Low       | When nice-to-have, cleanup, or low impact.                               |
| Blackout     | When there is an outage or critical path is broken.                      |
| Red Alert    | When severe degradation or major feature is broken.                      |
| Yellow Alert | When moderate impact with workarounds available.                         |
| Green Light  | When impact is minor or cosmetic.                                        |

### Status

| Label Title     | When to use it                                           |
| --------------- | -------------------------------------------------------- |
| Underway        | When work has started (assignee actively working).       |
| Need Clearance  | When blocked by a dependency, decision, or approval.     |
| Docking Check   | When the PR is ready for code review.                    |
| Clear To Launch | When approved and ready to merge.                        |
| Paused          | When work is intentionally paused awaiting input/timing. |
