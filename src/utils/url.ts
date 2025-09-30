/**
 * Prepends import.meta.env.BASE_URL to a root-relative path.
 * gets rid of double slashes.
 * @param path e.g. '/about', 'about', etc.
 * @returns A URL with the correct base prefix
 */
export function withBase(path: string): string {
   if (!path) return import.meta.env.BASE_URL;
  // Ensure BASE_URL ends with '/' and path does not start with '/'
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const normalizedPath = path.replace(/^\/+/, '');
  return `${base}/${normalizedPath}`;
}
