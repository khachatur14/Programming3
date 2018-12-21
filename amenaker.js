var LivingCreature = require("./living_creature.js");
var Xotaker = require("./grass_eater.js");
module.exports = class Amenaker extends Xotaker{
    constructor(x, y) {
        super(x, y);
        super.index = 5;
        super.energy = 35;
        //super.count = [0, 0, 0];
    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = this.random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = this.index;
            this.energy--;
        }

    }
    utel() {
        var datarkVandakner = [this.yntrelVandak(1), this.yntrelVandak(2), this.yntrelVandak(3)];
        for(var i = 0; i < datarkVandakner.length; i++){
            var norVandak = this.random(datarkVandakner[i]);
            if (norVandak) {
                matrix[this.y][this.x] = 0;
                this.x = norVandak[0];
                this.y = norVandak[1];
                matrix[this.y][this.x] = 5;
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                this.energy++;
                break;
            }
            else if(i == 2){
                this.sharjvel();
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            var norVandak = this.random(this.yntrelVandak);
            if (norVandak) {
                if (this.count[1] > 0) {
                    matrix[norVandak[1]][norVandak[0]] = 2;
                    var nor = new Xotaker(norVandak[0], norVandak[1])
                    xotakerArr.push(nor);
                }
                else if (this.count[2] > 0) {
                    matrix[norVandak[1]][norVandak[0]] = 3;
                    var nor = new Gishatich(norVandak[0], norVandak[1]);
                    gishatichArr.push(nor);
                }
            }
            for (var i in amenakerArr) {
                if (amenakerArr[i].x == this.x && amenakerArr[i].y == this.y) {
                    amenakerArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }
}