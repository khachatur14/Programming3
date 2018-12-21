var LivingCreature = require("./living_creature.js");
module.exports = class Grass extends LivingCreature{
    bazmanal() {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var norVandak = this.random(datarkVandakner);
        if (norVandak && this.multiply >= Math.round(Math.random() * 3) + 7) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 1;
            var norXot = new Grass(norx, nory);
            multiplyed[1]++;
            grassArr.push(norXot);
            this.multiply = 3;
        }

    }
}