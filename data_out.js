const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const fs = require('fs');
app.use(cors());
app.use(express.json());

// 同步读取 JSON 文件

try {
  const rawData = fs.readFileSync('./online/online.json', 'utf-8'); // 读取文件内容
  const jsonData = JSON.parse(rawData); // 解析为 JavaScript 对象
  console.log(jsonData); // 输出对象
  console.log(jsonData.name); // 访问具体字段，例如 "Alice Smith"

} catch (error) {
  console.error('读取或解析 JSON 文件时出错:', error.message);
}