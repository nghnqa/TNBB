//initial and start the whole Server Engine

var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handler = {}
handler["/"] = requestHandlers.start;
handler["/start"] = requestHandlers.start;
handler["/upload"] = requestHandlers.upload;
/*Thinking JS Object as an key/value pair in every single aspect
we can now have an array with key/value just like in mongoBD 
that why it is perfect for JS Application.
key can be: string, number, etc. even function!
value is the same as key.
*/

server.start(router, handler);