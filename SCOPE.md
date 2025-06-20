# BazelLens — Scope & Goals

## Vision
> Provide a first-class, cross-platform desktop GUI for Bazel that lets users configure, run, and visualize builds without touching the command line.

## Core Goals

- Browse and filter all Bazel targets in the workspace.
- Run bazel build, bazel test, bazel run and surface logs/errors in a styled console.
- Render an interactive graph of target dependencies.
- Ship Bazel binaries inside the app so end-users don’t need a separate install.
- Windows + macOS + Linux support from day one.

## Secondary Goals

- Persist workspace path, flags, theme.
- Seamless updates via Electron’s auto-updater.
- Light/dark modes.
- Desktop notifications on build/test completion.

## Constraints & Tech Stack

- **language**: TypeScript
- **frontend**: Electron (+ React/Vue/Plain HTML)
- **bazelIntegration**: modbzl
- **packaging**: electron-builder (single executable)
- **license**: MIT

## Success Criteria (v1.0)

- App detects a Bazel workspace on launch.
- User can select and build targets, see live logs.
- Dependency graph is interactive.
- Executable bundles Bazel and runs out-of-the-box on Windows, macOS, Linux.