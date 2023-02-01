var express = require('express');

var app = express();

app.get('*', (req, res) => {
    res.header('Content-Type', 'text/html;charset=utf-8')
    console.log('test');

    setTimeout(() => {
      res.send(`hello world`)
    }, 500);
})

app.listen(9000, () => {
    console.log('start success.');
}).on('error', (e) => {
    console.error(e.code, e.message)
})