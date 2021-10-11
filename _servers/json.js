const http = require("http");

const host = 'localhost';
const port = 1515;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application-json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on https://${host}:${port}`);
});
