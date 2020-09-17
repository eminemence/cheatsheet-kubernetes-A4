var express = require('express')

var app = express();

app.get('/',function(req, res) {
    res.send("Hello World from docker & k8s!!");
});

app.listen(3000, function(){
    console.log("Started Docker & K8s simple node app");
    console.log("Listening on http://localhost:3000");
})