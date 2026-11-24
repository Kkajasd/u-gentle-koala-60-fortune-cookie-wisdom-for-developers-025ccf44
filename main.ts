import { mkdirSync, writeFileSync } from "node:fs";

// One original line of fortune-cookie wisdom for a software developer.
// 87 characters, well inside the 120-character gate.
const LINE =
  "The line you delete with confidence is the line the next outage will quote back to you.";

// The grader mounts /output as a bind mount: create it if missing and
// overwrite entry.txt in place, never remove the directory.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
