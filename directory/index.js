import fs from "node:fs";
import { fileURLToPath } from "node:url";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { argv } = yargs(hideBin(process.argv))
    //オプションの説明を追加
    .option("name", {
        describe: "CIL名を表示"
    })
    .option("file", {
        describe: "Markdownファイルパス"
    });


//nameオプションのチェック
if(argv.name){
    const packageStr = fs.readFileSync(path.resolve(__dirname, "package.json"), {
        encoding: "utf-8"
    });
    const myPackage = JSON.parse(packageStr);
    console.log(myPackage.name);

    //nameオプションが入ってた場合は他のオプションを使わないので正常終了させる
    process.exit(0);
}
//指定されたMarkdownファイルを読み込む
const markdownStr = fs.readFileSync(path.resolve(__dirname, argv.file), {
    encoding: "utf-8"
});
console.log(markdownStr);
