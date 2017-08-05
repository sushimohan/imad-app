var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var arc1 = {
    
    title: 'Article One | Mohan',
    heading: 'Article One',
    date: 'Aug 5, 2017',
    content:`<p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> `
    

};

function creatTemplate (data) {
    
    
var htmlTemplate = `    
        <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content = "width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <dir class = "container">
            <dir>
                <a href = "/">Home</a>
            </dir>
            <hr/>
            <dir>
                <h1>${heading}</h1>  
            </dir>
            <dir>
                ${date}
            </dir>
            <dir>
                ${content}
            </dir>
        </dir>
    </body>    
</html>
`;    
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/arc1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'arc1.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
