const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));


app.use(express.static(path.resolve(__dirname, '..', 'build')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


app.get('/', (req, res) => {
  res.send("hi");
});

app.get("/authors", function(req,resp){
    resp.json({
        author: 'Jack Daniels',
        books: [
          {id:"234234", name:"Book name"}
        ]
    });
});

module.exports = app;