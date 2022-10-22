import type { PathLike } from "node:fs";
import { access } from "node:fs/promises";
import { constants } from "node:fs";

export const checkFileExists = (s: PathLike) => new Promise(r => access(s, constants.R_OK).then(() => r(true)).catch(() => r(false)))