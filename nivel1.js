var w = window.innerWidth;
var h = window.innerHeight;

var items = {};
var levels;
var plate, plateSize, itemSize;
var itemsScale = 0.16;
var close;
var heightQuestion = 300;

var pw, ph;

var endLevel = false, level = 1;

var h1Size, h2Size;

marginMobile = 0.06 * w;
marginDesktop = 0.02 * w;

function preload() {
    plate = loadImage('data/jogo/plate.png');
    close = loadImage('data/icons/home.png');
}

function setup() {
    canvas = createCanvas(w, h);
    pw = w;
    ph = h;

    loadItems();
    loadLevels();
    imageMode(CENTER);

    itemsize();
    platesize();
    textsize();
}

function draw() {
    levels.display();
}

window.onresize = function () {
    pw = w;
    ph = h;

    w = window.innerWidth;
    h = window.innerHeight;

    marginMobile = 0.06 * w;
    marginDesktop = 0.02 * w;

    canvas.size(w, h);

    itemsize();
    platesize();
    textsize();

    levels.recalcLevel();
}

function platesize() {
    /*if (w < 600) {
        plateSize = w * 0.8;
    } else if (w < 1000) {
        plateSize = w * 0.45;
    } else if (w < 1500) {
        plateSize = w * 0.3;
    } else {
        plateSize = w * 0.28;
    }*/
    plateSize = min(min(width*itemSize*8,
                        width*.9), 
                        height*.6);

}

function itemsize() {
    if (w < 600) {
        itemSize = w * 0.0002;
    } else if (w < 1000) {
        itemSize = w * 0.0001;
    } else if (w < 1500) {
        itemSize = w * 0.00009;
    } else {
        itemSize = w * 0.00007;
    }
}

function textsize() {
    if (w < 900) {
        h2Size = h * 0.03;
        heightQuestion = height / 4;
    } else if (w < 1500) {
        h2Size = h * 0.04;
        heightQuestion = height / 3;
    } else {
        h2Size = h * 0.04;
        heightQuestion = height / 3;
    }
}

function loadItems() {
    //Primavera
    items.grape = new Gameitem('data/jogo/level1/screen1/1.png');
    items.cherry = new Gameitem('data/jogo/level1/screen1/2.png');
    items.pea = new Gameitem('data/jogo/level1/screen1/3.png');
    items.lemon = new Gameitem('data/jogo/level1/screen1/4.png');
    items.redonion = new Gameitem('data/jogo/level1/screen1/5.png');
    items.tomato = new Gameitem('data/jogo/level1/screen1/6.png');
    //Verão
    items.pepper = new Gameitem('data/jogo/level1/screen2/2.png');
    items.watermelon = new Gameitem('data/jogo/level1/screen2/3.png');
    items.beans = new Gameitem('data/jogo/level1/screen2/5.png');
    //Outono
    items.carot = new Gameitem('data/jogo/level1/screen3/1.png');
    items.leek = new Gameitem('data/jogo/level1/screen3/2.png');
    items.chestnut = new Gameitem('data/jogo/level1/screen3/3.png');
    items.almond = new Gameitem('data/jogo/level1/screen3/4.png');
    //Inverno
    items.potato = new Gameitem('data/jogo/level1/screen4/2.png');
    items.banana = new Gameitem('data/jogo/level1/screen4/4.png');
    items.orange = new Gameitem('data/jogo/level1/screen4/5.png');
}

