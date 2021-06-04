import fs from "fs";
import path from "path";
const postsDirectory = path.join(process.cwd(), "/public/images/cards");

export function getImagesName() {
  const fileNames = fs.readdirSync(postsDirectory);
  return { fileNames };
}
