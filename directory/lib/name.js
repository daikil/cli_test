import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageStr = fs.readFileSync(path.resolve(__dirname, "../package.json"), {
    encoding: "utf-8"
});
const myPackage = JSON.parse(packageStr);

export const getPackageName = () => {
    return myPackage.name;
};