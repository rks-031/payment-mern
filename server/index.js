// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRouter = require('./routes/users.js');
const connectDB = require('./db/db.js')
const dotenv = require('dotenv').config();

const port = process.env.PORT || 4000;

const app = express();
connectDB()

app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
