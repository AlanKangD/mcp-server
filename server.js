// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// MCP 프로토콜 정의 경로
app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));

// API 라우터
app.use('/api', apiRouter);

// 상태 확인용 엔드포인트
app.get('/status', (req, res) => {
  res.json({ status: 'MCP server is running' });
});

app.listen(PORT, () => {
  console.log(`✅ MCP server is running at http://localhost:${PORT}`);
});
