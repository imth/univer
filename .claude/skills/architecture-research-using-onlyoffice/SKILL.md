---
name: architecture-research-using-onlyoffice
description: Use when designing a non-trivial Univer feature (especially in docs / sheets / slides) and you need to validate an architectural choice against how a mature Office-compatible editor solved the same problem. Establishes process + license guardrails for borrowing IDEAS from OnlyOffice without copying CODE.
---

# Architecture research using OnlyOffice as a reference

When you're picking between two non-obvious architectural approaches in a Univer feature — especially anything touching the docs editing model (selection scope, undo grouping, sub-document boundaries, drawing model, layout/skeleton tree) — Univer's existing patterns + ECMA-376 spec are not always enough to decide. The most useful tiebreaker is "how does a mature, Word-compatible Canvas-based editor solve this?", and that editor is OnlyOffice (`ONLYOFFICE/sdkjs` on GitHub).

This skill exists because:

1. OnlyOffice has been doing what Univer is doing — Canvas-based DOCX editor — for ~10 years and has resolved most of the hard architectural questions
2. Reasoning about Word UX from first principles often produces wrong answers (see Lessons section), and you can spend hours flip-flopping between approaches without a real reference
3. **OnlyOffice is AGPL-3.0; Univer is Apache-2.0** — these licenses are incompatible. You CAN read the code for ideas; you CANNOT copy code, paraphrase code line-by-line, or even reuse class/field names verbatim
4. Without a deliberate process, it's easy to (a) cite OnlyOffice from prior knowledge instead of actually reading it, (b) get an incorrect mental model from sub-agents who haven't read it either, (c) accidentally cross the license line

## When to use this skill

- Picking between architectural approaches for any docs / sheets / slides feature where the choice affects the data model, command bus, undo stack, selection model, or layout tree
- Adding a new kind of "container" (sub-document, embedded body, repeating section, comment thread, footnote)
- Deciding how to model something OOXML defines as a "story" (textbox, header, footer, footnote, endnote, comment)
- Whenever you catch yourself reasoning "Word probably does X" without evidence — stop, use this skill

Don't use for:
- Pure layout/rendering math (use ECMA-376 spec or LibreOffice as reference instead — LibreOffice is MPL-2.0 + LGPL, slightly less restrictive)
- Univer-only architectural decisions that don't have a Word counterpart (Univer's plugin system, dependency injection style, RxJS streams)
- Trivially small changes — research overhead exceeds the benefit

## License rules — read first

OnlyOffice sdkjs is **AGPL-3.0**. Univer is **Apache-2.0**. AGPL "infects" any project that copies its code. To stay safe:

| Allowed | Not allowed |
|---|---|
| Reading the source for understanding | Copy-pasting code (any size) |
| Citing it as evidence ("OnlyOffice does X") in design discussions | Translating a function line-by-line |
| Writing your own implementation of the same idea | Reusing distinctive class names, field names, enum values verbatim |
| Documenting "OnlyOffice solves problem Y by approach Z" in design docs | Including OnlyOffice code in the Univer repo, even commented out |

The bar is "**clean room** equivalent": you can describe the problem and the high-level solution in your own words; the implementer (could be future-you, or another agent) writes Univer-style code from that description, not from the OnlyOffice source.

If you find yourself wanting to write Univer code that looks structurally identical to OnlyOffice code you just read, stop. Take a break, then describe the design in plain English (or the design doc), and implement from the description.

## Process

### 1. Decide if research is warranted

Before opening the OnlyOffice repo: write down (mentally or in chat) the two-or-more concrete approaches you're considering, and what specifically you can't decide between them on Univer-internal grounds. If the question is "OnlyOffice has done this — let me see how", proceed. If the question is "I just want to look around", skip it.

### 2. Get the source locally — don't ask sub-agents

Sub-agents will give you OnlyOffice "facts" from their training data. Those facts are often outdated or invented (see Lessons → Sub-agent prior knowledge below). Always read the actual source.

