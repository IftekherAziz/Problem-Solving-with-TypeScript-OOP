# How `Pick` and `Omit` Keep Our Code DRY

## Introduction

In large applications, we often need multiple variations of a single data structure. Writing separate interfaces for each variation can lead to duplication, inconsistencies, and harder maintenance. TypeScript utility types like `Pick` and `Omit` help solve this problem by allowing us to create reusable **subsets** of existing types while keeping a single source of truth.

---

## Using `Pick`

The `Pick` utility type allows us to select only the properties we need from an existing type.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserProfile = Pick<User, "id" | "name" | "email">;
```

In this example, `UserProfile` contains only the `id`, `name`, and `email` fields from the `User` interface.

---

## Using `Omit`

The `Omit` utility type creates a new type by removing specific properties from an existing type.

```ts
type SafeUser = Omit<User, "password">;
```

Here, `SafeUser` includes all properties from `User` except the `password` field, making it safer to expose in APIs or UI components.

---

## How They Support the DRY Principle

Using `Pick` and `Omit` helps keep our code DRY, because they:

* Reduce code duplication
* Improve maintainability
* Keep types consistent
* Provide a single source of truth

Instead of redefining similar interfaces repeatedly, we can derive new types directly from existing ones.

---

## Conclusion

`Pick` and `Omit` are powerful TypeScript utility types that help create clean and reusable type definitions. `Pick` allows us to select only the required fields, while `Omit` removes unnecessary ones. By using them effectively, we can write more maintainable, scalable, and DRY code.
