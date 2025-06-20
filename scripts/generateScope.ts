import { writeFileSync } from 'fs';
import { join } from 'path';

interface Scope {
  projectName: string;
  vision: string;
  coreGoals: string[];
  secondaryGoals: string[];
  constraints: Record<string, string>;
  successCriteria: string[];
}

const scope: Scope = {
  projectName: 'BazelLens',
  vision: 'Provide a first-class, cross-platform desktop GUI for Bazel that lets users configure, run, and visualize builds without touching the command line.',
  coreGoals: [
    'Browse and filter all Bazel targets in the workspace.',
    'Run bazel build, bazel test, bazel run and surface logs/errors in a styled console.',
    'Render an interactive graph of target dependencies.',
    'Ship Bazel binaries inside the app so end-users don’t need a separate install.',
    'Windows + macOS + Linux support from day one.'
  ],
  secondaryGoals: [
    'Persist workspace path, flags, theme.',
    'Seamless updates via Electron’s auto-updater.',
    'Light/dark modes.',
    'Desktop notifications on build/test completion.'
  ],
  constraints: {
    language: 'TypeScript',
    frontend: 'Electron (+ React/Vue/Plain HTML)',
    bazelIntegration: 'modbzl',
    packaging: 'electron-builder (single executable)',
    license: 'MIT'
  },
  successCriteria: [
    'App detects a Bazel workspace on launch.',
    'User can select and build targets, see live logs.',
    'Dependency graph is interactive.',
    'Executable bundles Bazel and runs out-of-the-box on Windows, macOS, Linux.'
  ]
};

function toMarkdown(s: Scope): string {
  const lines: string[] = [];
  lines.push('# BazelLens — Scope & Goals\n');
  lines.push('## Vision\n> ' + s.vision + '\n');
  lines.push('## Core Goals\n');
  s.coreGoals.forEach(g => lines.push(`- ${g}`));
  lines.push('\n## Secondary Goals\n');
  s.secondaryGoals.forEach(g => lines.push(`- ${g}`));
  lines.push('\n## Constraints & Tech Stack\n');
  Object.entries(s.constraints).forEach(([k, v]) =>
    lines.push(`- **${k}**: ${v}`)
  );
  lines.push('\n## Success Criteria (v1.0)\n');
  s.successCriteria.forEach(c => lines.push(`- ${c}`));
  return lines.join('\n');
}

const md = toMarkdown(scope);
const outPath = join(__dirname, '..', 'SCOPE.md');
writeFileSync(outPath, md, 'utf8');
console.log(`Written scope to ${outPath}`);
