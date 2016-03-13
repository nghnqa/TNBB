var exec = require("child_process").exec;
function start(response) {
	console.log("Request handler 'start' was called.");
	exec("", function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello this is a Starter");
		response.end();
	});
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	exec("", function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello Uploaders !")		
		response.end();
	});
}

exports.start = start;
exports.upload = upload;