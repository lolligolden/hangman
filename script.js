window.onload = alert(`Hello, Player! Let's play Hangman! Press the "Play Hangman" button to begin.`);


const LEVEL1 = ["abbey", "acorn", "adage", "after", "agile", "ahead", "aisle", "alarm", "aorta", "awake", 
                "basin", "bacon", "banjo", "berth", "beast", "binge", "bland", "bonus", "brawn", "bride", 
                "cabal", "caste", "caulk", "chalk", "chaos", "civil", "claim", "color", "crawl", "coven", 
                "datum", "death", "debit", "depot", "diner", "dirty", "dodge", "dress", "duvet", "dwarf", 
                "eagle", "ebony", "edict", "elect", "ember", "empty", "endow", "enemy", "erupt", "exile", 
                "fable", "facet", "fancy", "feign", "felon", "fever", "flare", "flash", "forgo", "fudge", 
                "gamut", "gawky", "genre", "geode", "given", "goose", "grass", "grate", "grift", "gypsy", 
                "habit", "hands", "hazel", "heavy", "hedge", "hiker", "hoard", "hobby", "human", "hyena", 
                "ideal", "image", "imply", "inane", "infer", "inlet", "irony", "islet", "issue", "ivory", 
                "jaded", "jaunt", "jetty", "jewel", "joint", "joker", "joust", "judge", "juice", "jumps", 
                "kappa", "karma", "kebab", "khaki", "kiosk", "knack", "knead", "knife", "known", "koala", 
                "label", "labor", "laser", "laugh", "learn", "ledge", "legal", "lemon", "llama", "lurch", 
                "madam", "manor", "match", "melon", "might", "minor", "moist", "molar", "moral", "mouth", 
                "nadir", "naval", "nerve", "niece", "never", "night", "noble", "novel", "nurse", "nymph", 
                "obese", "ocean", "octet", "often", "olden", "omega", "oozes", "organ", "overt", "ozone", 
                "pagan", "pasta", "panel", "pearl", "phone", "plain", "plane", "plead", "poach", "purge", 
                "quack", "quail", "qualm", "queen", "queue", "quest", "quiet", "quilt", "quirk", "quote", 
                "rabbi", "radio", "rally", "ratio", "ready", "reign", "rhyme", "ridge", "round", "rural", 
                "sable", "satin", "sauna", "scale", "scope", "seize", "shawl", "skull", "sling", "snore", 
                "talon", "taste", "teeth", "theme", "tiger", "toque", "totem", "toxic", "tweak", "twine", 
                "udder", "ulcer", "uncut", "under", "unite", "upend", "upset", "urban", "usual", "usurp", 
                "vague", "value", "vapor", "vicar", "virus", "visor", "vivid", "vixen", "voice", "vowel", 
                "wagon", "waltz", "water", "weird", "wheat", "widow", "witch", "world", "worse", "wrath", 
                "xerox", "xylem", "xylol", 
                "yahoo", "yards", "yearn", "yeast", "yield", "yikes", "yodel", "yogis", "youth", "yummy", 
                "zebra", "zesty", "zingy", "zones", "zooms"];
const LEVEL2 = []

let level1Letter1 = document.getElementById('l1');
let level1Letter2 = document.getElementById('l2');
let level1Letter3 = document.getElementById('l3');
let level1Letter4 = document.getElementById('l4');
let level1Letter5 = document.getElementById('l5');

let playHangman = [];
const playWordlvl1 = LEVEL1[Math.floor(Math.random() * LEVEL1.length)];
const playWordlvl102 = LEVEL1[Math.floor(Math.random() * LEVEL1.length)];


const winner = document.getElementById('winner');
const guess = document.getElementById('guessAgain');
const tries = document.getElementById('numberTries');
const hangman = document.getElementById('Hangman');
const next = document.getElementById('next');
const nextWord = document.getElementById('nextWord');
const reset = document.getElementById('reset');

