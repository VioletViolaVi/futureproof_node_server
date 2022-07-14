const http = require("http");
// console.log(http);

// createServer() takes 2 params. 1 = a request, 2 = a response
const server = http.createServer((req, res) => {
  // server logic

  // appears in terminal
  console.log(req.url);

  /*
   classwork:
  if (req.url === "/") {
    res.end("Welcome to the crazy cat corner!");
  } else if (req.url === "/cats") {
    res.end(res.json());
  } else {
    res.end("Not Found");
  }
  res.statusCode = 200;
*/

  // Matthew's code
  let body, code;
  switch (req.url) {
    case "/":
      body = "Welcome to the crazy cat corner";
      code = 200;
      break;
    case "/cats":
      body = "My cat's name is cleo";
      code = 200;
      break;
    default:
      body = `${req.url} does not exist`;
      code = 404;
  }
  res.statusCode = code;
  res.end(body);
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});

// TASK (above):
// Create different "routes" depending on the value of req.url
// Send different responses depending on what is being requested
// 1. Home route "/" send back "Welcome to the crazy cat corner!"
// 2. Cats routes "/cats" send back some info about cats. Start with string, then try
// returning some JSON
// 3. Create a default route that catches everything else and returns not found.
