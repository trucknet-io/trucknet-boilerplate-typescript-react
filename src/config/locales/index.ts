// If you create `locales.js` and `locales.d.ts` and
// perform `import { LOCALES } from "src/config/locales"`,
// webpack won't resolve it for unknown reason. So this
// relative import is used to workaround the issue.
export * from "./locales";
