const http = require("http");
// console.log(http);

// takes 2 params. 1 = a request, 2 = a response
const server = http.createServer((req, rep) => {
  // server logic
});

server.listen(80, () => {
  console.log("server running on port 80");
});
