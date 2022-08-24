#!/usr/bin/env node

const http = require("http");
const fs = require("fs");

const port = 8001;
const requestListener = function (req, res) {
  fs.readFile(process.cwd() + req.url, function (err, data) {
    if (err) {
      fs.readFile(
        process.cwd() + req.url + "/index.html",
        function (err, data) {
          if (err) {
            fs.readFile(process.cwd() + "/index.html", function (err, data) {
              if (err) {
                res.writeHead(404);
                res.end(JSON.stringify(err));
                return;
              } else {
                res.writeHead(200);
                res.end(data);
              }
            });
          } else {
            res.writeHead(200);
            res.end(data);
          }
        }
      );
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
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