const pickLetters = document.getElementById('letters');
const a = document.getElementById('A');
const b = document.getElementById('B');
const c = document.getElementById('C');
const d = document.getElementById('D');
const e = document.getElementById('E');
const f = document.getElementById('F');
const g = document.getElementById('G');
const h = document.getElementById('H');
const i = document.getElementById('I');
const j = document.getElementById('J');
const k = document.getElementById('K');
const l = document.getElementById('L');
const m = document.getElementById('M');
const n = document.getElementById('N');
const o = document.getElementById('O');
const p = document.getElementById('P');
const q = document.getElementById('Q');
const r = document.getElementById('R');
const s = document.getElementById('S');
const t = document.getElementById('T');
const u = document.getElementById('U');
const v = document.getElementById('V');
const w = document.getElementById('W');
const x = document.getElementById('X');
const y = document.getElementById('Y');
const z = document.getElementById('Z');

const play = document.getElementById('play');
play.addEventListener('click', chooseWordLevel1);
let numberTrieslvl1 = 0;
let tryAgain = 0;

function chooseWordLevel1() {
    playHangman.push(playWordlvl1);
    console.log(playWordlvl1, playHangman);
    if (playHangman.includes(playWordlvl1)) {
        guess.textContent = `If the letters below have turned blue, a word has
        been chosen. Pick a letter to begin`;
    }
    pickLetters.style.color = "blue";
    activateletters();
}

function chooseNextWordlvl102() {
    level1Letter1.textContent = '';
    level1Letter2.textContent = '';
    level1Letter3.textContent = '';
    level1Letter4.textContent = '';
    level1Letter5.textContent = '';
    a.style.textDecoration = 'none';
    b.style.textDecoration = 'none';
    c.style.textDecoration = 'none';
    d.style.textDecoration = 'none';
    e.style.textDecoration = 'none';
    f.style.textDecoration = 'none';
    g.style.textDecoration = 'none';
    h.style.textDecoration = 'none';
    i.style.textDecoration = 'none';
    j.style.textDecoration = 'none';
    k.style.textDecoration = 'none';
    l.style.textDecoration = 'none';
    m.style.textDecoration = 'none';
    n.style.textDecoration = 'none';
    o.style.textDecoration = 'none';
    p.style.textDecoration = 'none';
    q.style.textDecoration = 'none';
    r.style.textDecoration = 'none';
    s.style.textDecoration = 'none';
    t.style.textDecoration = 'none';
    u.style.textDecoration = 'none';
    v.style.textDecoration = 'none';
    w.style.textDecoration = 'none';
    x.style.textDecoration = 'none';
    y.style.textDecoration = 'none';
    z.style.textDecoration = 'none';
    winner.textContent = '';


    playHangman.push(playWordlvl102);
    console.log(playWordlvl1, playHangman);
}

const playLevel2 = document.getElementById('btnlvl2');
// playLevel2.addEventListener('click', chooseWordLevel2);
let numberTrieslvl2 = 0;

function chooseWordLevel2() {
    playHangman.push(playWordlvl2);
    console.log(playWordlvl2);
    pickLetters.style.color = "blue";
    activateletters();
}

function resetWindow() {
    window.location.reload();
}

reset.addEventListener('click', resetWindow);



// Activate letters for Player to select

function activateletters() {

    if (a.addEventListener('click', activea));
    if (b.addEventListener('click', activeb));
    if (c.addEventListener('click', activec));
    if (d.addEventListener('click', actived));
    if (e.addEventListener('click', activee));
    if (f.addEventListener('click', activef));
    if (g.addEventListener('click', activeg));
    if (h.addEventListener('click', activeh));
    if (i.addEventListener('click', activei));
    if (j.addEventListener('click', activej));
    if (k.addEventListener('click', activek));
    if (l.addEventListener('click', activel));
    if (m.addEventListener('click', activem));
    if (n.addEventListener('click', activen));
    if (o.addEventListener('click', activeo));
    if (p.addEventListener('click', activep));
    if (q.addEventListener('click', activeq));
    if (r.addEventListener('click', activer));
    if (s.addEventListener('click', actives));
    if (t.addEventListener('click', activet));
    if (u.addEventListener('click', activeu));
    if (v.addEventListener('click', activev));
    if (w.addEventListener('click', activew));
    if (x.addEventListener('click', activex));
    if (y.addEventListener('click', activey));
    if (z.addEventListener('click', activez));
}



