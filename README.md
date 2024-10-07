# Types WP Core

TypeScript declarations for WordPress core that aren't provided by other packages.

## Purpose

This package is intended primarily for block theme authors and plugin authors
who want to use block patterns or templates. These declarations capture many of
the string literals blocks introduced, like default block pattern categories
registered by core, so that you can write scripts or tools to validate or
generate code.

## Installation

npm:

```
npm install --save-dev @moonjellydigital/types-wp-core
```

yarn:

```
yarn add -D @moonjellydigital/types-wp-core
```

bun:

```
bun add -D @moonjellydigital/types-wp-core
```

## Usage

To use the types you'll need to import them into into your `.ts` file:

```typescript
import type { corePatternCategory } from '@moonjellydigital/types-wp-core';

// Or this equivalent syntax.
import { type corePatternCategory } from '@moonjellydigital/types-wp-core';
```

Now you can use them to type your implementation code or extend them to make
your own types.

## License

[GPL v3](./LICENSE)
