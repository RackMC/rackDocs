var express = require('express');
var execFile = require('child_process').execFile;
var app = express();
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    //res.send("t")
    try {
        execFile('./build.sh', function(error, stdout, stderr) {
    
            // Log success in some manner
            console.log('exec complete', error, stdout, stderr);
            res.json({
            error: error,
            stdout: stdout,
            stderr: stderr
            });
        });
    } catch (error) {
        console.log(error)
    }
    
});

app.post('/', function(req, res) {
    try {
        execFile('./build.sh', function(error, stdout, stderr) {
    
            // Log success in some manner
            console.log('exec complete', error, stdout, stderr);
            res.json({
            error: error,
            stdout: stdout,
            stderr: stderr
            });
        });
    } catch (error) {
        console.log(error)
    }
});

var server = app.listen(9000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('PROJECTNAME Staging GitHooks App listening at http://%s:%s', host, port);
});