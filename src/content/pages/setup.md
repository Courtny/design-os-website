# Setup

Get Design OS running in Claude Code or Cursor in five steps.

## 1. Install Claude Code

```bash
curl -fsSL https://claude.ai/install.sh | bash
claude --version
```

## 2. Open the Workspace

```bash
cd design-os
claude
```

**Using Cursor instead?** Open the `design-os` folder as your workspace. Cursor reads `CLAUDE.md` automatically. Reference skills with `@.claude/skills/<name>/SKILL.md` instead of slash commands.

## 3. Connect Figma (Recommended)

In Claude Code:

```
/connect-mcps connect to figma
```

Figma has an official remote MCP server. No API keys needed — just authenticate when prompted.

In Cursor: Settings → MCP → add HTTP server at `https://mcp.figma.com/mcp`.

Everything still works without Figma MCP using the file links in `context-library/design-system/figma.md`.

## 4. Fill Out Your Context

- Product context: `context-library/product-context-template.md`
- Design system: `context-library/design-system/storybook.md` and `figma.md`
- Component UX: `context-library/design-system/component-ux/`
- Writing styles: `context-library/writing-style-*.md`
- Example specs: `context-library/example-specs/`

## 5. Try Your First Command

```
/ux-brief            # Start a new feature brief
/critique-prep       # Prep for a design critique
/design-spec-draft   # Draft a UX spec from a brief or PRD
/visual-critique     # Critique a design from an attached image
/figma-critique      # Critique a Figma file and optionally post comments
```

## Cursor Tips

1. Pin `context-library/` in your file explorer for quick `@` references.
2. Use Composer for multi-file tasks like spec drafting.
3. Attach images for visual critique — drag a screenshot into chat.
4. Keep outputs in `outputs/`; promote finalized work to `context-library/`.

Full setup guides live in the repo: [`setup/first-session-checklist.md`](https://github.com/Courtny/design-os/blob/main/setup/first-session-checklist.md) and [`setup/cursor-setup.md`](https://github.com/Courtny/design-os/blob/main/setup/cursor-setup.md).
