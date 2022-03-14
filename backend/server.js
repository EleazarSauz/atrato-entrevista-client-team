const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const router = require('./routes');

const app = express();
const PORT = 5000;
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(db => console.log('Database is connected'))
.catch(err => console.log(err));;

app.use(express.json());
app.use(cors());
app.listen(5000, () => {
  console.log(`Server started on port ${PORT}`);
});

app.use('/', router)