/////////////////
/* INHERITANCE */
/////////////////

/* 
    INHERITANCE disebut juga penurunan, berarti suatu class dapat menurunkan property dan method untuk class lainnya.
    Tujuan dari INHERITANCE adalah supaya kita tidak perlu membuat banyak class dengan property yang sama. 
    Cukup 1 Class sebagai Class master, kemudian property tersebut diturunkan untuk class lainnya yang memiliki additional property / method yang berbeda
*/
// Contoh INHERITANCE

class Player {
    constructor (name, nickname, nationality) {
        this.name = name;
        this.nickname = nickname;
        this.nationality = nationality;
    }

    intro() {
        console.log(`My name is ${this.name} but yo can call me ${this.nickname}`);
    }
}
/* 
    Untuk melakukan INHERITANCE gunakan extends dan super()
    Semua PROPERTIES dan METHODS milik Player akan diturunkan ke CasualPlayer
*/
class CasualPlayer extends Player { 
    constructor (name, nickname, nationality, job) {
        // SUPER akan memanggil constructor milik 'Player'
        super(name, nickname, nationality);
        this.job = job;
    }

    myJob() {
        console.log(`I'm not pro player so I have a job, that is ${this.job}`);
    }
}

class ProPlayer extends Player {
    constructor(name, nickname, nationality, team) {
        super(name, nickname, nationality);
        this.team = team;
    }

    myTeam() {
        console.log(`I'm a pro player so I have ateam, that is ${this.team}`);
    }
}


const dendi = new Player('Danil', 'Dandi', 'Ukraine');
console.log(dendi);
dendi.intro();

const tanjirou = new CasualPlayer ('Tanjirou', 'Tanji', 'Japan', 'Swordsman');
// Memunculkan method pada object di dalam console browser
// console.log(tanjirou.__proto__);
console.log(tanjirou);
tanjirou.intro();
tanjirou.myJob();

const kuroky = new ProPlayer ('Kuro', 'Kuroky', 'German', 'Nigma');
console.log(kuroky);
kuroky.intro();
kuroky.myTeam();