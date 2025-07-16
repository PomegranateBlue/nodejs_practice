// 간단한 TODO 리스트 API 구현
// Node.js는 싱글 스레드 기반의 이벤트 루프를 사용하여 비동기 I/O를 처리합니다.
// Express는 Node.js로 API 서버를 만들 때 많이 사용하는 경량 웹 프레임워크입니다.

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// JSON 본문을 파싱하기 위한 미들웨어. API 사용 시 보통 JSON 형식으로 데이터를 주고받습니다.
app.use(express.json());

// 메모리 내 TODO 저장소. 실제 서비스라면 데이터베이스를 사용합니다.
let todos = [];
let nextId = 1;

// CREATE - 새로운 TODO 항목 추가
app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }
  const newTodo = { id: nextId++, title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// READ - 모든 TODO 목록 조회
app.get('/todos', (req, res) => {
  res.json(todos);
});

// READ - 특정 ID의 TODO 조회
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(todo);
});

// UPDATE - TODO 내용 수정
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const { title, completed } = req.body;
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});

// DELETE - TODO 제거
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const deleted = todos.splice(index, 1)[0];
  res.json(deleted);
});

// 서버 시작
// API 개발 시 보통 포트 번호를 지정하고 HTTP 요청을 대기합니다.
app.listen(port, () => {
  console.log(`TODO API server listening at http://localhost:${port}`);
});
