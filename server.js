var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'arc1':{
    
    title: 'Article One | Mohan',
    heading: 'Article One',
    date: 'Aug 5, 2017',
    content:`<p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> `
            },
    'arc2':{    
    title: 'Article Two | Mohan',
    heading: 'Article Two',
    date: 'Aug 10, 2017',
    content:`<p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> `
        },
    'arc3':{
    title: 'Article Three | Mohan',
    heading: 'Article Three',
    date: 'Aug 15, 2017',
    content:`<p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> <p>This is Mohan Raj K article</p> `
    }
};

function creatTemplate (data) {
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
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
`;    
   return htmlTemplate;
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

app.get('/:any', function (req, res) {
    
    var arc =req.params.any;
    res.send(creatTemplate(articles[arc]));
});

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
