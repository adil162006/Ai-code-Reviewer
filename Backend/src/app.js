const express = require('express');
const app = express();
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes.js');

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!'); 
});


app.use('/ai', aiRoutes);




module.exports = app;