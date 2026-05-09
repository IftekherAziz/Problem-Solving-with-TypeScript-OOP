# Why `any` is a Type Safety Hole & Why `unknown` is Safer

## Introduction
In TypeScript, handling unpredictable data is common—especially with API responses or user inputs. Many developers reach for `any`, but this creates serious risks. Instead, `unknown` provides a safer alternative while still allowing flexibility.

## What is `any` and Why is it Dangerous?
The `any` type disables TypeScript’s type checking completely.

```ts
let data: any = "Hello";
data = 42;
data.toUpperCase(); // No error at compile time, but crashes at runtime
```

## Why `unknown` is Safer
```ts
let data: unknown = "Hello";
if (typeof data === "string") { // Must have to validate the type before using it
  console.log(data.toUpperCase());
}
```

## Type Narrowing Explained
```ts
function processInput(input: unknown) {
  if (typeof input === "number") {
    return input * 2;
  } else if (typeof input === "string") {
    return input.toUpperCase();
  }
}
```

## Conclusion
We must avoid `any` because it removed all type safety. On the other hand `unknown`  forces validation and with type narrowing it ensures correctness at runtime and compile time.