function loadLevels() {
    var level_one, level_two, level_three, level_four;
    //Primavera
    level_one = new Level(color(235, 153, 194),
        'data/jogo/level1/screen1/textPrimavera.png',
        new UIFinish('data/jogo/endLevel/1.png')
    );
    level_one.addItem(items.grape, false, 'data/jogo/certoErrado/level1/screen1/errado.png');
    level_one.addItem(items.cherry, true, 'data/jogo/certoErrado/level1/screen1/certo.png');
    level_one.addItem(items.pea, true, 'data/jogo/certoErrado/level1/screen1/certo.png');
    level_one.addItem(items.lemon, false, 'data/jogo/certoErrado/level1/screen1/errado.png');
    level_one.addItem(items.redonion, true, 'data/jogo/certoErrado/level1/screen1/certo.png');
    level_one.addItem(items.tomato, false, 'data/jogo/certoErrado/level1/screen1/errado.png');
    level_one.setDefaultPosition();
    //Verão
    level_two = new Level(color(103, 175, 136),
        'data/jogo/level1/screen2/textVerao.png',
        new UIFinish('data/jogo/endLevel/2.png')
    );
    level_two.addItem(items.lemon, false, 'data/jogo/certoErrado/level1/screen2/errado.png');
    level_two.addItem(items.pepper, true, 'data/jogo/certoErrado/level1/screen2/certo.png');
    level_two.addItem(items.watermelon, false, 'data/jogo/certoErrado/level1/screen2/errado.png');
    level_two.addItem(items.tomato, true, 'data/jogo/certoErrado/level1/screen2/certo.png');
    level_two.addItem(items.beans, false, 'data/jogo/certoErrado/level1/screen2/errado.png');
    level_two.addItem(items.grape, false, 'data/jogo/certoErrado/level1/screen2/errado.png');
    level_two.setDefaultPosition();
    //Outono
    level_three = new Level(color(239, 190, 46),
        'data/jogo/level1/screen3/textOutono.png',
        new UIFinish('data/jogo/endLevel/3.png')
    );
    level_three.addItem(items.carot, false, 'data/jogo/certoErrado/level1/screen3/errado.png');
    level_three.addItem(items.leek, false, 'data/jogo/certoErrado/level1/screen3/errado.png');
    level_three.addItem(items.chestnut, true, 'data/jogo/certoErrado/level1/screen3/certo.png');
    level_three.addItem(items.almond, true, 'data/jogo/certoErrado/level1/screen3/certo.png');
    level_three.addItem(items.pepper, false, 'data/jogo/certoErrado/level1/screen3/errado.png');
    level_three.addItem(items.watermelon, false, 'data/jogo/certoErrado/level1/screen3/errado.png');
    level_three.setDefaultPosition();
    //Inverno
    level_four = new Level(color(114, 190, 195),
        'data/jogo/level1/screen4/textInverno.png',
        new UIFinish('data/jogo/endLevel/4.png')
    );

    level_four.addItem(items.carot, false, 'data/jogo/certoErrado/level1/screen4/errado.png');
    level_four.addItem(items.potato, true, 'data/jogo/certoErrado/level1/screen4/certo.png');
    level_four.addItem(items.lemon, false, 'data/jogo/certoErrado/level1/screen4/errado.png');
    level_four.addItem(items.banana, false, 'data/jogo/certoErrado/level1/screen4/errado.png');
    level_four.addItem(items.orange, true, 'data/jogo/certoErrado/level1/screen4/certo.png');
    level_four.addItem(items.redonion, true, 'data/jogo/certoErrado/level1/screen4/certo.png');
    level_four.setDefaultPosition();

    levels = new LevelLoader();
    levels.addLevel(level_one);
    levels.addLevel(level_two);
    levels.addLevel(level_three);
    levels.addLevel(level_four);

    levels.play();
}

class LevelLoader {
    constructor() {
        this.levels = [];
        this.currentLevel = 0;
        this.status = false;
    }

    play() {
        this.status = !this.status;
    }

    addLevel(newLevel) {
        this.levels.push(newLevel);
    }

    nextLevel() {
        if (this.levels.length > this.currentLevel)
            this.currentLevel++;
    }

    previousLevel() {
        if (this.currentLevel > 0)
            this.currentLevel--;
    }

    setLevel(level) {
        this.currentLevel = level;
    }

