const http = require("http");
const PORT = 8000;

//webサーバー作ろう
const server = http.createServer((req, res) =>{
  //ブラウザからアクセスがきた時に処理
  res.writeHead(200, { "Content-type": "text/html"});
  res.write("<h1>Hello world soru</h1>");
  res.end();
});


server.listen(PORT,() =>{
  console.log("server running!");
})

