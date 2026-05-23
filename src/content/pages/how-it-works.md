# How It Works

Design OS is a context engine for product design. Instead of starting from scratch every time you open a chat, your design system, research, and decisions live in the repo and get pulled into every workflow.

## The Loop

1. **Fill your context library** — Product context, Storybook links, Figma files, principles, component UX guidance, example specs, and research.
2. **Run a skill** — Type a slash command in Claude Code or reference a skill file with `@` in Cursor.
3. **Work lands in `outputs/`** — Briefs, specs, critique notes, prototypes, and meeting notes stay organized by type.
4. **Promote what sticks** — Finalized decisions, specs, and research move into `context-library/` so the next session starts smarter.

## Recommended Workflows

### New feature

`/ux-brief` → check research → optional `/prototype` → `/design-spec-draft` → `/critique-prep` → `/meeting-notes`

### Design critique

`/critique-prep` → run session → `/meeting-notes` → log decisions in `context-library/decisions/`

### Research

`/research-synthesis` → update `component-ux/` → promote insights to `context-library/`

### Pre-handoff

`/accessibility-review` → `/handoff-check` → ship to engineering

## Sub-agents

Five specialized reviewers add perspective when you need it:

- **PM alignment** — Product and strategy fit
- **Engineering feasibility** — Implementation concerns
- **Content design** — Microcopy and hierarchy
- **Accessibility** — WCAG and inclusive design
- **Brand** — Visual consistency

Ask the copilot to review from any perspective, or combine several for a multi-angle critique.

## Claude Code vs. Cursor

| Feature | Claude Code | Cursor |
|---------|------------|--------|
| Skills | Type `/skill-name` | Reference skill file with `@` |
| Project context | `CLAUDE.md` auto-loaded | Same |
| MCP connections | Terminal command | Cursor Settings → MCP |
| Outputs | Writes to `outputs/` | Same in Agent mode |
