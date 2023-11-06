import fs from "node:fs";

//引数にファイルの絶対パスを受け取る
export const readMarkdownFileSync = (path) => {
    //指定されたMarkdownファイルを読み込む
    const markdownStr = fs.readFileSync(path, {encoding: 'utf-8'});
    return markdownStr;
};

//指定したパスにhtmlを書き出す
export const writeHtmlFileSync = (path, html) => {
    fs.writeFileSync(path, html, { encoding: 'utf-8' });
};