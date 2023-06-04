const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors({
    origin:'*'
}));

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/MERN");

const post_route = require('./routes/postRoute');
app.use('/api',post_route);

app.listen(port, () => 
  console.log(`Server is listening on port: http://localhost:${port}`)  
);