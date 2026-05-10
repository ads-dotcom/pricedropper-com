import { cp, mkdir, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
await mkdir(dist, { recursive: true });
for (const file of ["index.html", "privacy.html", "terms.html", "support.html", "pricing.html", "faq.html", "docs.html", "changelog.html", "screencast.html", "robots.txt", "sitemap.xml", "_headers", "_redirects", "styles.css"]) {
  await copyFile(path.join(root, file), path.join(dist, file));
}
if (existsSync(path.join(root, "assets"))) {
  await cp(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });
} else if (!existsSync(path.join(dist, "assets"))) {
  await mkdir(path.join(dist, "assets"));
}