    display() {
        if (this.checkLevel)
            this.levels[this.currentLevel].display();
    }

    mousePressed() {
        if (this.status && this.checkLevel)
            this.levels[this.currentLevel].mousePressed();

        if (this.levels[this.currentLevel].uiEndLevel.status)
            if (this.currentLevel + 1 < this.levels.length)
                this.currentLevel++;
            else
                window.location.href = 'niveisMenu.html';
    }

    mouseDragged() {
        if (this.status && this.checkLevel)
            this.levels[this.currentLevel].mouseDragged();
    }

    mouseReleased() {
        if (this.status && this.checkLevel)
            this.levels[this.currentLevel].mouseReleased();
    }

    checkLevel() {
        if (this.levels.length > 0 &&
            this.currentLevel > 0 &&
            this.currentLevel < this.levels.length)
            return true;
        return false
    }

    recalcLevel() {
        for (let i = 0; i < this.levels.length; i++) {
            this.levels[i].recalcItem();
        }
    }
}

class UIFinish {
    constructor(imageURL) {
        this.image = loadImage(imageURL);
        this.text = "Concluíste o nível primavera!";
        this.w = 400;
        this.h = 400;
        this.margin = 40;

        this.status = false;
    }

    display() {
        imageMode(CENTER);
        if (w < 900) {
            image(this.image, width / 2, height / 2, 300, 300);
        }
        else if (w < 1500) {
            image(this.image, width / 2, height / 2, 400, 400);
        } else {
            image(this.image, width / 2, height / 2, 500, 500);
        }

        push();
        blendMode(MULTIPLY);

        if (w < 900) {
            image(close, width / 2 - 102, height / 2 - 105, 30, 30);
        }
        else if (w < 1500) {
            image(close, width / 2 - 136, height / 2 - 140, 40, 40);
        } else {
            image(close, width / 2 - 170, height / 2 - 175, 50, 50);
        }
        
        pop();

        push();
        rectMode(CENTER);
        blendMode(MULTIPLY);
        noStroke();
        fill(109, 111, 113);

        if (w < 900) {
            rect(width / 2, height / 2 + 105 - 7.5, 150, 45, 22);
        }
        else if (w < 1500) {
            rect(width / 2, height / 2 + 140 - 10, 200, 60, 22);
        } else {
            rect(width / 2, height / 2 + 175 - 12.5, 250, 75, 22);
        }
        pop();

        push();
        if (w < 900) {
            textSize(19.2);
        }
        else if (w < 1500) {
            textSize(25.6);
        } else {
            textSize(32);
        }

        fill(255);
        textAlign(CENTER);

        if (w < 900) {
            text('Continuar', width / 2, height / 2 + 105 - 8.1 + textAscent() / 2);
        }
        else if (w < 1500) {
            text('Continuar', width / 2, height / 2 + 140 - 10.8 + textAscent() / 2);
        } else {
            text('Continuar', width / 2, height / 2 + 175 - 13.5 + textAscent() / 2);
        }
        pop();
    }

