const http = require("http");
const PORT = 8000;
//htmlファイルを直接読み込ませたい時に使うコード
const html = require("fs").readFileSync("./index.html");

//webサーバー作ろう
const server = http.createServer((req, res) =>{
  //ブラウザからアクセスがきた時に処理
  res.writeHead(200, { "Content-type": "text/html"});
  res.write(html);
  res.end();
});


server.listen(PORT,() =>{
  console.log("server running!");
})

