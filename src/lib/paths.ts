// Base path for assets.
// Local dev serves everything from "/".
// GitHub Pages serves the exported site under "/portfolio".
// Must match `basePath` in next.config.ts.
export const BASE_PATH = "/portfolio";

// Prefix a public asset path with the deployment base path.
export function asset(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}
