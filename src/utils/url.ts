/**
 * Prepends import.meta.env.BASE_URL to a root-relative path.
 * gets rid of double slashes.
 * @param path e.g. '/about', 'about', etc.
 * @returns A URL with the correct base prefix
 */
export function withBase(path: string): string {
  // (docs: https://docs.astro.build/en/reference/configuration-reference/#base)
  return `${import.meta.env.BASE_URL}${path}`;
}