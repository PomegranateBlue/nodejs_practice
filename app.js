const http = require("http");
const express = require("express");

const app = express();



app.use("/add-product", (req, res, next) => {
  console.log("another middleware");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>add Product</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

/* 위의 /product 경로는 마지막 app.use 전에 배치만 하면, 어느 위치에 있던지 상관없다*/

/**요청은 위에서 아래로 흘러가는 방식이며, next를 호출하지 않으면 다음 미들웨어로 넘어가지 않음 */

app.use("/", (req, res, next) => {
  console.log("hello2");
  res.send("<h1>This is from Hello2</h1>"); //기본 응답은 text/html
});

// Express 앱을 http 서버에 연결해야 함
// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000); // 위에 존재하는 코드를 한 줄로 변경
