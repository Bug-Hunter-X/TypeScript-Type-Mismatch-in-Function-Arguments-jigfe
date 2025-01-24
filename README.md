# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error: type mismatch in function arguments. The `add` function is defined to accept two numbers, but the code calls it with a number and a string, resulting in a type error.

## Bug

The bug lies in the following line:

```typescript
let result = add(1, '2'); // Type Error
```

The `add` function expects two numbers, but the second argument is a string.  TypeScript's type system catches this mismatch at compile time, preventing a runtime error.

## Solution

The solution is to ensure that both arguments passed to the `add` function are numbers. This can be done through explicit type conversion or by ensuring the correct data types are used throughout the code.