function activea() {
    a.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "a") {
        level1Letter1.textContent = "A";
    }
    if (playWordlvl1[1] === "a") {
        level1Letter2.textContent = "A";
    }
    if (playWordlvl1[2] === "a") {
        level1Letter3.textContent = "A";
    }
    if (playWordlvl1[3] === "a") {
        level1Letter4.textContent = "A";
    }
    if (playWordlvl1[4] === "a") {
        level1Letter5.textContent = "A";
    }
    if (!playWordlvl1.includes("a")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function activeb() {
    b.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "b") {
        level1Letter1.textContent = "B";
    }
    if (playWordlvl1[1] === "b") {
        level1Letter2.textContent = "B";
    }
    if (playWordlvl1[2] === "b") {
        level1Letter3.textContent = "B";
    }
    if (playWordlvl1[3] === "b") {
        level1Letter4.textContent = "B";
    }
    if (playWordlvl1[4] === "b") {
        level1Letter5.textContent = "B";
    }
    if (!playWordlvl1.includes("b")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function activec() {
    c.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "c") {
        level1Letter1.textContent = "C";
    }
    if (playWordlvl1[1] === "c") {
        level1Letter2.textContent = "C";
    }
    if (playWordlvl1[2] === "c") {
        level1Letter3.textContent = "C";
    }
    if (playWordlvl1[3] === "c") {
        level1Letter4.textContent = "C";
    }
    if (playWordlvl1[4] === "c") {
        level1Letter5.textContent = "C";
    }
    if (!playWordlvl1.includes("c")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();


}
function actived() {
    d.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "d") {
        level1Letter1.textContent = "D";
    }
    if (playWordlvl1[1] === "d") {
        level1Letter2.textContent = "D";
    }
    if (playWordlvl1[2] === "d") {
        level1Letter3.textContent = "D";
    }
    if (playWordlvl1[3] === "d") {
        level1Letter4.textContent = "D";
    }
    if (playWordlvl1[4] === "d") {
        level1Letter5.textContent = "D";
    }
    if (!playWordlvl1.includes("d")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();


}
function activee() {
    e.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "e") {
        level1Letter1.textContent = "E";
    }
    if (playWordlvl1[1] === "e") {
        level1Letter2.textContent = "E";
    }
    if (playWordlvl1[2] === "e") {
        level1Letter3.textContent = "E";
    }
    if (playWordlvl1[3] === "e") {
        level1Letter4.textContent = "E";
    }
    if (playWordlvl1[4] === "e") {
        level1Letter5.textContent = "E";
    }
    if (!playWordlvl1.includes("e")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();


}
function activef() {
    f.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "f") {
        level1Letter1.textContent = "F";
    }
    if (playWordlvl1[1] === "f") {
        level1Letter2.textContent = "F";
    }
    if (playWordlvl1[2] === "f") {
        level1Letter3.textContent = "F";
    }
    if (playWordlvl1[3] === "f") {
        level1Letter4.textContent = "F";
    }
    if (playWordlvl1[4] === "f") {
        level1Letter5.textContent = "F";
    }
    if (!playWordlvl1.includes("f")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();


}
function activeg() {
    g.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "g") {
        level1Letter1.textContent = "G";
    }
    if (playWordlvl1[1] === "g") {
        level1Letter2.textContent = "G";
    }
    if (playWordlvl1[2] === "g") {
        level1Letter3.textContent = "G";
    }
    if (playWordlvl1[3] === "g") {
        level1Letter4.textContent = "G";
    }
    if (playWordlvl1[4] === "g") {
        level1Letter5.textContent = "G";
    }
    if (!playWordlvl1.includes("g")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();


}
function activeh() {
    h.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "h") {
        level1Letter1.textContent = "H";
    }
    if (playWordlvl1[1] === "h") {
        level1Letter2.textContent = "H";
    }
    if (playWordlvl1[2] === "h") {
        level1Letter3.textContent = "H";
    }
    if (playWordlvl1[3] === "h") {
        level1Letter4.textContent = "H";
    }
    if (playWordlvl1[4] === "h") {
        level1Letter5.textContent = "H";
    }
    if (playWordlvl1.includes(!"h")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();


}
function activei() {
    i.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "i") {
        level1Letter1.textContent = "I";
    }
    if (playWordlvl1[1] === "i") {
        level1Letter2.textContent = "I";
    }
    if (playWordlvl1[2] === "i") {
        level1Letter3.textContent = "I";
    }
    if (playWordlvl1[3] === "i") {
        level1Letter4.textContent = "I";
    }
    if (playWordlvl1[4] === "i") {
        level1Letter5.textContent = "I";
    }
    if (!playWordlvl1.includes("i")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();


}
function activej() {
    j.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "j") {
        level1Letter1.textContent = "J";
    }
    if (playWordlvl1[1] === "j") {
        level1Letter2.textContent = "J";
    }
    if (playWordlvl1[2] === "j") {
        level1Letter3.textContent = "J";
    }
    if (playWordlvl1[3] === "j") {
        level1Letter4.textContent = "J";
    }
    if (playWordlvl1[4] === "j") {
        level1Letter5.textContent = "J";
    }
    if (!playWordlvl1.includes("j")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();


}
function activek() {
    k.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "k") {
        level1Letter1.textContent = "K";
    }
    if (playWordlvl1[1] === "k") {
        level1Letter2.textContent = "K";
    }
    if (playWordlvl1[2] === "k") {
        level1Letter3.textContent = "K";
    }
    if (playWordlvl1[3] === "k") {
        level1Letter4.textContent = "K";
    }
    if (playWordlvl1[4] === "k") {
        level1Letter5.textContent = "K";
    }
    if (!playWordlvl1.includes("k")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function activel() {
    l.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "l") {
        level1Letter1.textContent = "L";
    }
    if (playWordlvl1[1] === "l") {
        level1Letter2.textContent = "L";
    }
    if (playWordlvl1[2] === "l") {
        level1Letter3.textContent = "L";
    }
    if (playWordlvl1[3] === "l") {
        level1Letter4.textContent = "L";
    }
    if (playWordlvl1[4] === "l") {
        level1Letter5.textContent = "L";
    }
    if (!playWordlvl1.includes("l")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function activem() {
    m.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "m") {
        level1Letter1.textContent = "M";
    }
    if (playWordlvl1[1] === "m") {
        level1Letter2.textContent = "M";
    }
    if (playWordlvl1[2] === "m") {
        level1Letter3.textContent = "M";
    }
    if (playWordlvl1[3] === "m") {
        level1Letter4.textContent = "M";
    }
    if (playWordlvl1[4] === "m") {
        level1Letter5.textContent = "M";
    }
    if (!playWordlvl1.includes("m")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function activen() {
    n.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "n") {
        level1Letter1.textContent = "N";
    }
    if (playWordlvl1[1] === "n") {
        level1Letter2.textContent = "N";
    }
    if (playWordlvl1[2] === "n") {
        level1Letter3.textContent = "N";
    }
    if (playWordlvl1[3] === "n") {
        level1Letter4.textContent = "N";
    }
    if (playWordlvl1[4] === "n") {
        level1Letter5.textContent = "N";
    }
    if (!playWordlvl1.includes("n")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();

}
function activeo() {
    o.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "o") {
        level1Letter1.textContent = "O";
    }
    if (playWordlvl1[1] === "o") {
        level1Letter2.textContent = "O";
    }
    if (playWordlvl1[2] === "o") {
        level1Letter3.textContent = "O";
    }
    if (playWordlvl1[3] === "o") {
        level1Letter4.textContent = "O";
    }
    if (playWordlvl1[4] === "o") {
        level1Letter5.textContent = "O";
    }
    if (!playWordlvl1.includes("o")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();


}
function activep() {
    p.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "p") {
        level1Letter1.textContent = "P";
    }
    if (playWordlvl1[1] === "p") {
        level1Letter2.textContent = "P";
    }
    if (playWordlvl1[2] === "p") {
        level1Letter3.textContent = "P";
    }
    if (playWordlvl1[3] === "p") {
        level1Letter4.textContent = "P";
    }
    if (playWordlvl1[4] === "p") {
        level1Letter5.textContent = "P";
    }
    if (!playWordlvl1.includes("p")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
     };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function activeq() {
    q.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "q") {
        level1Letter1.textContent = "Q";
    }
    if (playWordlvl1[1] === "q") {
        level1Letter2.textContent = "Q";
    }
    if (playWordlvl1[2] === "q") {
        level1Letter3.textContent = "Q";
    }
    if (playWordlvl1[3] === "q") {
        level1Letter4.textContent = "Q";
    }
    if (playWordlvl1[4] === "q") {
        level1Letter5.textContent = "Q";
    }
    if (!playWord.includes("q")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
     };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function activer() {
    r.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "r") {
        level1Letter1.textContent = "R";
    }
    if (playWordlvl1[1] === "r") {
        level1Letter2.textContent = "R";
    }
    if (playWordlvl1[2] === "r") {
        level1Letter3.textContent = "R";
    }
    if (playWordlvl1[3] === "r") {
        level1Letter4.textContent = "R";
    }
    if (playWordlvl1[4] === "r") {
        level1Letter5.textContent = "R";
    }
    if (!playWordlvl1.includes("r")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
     };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function actives() {
    s.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "s") {
        level1Letter1.textContent = "S";
    }
    if (playWordlvl1[1] === "s") {
        level1Letter2.textContent = "S";
    }
    if (playWordlvl1[2] === "s") {
        level1Letter3.textContent = "S";
    }
    if (playWordlvl1[3] === "s") {
        level1Letter4.textContent = "S";
    }
    if (playWordlvl1[4] === "s") {
        level1Letter5.textContent = "S";
    }
    if (!playWordlvl1.includes("s")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
     };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function activet() {
    t.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "t") {
        level1Letter1.textContent = "T";
    }
    if (playWordlvl1[1] === "t") {
        level1Letter2.textContent = "T";
    }
    if (playWordlvl1[2] === "t") {
        level1Letter3.textContent = "T";
    }
    if (playWordlvl1[3] === "t") {
        level1Letter4.textContent = "T";
    }
    if (playWordlvl1[4] === "t") {
        level1Letter5.textContent = "T";
    }
    if (!playWordlvl1.includes("t")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
     };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function activeu() {
    u.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "u") {
        level1Letter1.textContent = "U";
    }
    if (playWordlvl1[1] === "u") {
        level1Letter2.textContent = "U";
    }
    if (playWordlvl1[2] === "u") {
        level1Letter3.textContent = "U";
    }
    if (playWordlvl1[3] === "u") {
        level1Letter4.textContent = "U";
    }
    if (playWordlvl1[4] === "u") {
        level1Letter5.textContent = "U";
    }
    if (!playWordlvl1.includes("u")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
     };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}
function activev() {
    v.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "v") {
        level1Letter1.textContent = "V";
    }
    if (playWordlvl1[1] === "v") {
        level1Letter2.textContent = "V";
    }
    if (playWordlvl1[2] === "v") {
        level1Letter3.textContent = "V";
    }
    if (playWordlvl1[3] === "v") {
        level1Letter4.textContent = "V";
    }
    if (playWordlvl1[4] === "v") {
        level1Letter5.textContent = "V";
    }
    if (!playWordlvl1.includes("v")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
     };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();

}

function activew() {
    w.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "w") {
        level1Letter1.textContent = "W";
    }
    if (playWordlvl1[1] === "w") {
        level1Letter2.textContent = "W";
    }
    if (playWordlvl1[2] === "w") {
        level1Letter3.textContent = "W";
    }
    if (playWordlvl1[3] === "w") {
        level1Letter4.textContent = "W";
    }
    if (playWordlvl1[4] === "w") {
        level1Letter5.textContent = "W";
    }
    if (!playWordlvl1.includes("w")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
     };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();

}
function activex() {
    x.style.textDecoration = "line-through";
    if (playWord[0] === "x") {
        level1Letter1.textContent = "X";
    }
    if (playWord[1] === "x") {
        level1Letter2.textContent = "X";
    }
    if (playWord[2] === "x") {
        level1Letter3.textContent = "X";
    }
    if (playWord[3] === "x") {
        level1Letter4.textContent = "X";
    }
    if (playWord[4] === "x") {
        level1Letter5.textContent = "X";
    }
    if (!playWord.includes("x")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;

    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    if (playHangman.includes(playWord)) {
        numberTrieslvl1++;
     };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();

}
function activey() {
    y.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "y") {
        level1Letter1.textContent = "Y";
    }
    if (playWordlvl1[1] === "y") {
        level1Letter2.textContent = "Y";
    }
    if (playWordlvl1[2] === "y") {
        level1Letter3.textContent = "Y";
    }
    if (playWordlvl1[3] === "y") {
        level1Letter4.textContent = "Y";
    }
    if (playWordlvl1[4] === "y") {
        level1Letter5.textContent = "Y";
    }
    if (!playWordlvl1.includes("y")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;

    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
        numberTrieslvl1++;
     };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();

}
function activez() {
    z.style.textDecoration = "line-through";
    if (playWordlvl1[0] === "z") {
        level1Letter1.textContent = "Z";
    }
    if (playWordlvl1[1] === "z") {
        level1Letter2.textContent = "Z";
    }
    if (playWordlvl1[2] === "z") {
        level1Letter3.textContent = "Z";
    }
    if (playWordlvl1[3] === "z") {
        level1Letter4.textContent = "Z";
    }
    if (playWordlvl1[4] === "z") {
        level1Letter5.textContent = "Z";
    }
    if (!playWordlvl1.includes("z")) {
        guess.textContent = "Please try again!";
        tryAgain += 1;

    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl1)) {
       numberTrieslvl1++;
    };
    tries.textContent = `# of Tries: ${6 - numberTrieslvl1}`;
    displayHangman();
    winnerLoser();
}

function displayHangman() {
    switch (tryAgain) {
        case 1: hangman.setAttribute('src', './images/hangmanhead.jpg');
            break;
        case 2: hangman.setAttribute('src', './images/hangmantorso.jpg');
            break;
        case 3: hangman.setAttribute('src', './images/hangmanLarm.jpg');
            break;
        case 4: hangman.setAttribute('src', './images/hangmanRarm.jpg');
            break;
        case 5: hangman.setAttribute('src', './images/hangmanLleg.jpg');
            break;
        case 6: hangman.setAttribute('src', './images/hangmanRleg.jpg');
            break;
        default : hangman.setAttribute('src', './images/hangmaninit.jpg');
    };
 }



function winnerLoser() {
    let winningTimeslvl1 = 0;
    if ((numberTrieslvl1 <= 6) && (level1Letter1.textContent === playWordlvl1[0].toUpperCase()) && (level1Letter2.textContent === playWordlvl1[1].toUpperCase()) && (level1Letter3.textContent === playWordlvl1[2].toUpperCase())
        && (level1Letter4.textContent === playWordlvl1[3].toUpperCase()) && (level1Letter5.textContent === playWordlvl1[4].toUpperCase())) {
        winner.textContent = "WINNER!!! YOU WIN HANGMAN!";
        moveAnnouncement();
        winningTimeslvl1 += 1;
        if ((playHangman.length === 1) && (winningTimeslvl1 === 1) ) {
            const play = document.getElementById('play');
            next.addEventListener('click', chooseNextWordlvl102);
            nextWord.textContent = "Press the Next Word button to play the next word";
        } else {
            chooseWordLevel2(playWordlvl2);
        }
    } else if ((numberTrieslvl1 === 6) && ((level1Letter1.textContent != playWordlvl1[0] || level1Letter2.textContent != playWordlvl1[1] || level1Letter3.textContent != playWordlvl1[2])
        || level1Letter4.textContent != playWordlvl1[3] || level1Letter5.textContent != playWordlvl1[4])) {
        winner.textContent = "SORRY, YOU ARE OUT OF GUESSES! YOU ARE HUNG!";
        winner.style.color = "green";
        winner.style.fontWeight = 'bold';
        winner.style.fontSize = 'large';
    }
}

function moveAnnouncement() {
    let red = setInterval(function () { winner.style.color = "red" }, 2000);
    let blue = setInterval(function () { winner.style.color = "blue" }, 3000);

    for (let i = 0; i < 5; i++) {
        setInterval(function () { winner.style.color = "red" }, 2000);
        setInterval(function () { winner.style.color = "blue" }, 3000);
    }

    clearInterval(red);
    clearInterval(blue);
}






// * Let player know what the correct word was when they have lost the round.
// * Set up words for levels 
// * Set up game to go to the next level and reset number of Tries counter and
// * Dress up the look!
// * Make sure that duplicate words are not selected for player 
// * Trim down the boxes to match the number of letters in the word
// * Change color of letter boxes when correct letter is chosen