    mousePressed() {

        if (w < 900) {
            if (mouseX > width / 2 - (45 / 2) &&
            mouseX < width / 2 + (45 / 2) &&
            mouseY > (height / 2 + 105 - 7.5) - (22 / 2) &&
            mouseY < (height / 2 + 105 - 7.5) + (22 / 2)) {
            this.status = true;
        }
        else if (mouseX > (width / 2 - 102) - 30 / 2 &&
            mouseX < (width / 2 - 102) + 30 / 2 &&
            mouseY > (height / 2 - 195) - (30 / 2) &&
            mouseY < (height / 2 - 105) + (30 / 2)) {
            window.location.href = 'niveisMenu.html';
        }
        } 
        
        
        else if (w < 1500) {
            if (mouseX > width / 2 - (60 / 2) &&
            mouseX < width / 2 + (60 / 2) &&
            mouseY > (height / 2 + 140 - 10) - (22 / 2) &&
            mouseY < (height / 2 + 140 - 10) + (22 / 2)) {
            this.status = true;
        }
        else if (mouseX > (width / 2 - 136) - 40 / 2 &&
            mouseX < (width / 2 - 136) + 40 / 2 &&
            mouseY > (height / 2 - 140) - (50 / 2) &&
            mouseY < (height / 2 - 140) + (50 / 2)) {
            window.location.href = 'niveisMenu.html';
        }
        }
        
        
        
        else {
            if (mouseX > width / 2 - (75 / 2) &&
            mouseX < width / 2 + (75 / 2) &&
            mouseY > (height / 2 + 175 - 12.5) - (22 / 2) &&
            mouseY < (height / 2 + 175 - 12.5) + (22 / 2)) {
            this.status = true;
        }
        else if (mouseX > (width / 2 - 170) - 50 / 2 &&
            mouseX < (width / 2 - 170) + 50 / 2 &&
            mouseY > (height / 2 - 175) - (50 / 2) &&
            mouseY < (height / 2 - 175) + (50 / 2)) {
            window.location.href = 'niveisMenu.html';
        }
        }


        
    }
}

class Level {
    constructor(background, question, uiEndLevel) {
        this.items = [];
        this.textSize = 50;
        this.draggingItem = null;
        this.offsetX = 0;
        this.offsetY = 0;
        this.background = background;
        this.totalTrues = 0;
        this.totalFalses = 0;
        this.question = loadImage(question);
        this.uiEndLevel = uiEndLevel;
        this.points = 0;

        this.currentText = "";
        this.currentTextTimer = 0;

        this.lastPlateItem = null;

        this.timeScaleMax = 10;

        this.status = false;
    }

    addItem(item, value, description) {
        this.items.push({
            "item": item,
            "value": value,
            "description": loadImage(description),
            "pos": createVector(0, 0),
            "scale": itemsScale,
            "plate": false,
            "dragScale": 0
        });

        if (value) {
            this.totalTrues++;
        }
        else {
            this.totalFalses++;
        }
    }

    display() {
        background(this.background);
        push();
        blendMode(MULTIPLY);

        if (w < 900) {
            image(plate, width / 2, height / 2.2, plateSize, plateSize);
        } else if (w < 1500) {
            image(plate, width / 2, height / 2.1, plateSize, plateSize);
        } else {
            image(plate, width / 2, height / 2.1, plateSize, plateSize);
        }
        pop();

        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            item.item.show(item.pos,
                (itemSize + itemSize * item.dragScale / this.timeScaleMax / 10) //Animation Scale
            );
        }

        this.ui();

        this.animationScale();

