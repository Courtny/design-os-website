# Context Library

The context library is your team's design knowledge base. The richer it is, the better every skill output will be.

## Start Here

Fill these files first — they have the highest impact on output quality:

1. **Product context** — `context-library/product-context-template.md`
2. **Storybook** — `context-library/design-system/storybook.md`
3. **Figma** — `context-library/design-system/figma.md`
4. **Principles** — `context-library/design-system/principles.md`
5. **Component UX** — `context-library/design-system/component-ux/` (start with your 5 most-used components)
6. **Example specs** — `context-library/example-specs/` (add 1–3 real specs that set your quality bar)

## What's Inside

| Area | Purpose |
|------|---------|
| `design-system/` | Storybook, Figma, principles, per-component UX guidance |
| `foundations/` | 37 HCI and visual craft reference files (Fitts's Law, Gestalt, Tufte, WCAG, and more) |
| `methodology/` | Critique norms and handoff checklist |
| `writing-style-*.md` | Voice for internal, executive, engineering, and user-facing copy |
| `research/` | Usability sessions, eval notes, competitive UX |
| `decisions/` | Design decision logs and ADRs |
| `meetings/` | Critique notes, syncs, retros |
| `example-specs/` | Reference specs that calibrate `/design-spec-draft` |

## Conflict Resolution

**Storybook = production truth.** If Storybook and Figma differ, Storybook wins for implementation. Figma is exploratory unless a file or frame is explicitly labeled "approved" or "shipped."

## Pro Tips

1. Connect Figma first — run `/connect-mcps connect to figma` before anything else.
2. Fill component UX files — match component names to Storybook exactly.
3. Add example specs early — the copilot calibrates to your format and voice from day one.
4. Paste research transcripts — run `/research-synthesis` on raw session notes.
5. Browse foundations by topic — `context-library/foundations/README.md` is the index.
