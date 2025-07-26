const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("hello");
  next(); // 요청 처리를 계속 이어가게 함
});

app.use((req, res, next) => {
  console.log("hello2");
  res.send("<h1>This is from Hello2</h1>");
});

// Express 앱을 http 서버에 연결해야 함
const server = http.createServer(app);

server.listen(3000);
