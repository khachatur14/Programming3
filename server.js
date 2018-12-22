/*
---------------------------------------------------------------

Github link  :  https://github.com/khachatur14/Programming3.git

---------------------------------------------------------------
*/

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
var season = 1;

matrix = [];
side = 25;

stat = JSON.parse(fs.readFileSync("statistica.json").toString());
names = [["grass","grassEater","gishatich","creater","amenaker"],["count","created","died","multiplyed","eated","hasEated"]];
function generateMatrix() { 
    for(var i in names[0]){
        for(var j in names[1])
        if(stat[names[0][i]][names[1][j]]){
            stat[names[0][i]][names[1][j]] = 0;
        }
    }
    matrix = [];
    for (var y = 0; y < side; y++) {
        matrix[y] = []
        for (var x = 0; x < side; x++) {
            matrix[y][x] = 0;
        }
    }
    for (var i = 0; i < 100; i++) {
        if (i < 70) {
            matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 1;
            stat.grass.count++;
        }
        else if (i < 80) {
            matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 2;
            stat.grassEater.count++;
        }
        else if (i < 85) {
            matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 3;
            stat.gishatich.count++;
        }
        else if (i < 97) {
            matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
            stat.amenaker.count++;
        }
        else if (i > 97) {
            matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 4;
            stat.creater.count++;
        }
    }

    grassArr = [];
    xotakerArr = [];
    gishatichArr = [];
    createrArr = [];
    amenakerArr = [];

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
}

Grass = require("./grass.js");
Xotaker = require("./grass_eater.js");
Gishatich = require("./gishatich.js");
Creater = require("./creater.js");
Amenaker = require("./amenaker.js");

grassArr = [];
xotakerArr = [];
gishatichArr = [];
createrArr = [];
amenakerArr = [];

generateMatrix();

io.on('connection', function (socket) {
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
            createrArr[i].poxakerpel();
            createrArr[i].mahanal();
        }
        for (var i in amenakerArr) {
            amenakerArr[i].utel();
            amenakerArr[i].bazmanal();
            amenakerArr[i].mahanal();
        }
        var lengths = [grassArr.length, xotakerArr.length, gishatichArr.length, createrArr.length, amenakerArr.length];
        for(var i in lengths){
            stat[names[0][i]].count = lengths[i];
        }
        function arrEnergyCount(arr){
            var x = 0;
            for(var i = 0; i < arr.length; i++){
                x += arr[i].energy;
            }
            return x;
        }
        stat.creater.creatingPower = arrEnergyCount(createrArr);
        io.sockets.emit("matrix", matrix);
        io.sockets.emit("statistica", stat);
        fs.writeFileSync("statistica.json", JSON.stringify(stat, null, 3));
    }
    function changeSeason(){
        if(season == 4){
            season = 1;
        }
        else{
            season++;
        }
        io.sockets.emit("season", season);
    }
    speed = 600;
    socket.on("changeSeason", changeSeason);
    socket.on("regenerate", generateMatrix);
    setInterval(changeSeason, 6000);
    setInterval(drawServerayin, 600);
})