        if (this.status && this.currentTextTimer == 0) {
            fill(0, 100);
            rect(0, 0, width, height);
            this.uiEndLevel.display();
        }
    }

    ui() {
        let content = this.points + "/" + this.totalTrues;
        textSize(h2Size);
        push();
        fill(109, 111, 113);
        blendMode(MULTIPLY);

        if (w < 900) {
            text(content, marginMobile, heightQuestion / 4 + marginMobile * 1.5 + textAscent() * 2);
        } else if (w < 1500) {
            text(content, marginDesktop, heightQuestion / 6 * 3.3 + textAscent());
        } else {
            text(content, marginDesktop, heightQuestion / 5 * 3.3 + textAscent());
        }

        pop();
        rectMode(CORNERS);
        push();
        blendMode(MULTIPLY);

        if (w < 900) {
            image(this.question, heightQuestion / 1.33 + marginMobile, heightQuestion / 4 + marginMobile, heightQuestion / 2 * 3, heightQuestion / 2);
        } else if (w < 1500) {
            image(this.question, heightQuestion / 1.33 + marginDesktop, heightQuestion / 4 + marginDesktop, heightQuestion / 2 * 3, heightQuestion / 2);
        } else {
            image(this.question, heightQuestion + marginDesktop, heightQuestion / 3 + marginDesktop, heightQuestion / 1.5 * 3, heightQuestion / 1.5);
        }
        pop();

        if (this.lastPlateItem != null && this.currentTextTimer != 0) {
            if (w < 900) {
                image(this.lastPlateItem.description, width / 2 + plateSize / 3, height / 2 + plateSize / 3, 160, 160);
            } else if (w < 1500) {
                image(this.lastPlateItem.description, width / 2 + plateSize / 3, height / 2 + plateSize / 3, 200, 200);
            } else {
                image(this.lastPlateItem.description, width / 2 + plateSize / 3, height / 2 + plateSize / 3, 250, 250);
            }
            this.currentTextTimer--;
        }
    }

    animationScale() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] != this.draggingItem) {
                if (this.items[i].dragScale > 0)
                    this.items[i].dragScale--;
            } else {
                if (this.items[i].dragScale < this.timeScaleMax)
                    this.items[i].dragScale++;
            }
        }
    }

    mousePressed() {
        if (!this.status) {
            for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                let d = dist(mouseX, mouseY, item.pos.x, item.pos.y);
                if (d < item.item.image.width * itemSize / 2) {
                    this.draggingItem = item;
                    this.offsetX = mouseX - this.draggingItem.pos.x;
                    this.offsetY = mouseY - this.draggingItem.pos.y;
                    break;
                }
            }

            if (this.draggingItem != null) {
                if (this.draggingItem.value && this.draggingItem.plate) this.points--;
                this.draggingItem.plate = false;
            }
        } else {
            this.uiEndLevel.mousePressed();
        }
    }

    mouseDragged() {
        if (!this.status) {
            if (this.draggingItem) {
                this.draggingItem.pos.x = mouseX - this.offsetX;
                this.draggingItem.pos.y = mouseY - this.offsetY;
            }
        }
    }

    mouseReleased() {
        if (!this.status) {
            if (this.draggingItem != null) {
                this.insidePlate(this.draggingItem);
                this.status = this.checkEndLevel();
            }
            this.draggingItem = null;
        }
    }

    setDefaultPosition() {
        let space;

        if (w < 600) {
            space = width / (this.items.length / 2 + 3);
            for (let i = 0; i < this.items.length; i++) {
                let xd;
                if (i % 2 == 0) xd = 0;
                else xd = 1;

                this.items[i].pos.set(
                    space * (i + 1 - xd),
                    height * (1 - itemsScale / 1.5 * (1 + xd))
                );
            }
        } else {
            space = width / (this.items.length + 1);
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].pos.set(
                    space * (i + 1), height * (1 - itemsScale / 1.3)
                );
            }
        }
    }

    insidePlate(item) {
        if (dist(item.pos.x, item.pos.y, width / 2, height / 2) < plateSize / 2) {
            item.plate = true;
            this.lastPlateItem = item;
            this.currentTextTimer = 50;
            if (item.value) this.points++;
        } else if (item.plate) {
            item.plate = false;
            if (item.value) this.points--;
        }
    }

    checkEndLevel() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].value != this.items[i].plate)
                return false;
        }
        return true;
    }

    recalcItem() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].pos = replaceItem(this.items[i].pos.x, this.items[i].pos.y,
                pw, ph, width, height);
        }
    }
}

class Gameitem {
    constructor(imageURL, name) {
        this.image = loadImage(imageURL);
        this.name = name;
    }

    show(pos, scale) {
        image(this.image, pos.x, pos.y,
            this.image.width * scale,
            this.image.height * scale);
    }
}

// Mouse event handlers
function mousePressed() {
    levels.mousePressed();
}

function mouseDragged() {
    levels.mouseDragged();
}

function mouseReleased() {
    levels.mouseReleased();
}

function replaceItem(px, py, pw, ph, w, h) {
    let x = px * w / pw;
    let y = py * h / ph;

    return createVector(x, y);
}