```bash
cd /tmp && git clone --depth 1 --filter=blob:none --sparse \
    https://github.com/ONLYOFFICE/sdkjs.git sdkjs-research
cd sdkjs-research
git sparse-checkout set word common  # or whichever subset you need
```

The repo is large (~500 MB without sparse-checkout). Sparse-checkout `word/Editor`, `word/Drawing`, `common/Drawings`, `common/Drawings/Format` covers most docs-side architecture.

### 3. Find the relevant class with grep, not search engines

OnlyOffice uses prototype-style JS, so class lookups are mechanical:

```bash
grep -rn "function CWhatever\b" word/ common/        # constructor
grep -rn "CWhatever\.prototype\." word/ common/      # methods
grep -rn "new CWhatever(" word/ common/              # call sites
```

Useful starting points:
- **`word/Editor/Document.js`** — `CDocument`, top-level. `LogicDocument` is OnlyOffice's term for "the Word document".
- **`word/Editor/DocumentContent.js`** — `CDocumentContent`. The fundamental unit. Body, header, footer, table cell, footnote, textbox content are all instances of this. Has selection / cursor / paste / history methods. **This is OnlyOffice's central architectural insight: one general "content" class, many parents.**
- **`common/Drawings/Format/Shape.js`** — `CShape`, including how a textbox holds a `CDocumentContent` via `setTextBoxContent(...)`.
- **`word/Editor/CollaborativeEditing.js`** — multi-user / undo grouping.
- **`common/HistoryCommon.js`** — undo stack architecture (single shared stack across all `CDocumentContent` instances).

### 4. Map OnlyOffice's solution to Univer's vocabulary

OnlyOffice and Univer have different architectures, so a 1:1 mapping rarely exists. The translation usually goes:

- OnlyOffice "**`CDocumentContent` instance**" ≈ Univer "**a body in `documentData` referenced by segmentId** + the slice of `Documents` skeleton tree that renders it"
- OnlyOffice "shared `CHistory`" ≈ Univer "single command bus + `RichTextEditingMutation` undo stack per unitId"
- OnlyOffice "selection in one `CDocumentContent` at a time" ≈ Univer "selection scoped to one segmentId at a time"

Don't try to recreate OnlyOffice classes in Univer. Recreate the **invariants and boundaries** they enforce.

### 5. Document the finding in the design doc

In the design doc, cite OnlyOffice findings with this template:

> **Reference: OnlyOffice (AGPL-3.0)**. We confirmed by reading
> `word/Editor/<file>.js` and `common/Drawings/Format/<file>.js` (commit
> `<sha>`) that OnlyOffice models text box content as another instance
> of its general `CDocumentContent` class, not a specialized subclass,
> and that selection state is per-instance. We adopt the same
> separation in Univer's vocabulary: textbox body becomes a new
> segmentId-addressable region of the parent unit, and selection
> service tracks a separate active selection per segmentId.

This makes the legal stance explicit (we read it for ideas, not code), records the pin (commit sha) so future readers can verify, and forces you to translate to Univer terms.

## Lessons learned (read these — they're why this skill exists)

These are real mistakes from prior architecture discussions. Each one cost 30+ minutes of flip-flopping.

### 1. "Word probably behaves like X" without evidence

**Failure mode**: From "inline drawing is anchored as a single character", reasoning "therefore selection should flow through it like through characters" — and shifting the design accordingly.

**Reality**: Word treats inline AND floating text boxes as opaque "stories" (ECMA-376 §17.17). Selection skips over them as a unit. The "single character" anchoring is a layout property, not a selection property.

**Rule**: Behavior reasoning from data structures is unreliable. Verify Word UX directly (open Word, try the behavior, 30 seconds) OR verify against ECMA-376 spec. Never both ways: "I believe X is true → I will design assuming X".

