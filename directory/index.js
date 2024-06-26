import path from 'node:path';
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { getPackageName } from './lib/name.js';
import { readMarkdownFileSync } from './lib/file.js';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import { writeFileSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { argv } = yargs(hideBin(process.argv))
    //オプションの説明を追加
    .option("name", {
        describe: "CIL名を表示"
    })
    .option("file", {
        describe: "Markdownファイルパス"
    })
    .option("out", {
        describe: 'html file',
        default: 'article.html'
    });


//nameオプションのチェック
if(argv.name){
    const name = getPackageName();
    console.log(name);
    //nameオプションが入ってた場合は他のオプションを使わないので正常終了させる
    process.exit(0);
}
//絶対パスを指定してファイルを読み込む
const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
const html = marked(markdownStr);

//htmlをファイルに書き出し
writeFileSync(path.resolve(__dirname, argv.out), html);
console.log(__dirname);