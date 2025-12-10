/**
 * Convert a string into a specific case format.
 *
 * Instructions:
 * - Provide the `value` (string to convert).
 * - Provide the `type` (case format to convert into).
 * - Supported cases: "camel", "snake", "upper", "lower", "kebab", "pascal".
 *
 * Examples:
 * convertCase("hello world", "camel")  → "helloWorld"
 * convertCase("hello world", "snake")  → "hello_world"
 *
 * Author: @jeikudev
 *
 */

type CaseType = "camel" | "snake" | "upper" | "lower" | "kebab" | "pascal";

export function convertCase(value: string, type: CaseType): string {
  const words = value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase()
    .split(/\s+/);

  const toCamel = (w: string[]) => w[0] + w.slice(1).map(cap).join("");

  const toPascal = (w: string[]) => w.map(cap).join("");

  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  switch (type) {
    case "camel":
      return toCamel(words);
    case "snake":
      return words.join("_");
    case "upper":
      return words.join(" ").toUpperCase();
    case "lower":
      return words.join(" ").toLowerCase();
    case "kebab":
      return words.join("-");
    case "pascal":
      return toPascal(words);
    default:
      return value;
  }
}
