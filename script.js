/*var matrix = [
    [0, 2, 1, 0, 0],
    [1, 0, 0, 3, 0],
    [0, 1, 0, 0, 5],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 2, 0],
    [4, 1, 0, 0, 0],
    [1, 1, 0, 0, 3]
];*/
var side = 25;
var socket = io();
season = 1;
statistica = [];

function setup() {
    frameRate(5);
    createCanvas(625, 625);
    background('#acacac');
}
function getStatistica(s){
    statistica = s;
}
function drawMatrix(matrix) {
    var count = [0,0,0,0,0,0];
    var color = [
        ["#5e9657", "green","yellow","red","white","orange"],
        ["#80a86b", "#aaee00","yellow","red","white","orange"],
        ["#bca969", "#ffee00","yellow","red","white","orange"],
        ["#acacac", "#e0e0e0","yellow","red","white","orange"],
    ]
    for (var y = 0; y < 25; y++) {
        for (var x = 0; x < 25; x++) {
            var num = matrix[y][x];
            count[num]++;
            fill(color[season][num]);
            rect(x * side, y * side, side, side);
        }
    }
    var li = document.getElementsByTagName("li");
    var names = ["","Grass","Grass Eater","Gishatich","Creater","Amenaker"];
    for(var i = 0; i < li.length; i++){
        var txt = "<b>"+names[i+1]+" </b> Count: " +count[i+1] + " | Died: " + statistica[0][i+1] + " | Created: " + statistica[1][i+1] + " | Multiplyed: " + statistica[2][i+1] + " | Eated: " + statistica[3][i+1];
        li[i].innerHTML = txt;
    }
}
function cons(arr){
    console.log(arr);
}
function setSeason(s){
    var color = ["green", "#aaee00", "#ffee00","#e0e0e0"]
    season = (s - 1);
    var sezon = ["spring", "summer","autumn","winter"];
    document.getElementById("grassLi").style.color = color[season];
    document.getElementById("timeOfSeason").innerHTML = "<b>Time of season</b>: " + sezon[season];
}
document.getElementById("changeSeason").onclick = function(){socket.emit("changeSeason")};
socket.on("matrix",drawMatrix);
socket.on("statistica",getStatistica)
socket.on("season", setSeason);

