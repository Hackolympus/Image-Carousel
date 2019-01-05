var app = require('./server.js');
var port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
