const http = require("http");
const path = require("path");
const fs = require("fs");

const requestServer = (req, res) => {
  let filePath = path.join(
    __dirname,
    "client",
    req.url === "/" ? "index.html" : req.url
  );
  let contentType = getContentType(filePath) || "text/html";
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": contentType });
        res.end("<h1>oops the page cannot be found</h1>");
      } else {
        res.writeHead(500);
        res.end("A server error has occured");
      }
    }
    if (!err) {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
  //   if (req.url === "/") {
  //     let filePath = path.join(__dirname, "client", "index.html");
  //     fs.readFile(filePath, "utf8", (err, data) => {
  //         if (err) throw err;
  //       res.writeHead(200, { "content-type": "text/html" });
  //       res.end(data);
  //     });
  //   }
  //
};

const getContentType = (filePath) => {
  let extname = path.extname(filePath);
  if (extname === ".js") {
    return "text/javascript";
  } else if (extname === ".css") {
    return "text/css";
  }
};

const server = http.createServer(requestServer);

const port = 4000;

server.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
