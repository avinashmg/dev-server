#!/usr/bin/env node

const http = require("http");

const port = 8001;
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};

const server = http.createServer(requestListener);
server.listen(port);
console.log(
  "\x1b[33m%s\x1b[0m",
  ` 
(                  (       (              (     
 )\\ )               )\\ )    )\\ )           )\\ )  
(()/(  (   (   (   (()/((  (()/((   (  (  (()/(  
 /(_)) )\\  )\\  )\\   /(_))\\  /(_))\\  )\\ )\\  /(_)) 
(_))_ ((_)((_)((_) (_))((_)(_))((_)((_((_)(_))   
 |   \\| __\\ \\ / /  / __| __| _ \\ \\ / /| __| _ \\  
 | |) | _| \\ V /   \\__ | _||   /\\ V / | _||   /  
 |___/|___| \\_/    |___|___|_|_\\ \\_/  |___|_|_\\ `
);
console.log("DEV SERVER RUNNING ON  PORT %d", port);
