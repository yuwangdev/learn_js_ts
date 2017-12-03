"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var events_1 = require("events");
var _ = require("underscore");
console.log(_.range(5));
var a = 3;
function increment(x) {
    return a + x;
}
console.log(increment(100));
var person = new util_1.Person("Dick", 18);
console.log(person.call());
var eventEmitter = new events_1.EventEmitter();
eventEmitter.on('connection', function () {
    console.log('connection succesful.');
    eventEmitter.emit('data_received');
});
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {
    console.log('data received succesfully.');
});
// Fire the connection event 
eventEmitter.emit('connection');
var express = require("express");
var app = express();
// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
//# sourceMappingURL=main.js.map