var LivingCreature = require("./living_creature.js");
var Xotaker = require("./grass_eater.js");

module.exports = class Gishatich extends Xotaker{
    constructor(x, y) {
        super(x, y);
        super.index = 3;
        super.energy = 20;
    }
    utel() {
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = this.random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
}