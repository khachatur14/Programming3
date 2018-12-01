class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = Math.round(Math.random() * 4);
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak && this.multiply >= Math.round(Math.random() * 3) + 7) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 1;
            var norXot = new Grass(norx, nory);
            grassArr.push(norXot);
            this.multiply = 3;
        }

    }
}
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak && this.energy >= 10) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 2;
            var norXotaker = new Xotaker(norx, nory);
            xotakerArr.push(norXotaker);
            this.energy = 1;
        }
    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy--;
        }

    }
    utel() {
        var datarkVandakner = this.yntrelVandak(1);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        for (var i in xotakerArr) {
            if (this.energy <= 0 && xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                xotakerArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak && this.energy >= 25) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 3;
            var norXotaker = new Xotaker(norx, nory);
            xotakerArr.push(norXotaker);
            this.energy = 20;
        }
    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
        }

    }
    utel() {
        var datarkVandakner = this.yntrelVandak(2);
        var norVandak = random(datarkVandakner);
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
    mahanal() {
        for (var i in gishatichArr) {
            if (this.energy <= 0 && gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                gishatichArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}
class Creater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 25;
        this.multiply = 0;
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    poxakerpel() {
        var datark = this.yntrelVandak(0)
        var norVandak = random(datark);
        if (norVandak) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            if (amenakerArr.length <= 0) {
                for (var i = 0; i < datark.length; i++) {
                    matrix[nory][norx] = 5;
                    var nor = new Amenaker(norx, nory);
                    amenakerArr.push(nor);
                    this.energy--
                }
            }
            else if (xotakerArr.length <= 0) {
                for (var i = 0; i < datark.length; i++) {
                    matrix[nory][norx] = 2;
                    var nor = new Xotaker(norx, nory);
                    xotakerArr.push(nor);
                    this.energy--;
                }
            }
            else if (gishatichArr.length <= 0) {
                for (var i = 0; i < datark.length; i++) {
                    matrix[nory][norx] = 3;
                    var nor = new Gishatich(norx, nory);
                    gishatichArr.push(nor);
                    this.energy--;
                }
            }
        }
    }
    bazmanal() {
        this.multiply++
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak && this.multiply >= 150) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 4;
            var nor = new Creater(norx, nory);
            createrArr.push(nor);
            this.multiply = 0
        }
    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
        }
    }
    mahanal() {
        for (var i in createrArr) {
            if (this.energy <= 0 && createrArr[i].x == this.x && createrArr[i].y == this.y) {
                createrArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
                break;
            }
        }
    }
}
class Amenaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.count = [0, 0, 0]
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && y >= 0 && x < matrix[0].length && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak && this.energy >= 10) {
            var norx = norVandak[0];
            var nory = norVandak[1];
            matrix[nory][norx] = 5;
            var nor = new Amenaker(norx, nory);
            amenakerArr.push(nor);
            this.energy = 4;
        }
    }
    sharjvel() {
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 5;
            this.energy--;
        }
    }
    utel() {
        var norVandak = random(this.directions);
        if (this.energy >= 0 && norVandak[0] >= 0 && norVandak[1] >= 0 && norVandak[0] < matrix[0].length && norVandak[1] < matrix.length && matrix[norVandak[1]][norVandak[0]] != 0 && matrix[norVandak[1]][norVandak[0]] != 4) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            if (matrix[this.y][this.x] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                matrix[this.y][this.x] = 5;
                this.energy++;
                this.count[0]++;
            }
            else if (matrix[this.y][this.x] == 2) {
                for (var i in xotakerArr) {
                    if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                        xotakerArr.splice(i, 1);
                        break;
                    }
                }
                matrix[this.y][this.x] = 5;
                this.energy++;
                this.count[1]++;
            }
            else if (matrix[this.y][this.x] == 3) {
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                        gishatichArr.splice(i, 1);
                        break;
                    }
                }
                matrix[this.y][this.x] = 5;
                this.energy++;
                this.count[2]++;
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            var norVandak = random(this.yntrelVandak(0));
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