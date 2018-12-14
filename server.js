/*var matrix = [
    [0, 2, 1, 0, 0],
    [1, 0, 0, 3, 0],
    [0, 1, 0, 0, 5],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 2, 0],
    [4, 1, 0, 0, 0],
    [1, 1, 0, 0, 3]
];*/
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

var matrix = [];
var side = 25;
for (var y = 0; y < side; y++) {
    matrix[y] = []
    for (var x = 0; x < side; x++) {
        var n = Math.floor(Math.random() * 100)
        if (n > 95) matrix[y][x] = 0;
        else if (n > 90) matrix[y][x] = 1;
        else if (n > 80) matrix[y][x] = 2;
        else if (n > 70) matrix[y][x] = 3;
        else if (n > 44) matrix[y][x] = 5;
        else if (n > 1) matrix[y][x] = 4;
    }
}
var Grass = require("./grass.js");
var Xotaker = require("./grass_eater.js");
var Gishatich = require("./gishatich.js");
var Creater = require("./creater.js");
var Amenaker = require("./amenaker.js");

var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var createrArr = [];
var amenakerArr = [];

for (var y = 0; y < matrix.length; y++) {
    for (x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x, y));
        }
        else if (matrix[y][x] == 2) {
            xotakerArr.push(new Xotaker(x, y))
        }
        else if (matrix[y][x] == 3) {
            gishatichArr.push(new Gishatich(x, y))
        }
        else if (matrix[y][x] == 4) {
            createrArr.push(new Creater(x, y));
        }
        else if (matrix[y][x] == 5) {
            amenakerArr.push(new Amenaker(x, y));
        }
    }
}
setInterval(drawServerayin, 1000);
function drawServerayin() {
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
        xotakerArr[i].bazmanal();
        xotakerArr[i].mahanal();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel();
        gishatichArr[i].bazmanal();
        gishatichArr[i].mahanal();
    }
    for (var i in createrArr) {
        createrArr[i].sharjvel();
        createrArr[i].bazmanal();
        createrArr[i].poxakerpel();
        createrArr[i].mahanal();
    }
    for (var i in amenakerArr) {
        amenakerArr[i].utel();
        amenakerArr[i].bazmanal();
        amenakerArr[i].mahanal();
    }
}

