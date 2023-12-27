const http = require("http");
const fs = require("fs");

console.log("\nHTTP");

const server = http.createServer((req, res) => {
  const file = fs.readFileSync("index.html");

  switch (req.url) {
    case "/":
      res.writeHead(200, "Content-Type: text/html");
      res.end(file);
      break;

    case "/about":
      res.writeHead(200, "Content-Type: text/plain");
      res.end("About");
      break;

    case "/api":
      const user = {
        name: "Mario",
        age: 48,
      };

      res.writeHead(200, "Content-Type: application/json");
      res.end(JSON.stringify(user));
      break;

    default:
      res.writeHead(404);
      res.end("Page not found");
  }

  // res.writeHead(200, { "Content-Type": "text/html" });
  // fs.createReadStream("index.html").pipe(res);
});

server.listen(3000, () => {
  console.log("WEB server started on port 3000.");
});
