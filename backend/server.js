const express = require("express");
const router = require('./routes');

const app = express();
const PORT = 5000;

app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use('/', router)