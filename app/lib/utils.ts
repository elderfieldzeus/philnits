import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Public asset URL with basePath for GitHub Pages (e.g. /philnits-mock/...) */
export function assetPath(path: string): string {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const p = path.startsWith("/") ? path.slice(1) : path;
  return base ? `${base}/${p}` : `/${p}`;
}

/**
 * Strips indentation from a template literal string while preserving indentation.
 */
export function dedent(str: string): string {
  // Remove the first line if it is empty 
  const string = str.replace(/^\n/, "");
  const lines = string.split("\n");

  // Find the minimum indentation of non-empty lines
  let minIndent = Infinity;
  for (const line of lines) {
    if (line.trim().length > 0) {
      const indent = line.search(/\S|$/);
      if (indent !== -1 && indent < minIndent) {
        minIndent = indent;
      }
    }
  }

  if (minIndent === Infinity) return string.trim();

  return lines
    .map((line) => (line.length >= minIndent ? line.slice(minIndent) : line))
    .join("\n")
    .trim();
}
