const http = require("http");

const contentTyoe = { "Content-Type": "text/plain" };

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, contentTyoe);
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 6000000000; i++) {
      // Simulate CPU work
    }
    res.writeHead(200, contentTyoe);
    res.end("Slow Page");
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
