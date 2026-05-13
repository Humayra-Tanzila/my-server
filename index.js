const express = require('express');
const app = express();

app.get('/student', (req, res) => {
  const students = [
    {
      name: "Humayra",
      department: "Computer Science",
      roll: "101",
      email: "humayra@example.com"
    },
    {
      name: "Tanzila",
      department: "Mathematics",
      roll: "102",
      email: "tanzila@example.com"
    },
    {
      name: "Tanha",
      department: "Physics",
      roll: "103",
      email: "tanha@example.com"
    }
  ];

  res.json(students);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});