### 2. Sub-agent prior knowledge of OnlyOffice is unreliable

**Failure mode**: Asking a sub-agent "what does OnlyOffice do for textboxes?" and getting an authoritative-sounding answer like "`CTextBoxContent extends CDocumentContent`". The sub-agent didn't actually read the repo — it inferred from training data, which contained partial / outdated / invented information.

**Reality**: OnlyOffice has no `CTextBoxContent` class. It just instantiates `CDocumentContent` and assigns it to a `CShape`'s textBoxContent field. The sub-agent's "subclass" framing led the design discussion in a wrong direction for several rounds.

**Rule**: **Never use a sub-agent's prior-knowledge claims about OnlyOffice as evidence.** Either read the source yourself (per process step 3), or send the sub-agent in with explicit instructions to clone the repo and grep — and verify what it reports.

### 3. "Architectural elegance" can be backwards

**Failure mode**: Deciding "the architecturally cleaner solution is to make textbox a sub-skeleton of the main `Documents`, like header/footer" — without checking that this is what the reference editors actually do, or what Word's UX requires.

**Reality**: Univer's existing pattern (header/footer/table all in one skeleton tree) is a Univer-specific implementation choice, not a universal "best practice". OnlyOffice uses multi-instance `CDocumentContent`. Both are correct because they enforce the same invariant (selection scoped per region). The "cleaner" choice depends entirely on which architecture's primitives you're reusing.

**Rule**: When deciding "what's architecturally right", you need TWO grounds: (a) what **invariant** are you preserving (selection scope, undo grouping, command routing) and (b) what **existing Univer pattern** lets you preserve it cheapest. Architectural elegance without grounding in invariants is aesthetic.

### 4. Flip-flopping is a sign of weak grounding

**Failure mode**: Switching the recommended approach 3+ times in one design discussion as new arguments come in.

**Reality**: If you're flip-flopping, the underlying argument is weak — you're swayed by whichever consideration is most recent. Stop, identify the **invariant** the design must preserve, and check it against an external authority (Word behavior test or OnlyOffice source). When you have one external pin, the design stops flip-flopping.

**Rule**: At most one flip per architecture discussion. If you flip a second time, switch to research mode (this skill) before flipping a third time.

## Quick reference — common architectural questions

| Question | Where to look in OnlyOffice | What to verify in Word |
|---|---|---|
| Sub-document container model (textbox / footer / footnote) | `word/Editor/DocumentContent.js`, instances created in `Document.js` and `common/Drawings/Format/Shape.js` | Open a doc with that container type, observe selection/cursor behavior |
| Undo / redo grouping | `common/HistoryCommon.js`, `CHistory` | Make change in nested container, Ctrl-Z, observe what's undone |
| Drawing inline vs floating | `common/Drawings/Format/Shape.js`, `Drawings/CommonController.js` | Insert both kinds, try selecting through them |
| Tables as nested document content | `word/Editor/Table.js`, `CTable` | Create table, type in cell, check selection / arrow-key behavior |
| Comments / track changes scope | `word/Editor/Comments.js`, `word/Editor/CollaborativeEditing.js` | Add comment, observe how it's anchored |

## Anti-patterns

- **Don't ask "what does OnlyOffice do" without reading.** Cite the file path and what you observed there.
- **Don't recreate OnlyOffice's class names.** `CDocumentContent`, `CDocumentChildren`, `CParagraph` etc. are part of OnlyOffice's identity. Use Univer's vocabulary.
- **Don't bring OnlyOffice idioms (prototype-based dispatch, `Add_New_*` method names, comment style) into Univer code.** Univer is TypeScript / class-based / RxJS — write idiomatic Univer code from the architectural learning, not from the source you read.
- **Don't include OnlyOffice source code in commits or scratchpads in the Univer repo.** Read it in `/tmp/sdkjs-research`. Don't `git add` it. Even commented-out OnlyOffice code in a Univer file is a license problem.
