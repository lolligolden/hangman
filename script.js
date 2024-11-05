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
let numberTries = 0;
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
    console.log(playWordlvl102, playHangman);
    if (playWordlvl102 === playWordlvl1) {
        playHangman.pop();
        playHangman.push(playWordlvl102);
    }
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
    if ((playWordlvl1[0] === "a") || (playWordlvl102[0] === "a")) {
        level1Letter1.textContent = "A";
    }
    if ((playWordlvl1[1] === "a") || (playWordlvl102[1] === "a")) {
        level1Letter2.textContent = "A";
    }
    if ((playWordlvl1[2] === "a") || (playWordlvl102[2] === "a")) {
        level1Letter3.textContent = "A";
    }
    if ((playWordlvl1[3] === "a") || (playWordlvl102[3] === 'a')) {
        level1Letter4.textContent = "A";
    }
    if ((playWordlvl1[4] === "a") || (playWordlvl102[4] === "a")) {
        level1Letter4.textContent = 'A';
    }
    if ((!playWordlvl1.includes("a")) || (!playWordlvl102.includes("a"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activeb() {
    b.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "b") || (playWordlvl102[0] === "b")) {
        level1Letter1.textContent = "B";
    }
    if ((playWordlvl1[1] === "b") || (playWordlvl102[1] === "b")) {
        level1Letter2.textContent = "B";
    }
    if ((playWordlvl1[2] === "b") || (playWordlvl102[2] === "b")) {
        level1Letter3.textContent = "B";
    }
    if ((playWordlvl1[3] === "b") || (playWordlvl102[3] === "b")) {
        level1Letter4.textContent = "B";
    }
    if ((playWordlvl1[4] === "b") || (playWordlvl102[4] === "b")) {
        level1Letter5.textContent = "B";
    }
    if ((!playWordlvl1.includes("b")) || (!playWordlvl102.includes("b"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activec() {
    c.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "c") || (playWordlvl102[0] === "c")) {
        level1Letter1.textContent = "C";
    }
    if ((playWordlvl1[1] === "c") || (playWordlvl102[1] === "c")) {
        level1Letter2.textContent = "C";
    }
    if ((playWordlvl1[2] === "c") || (playWordlvl102[2] === "c")) {
        level1Letter3.textContent = "C";
    }
    if ((playWordlvl1[3] === "c") || (playWordlvl102[3] === "c")) {
        level1Letter4.textContent = "C";
    }
    if ((playWordlvl1[4] === "c") || (playWordlvl102[4] === "c")) {
        level1Letter5.textContent = "C";
    }
    if ((!playWordlvl1.includes("c")) || (!playWordlvl102.includes("c"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function actived() {
    d.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "d") || (playWordlvl1[0] === "d")) {
        level1Letter1.textContent = "D";
    }
    if ((playWordlvl1[1] === "d") || (playWordlvl102[1] === "d")) {
        level1Letter2.textContent = "D";
    }
    if ((playWordlvl1[2] === "d") || (playWordlvl102[2] === "d")) {
        level1Letter3.textContent = "D";
    }
    if ((playWordlvl1[3] === "d") || (playWordlvl102[3] === "d")) {
        level1Letter4.textContent = "D";
    }
    if ((playWordlvl1[4] === "d") || (playWordlvl102[4] === "d")) {
        level1Letter5.textContent = "D";
    }
    if ((!playWordlvl1.includes("d")) || (!playWordlvl102.includes("d"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activee() {
    e.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "e") || (playWordlvl102[0] === "e")) {
        level1Letter1.textContent = "E";
    }
    if ((playWordlvl1[1] === "e") || (playWordlvl102[1] === "e")) {
        level1Letter2.textContent = "E";
    }
    if ((playWordlvl1[2] === "e") || (playWordlvl102[2] === "e")) {
        level1Letter3.textContent = "E";
    }
    if ((playWordlvl1[3] === "e") || (playWordlvl102[3] === "e")) {
        level1Letter4.textContent = "E";
    }
    if ((playWordlvl1[4] === "e") || (playWordlvl102[4] === "e")) {
        level1Letter5.textContent = "E";
    }
    if ((!playWordlvl1.includes("e")) || (!playWordlvl102.includes("e"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activef() {
    f.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "f") || (playWordlvl102[0] === "f")) {
        level1Letter1.textContent = "F";
    }
    if ((playWordlvl1[1] === "f") || (playWordlvl102[1] === "f")) {
        level1Letter2.textContent = "F";
    }
    if ((playWordlvl1[2] === "f") || (playWordlvl102[2] === "f")) {
        level1Letter3.textContent = "F";
    }
    if ((playWordlvl1[3] === "f") || (playWordlvl102[3] === "f")) {
        level1Letter4.textContent = "F";
    }
    if ((playWordlvl1[4] === "f") || (playWordlvl102[4] === "f")) {
        level1Letter5.textContent = "F";
    }
    if ((!playWordlvl1.includes("f")) || (!playWordlvl102.includes("f"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activeg() {
    g.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "g") || (playWordlvl102[0] === "g")) {
        level1Letter1.textContent = "G";
    }
    if ((playWordlvl1[1] === "g") || (playWordlvl102[1] === "g")) {
        level1Letter2.textContent = "G";
    }
    if ((playWordlvl1[2] === "g") || (playWordlvl102[2] === "g")) {
        level1Letter3.textContent = "G";
    }
    if ((playWordlvl1[3] === "g") || (playWordlvl102[3] === "g")) {
        level1Letter4.textContent = "G";
    }
    if ((playWordlvl1[4] === "g") || (playWordlvl102[4] === "g")) {
        level1Letter5.textContent = "G";
    }
    if ((!playWordlvl1.includes("g")) || (!playWordlvl102.includes("g"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activeh() {
    h.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "h") || (playWordlvl102[0] === "h")) {
        level1Letter1.textContent = "H";
    }
    if ((playWordlvl1[1] === "h") || (playWordlvl102[1] === "h")) {
        level1Letter2.textContent = "H";
    }
    if ((playWordlvl1[2] === "h") || (playWordlvl102[2] === "h")){
        level1Letter3.textContent = "H";
    }
    if ((playWordlvl1[3] === "h") || (playWordlvl102[3] === "h")) {
        level1Letter4.textContent = "H";
    }
    if ((playWordlvl1[4] === "h") || (playWordlvl102[4] === "h")) {
        level1Letter5.textContent = "H";
    }
    if ((!playWordlvl1.includes("h")) || (!playWordlvl102.includes("h"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activei() {
    i.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "i") || (playWordlvl102[0] === "i")) {
        level1Letter1.textContent = "I";
    }
    if ((playWordlvl1[1] === "i") || (playWordlvl102[1] === "i")) {
        level1Letter2.textContent = "I";
    }
    if ((playWordlvl1[2] === "i") || (playWordlvl102[2] === "i")) {
        level1Letter3.textContent = "I";
    }
    if ((playWordlvl1[3] === "i") || (playWordlvl102[3] === "i")) {
        level1Letter4.textContent = "I";
    }
    if ((playWordlvl1[4] === "i") || (playWordlvl102[4] === "i")) {
        level1Letter5.textContent = "I";
    }
    if ((!playWordlvl1.includes("i")) || (!playWordlvl102.includes("i"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activej() {
    j.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "j") || (playWordlvl102[0] === "j")) {
        level1Letter1.textContent = "J";
    }
    if ((playWordlvl1[1] === "j") || (playWordlvl102[1] === "j")) {
        level1Letter2.textContent = "J";
    }
    if ((playWordlvl1[2] === "j") || (playWordlvl102[2] === "j")) {
        level1Letter3.textContent = "J";
    }
    if ((playWordlvl1[3] === "j") || (playWordlvl102[3] === "j")) {
        level1Letter4.textContent = "J";
    }
    if ((playWordlvl1[4] === "j") || (playWordlvl102[4] === "j")) {
        level1Letter5.textContent = "J";
    }
    if ((!playWordlvl1.includes("j")) || (!playWordlvl102.includes("j"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activek() {
    k.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "k") || (playWordlvl102[0] === "k")) {
        level1Letter1.textContent = "K";
    }
    if ((playWordlvl1[1] === "k") || (playWordlvl102[1] === "k")) {
        level1Letter2.textContent = "K";
    }
    if ((playWordlvl1[2] === "k") || (playWordlvl102[2] === "k")) {
        level1Letter3.textContent = "K";
    }
    if ((playWordlvl1[3] === "k") || (playWordlvl102[3] === "k")) {
        level1Letter4.textContent = "K";
    }
    if ((playWordlvl1[4] === "k") || (playWordlvl102[4] === "k")) {
        level1Letter5.textContent = "K";
    }
    if ((!playWordlvl1.includes("k")) || (!playWordlvl102.includes("k"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activel() {
    l.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "l") || (playWordlvl102[0] === "l")) {
        level1Letter1.textContent = "L";
    }
    if ((playWordlvl1[1] === "l") || (playWordlvl102[1] === "l")) {
        level1Letter2.textContent = "L";
    }
    if ((playWordlvl1[2] === "l") || (playWordlvl102[2] === "l")) {
        level1Letter3.textContent = "L";
    }
    if ((playWordlvl1[3] === "l") || (playWordlvl102[3] === "l")) {
        level1Letter4.textContent = "L";
    }
    if ((playWordlvl1[4] === "l") || (playWordlvl102[4] === "l")) {
        level1Letter5.textContent = "L";
    }
    if ((!playWordlvl1.includes("l")) || (!playWordlvl102.includes("l"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activem() {
    m.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "m") || (playWordlvl102[0] === "m")) {
        level1Letter1.textContent = "M";
    }
    if ((playWordlvl1[1] === "m") || (playWordlvl102[1] === "m")) {
        level1Letter2.textContent = "M";
    }
    if ((playWordlvl1[2] === "m") || (playWordlvl102[2] === "m")) {
        level1Letter3.textContent = "M";
    }
    if ((playWordlvl1[3] === "m") || (playWordlvl102[3] === "m")) {
        level1Letter4.textContent = "M";
    }
    if ((playWordlvl1[4] === "m") || (playWordlvl102[4] === "m")) {
        level1Letter5.textContent = "M";
    }
    if ((!playWordlvl1.includes("m")) || (!playWordlvl102.includes("m"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activen() {
    n.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "n") || (playWordlvl102[0] === "n")) {
        level1Letter1.textContent = "N";
    }
    if ((playWordlvl1[1] === "n") || (playWordlvl102[1] === "n")) {
        level1Letter2.textContent = "N";
    }
    if ((playWordlvl1[2] === "n") || (playWordlvl102[2] === "n")) {
        level1Letter3.textContent = "N";
    }
    if ((playWordlvl1[3] === "n") || (playWordlvl102[3] === "n")) {
        level1Letter4.textContent = "N";
    }
    if ((playWordlvl1[4] === "n") || (playWordlvl102[4] === "n")) {
        level1Letter5.textContent = "N";
    }
    if ((!playWordlvl1.includes("n")) || (!playWordlvl1.includes("n"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();

}

function activeo() {
    o.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "o") || (playWordlvl102[0] === "o")) {
        level1Letter1.textContent = "O";
    }
    if ((playWordlvl1[1] === "o") || (playWordlvl102[1] === "o")) {
        level1Letter2.textContent = "O";
    }
    if ((playWordlvl1[2] === "o") || (playWordlvl102[2] === "o")) {
        level1Letter3.textContent = "O";
    }
    if ((playWordlvl1[3] === "o") || (playWordlvl102[3] === "o")) {
        level1Letter4.textContent = "O";
    }
    if ((playWordlvl1[4] === "o") || (playWordlvl102[4] === "o")) {
        level1Letter5.textContent = "O";
    }
    if ((!playWordlvl1.includes("o")) || (!playWordlvl102.includes("o"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activep() {
    p.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "p") || (playWordlvl102[0] === "p")) {
        level1Letter1.textContent = "P";
    }
    if ((playWordlvl1[1] === "p") || (playWordlvl102[1] === "p")) {
        level1Letter2.textContent = "P";
    }
    if ((playWordlvl1[2] === "p") || (playWordlvl102[2] === "p")) {
        level1Letter3.textContent = "P";
    }
    if ((playWordlvl1[3] === "p") || (playWordlvl102[3] === "p")) {
        level1Letter4.textContent = "P";
    }
    if ((playWordlvl1[4] === "p") || (playWordlvl102[4] === "p")) {
        level1Letter5.textContent = "P";
    }
    if ((!playWordlvl1.includes("p")) || (!playWordlvl102.includes("p"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
     };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activeq() {
    q.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "q") || (playWordlvl102[0] === "q")) {
        level1Letter1.textContent = "Q";
    }
    if ((playWordlvl1[1] === "q") || (playWordlvl102[1] === "q")) {
        level1Letter2.textContent = "Q";
    }
    if ((playWordlvl1[2] === "q") || (playWordlvl102[2] === "q")) {
        level1Letter3.textContent = "Q";
    }
    if ((playWordlvl1[3] === "q") || (playWordlvl102[3] === "q")) {
        level1Letter4.textContent = "Q";
    }
    if ((playWordlvl1[4] === "q") || (playWordlvl102[4] === "q")) {
        level1Letter5.textContent = "Q";
    }
    if ((!playWordlvl1.includes("q")) || (!playWordlvl102.includes("q"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
     };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activer() {
    r.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "r") || (playWordlvl102[0] === "r")) {
        level1Letter1.textContent = "R";
    }
    if ((playWordlvl1[1] === "r") || (playWordlvl102[1] === "r")) {
        level1Letter2.textContent = "R";
    }
    if ((playWordlvl1[2] === "r") || (playWordlvl102[2] === "r")) {
        level1Letter3.textContent = "R";
    }
    if ((playWordlvl1[3] === "r") || (playWordlvl102[3] === "r")) {
        level1Letter4.textContent = "R";
    }
    if ((playWordlvl1[4] === "r") || (playWordlvl102[4] === "r")) {
        level1Letter5.textContent = "R";
    }
    if ((!playWordlvl1.includes("r")) || (!playWordlvl102.includes("r"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
     };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function actives() {
    s.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "s") || (playWordlvl102[0] === "s")) {
        level1Letter1.textContent = "S";
    }
    if ((playWordlvl1[1] === "s") || (playWordlvl102[1] === "s")) {
        level1Letter2.textContent = "S";
    }
    if ((playWordlvl1[2] === "s") || (playWordlvl102[2] === "s")) {
        level1Letter3.textContent = "S";
    }
    if ((playWordlvl1[3] === "s") || (playWordlvl102[3] === "s")) {
        level1Letter4.textContent = "S";
    }
    if ((playWordlvl1[4] === "s") || (playWordlvl102[4] === "s")) {
        level1Letter5.textContent = "S";
    }
    if ((!playWordlvl1.includes("s")) || (!playWordlvl102.includes("s"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
     };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activet() {
    t.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "t") || (playWordlvl102[0] === "t")) {
        level1Letter1.textContent = "T";
    }
    if ((playWordlvl1[1] === "t") || (playWordlvl102[1] === "t")) {
        level1Letter2.textContent = "T";
    }
    if ((playWordlvl1[2] === "t") || (playWordlvl102[2] === "t")) {
        level1Letter3.textContent = "T";
    }
    if ((playWordlvl1[3] === "t") || (playWordlvl102[3] === "t")) {
        level1Letter4.textContent = "T";
    }
    if ((playWordlvl1[4] === "t") || (playWordlvl102[4] === "t")) {
        level1Letter5.textContent = "T";
    }
    if ((!playWordlvl1.includes("t")) || (!playWordlvl102.includes("t"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
     };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activeu() {
    u.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "u") || (playWordlvl102[0] === "u")) {
        level1Letter1.textContent = "U";
    }
    if ((playWordlvl1[1] === "u") || (playWordlvl102[1] === "u")) {
        level1Letter2.textContent = "U";
    }
    if ((playWordlvl1[2] === "u") || (playWordlvl102[2] === "u")) {
        level1Letter3.textContent = "U";
    }
    if ((playWordlvl1[3] === "u") || (playWordlvl102[3] === "u")) {
        level1Letter4.textContent = "U";
    }
    if ((playWordlvl1[4] === "u") || (playWordlvl102[4] === "u")) {
        level1Letter5.textContent = "U";
    }
    if ((!playWordlvl1.includes("u")) || (!playWordlvl102.includes("u"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
     };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activev() {
    v.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "v") || (playWordlvl102[0] === "v")) {
        level1Letter1.textContent = "V";
    }
    if ((playWordlvl1[1] === "v") || (playWordlvl102[1] === "v")) {
        level1Letter2.textContent = "V";
    }
    if ((playWordlvl1[2] === "v") || (playWordlvl102[2] === "v")) {
        level1Letter3.textContent = "V";
    }
    if ((playWordlvl1[3] === "v") || (playWordlvl102[3] === "v")) {
        level1Letter4.textContent = "V";
    }
    if ((playWordlvl1[4] === "v") || (playWordlvl102[4] === "v")) {
        level1Letter5.textContent = "V";
    }
    if ((!playWordlvl1.includes("v")) || (!playWordlvl102.includes("v"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
     };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activew() {
    w.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "w") || (playWordlvl102[0] === "w")) {
        level1Letter1.textContent = "W";
    }
    if ((playWordlvl1[1] === "w") || (playWordlvl102[1] === "w")) {
        level1Letter2.textContent = "W";
    }
    if ((playWordlvl1[2] === "w") || (playWordlvl102[2] === "w")) {
        level1Letter3.textContent = "W";
    }
    if ((playWordlvl1[3] === "w") || (playWordlvl102[3] === "w")) {
        level1Letter4.textContent = "W";
    }
    if ((playWordlvl1[4] === "w") || (playWordlvl102[4] === "w")) {
        level1Letter5.textContent = "W";
    }
    if ((!playWordlvl1.includes("w")) || (!playWordlvl102.includes("w"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
     };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activex() {
    x.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "x") || (playWordlvl102[0] === "x")) {
        level1Letter1.textContent = "X";
    }
    if ((playWordlvl1[1] === "x") || (playWordlvl102[1] === "x")) {
        level1Letter2.textContent = "X";
    }
    if ((playWordlvl1[2] === "x") || (playWordlvl102[2] === "x")) {
        level1Letter3.textContent = "X";
    }
    if ((playWordlvl1[3] === "x") || (playWordlvl102[3] === "x")) {
        level1Letter4.textContent = "X";
    }
    if ((playWordlvl1[4] === "x") || (playWordlvl102[4] === "x")) {
        level1Letter5.textContent = "X";
    }
    if ((!playWordlvl1.includes("x")) || (!playWordlvl102.includes("x"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
     };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activey() {
    y.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "y") || (playWordlvl102[0] === "y")) {
        level1Letter1.textContent = "Y";
    }
    if ((playWordlvl1[1] === "y") || (playWordlvl102[1] === "y")) {
        level1Letter2.textContent = "Y";
    }
    if ((playWordlvl1[2] === "y") || (playWordlvl102[2] === "y")) {
        level1Letter3.textContent = "Y";
    }
    if ((playWordlvl1[3] === "y") || (playWordlvl102[3] === "y")) {
        level1Letter4.textContent = "Y";
    }
    if ((playWordlvl1[4] === "y") || (playWordlvl102[4] === "y")) {
        level1Letter5.textContent = "Y";
    }
    if ((!playWordlvl1.includes("y")) || (!playWordlvl102.includes("y"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;

    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
        numberTries++;
     };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function activez() {
    z.style.textDecoration = "line-through";
    if ((playWordlvl1[0] === "z") || (playWordlvl102[0] === "z")) {
        level1Letter1.textContent = "Z";
    }
    if ((playWordlvl1[1] === "z") || (playWordlvl102[1] === "z")) {
        level1Letter2.textContent = "Z";
    }
    if ((playWordlvl1[2] === "z") || (playWordlvl102[2] === "z")) {
        level1Letter3.textContent = "Z";
    }
    if ((playWordlvl1[3] === "z") || (playWordlvl102[3] === "z")) {
        level1Letter4.textContent = "Z";
    }
    if ((playWordlvl1[4] === "z") || (playWordlvl102[4] === "z")) {
        level1Letter5.textContent = "Z";
    }
    if ((!playWordlvl1.includes("z")) || (!playWordlvl102.includes("z"))) {
        guess.textContent = "Please try again!";
        tryAgain += 1;

    }
    setTimeout(function() {guess.textContent = ""}, 3000);
    if ((playHangman.includes(playWordlvl1)) || (playHangman.includes(playWordlvl102))) {
       numberTries++;
    };
    tries.textContent = `# of Tries: ${6 - numberTries}`;
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
    if ((numberTries <= 6) && (level1Letter1.textContent === playWordlvl1[0].toUpperCase()) && (level1Letter2.textContent === playWordlvl1[1].toUpperCase()) && (level1Letter3.textContent === playWordlvl1[2].toUpperCase())
        && (level1Letter4.textContent === playWordlvl1[3].toUpperCase()) && (level1Letter5.textContent === playWordlvl1[4].toUpperCase())) {
        winner.textContent = "WINNER!!! YOU WIN HANGMAN!";
        moveAnnouncement();
        winningTimeslvl1 += 1;
        if ((playHangman.length === 1) && (winningTimeslvl1 === 1) ) {
            next.addEventListener('click', chooseNextWordlvl102);
            nextWord.textContent = "Press the Next Word button to play the next word";
        } else {
            chooseWordLevel2(playWordlvl2);
        }
    } else if ((numberTries === 6) && ((level1Letter1.textContent != playWordlvl1[0] || level1Letter2.textContent != playWordlvl1[1] || level1Letter3.textContent != playWordlvl1[2])
        || level1Letter4.textContent != playWordlvl1[3] || level1Letter5.textContent != playWordlvl1[4])) {
        winner.textContent = `SORRY, YOU ARE OUT OF GUESSES! YOU ARE HUNG!\n The correct answer was ${playWordlvl1}`;
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






// * Set up words for levels 
// * Set up game to go to the next level and reset number of Tries counter had
// * Dress up the look!
// * Make sure that duplicate words are not selected for player 
// * Trim down the boxes to match the number of letters in the word
// * Change color of letter boxes when correct letter is chosen







