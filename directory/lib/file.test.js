import { readMarkdownFileSync } from './file.js';
import path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('readMarkdownFileSync', () => {
    //readMarkdownFileSync('test.md');
    const markdown = readMarkdownFileSync(path.resolve(__dirname, './fixtures/test.md'));
    expect(markdown).toStrictEqual('**bold**');
});