const LEVEL1 = ["abbey", "awake", "basin", "bland", "civil", "coven", "depot", "dodge", "ember", "exile", "facet", "fever", "grass", "gypsy", "habit", "heavy", "ideal", "inlet", "jewel", "joint", "karma", "knife", "labor", "llama", "manor", "moist", "never", "nurse", "ocean", "organ", "pasta", "poach", "quack", "quilt", "rally", "round", "satin", "skull", "taste", "totem", "unite", "usual", "value", "voice", "water", "widow", "xerox", "yearn", "yield", "zebra", "zones"];
const LEVEL2 = []

let level1Letter1 = document.getElementById('l1');
let level1Letter2 = document.getElementById('l2');
let level1Letter3 = document.getElementById('l3');
let level1Letter4 = document.getElementById('l4');
let level1Letter5 = document.getElementById('l5');

let playHangman = [];
const playWord = LEVEL1[Math.floor(Math.random() * LEVEL1.length)];

const winner = document.getElementById('winner');
const guess = document.getElementById('guessAgain');
const tries = document.getElementById('numberTries');
const hangman = document.getElementById('Hangman');

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

const playLevel1 = document.getElementById('btnlvl1');
playLevel1.addEventListener('click', chooseWordLevel1);
let numberTries = 0;

function chooseWordLevel1() {
    playHangman.push(playWord);
    console.log(playWord);
    pickLetters.style.color = "blue";
    activateletters();
}



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
    if (playWord[0] === "a") {
        level1Letter1.textContent = "A";
    }
    if (playWord[1] === "a") {
        level1Letter2.textContent = "A";
    }
    if (playWord[2] === "a") {
        level1Letter3.textContent = "A";
    }
    if (playWord[3] === "a") {
        level1Letter4.textContent = "A";
    }
    if (playWord[4] === "a") {
        level1Letter5.textContent = "A";
    }
    if (!playWord.includes("a")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activeb() {
    b.style.textDecoration = "line-through";
    if (playWord[0] === "b") {
        level1Letter1.textContent = "B";
    }
    if (playWord[1] === "b") {
        level1Letter2.textContent = "B";
    }
    if (playWord[2] === "b") {
        level1Letter3.textContent = "B";
    }
    if (playWord[3] === "b") {
        level1Letter4.textContent = "B";
    }
    if (playWord[4] === "b") {
        level1Letter5.textContent = "B";
    }
    if (!playWord.includes("b")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activec() {
    c.style.textDecoration = "line-through";
    if (playWord[0] === "c") {
        level1Letter1.textContent = "C";
    }
    if (playWord[1] === "c") {
        level1Letter2.textContent = "C";
    }
    if (playWord[2] === "c") {
        level1Letter3.textContent = "C";
    }
    if (playWord[3] === "c") {
        level1Letter4.textContent = "C";
    }
    if (playWord[4] === "c") {
        level1Letter5.textContent = "C";
    }
    if (!playWord.includes("c")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();


}
function actived() {
    d.style.textDecoration = "line-through";
    if (playWord[0] === "d") {
        level1Letter1.textContent = "D";
    }
    if (playWord[1] === "d") {
        level1Letter2.textContent = "D";
    }
    if (playWord[2] === "d") {
        level1Letter3.textContent = "D";
    }
    if (playWord[3] === "d") {
        level1Letter4.textContent = "D";
    }
    if (playWord[4] === "d") {
        level1Letter5.textContent = "D";
    }
    if (!playWord.includes("d")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();


}
function activee() {
    e.style.textDecoration = "line-through";
    if (playWord[0] === "e") {
        level1Letter1.textContent = "E";
    }
    if (playWord[1] === "e") {
        level1Letter2.textContent = "E";
    }
    if (playWord[2] === "e") {
        level1Letter3.textContent = "E";
    }
    if (playWord[3] === "e") {
        level1Letter4.textContent = "E";
    }
    if (playWord[4] === "e") {
        level1Letter5.textContent = "E";
    }
    if (!playWord.includes("e")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();


}
function activef() {
    f.style.textDecoration = "line-through";
    if (playWord[0] === "f") {
        level1Letter1.textContent = "F";
    }
    if (playWord[1] === "f") {
        level1Letter2.textContent = "F";
    }
    if (playWord[2] === "f") {
        level1Letter3.textContent = "F";
    }
    if (playWord[3] === "f") {
        level1Letter4.textContent = "F";
    }
    if (playWord[4] === "f") {
        level1Letter5.textContent = "F";
    }
    if (!playWord.includes("f")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();


}
function activeg() {
    g.style.textDecoration = "line-through";
    if (playWord[0] === "g") {
        level1Letter1.textContent = "G";
    }
    if (playWord[1] === "g") {
        level1Letter2.textContent = "G";
    }
    if (playWord[2] === "g") {
        level1Letter3.textContent = "G";
    }
    if (playWord[3] === "g") {
        level1Letter4.textContent = "G";
    }
    if (playWord[4] === "g") {
        level1Letter5.textContent = "G";
    }
    if (!playWord.includes("g")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();


}
function activeh() {
    h.style.textDecoration = "line-through";
    if (playWord[0] === "h") {
        level1Letter1.textContent = "H";
    }
    if (playWord[1] === "h") {
        level1Letter2.textContent = "H";
    }
    if (playWord[2] === "h") {
        level1Letter3.textContent = "H";
    }
    if (playWord[3] === "h") {
        level1Letter4.textContent = "H";
    }
    if (playWord[4] === "h") {
        level1Letter5.textContent = "H";
    }
    if (playWord.includes(!"h")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();


}
function activei() {
    i.style.textDecoration = "line-through";
    if (playWord[0] === "i") {
        level1Letter1.textContent = "I";
    }
    if (playWord[1] === "i") {
        level1Letter2.textContent = "I";
    }
    if (playWord[2] === "i") {
        level1Letter3.textContent = "I";
    }
    if (playWord[3] === "i") {
        level1Letter4.textContent = "I";
    }
    if (playWord[4] === "i") {
        level1Letter5.textContent = "I";
    }
    if (!playWord.includes("i")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();


}
function activej() {
    j.style.textDecoration = "line-through";
    if (playWord[0] === "j") {
        level1Letter1.textContent = "J";
    }
    if (playWord[1] === "j") {
        level1Letter2.textContent = "J";
    }
    if (playWord[2] === "j") {
        level1Letter3.textContent = "J";
    }
    if (playWord[3] === "j") {
        level1Letter4.textContent = "J";
    }
    if (playWord[4] === "j") {
        level1Letter5.textContent = "J";
    }
    if (!playWord.includes("j")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();


}
function activek() {
    k.style.textDecoration = "line-through";
    if (playWord[0] === "k") {
        level1Letter1.textContent = "K";
    }
    if (playWord[1] === "k") {
        level1Letter2.textContent = "K";
    }
    if (playWord[2] === "k") {
        level1Letter3.textContent = "K";
    }
    if (playWord[3] === "k") {
        level1Letter4.textContent = "K";
    }
    if (playWord[4] === "k") {
        level1Letter5.textContent = "K";
    }
    if (!playWord.includes("k")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activel() {
    l.style.textDecoration = "line-through";
    if (playWord[0] === "l") {
        level1Letter1.textContent = "L";
    }
    if (playWord[1] === "l") {
        level1Letter2.textContent = "L";
    }
    if (playWord[2] === "l") {
        level1Letter3.textContent = "L";
    }
    if (playWord[3] === "l") {
        level1Letter4.textContent = "L";
    }
    if (playWord[4] === "l") {
        level1Letter5.textContent = "L";
    }
    if (!playWord.includes("l")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activem() {
    m.style.textDecoration = "line-through";
    if (playWord[0] === "m") {
        level1Letter1.textContent = "M";
    }
    if (playWord[1] === "m") {
        level1Letter2.textContent = "M";
    }
    if (playWord[2] === "m") {
        level1Letter3.textContent = "M";
    }
    if (playWord[3] === "m") {
        level1Letter4.textContent = "M";
    }
    if (playWord[4] === "m") {
        level1Letter5.textContent = "M";
    }
    if (!playWord.includes("m")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activen() {
    n.style.textDecoration = "line-through";
    if (playWord[0] === "n") {
        level1Letter1.textContent = "N";
    }
    if (playWord[1] === "n") {
        level1Letter2.textContent = "N";
    }
    if (playWord[2] === "n") {
        level1Letter3.textContent = "N";
    }
    if (playWord[3] === "n") {
        level1Letter4.textContent = "N";
    }
    if (playWord[4] === "n") {
        level1Letter5.textContent = "N";
    }
    if (!playWord.includes("n")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();

}
function activeo() {
    o.style.textDecoration = "line-through";
    if (playWord[0] === "o") {
        level1Letter1.textContent = "O";
    }
    if (playWord[1] === "o") {
        level1Letter2.textContent = "O";
    }
    if (playWord[2] === "o") {
        level1Letter3.textContent = "O";
    }
    if (playWord[3] === "o") {
        level1Letter4.textContent = "O";
    }
    if (playWord[4] === "o") {
        level1Letter5.textContent = "O";
    }
    if (!playWord.includes("o")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();


}
function activep() {
    p.style.textDecoration = "line-through";
    if (playWord[0] === "p") {
        level1Letter1.textContent = "P";
    }
    if (playWord[1] === "p") {
        level1Letter2.textContent = "P";
    }
    if (playWord[2] === "p") {
        level1Letter3.textContent = "P";
    }
    if (playWord[3] === "p") {
        level1Letter4.textContent = "P";
    }
    if (playWord[4] === "p") {
        level1Letter5.textContent = "P";
    }
    if (!playWord.includes("p")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activeq() {
    q.style.textDecoration = "line-through";
    if (playWord[0] === "q") {
        level1Letter1.textContent = "Q";
    }
    if (playWord[1] === "q") {
        level1Letter2.textContent = "Q";
    }
    if (playWord[2] === "q") {
        level1Letter3.textContent = "Q";
    }
    if (playWord[3] === "q") {
        level1Letter4.textContent = "Q";
    }
    if (playWord[4] === "q") {
        level1Letter5.textContent = "Q";
    }
    if (!playWord.includes("q")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activer() {
    r.style.textDecoration = "line-through";
    if (playWord[0] === "r") {
        level1Letter1.textContent = "R";
    }
    if (playWord[1] === "r") {
        level1Letter2.textContent = "R";
    }
    if (playWord[2] === "r") {
        level1Letter3.textContent = "R";
    }
    if (playWord[3] === "r") {
        level1Letter4.textContent = "R";
    }
    if (playWord[4] === "r") {
        level1Letter5.textContent = "R";
    }
    if (!playWord.includes("r")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function actives() {
    s.style.textDecoration = "line-through";
    if (playWord[0] === "s") {
        level1Letter1.textContent = "S";
    }
    if (playWord[1] === "s") {
        level1Letter2.textContent = "S";
    }
    if (playWord[2] === "s") {
        level1Letter3.textContent = "S";
    }
    if (playWord[3] === "s") {
        level1Letter4.textContent = "S";
    }
    if (playWord[4] === "s") {
        level1Letter5.textContent = "S";
    }
    if (!playWord.includes("s")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activet() {
    t.style.textDecoration = "line-through";
    if (playWord[0] === "t") {
        level1Letter1.textContent = "T";
    }
    if (playWord[1] === "t") {
        level1Letter2.textContent = "T";
    }
    if (playWord[2] === "t") {
        level1Letter3.textContent = "T";
    }
    if (playWord[3] === "t") {
        level1Letter4.textContent = "T";
    }
    if (playWord[4] === "t") {
        level1Letter5.textContent = "T";
    }
    if (!playWord.includes("t")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activeu() {
    u.style.textDecoration = "line-through";
    if (playWord[0] === "u") {
        level1Letter1.textContent = "U";
    }
    if (playWord[1] === "u") {
        level1Letter2.textContent = "U";
    }
    if (playWord[2] === "u") {
        level1Letter3.textContent = "U";
    }
    if (playWord[3] === "u") {
        level1Letter4.textContent = "U";
    }
    if (playWord[4] === "u") {
        level1Letter5.textContent = "U";
    }
    if (!playWord.includes("u")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}
function activev() {
    v.style.textDecoration = "line-through";
    if (playWord[0] === "v") {
        level1Letter1.textContent = "V";
    }
    if (playWord[1] === "v") {
        level1Letter2.textContent = "V";
    }
    if (playWord[2] === "v") {
        level1Letter3.textContent = "V";
    }
    if (playWord[3] === "v") {
        level1Letter4.textContent = "V";
    }
    if (playWord[4] === "v") {
        level1Letter5.textContent = "V";
    }
    if (!playWord.includes("v")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();

}

function activew() {
    w.style.textDecoration = "line-through";
    if (playWord[0] === "w") {
        level1Letter1.textContent = "W";
    }
    if (playWord[1] === "w") {
        level1Letter2.textContent = "W";
    }
    if (playWord[2] === "w") {
        level1Letter3.textContent = "W";
    }
    if (playWord[3] === "w") {
        level1Letter4.textContent = "W";
    }
    if (playWord[4] === "w") {
        level1Letter5.textContent = "W";
    }
    if (!playWord.includes("w")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
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
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();

}
function activey() {
    y.style.textDecoration = "line-through";
    if (playWord[0] === "y") {
        level1Letter1.textContent = "Y";
    }
    if (playWord[1] === "y") {
        level1Letter2.textContent = "Y";
    }
    if (playWord[2] === "y") {
        level1Letter3.textContent = "Y";
    }
    if (playWord[3] === "y") {
        level1Letter4.textContent = "Y";
    }
    if (playWord[4] === "y") {
        level1Letter5.textContent = "Y";
    }
    if (!playWord.includes("y")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();

}
function activez() {
    z.style.textDecoration = "line-through";
    if (playWord[0] === "z") {
        level1Letter1.textContent = "Z";
    }
    if (playWord[1] === "z") {
        level1Letter2.textContent = "Z";
    }
    if (playWord[2] === "z") {
        level1Letter3.textContent = "Z";
    }
    if (playWord[3] === "z") {
        level1Letter4.textContent = "Z";
    }
    if (playWord[4] === "z") {
        level1Letter5.textContent = "Z";
    }
    if (!playWord.includes("z")) {
        guess.textContent = "Please try again!";
    }
    setTimeout(function () { guess.textContent = "" }, 3000);
    numberTries++;
    tries.textContent = `Tries: ${6 - numberTries}`;
    displayHangman();
    winnerLoser();
}

function displayHangman() {
    switch (numberTries === 1 && guess.textContent === "Please try again!") {
        case '1': hangman.setAttribute('src', './images/hangmanhead');
        case '2': hangman.setAttribute('src', './images/hangmantorso');
        case '3': hangman.setAttribute('src', './images/hangmanLarm');
        case '4': hangman.setAttribute('src', './images/hangmanRarm');
        case '5': hangman.setAttribute('src', './images/hangmanLleg');
        case '6': hangman.setAttribute('src', './images/hangmanRleg');
    };
 }



function winnerLoser() {
    if ((numberTries <= 6) && (level1Letter1.textContent === playWord[0].toUpperCase()) && (level1Letter2.textContent === playWord[1].toUpperCase()) && (level1Letter3.textContent === playWord[2].toUpperCase())
        && (level1Letter4.textContent === playWord[3].toUpperCase()) && (level1Letter5.textContent === playWord[4].toUpperCase())) {
        winner.textContent = "WINNER!!! YOU WIN HANGMAN!";
        moveAnnouncement();
    } else if ((numberTries === 6) && ((level1Letter1.textContent != playWord[0] || level1Letter2.textContent != playWord[1] || level1Letter3.textContent != playWord[2])
        || level1Letter4.textContent != playWord[3] || level1Letter5.textContent != playWord[4])) {
        winner.textContent = "SORRY, YOU ARE OUT OF GUESSES! YOU ARE HUNG!";
        winner.style.color = "green";
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













