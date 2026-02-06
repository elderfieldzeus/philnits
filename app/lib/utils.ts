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
 * Strips indentation from a template literal string while preserving relative indentation.
 * Useful for keeping code readable while rendering clean Markdown.
 */
export function dedent(str: string): string {
  // Remove the first line if it is empty (common in template literals)
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

  // If no indentation found or only empty lines, return trimmed string
  if (minIndent === Infinity) return string.trim();

  // Remove the indentation from each line
  return lines
    .map((line) => (line.length >= minIndent ? line.slice(minIndent) : line))
    .join("\n")
    .trim();
}
