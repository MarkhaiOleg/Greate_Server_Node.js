const http = require('http');

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log('Server reqest');
    console.log(req.url, req.method);

    //res.setHeader('Content-Type', 'text/plain');
    //res.write('Hello World!');
    res.setHeader('Content-Type', 'application/json');


    const data = JSON.stringify([
        { name: 'Oleg', age: '21' },
        { name: 'Vlad', age: '20' }
    ])
    res.end(data);
});

server.listen(3000, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
})