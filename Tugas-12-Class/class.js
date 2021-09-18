console.log("Tugas No 1 Animal Class");
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name() {
        return this._name;
    }

    get legs() {
        return this._legs;
    }

    get cold_blooded() {
        return this._cold_blooded;
    }
}

// release 0
var sheep = new Animal("shaun");

console.log("Release 0");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);
console.log("\n");

class Ape extends Animal {
    constructor(name) {
        super(name);
        this._legs = 2;
    }

    yell() {
        console.log('Auooo');
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
    }

    jump() {
        console.log('hop hop');
    }
}

console.log("Release 1");
var sungokong = new Ape("kera sakti");
console.log(sungokong.name);
console.log(sungokong.legs); 
console.log(sungokong.cold_blooded);
sungokong.yell();

var kodok = new Frog("buduk");
console.log(kodok.name); 
console.log(kodok.legs); 
console.log(kodok.cold_blooded);
kodok.jump(); 
console.log("\n");

console.log("Tugas No 2 Function to Class");
class Clock {
    constructor({
        template
    }) {
        this.timer;
        this._template = template;
    }

    render(template) {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this._template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(timer);
    }

    start() {
        this.render(this._template);
        this.timer = setInterval(() => this.render(this._template), 1000);
    }

}

var clock = new Clock({template: 'h:m:s'});
clock.start();