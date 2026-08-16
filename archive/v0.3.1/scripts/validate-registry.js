import { readFileSync } from "node:fs";

const registry = JSON.parse(readFileSync(new URL("../registry/plugins.json", import.meta.url), "utf8"));
const seen = new Set();

if (registry.schemaVersion !== 1) throw new Error("schemaVersion must be 1");
if (!Array.isArray(registry.plugins) || registry.plugins.length === 0) throw new Error("plugins must be a non-empty array");

for (const plugin of registry.plugins) {
  for (const field of ["fullName", "name", "title", "titleZh", "summary", "summaryZh", "category", "language", "lastChecked"]) {
    if (typeof plugin[field] !== "string" || !plugin[field].trim()) throw new Error(`${plugin.fullName || "unknown"} missing ${field}`);
  }
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(plugin.fullName)) throw new Error(`${plugin.fullName} is not owner/repo`);
  if (seen.has(plugin.fullName)) throw new Error(`${plugin.fullName} duplicated`);
  seen.add(plugin.fullName);
  if (!Array.isArray(plugin.tags) || plugin.tags.length === 0) throw new Error(`${plugin.fullName} missing tags`);
  if (!Array.isArray(plugin.keywordsZh) || plugin.keywordsZh.length === 0) throw new Error(`${plugin.fullName} missing keywordsZh`);
  if (!plugin.verified?.packageName || !plugin.verified?.bundlePatch) throw new Error(`${plugin.fullName} missing verified package metadata`);
}
