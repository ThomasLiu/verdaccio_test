var http = require("http");

http
  .createServer(function (req, res) {
    time = new Date().getTime().toString() + "\n";
    res.writeHeader(200, { "Content-Type": "text/plain" });
    res.end(time); // 返回时间
  })
  .listen(3000); // 监听3000端口

console.log("Starting server running at http://127.0.0.1:3000/");
