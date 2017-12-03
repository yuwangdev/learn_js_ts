import { Person as P } from "./util"

import { EventEmitter } from "events"
import events = require("events")

import _ = require("underscore")
console.log(_.range(3));

let a: number = 3;
function increment(x: number): number {
    return a + x;
}
console.log(increment(100));

let person: P = new P("Dick", 18);
console.log(person.call());


let eventEmitter: EventEmitter = new EventEmitter();
eventEmitter.on('connection', () => {
    console.log('connection succesful.');
    eventEmitter.emit('data_received');
});

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {
    console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');


import express = require("express");
let app = express();

// This responds with "Hello World" on the homepage
app.get('/', (req, res) => {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})

let server = app.listen(8081, () => {

    let host: string = server.address().address
    let port: number = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})