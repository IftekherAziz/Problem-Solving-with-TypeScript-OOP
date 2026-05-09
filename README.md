# Advanced Problem Solving with TypeScript & OOP

This repository contains solutions for the TypeScript & OOP assignment.

## File Structure

```
├── solutions.ts   # All 7 coding solutions
├── blog-1.md      # Blog: any vs unknown & type narrowing
├── blog-2.md      # Blog: Pick & Omit utility types
└── README.md
```

## Problems Solved

| # | Problem | Key Concept |
|---|---|---|
| 1 | `filterEvenNumbers` | Array filtering |
| 2 | `reverseString` | String manipulation |
| 3 | `checkType` | Union types & type guards |
| 4 | `getProperty` | Generics with key constraints |
| 5 | `toggleReadStatus` | Interfaces & object spreading |
| 6 | `Person` / `Student` classes | OOP inheritance |
| 7 | `getIntersection` | Set-based array intersection |

## Blog Posts

- **blog-1.md** — Why `any` is a type safety hole and why `unknown` with type narrowing is the safer choice for unpredictable data.
- **blog-2.md** — How `Pick` and `Omit` utility types eliminate code duplication by deriving specialised slices from a master interface.

## Running the Code

```bash
npx ts-node solutions.ts
```

Or compile first:

```bash
tsc solutions.ts
node solutions.js
```
