window.onload = alert(`Hello, Player! Let's play Hangman! Press the "Play Hangman" button to begin.`);


const LEVEL1 = ["acorn", "after", "agile", "aisle",  
                "basin", "bacon", "banjo", "berth", "beast", "binge", "bland", "bonus", "brawn", "bride", 
                "caste", "caulk", "chalk", "chaos", "claim", "crawl", "coven", 
                "datum", "death", "debit", "depot", "diner", "dirty", "duvet", "dwarf", 
                "ebony", "edict", "empty", "endow", "erupt",  
                "fable", "facet", "fancy", "feign", "felon", "flare", "flash", "fudge", 
                "gamut", "gawky", "given", "grate", "grift",  
                "habit", "hands", "hazel", "heavy", "hiker", "hoard", "human", "hyena", 
                "ideal", "image", "imply", "infer", "inlet", "irony", "islet", "ivory", 
                "jaunt", "joint", "joker", "joust", "judge", "juice", "jumps", 
                "karma", "knead", "knife",  
                "labor", "laser", "laugh", "learn", "lemon", "lurch", 
                "manor", "match", "melon", "might", "minor", "moist", "molar", "moral", "mouth", 
                "nadir", "night", "noble", "novel", "nurse", "nymph", 
                "ocean", "often", "olden", "omega", "organ", "overt",  
                "panel", "pearl", "phone", "plain", "plane", "plead", "poach", "purge", 
                "quack", "quail", "qualm", "quest", "quiet", "quilt", "quirk", "quote", 
                "radio", "ratio", "ready", "reign", "rhyme", "ridge", "round", , 
                "sable", "satin", "scale", "scope", "shawl", "sling", "snore", 
                "talon", "tiger", "toque", "toxic", "tweak", "twine", 
                "ulcer", "under", "unite", "upend", "upset", "urban", 
                "vague", "value", "vapor", "vicar", "virus", "visor", "vixen", "voice", "vowel", 
                "wagon", "waltz", "water", "weird", "wheat", "witch", "world", "worse", "wrath", 
                "xylem",  
                "yards", "yearn", "yeast", "yield", "yikes", "yodel", "yogis", "youth", 
                "zebra", "zesty", "zingy", "zones"];

const LEVEL2 = ["abound", "action", "actual", "adjust", "adrift", "anchor",
                "barley", "become", "behold", "bestow", "broken", "budget",
                "cajole", "cardio", "chisel",   
                "dainty", "design", "diatom", "digest", "donate", "dorsal", "dragon", 
                "editor", "enigma",
                "fabric", "falcon", "faucet", "fiasco", 
                "gained", "glance", "golden", "gravel", 
                "hacker", "hairdo", "halter", "hanger", "herald", "hernia", "hockey", 
                "import", "induct", "inform", "insect",  
                "jacket", "jigsaw", "jostle", "jovial", "jumble", "junior", "jungle", "junket",
                "kernel", "keypad", "kibosh", "kidnap", "kismet",
                "lawyer", "liquor", "lumbar", "luster",
                "magnet", "makeup", "malice", "mature", "median", "mirage", 
                "napkin", "nebula", "nectar", "number", "nutmeg",
                "object", "oblige", "octane", "ocular", "opaque", "orange", "orphan", "oxygen", "oyster",
                "pantry", "pastel", "permit", "placid", "postal", 
                "quaint", "quartz", "queasy", "quench", "quince", "quinoa", "quiche", "quirky", "quiver", 
                "ramble", "rancid", "random",  
                "sachet", "sacred", "sailor", "saline", "search", "shrunk", "silver", 
                "tackle", "tailor", "target", "teacup", "tongue", "triple",
                "umpire", "unable", "unwrap", "upbeat", "uphold", "uptake", "urgent", "utopia", 
                "vanish", "vector", "vendor", "verbal", "virtue", "visual", "vortex",
                "waiter", "walker", "wanted", "warmth", "watery", "weight", "widget", "wisdom", 
                "yarrow", "yellow", "yogurt", "yonder", 
                "zealot", "zodiac", "zombie"];

const LEVEL3 = ["abdomen", "abolish", "abscond", "acquire", "acronym", 				
                "acutely", "adoring", "advisor", "aerobic", "albumin",
                "backlog", "balcony", "banquet", "baptism", "bedrock",
                "cabinet", "caliper", "calorie", "central", "chasten",
                "dancing", "darling", "decimal", "dietary", "diluent",
                "earplug", "elastic", "encrypt", "envious", "epsilon",
                "factory", "failure", "fireman", "flicker", "florist",
                "gambler", "gateway", "gelatin", "glacier", "gourmet", 
                "haircut", "harmful", "helpful", "heroism", "history",
                "impacts", "improve", "include", "inflate", "isolate", 
                "janitor", "jasmine", "jealous", "journal", "jukebox",
                "ketchup", "keyword", "kingdom", "kitchen", "kolache",
                "lacquer", "lactose", "lengthy", "lobster", "lunatic", 
                "machine", "magnify", "medical", "melodic", "mineral",
                "naughty", "network", "neutral", "nomadic", "numeral",
                "obelisk", "obscure", "omnibus", "optimal", "overlap",
                "padlock", "painful", "painter", "panther", "parking", 
                "paystub", "petrify", "picture", "publish", "puritan", 
                "quaking", "qualify", "quality", "quicker", "quilted", 
                "racquet", "raiment", "realign", "reality", "recital",
                "sandbox", "sardine", "satchel", "slanted", "squalor",
                "tadpole", "tedious", "tendril", "thyroid", "toenail",
                "uncover", "unheard", "uniform", "upstage", "utensil",
                "vampire", "variety", "version", "vibrate", "victory", 
                "webinar", "whimper", "whistle", "wipeout", "wrinkle",
                "wrought", 
                "younger", 
                "zealous", "zestful", "zygotes"];
                    
const level= document.getElementById('level');
const letter = document.getElementsByTagName('span');
const level1Letter1 = letter[0];
const level1Letter2 = letter[1];
const level1Letter3 = letter[2];
const level1Letter4 = letter[3];
const level1Letter5 = letter[4];
const level1Letter6 = letter[5];


let playHangman = [];
const playWordlvl1 = LEVEL1[Math.floor(Math.random() * LEVEL1.length)];
const playWordlvl2 = LEVEL2[Math.floor(Math.random() * LEVEL2.length)];
const playWordlvl3 = LEVEL3[Math.floor(Math.random() * LEVEL3.length)];


const winner = document.getElementById('winner');
const guess = document.getElementById('guessAgain');
const tries = document.getElementById('numberTries');
const hangman = document.getElementById('Hangman');
const nextLevel = document.getElementById('nextLevel');
const reset = document.getElementById('reset');
const resetSpan = document.getElementById('resetSpan');

const pickLettersRow1 = document.getElementById('lettersRow1');
const pickLettersRow2 = document.getElementById('lettersRow2');
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
    console.log(playWordlvl1);
    if (playHangman.includes(playWordlvl1)) {
        guess.textContent = `If the letters below have turned blue, a word has
        been chosen. Pick a letter to begin!`;
    }
    pickLettersRow1.style.color = "blue";
    pickLettersRow2.style.color = "blue";
    activateletters();
}

function chooseWordLevel2() {
    playLevel.textContent = 'Level 2 - 6 Letter Words';
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
    
    playHangman.pop();
    playHangman.push(playWordlvl2);
    console.log(playWordlvl2);
    pickLettersRow1.style.color = "darkblue";
    pickLettersRow1.style.fontWeight = "bold";
    pickLettersRow2.style.color = "darkblue";
    pickLettersRow2.style.fontWeight = "bold";
    activateletters();
    const addSquarelvl2 = document.createElement('span');
    addSquarelvl2.setAttribute('id', 'L6');
    level1Letter5.insertAdjacentElement('afterend', addSquarelvl2);
    numberTries = 0;
    tryAgain = 0;
    tries.textContent = `# of Tries: ${7}`;
}

function chooseWordLevel3() {
    playLevel.textContent = 'Level 3 - 7 Letter Words';
    level1Letter1.textContent = '';
    level1Letter2.textContent = '';
    level1Letter3.textContent = '';
    level1Letter4.textContent = '';
    level1Letter5.textContent = '';
    level1Letter6.textContent = '';
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
    
    playHangman.pop();
    playHangman.push(playWordlvl3);
    console.log(playWordlvl3);
    pickLettersRow1.style.color = "darkblue";
    pickLettersRow1.style.fontWeight = "bold";
    pickLettersRow2.style.color = "darkblue";
    pickLettersRow2.style.fontWeight = "bold";
    activateletters();
    const addSquarelvl2 = document.createElement('span');
    addSquarelvl2.setAttribute('id', 'L6');
    level1Letter5.insertAdjacentElement('afterend', addSquarelvl2);
    const addSquarelvl3 = document.createElement('span');
    addSquarelvl3.setAttribute('id', 'L7');
    level1Letter6.insertAdjacentElement('afterend', addSquarelvl3);
    numberTries = 0;
    tryAgain = 0;
    tries.textContent = `# of Tries: ${8}`;
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
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "a") {
            level1Letter1.textContent = "A"; 
        }
        if (playWordlvl1.charAt(1) === "a") {
            level1Letter2.textContent = "A"; 
        }
        if (playWordlvl1.charAt(2) === "a") {
            level1Letter3.textContent = "A"; 
        }
        if (playWordlvl1.charAt(3) === "a") {
            level1Letter4.textContent = "A"; 
        }
        if (playWordlvl1.charAt(4) === "a") {
            level1Letter5.textContent = "A"; 
        }
        if (!playWordlvl1.includes("a")) { 
            guess.textContent = "Please try again!";
            tryAgain++;
        }     
        setTimeout(function() {guess.textContent = ""}, 3000);
        if ((playHangman.includes(playWordlvl1))) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "a") {
            level1Letter1.textContent = "A"; 
        }
        if (playWordlvl2.charAt(1) === "a") {
            level1Letter2.textContent = "A"; 
        }
        if (playWordlvl2.charAt(2) === "a") {
            level1Letter3.textContent = "A"; 
        }
        if (playWordlvl2.charAt(3) === "a") {
            level1Letter4.textContent = "A"; 
        }
        if (playWordlvl2.charAt(4) === "a") {
            level1Letter5.textContent = "A"; 
        }
        if (playWordlvl2.charAt(5) === "a") {
            level1Letter6.textContent = "A"; 
        }
        if (!playWordlvl2.includes("a")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "a") {
            level1Letter1.textContent = "A"; 
        }
        if (playWordlvl3.charAt(1) === "a") {
            level1Letter2.textContent = "A"; 
        }
        if (playWordlvl3.charAt(2) === "a") {
            level1Letter3.textContent = "A"; 
        }
        if (playWordlvl3.charAt(3) === "a") {
            level1Letter4.textContent = "A"; 
        }
        if (playWordlvl3.charAt(4) === "a") {
            level1Letter5.textContent = "A"; 
        }
        if (playWordlvl3.charAt(5) === "a") {
            level1Letter6.textContent = "A"; 
        }
        if (playWordlvl3.charAt(6) === "a") {
            level1Letter7.textContent = "A"; 
        }
        if (!playWordlvl3.includes("a")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }     
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();    
        winnerLoserLvl3();
    }
}

function activeb() {
    b.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "b") {
            level1Letter1.textContent = "B"; 
        }
        if (playWordlvl1.charAt(1) === "b") {
            level1Letter2.textContent = "B"; 
        }
        if (playWordlvl1.charAt(2) === "b") {
            level1Letter3.textContent = "B"; 
        }
        if (playWordlvl1.charAt(3) === "b") {
            level1Letter4.textContent = "B"; 
        }
        if (playWordlvl1.charAt(4) === "b") {
            level1Letter5.textContent = "B"; 
        }
        if (!playWordlvl1.includes("b")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "b") {
            level1Letter1.textContent = "B"; 
        }
        if (playWordlvl2.charAt(1) === "b") {
            level1Letter2.textContent = "B"; 
        }
        if (playWordlvl2.charAt(2) === "b") {
            level1Letter3.textContent = "B"; 
        }
        if (playWordlvl2.charAt(3) === "b") {
            level1Letter4.textContent = "B"; 
        }
        if (playWordlvl2.charAt(4) === "b") {
            level1Letter5.textContent = "B"; 
        }
        if (playWordlvl2.charAt(5) === "b") {
            level1Letter6.textContent = "B"; 
        }
        if (!playWordlvl2.includes("b")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "b") {
            level1Letter1.textContent = "B"; 
        }
        if (playWordlvl3.charAt(1) === "b") {
            level1Letter2.textContent = "B"; 
        }
        if (playWordlvl3.charAt(2) === "b") {
            level1Letter3.textContent = "B"; 
        }
        if (playWordlvl3.charAt(3) === "b") {
            level1Letter4.textContent = "B"; 
        }
        if (playWordlvl3.charAt(4) === "b") {
            level1Letter5.textContent = "B"; 
        }
        if (playWordlvl3.charAt(5) === "b") {
            level1Letter6.textContent = "B"; 
        }
        if (playWordlvl3.charAt(6) === "b") {
            level1Letter7.textContent = "B"; 
        }
        if (!playWordlvl3.includes("b")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activec() {
    c.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "c") {
            level1Letter1.textContent = "C"; 
        }
        if (playWordlvl1.charAt(1) === "c") {
            level1Letter2.textContent = "C"; 
        }
        if (playWordlvl1.charAt(2) === "c") {
            level1Letter3.textContent = "C"; 
        }
        if (playWordlvl1.charAt(3) === "c") {
            level1Letter4.textContent = "C"; 
        }
        if (playWordlvl1.charAt(4) === "c") {
            level1Letter5.textContent = "C"; 
        }
        if (!playWordlvl1.includes("c")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        } 
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "c") {
            level1Letter1.textContent = "C"; 
        }
        if (playWordlvl2.charAt(1) === "c") {
            level1Letter2.textContent = "C"; 
        }
        if (playWordlvl2.charAt(2) === "c") {
            level1Letter3.textContent = "C"; 
        }
        if (playWordlvl2.charAt(3) === "c") {
            level1Letter4.textContent = "C"; 
        }
        if (playWordlvl2.charAt(4) === "c") {
            level1Letter5.textContent = "C"; 
        }  
        if (playWordlvl2.charAt(5) === "c") {
            level1Letter6.textContent = "C"; 
        }
        if (!playWordlvl2.includes("c")) {
            guess.textContent = "Please try again!";
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "c") {
            level1Letter1.textContent = "C"; 
        }
        if (playWordlvl3.charAt(1) === "c") {
            level1Letter2.textContent = "C"; 
        }
        if (playWordlvl3.charAt(2) === "c") {
            level1Letter3.textContent = "C"; 
        }
        if (playWordlvl3.charAt(3) === "c") {
            level1Letter4.textContent = "C"; 
        }
        if (playWordlvl3.charAt(4) === "c") {
            level1Letter5.textContent = "C"; 
        }
        if (playWordlvl3.charAt(5) === "c") {
            level1Letter6.textContent = "C"; 
        }
        if (playWordlvl3.charAt(6) === "c") {
            level1Letter7.textContent = "C"; 
        }
        if (!playWordlvl3.includes("c")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function actived() {
    d.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "d") {
            level1Letter1.textContent = "D"; 
        }
        if (playWordlvl1.charAt(1) === "d") {
            level1Letter2.textContent = "D"; 
        }
        if (playWordlvl1.charAt(2) === "d") {
            level1Letter3.textContent = "D"; 
        }
        if (playWordlvl1.charAt(3) === "d") {
            level1Letter4.textContent = "D"; 
        }
        if (playWordlvl1.charAt(4) === "d") {
            level1Letter5.textContent = "D"; 
        }    
        if (!playWordlvl1.includes("d")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "d") {
            level1Letter1.textContent = "D"; 
        }
        if (playWordlvl2.charAt(1) === "d") {
            level1Letter2.textContent = "D"; 
        }
        if (playWordlvl2.charAt(2) === "d") {
            level1Letter3.textContent = "D"; 
        }
        if (playWordlvl2.charAt(3) === "d") {
            level1Letter4.textContent = "D"; 
        }
        if (playWordlvl2.charAt(4) === "d") {
            level1Letter5.textContent = "D"; 
        }
        if (playWordlvl2.charAt(5) === "d") {
            level1Letter6.textContent = "D"; 
        }
        if (!playWordlvl2.includes("d")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "d") {
            level1Letter1.textContent = "D"; 
        }
        if (playWordlvl3.charAt(1) === "d") {
            level1Letter2.textContent = "D"; 
        }
        if (playWordlvl3.charAt(2) === "d") {
            level1Letter3.textContent = "D"; 
        }
        if (playWordlvl3.charAt(3) === "d") {
            level1Letter4.textContent = "D"; 
        }
        if (playWordlvl3.charAt(4) === "d") {
            level1Letter5.textContent = "D"; 
        }
        if (playWordlvl3.charAt(5) === "d") {
            level1Letter6.textContent = "D"; 
        }
        if (playWordlvl3.charAt(6) === "d") {
            level1Letter7.textContent = "D"; 
        }
        if (!playWordlvl3.includes("d")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activee() {
    e.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "e") {
            level1Letter1.textContent = "E"; 
        }
        if (playWordlvl1.charAt(1) === "e") {
            level1Letter2.textContent = "E"; 
        }
        if (playWordlvl1.charAt(2) === "e") {
            level1Letter3.textContent = "E"; 
        }
        if (playWordlvl1.charAt(3) === "e") {
            level1Letter4.textContent = "E"; 
        }
        if (playWordlvl1.charAt(4) === "e") {
            level1Letter5.textContent = "E"; 
        }
        if (!playWordlvl1.includes("e")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
    
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "e") {
            level1Letter1.textContent = "E"; 
        }
        if (playWordlvl2.charAt(1) === "e") {
            level1Letter2.textContent = "E"; 
        }
        if (playWordlvl2.charAt(2) === "e") {
            level1Letter3.textContent = "E"; 
        }
        if (playWordlvl2.charAt(3) === "e") {
            level1Letter4.textContent = "E"; 
        }
        if (playWordlvl2.charAt(4) === "e") {
            level1Letter5.textContent = "E"; 
        }
        if (playWordlvl2.charAt(5) === "e") {
            level1Letter6.textContent = "E"; 
        }
        if (!playWordlvl2.includes("e")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "e") {
            level1Letter1.textContent = "E"; 
        }
        if (playWordlvl3.charAt(1) === "e") {
            level1Letter2.textContent = "E"; 
        }
        if (playWordlvl3.charAt(2) === "e") {
            level1Letter3.textContent = "E"; 
        }
        if (playWordlvl3.charAt(3) === "e") {
            level1Letter4.textContent = "E"; 
        }
        if (playWordlvl3.charAt(4) === "e") {
            level1Letter5.textContent = "E"; 
        }
        if (playWordlvl3.charAt(5) === "e") {
            level1Letter6.textContent = "E"; 
        }
        if (playWordlvl3.charAt(6) === "e") {
            level1Letter7.textContent = "E"; 
        }
        if (!playWordlvl3.includes("e")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activef() {
    f.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "f") {
            level1Letter1.textContent = "F"; 
        }
        if (playWordlvl1.charAt(1) === "f") {
            level1Letter2.textContent = "F"; 
        }
        if (playWordlvl1.charAt(2) === "f") {
            level1Letter3.textContent = "F"; 
        }
        if (playWordlvl1.charAt(3) === "f") {
            level1Letter4.textContent = "F"; 
        }
        if (playWordlvl1.charAt(4) === "f") {
            level1Letter5.textContent = "F"; 
        }
        if (!playWordlvl1.includes("f")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "f") {
            level1Letter1.textContent = "F"; 
        }
        if (playWordlvl2.charAt(1) === "f") {
            level1Letter2.textContent = "F"; 
        }
        if (playWordlvl2.charAt(2) === "f") {
            level1Letter3.textContent = "F"; 
        }
        if (playWordlvl2.charAt(3) === "f") {
            level1Letter4.textContent = "F"; 
        }
        if (playWordlvl2.charAt(4) === "f") {
            level1Letter5.textContent = "F"; 
        }
        if (playWordlvl2.charAt(5) === "f") {
            level1Letter6.textContent = "F"; 
        }
        if (!playWordlvl2.includes("f")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        } 
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "f") {
            level1Letter1.textContent = "F"; 
        }
        if (playWordlvl3.charAt(1) === "f") {
            level1Letter2.textContent = "F"; 
        }
        if (playWordlvl3.charAt(2) === "f") {
            level1Letter3.textContent = "F"; 
        }
        if (playWordlvl3.charAt(3) === "f") {
            level1Letter4.textContent = "F"; 
        }
        if (playWordlvl3.charAt(4) === "f") {
            level1Letter5.textContent = "F"; 
        }
        if (playWordlvl3.charAt(5) === "f") {
            level1Letter6.textContent = "F"; 
        }
        if (playWordlvl3.charAt(6) === "f") {
            level1Letter7.textContent = "F"; 
        }
        if (!playWordlvl3.includes("f")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;   
        }
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }   
}

function activeg() {
    g.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "g") {
            level1Letter1.textContent = "G"; 
        }
        if (playWordlvl1.charAt(1) === "g") {
            level1Letter2.textContent = "G"; 
        }
        if (playWordlvl1.charAt(2) === "g") {
            level1Letter3.textContent = "G"; 
        }
        if (playWordlvl1.charAt(3) === "g") {
            level1Letter4.textContent = "G"; 
        }
        if (playWordlvl1.charAt(4) === "g") {
            level1Letter5.textContent = "G"; 
        }
        if (!playWordlvl1.includes("g")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "g") {
            level1Letter1.textContent = "G"; 
        }
        if (playWordlvl2.charAt(1) === "g") {
            level1Letter2.textContent = "G"; 
        }
        if (playWordlvl2.charAt(2) === "g") {
            level1Letter3.textContent = "G"; 
        }
        if (playWordlvl2.charAt(3) === "g") {
            level1Letter4.textContent = "G"; 
        }
        if (playWordlvl2.charAt(4) === "g") {
            level1Letter5.textContent = "G"; 
        }
        if (playWordlvl2.charAt(5) === "g") {
            level1Letter6.textContent = "G"; 
        }
        if (!playWordlvl2.includes("g")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "g") {
            level1Letter1.textContent = "G"; 
        }
        if (playWordlvl3.charAt(1) === "g") {
            level1Letter2.textContent = "G"; 
        }
        if (playWordlvl3.charAt(2) === "g") {
            level1Letter3.textContent = "G"; 
        }
        if (playWordlvl3.charAt(3) === "g") {
            level1Letter4.textContent = "G"; 
        }
        if (playWordlvl3.charAt(4) === "g") {
            level1Letter5.textContent = "G"; 
        }
        if (playWordlvl3.charAt(5) === "g") {
            level1Letter6.textContent = "G"; 
        }
        if (playWordlvl3.charAt(6) === "g") {
            level1Letter7.textContent = "G"; 
        }
        if (!playWordlvl3.includes("g")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;   
        }
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activeh() {
    h.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "h") {
            level1Letter1.textContent = "H"; 
        }
        if (playWordlvl1.charAt(1) === "h") {
            level1Letter2.textContent = "H"; 
        }
        if (playWordlvl1.charAt(2) === "h") {
            level1Letter3.textContent = "H"; 
        }
        if (playWordlvl1.charAt(3) === "h") {
            level1Letter4.textContent = "H"; 
        }
        if (playWordlvl1.charAt(4) === "h") {
            level1Letter5.textContent = "H"; 
        }
        if (!playWordlvl1.includes("h")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
    
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "h") {
            level1Letter1.textContent = "H"; 
        }
        if (playWordlvl2.charAt(1) === "h") {
            level1Letter2.textContent = "H"; 
        }
        if (playWordlvl2.charAt(2) === "h") {
            level1Letter3.textContent = "H"; 
        }
        if (playWordlvl2.charAt(3) === "h") {
            level1Letter4.textContent = "H"; 
        }
        if (playWordlvl2.charAt(4) === "h") {
            level1Letter5.textContent = "H"; 
        }
        if (playWordlvl2.charAt(5) === "h") {
            level1Letter6.textContent = "H"; 
        }
        if (!playWordlvl2.includes("h")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)){ 
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "h") {
            level1Letter1.textContent = "H"; 
        }
        if (playWordlvl3.charAt(1) === "h") {
            level1Letter2.textContent = "H"; 
        }
        if (playWordlvl3.charAt(2) === "h") {
            level1Letter3.textContent = "H"; 
        }
        if (playWordlvl3.charAt(3) === "h") {
            level1Letter4.textContent = "H"; 
        }
        if (playWordlvl3.charAt(4) === "h") {
            level1Letter5.textContent = "H"; 
        }
        if (playWordlvl3.charAt(5) === "h") {
            level1Letter6.textContent = "H"; 
        }
        if (playWordlvl3.charAt(6) === "h") {
            level1Letter7.textContent = "H"; 
        }
        if (!playWordlvl3.includes("h")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;    
        }
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activei() {
    i.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "i") {
            level1Letter1.textContent = "I"; 
        }
        if (playWordlvl1.charAt(1) === "i") {
            level1Letter2.textContent = "I"; 
        }
        if (playWordlvl1.charAt(2) === "i") {
            level1Letter3.textContent = "I"; 
        }
        if (playWordlvl1.charAt(3) === "i") {
            level1Letter4.textContent = "I"; 
        }
        if (playWordlvl1.charAt(4) === "i") {
            level1Letter5.textContent = "I"; 
        }
        if (!playWordlvl1.includes("i")) {
            guess.textContent = "Please try again!";  
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "i") {
            level1Letter2.textContent = "I"; 
        }
        if (playWordlvl2.charAt(1) === "i") {
            level1Letter2.textContent = "I"; 
        }
        if (playWordlvl2.charAt(2) === "i") {
            level1Letter3.textContent = "I"; 
        }
        if (playWordlvl2.charAt(3) === "i") {
            level1Letter4.textContent = "I"; 
        }
        if (playWordlvl2.charAt(4) === "i") {
            level1Letter5.textContent = "I"; 
        }
        if (playWordlvl2.charAt(5) === "i") {
            level1Letter6.textContent = "I"; 
        }
        if (!playWordlvl2.includes("i")) {
            guess.textContent = "Please try again!";  
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "i") {
            level1Letter1.textContent = "I"; 
        }
        if (playWordlvl3.charAt(1) === "i") {
            level1Letter2.textContent = "I"; 
        }
        if (playWordlvl3.charAt(2) === "i") {
            level1Letter3.textContent = "I"; 
        }
        if (playWordlvl3.charAt(3) === "i") {
            level1Letter4.textContent = "I"; 
        }
        if (playWordlvl3.charAt(4) === "i") {
            level1Letter5.textContent = "I"; 
        }
        if (playWordlvl3.charAt(5) === "i") {
            level1Letter6.textContent = "I"; 
        }
        if (playWordlvl3.charAt(6) === "i") {
            level1Letter7.textContent = "I"; 
        }
        if (!playWordlvl3.includes("i")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;   
        }
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activej() {
    j.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "j") {
            level1Letter1.textContent = "J"; 
        }
        if (playWordlvl1.charAt(1) === "j") {
            level1Letter2.textContent = "J"; 
        }
        if (playWordlvl1.charAt(2) === "j") {
            level1Letter3.textContent = "J"; 
        }
        if (playWordlvl1.charAt(3) === "j") {
            level1Letter4.textContent = "J"; 
        }
        if (playWordlvl1.charAt(4) === "j") {
            level1Letter5.textContent = "J"; 
        }
        if (!playWordlvl1.includes("j")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "j") {
            level1Letter1.textContent = "J"; 
        }
        if (playWordlvl2.charAt(1) === "j") {
            level1Letter2.textContent = "J"; 
        }
        if (playWordlvl2.charAt(2) === "j") {
            level1Letter3.textContent = "J"; 
        }
        if (playWordlvl2.charAt(3) === "j") {
            level1Letter4.textContent = "J"; 
        }
        if (playWordlvl2.charAt(4) === "j") {
            level1Letter5.textContent = "J"; 
        }
        if (playWordlvl2.charAt(5) === "j") {
            level1Letter6.textContent = "J"; 
        }
        if (!playWordlvl2.includes("j")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "j") {
            level1Letter1.textContent = "J"; 
        }
        if (playWordlvl3.charAt(1) === "j") {
            level1Letter2.textContent = "J"; 
        }
        if (playWordlvl3.charAt(2) === "j") {
            level1Letter3.textContent = "J"; 
        }
        if (playWordlvl3.charAt(3) === "j") {
            level1Letter4.textContent = "J"; 
        }
        if (playWordlvl3.charAt(4) === "j") {
            level1Letter5.textContent = "J"; 
        }
        if (playWordlvl3.charAt(5) === "j") {
            level1Letter6.textContent = "J"; 
        }
        if (playWordlvl3.charAt(6) === "j") {
            level1Letter7.textContent = "J"; 
        }
        if (!playWordlvl3.includes("j")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activek() {
    k.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "k") {
            level1Letter1.textContent = "K"; 
        }
        if (playWordlvl1.charAt(1) === "k") {
            level1Letter2.textContent = "K"; 
        }
        if (playWordlvl1.charAt(2) === "k") {
            level1Letter3.textContent = "K"; 
        }
        if (playWordlvl1.charAt(3) === "k") {
            level1Letter4.textContent = "K"; 
        }
        if (playWordlvl1.charAt(4) === "k") {
            level1Letter5.textContent = "K"; 
        }
        if (!playWordlvl1.includes("k")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "k") {
            level1Letter1.textContent = "K"; 
        }
        if (playWordlvl2.charAt(1) === "k") {
            level1Letter2.textContent = "K"; 
        }
        if (playWordlvl2.charAt(2) === "k") {
            level1Letter3.textContent = "K"; 
        }
        if (playWordlvl2.charAt(3) === "k") {
            level1Letter4.textContent = "K"; 
        }
        if (playWordlvl2.charAt(4) === "k") {
            level1Letter5.textContent = "K"; 
        }
        if (playWordlvl2.charAt(5) === "k") {
            level1Letter6.textContent = "K"; 
        }
        if (!playWordlvl2.includes("k")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
     }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "k") {
            level1Letter1.textContent = "K"; 
        }
        if (playWordlvl3.charAt(1) === "k") {
            level1Letter2.textContent = "K"; 
        }
        if (playWordlvl3.charAt(2) === "k") {
            level1Letter3.textContent = "K"; 
        }
        if (playWordlvl3.charAt(3) === "k") {
            level1Letter4.textContent = "K"; 
        }
        if (playWordlvl3.charAt(4) === "k") {
            level1Letter5.textContent = "K"; 
        }
        if (playWordlvl3.charAt(5) === "k") {
            level1Letter6.textContent = "K"; 
        }
        if (playWordlvl3.charAt(6) === "k") {
            level1Letter7.textContent = "K"; 
        }
        if (!playWordlvl3.includes("k")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activel() {
    l.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "l") {
            level1Letter1.textContent = "L"; 
        }
        if (playWordlvl1.charAt(1) === "l") {
            level1Letter2.textContent = "L"; 
        }
        if (playWordlvl1.charAt(2) === "l") {
            level1Letter3.textContent = "L"; 
        }
        if (playWordlvl1.charAt(3) === "l") {
            level1Letter4.textContent = "L"; 
        }
        if (playWordlvl1.charAt(4) === "l") {
            level1Letter5.textContent = "L"; 
        }
        if (!playWordlvl1.includes("l")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
    
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "l") {
            level1Letter1.textContent = "L"; 
        }
        if (playWordlvl2.charAt(1) === "l") {
            level1Letter2.textContent = "L"; 
        }
        if (playWordlvl2.charAt(2) === "l") {
            level1Letter3.textContent = "L"; 
        }
        if (playWordlvl2.charAt(3) === "l") {
            level1Letter4.textContent = "L"; 
        }
        if (playWordlvl2.charAt(4) === "l") {
            level1Letter5.textContent = "L"; 
        }
        if (playWordlvl2.charAt(5) === "l") {
            level1Letter6.textContent = "L"; 
        }
        if (!playWordlvl2.includes("l")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "l") {
            level1Letter1.textContent = "L"; 
        }
        if (playWordlvl3.charAt(1) === "l") {
            level1Letter2.textContent = "L"; 
        }
        if (playWordlvl3.charAt(2) === "l") {
            level1Letter3.textContent = "L"; 
        }
        if (playWordlvl3.charAt(3) === "l") {
            level1Letter4.textContent = "L"; 
        }
        if (playWordlvl3.charAt(4) === "l") {
            level1Letter5.textContent = "L"; 
        }
        if (playWordlvl3.charAt(5) === "l") {
            level1Letter6.textContent = "L"; 
        }
        if (playWordlvl3.charAt(6) === "l") {
            level1Letter7.textContent = "L"; 
        }
        if (!playWordlvl3.includes("l")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activem() {
    m.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "m") {
            level1Letter1.textContent = "M"; 
        }
        if (playWordlvl1.charAt(1) === "m") {
            level1Letter2.textContent = "M"; 
        }
        if (playWordlvl1.charAt(2) === "m") {
            level1Letter3.textContent = "M"; 
        }
        if (playWordlvl1.charAt(3) === "m") {
            level1Letter4.textContent = "M"; 
        }
        if (playWordlvl1.charAt(4) === "m") {
            level1Letter5.textContent = "M"; 
        }
        if (!playWordlvl1.includes("m")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "m") {
            level1Letter1.textContent = "M"; 
        }
        if (playWordlvl2.charAt(1) === "m") {
            level1Letter2.textContent = "M"; 
        }
        if (playWordlvl2.charAt(2) === "m") {
            level1Letter3.textContent = "M"; 
        }
        if (playWordlvl2.charAt(3) === "m") {
            level1Letter4.textContent = "M"; 
        }
        if (playWordlvl2.charAt(4) === "m") {
            level1Letter5.textContent = "M"; 
        }
        if (playWordlvl2.charAt(5) === "m") {
            level1Letter6.textContent = "M"; 
        }
        if (!playWordlvl2.includes("m")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl2)) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${7 - numberTries}`;
    displayHangman();
    winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "m") {
            level1Letter1.textContent = "M"; 
        }
        if (playWordlvl3.charAt(1) === "m") {
            level1Letter2.textContent = "M"; 
        }
        if (playWordlvl3.charAt(2) === "m") {
            level1Letter3.textContent = "M"; 
        }
        if (playWordlvl3.charAt(3) === "m") {
            level1Letter4.textContent = "M"; 
        }
        if (playWordlvl3.charAt(4) === "m") {
            level1Letter5.textContent = "M"; 
        }
        if (playWordlvl3.charAt(5) === "m") {
            level1Letter6.textContent = "M"; 
        }
        if (playWordlvl3.charAt(6) === "m") {
            level1Letter7.textContent = "M"; 
        }
        if (!playWordlvl3.includes("m")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }  
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activen() {
    n.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "n") {
            level1Letter1.textContent = "N"; 
        }
        if (playWordlvl1.charAt(1) === "n") {
            level1Letter2.textContent = "N"; 
        }
        if (playWordlvl1.charAt(2) === "n") {
            level1Letter3.textContent = "N"; 
        }
        if (playWordlvl1.charAt(3) === "n") {
            level1Letter4.textContent = "N"; 
        }
        if (playWordlvl1.charAt(4) === "n") {
            level1Letter5.textContent = "N"; 
        }
        if (!playWordlvl1.includes("n")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "n") {
            level1Letter1.textContent = "N"; 
        }
        if (playWordlvl2.charAt(1) === "n") {
            level1Letter2.textContent = "N"; 
        }
        if (playWordlvl2.charAt(2) === "n") {
            level1Letter3.textContent = "N"; 
        }
        if (playWordlvl2.charAt(3) === "n") {
            level1Letter4.textContent = "N"; 
        }
        if (playWordlvl2.charAt(4) === "n") {
            level1Letter5.textContent = "N"; 
        }
        if (playWordlvl2.charAt(5) === "n") {
            level1Letter6.textContent = "N"; 
        }
        if (!playWordlvl2.includes("n")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
        }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "n") {
            level1Letter1.textContent = "N"; 
        }
        if (playWordlvl3.charAt(1) === "n") {
            level1Letter2.textContent = "N"; 
        }
        if (playWordlvl3.charAt(2) === "n") {
            level1Letter3.textContent = "N"; 
        }
        if (playWordlvl3.charAt(3) === "n") {
            level1Letter4.textContent = "N"; 
        }
        if (playWordlvl3.charAt(4) === "n") {
            level1Letter5.textContent = "N"; 
        }
        if (playWordlvl3.charAt(5) === "n") {
            level1Letter6.textContent = "N"; 
        }
        if (playWordlvl3.charAt(6) === "n") {
            level1Letter7.textContent = "N"; 
        }
        if (!playWordlvl3.includes("n")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }  
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activeo() {
    o.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "o") {
            level1Letter1.textContent = "O"; 
        }
        if (playWordlvl1.charAt(1) === "o") {
            level1Letter2.textContent = "O"; 
        }
        if (playWordlvl1.charAt(2) === "o") {
            level1Letter3.textContent = "O"; 
        }
        if (playWordlvl1.charAt(3) === "o") {
            level1Letter4.textContent = "O"; 
        }
        if (playWordlvl1.charAt(4) === "o") {
            level1Letter5.textContent = "O"; 
        }
        if (!playWordlvl1.includes("o")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) { 
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "o") {
            level1Letter1.textContent = "O"; 
        }
        if (playWordlvl2.charAt(1) === "o") {
            level1Letter2.textContent = "O"; 
        }
        if (playWordlvl2.charAt(2) === "o") {
            level1Letter3.textContent = "O"; 
        }
        if (playWordlvl2.charAt(3) === "o") {
            level1Letter4.textContent = "O"; 
        }
        if (playWordlvl2.charAt(4) === "o") {
            level1Letter5.textContent = "O"; 
        }
        if (playWordlvl2.charAt(5) === "o") {
            level1Letter6.textContent = "O"; 
        }
        if (!playWordlvl2.includes("o")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl2.charAt(0) === "o") {
            level1Letter1.textContent = "O"; 
        }
        if (playWordlvl2.charAt(1) === "o") {
            level1Letter2.textContent = "O"; 
        }
        if (playWordlvl2.charAt(2) === "o") {
            level1Letter3.textContent = "O"; 
        }
        if (playWordlvl2.charAt(3) === "o") {
            level1Letter4.textContent = "O"; 
        }
        if (playWordlvl2.charAt(4) === "o") {
            level1Letter5.textContent = "O"; 
        }
        if (playWordlvl2.charAt(5) === "o") {
            level1Letter6.textContent = "O"; 
        }
        if (playWordlvl2.charAt(6) === "o") {
            level1Letter7.textContent = "O"; 
        }
        if (!playWordlvl2.includes("o")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activep() {
    p.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "p") {
            level1Letter1.textContent = "P"; 
        }
        if (playWordlvl1.charAt(1) === "p") {
            level1Letter2.textContent = "P"; 
        }
        if (playWordlvl1.charAt(2) === "p") {
            level1Letter3.textContent = "P"; 
        }
        if (playWordlvl1.charAt(3) === "p") {
            level1Letter4.textContent = "P"; 
        }
        if (playWordlvl1.charAt(4) === "p") {
            level1Letter5.textContent = "P"; 
        }
        if (!playWordlvl1.includes("p")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "p") {
            level1Letter1.textContent = "P"; 
        }
        if (playWordlvl2.charAt(1) === "p") {
            level1Letter2.textContent = "P"; 
        }
        if (playWordlvl2.charAt(2) === "p") {
            level1Letter3.textContent = "P"; 
        }
        if (playWordlvl2.charAt(3) === "p") {
            level1Letter4.textContent = "P"; 
        }
        if (playWordlvl2.charAt(4) === "p") {
            level1Letter5.textContent = "P"; 
        }
        if (playWordlvl2.charAt(5) === "p") {
            level1Letter6.textContent = "P"; 
        }
        if (!playWordlvl2.includes("p")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "p") {
            level1Letter1.textContent = "P"; 
        }
        if (playWordlvl3.charAt(1) === "p") {
            level1Letter2.textContent = "P"; 
        }
        if (playWordlvl3.charAt(2) === "p") {
            level1Letter3.textContent = "P"; 
        }
        if (playWordlvl3.charAt(3) === "p") {
            level1Letter4.textContent = "P"; 
        }
        if (playWordlvl3.charAt(4) === "p") {
            level1Letter5.textContent = "P"; 
        }
        if (playWordlvl3.charAt(5) === "p") {
            level1Letter6.textContent = "P"; 
        }
        if (playWordlvl3.charAt(6) === "p") {
            level1Letter7.textContent = "P"; 
        }
        if (!playWordlvl3.includes("p")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activeq() {
    q.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "q") {
            level1Letter1.textContent = "Q"; 
        }
        if (playWordlvl1.charAt(1) === "q") {
            level1Letter2.textContent = "Q"; 
        }
        if (playWordlvl1.charAt(2) === "q") {
            level1Letter3.textContent = "Q"; 
        }
        if (playWordlvl1.charAt(3) === "q") {
            level1Letter4.textContent = "Q"; 
        }
        if (playWordlvl1.charAt(4) === "q") {
            level1Letter5.textContent = "Q"; 
        }
        if (!playWordlvl1.includes("q")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
    
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "q") {
            level1Letter1.textContent = "Q"; 
        }
        if (playWordlvl2.charAt(1) === "q") {
            level1Letter2.textContent = "Q"; 
        }
        if (playWordlvl2.charAt(2) === "q") {
            level1Letter3.textContent = "Q"; 
        }
        if (playWordlvl2.charAt(3) === "q") {
            level1Letter4.textContent = "Q"; 
        }
        if (playWordlvl2.charAt(4) === "q") {
            level1Letter5.textContent = "Q"; 
        }
        if (playWordlvl2.charAt(5) === "q") {
            level1Letter6.textContent = "Q"; 
        }
        if (!playWordlvl2.includes("q")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "q") {
            level1Letter1.textContent = "Q"; 
        }
        if (playWordlvl3.charAt(1) === "q") {
            level1Letter2.textContent = "Q"; 
        }
        if (playWordlvl3.charAt(2) === "q") {
            level1Letter3.textContent = "Q"; 
        }
        if (playWordlvl3.charAt(3) === "q") {
            level1Letter4.textContent = "Q"; 
        }
        if (playWordlvl3.charAt(4) === "q") {
            level1Letter5.textContent = "Q"; 
        }
        if (playWordlvl3.charAt(5) === "q") {
            level1Letter6.textContent = "Q"; 
        }
        if (playWordlvl3.charAt(6) === "q") {
            level1Letter7.textContent = "Q"; 
        }
        if (!playWordlvl3.includes("q")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }  
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activer() {
    r.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "r") {
            level1Letter1.textContent = "R"; 
        }
        if (playWordlvl1.charAt(1) === "r") {
            level1Letter2.textContent = "R"; 
        }
        if (playWordlvl1.charAt(2) === "r") {
            level1Letter3.textContent = "R"; 
        }
        if (playWordlvl1.charAt(3) === "r") {
            level1Letter4.textContent = "R"; 
        }
        if (playWordlvl1.charAt(4) === "r") {
            level1Letter5.textContent = "R"; 
        }
        if (!playWordlvl1.includes("r")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
    
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "r") {
            level1Letter1.textContent = "R"; 
        }
        if (playWordlvl2.charAt(1) === "r") {
            level1Letter2.textContent = "R"; 
        }
        if (playWordlvl2.charAt(2) === "r") {
            level1Letter3.textContent = "R"; 
        }
        if (playWordlvl2.charAt(3) === "r") {
            level1Letter4.textContent = "R"; 
        }
        if (playWordlvl2.charAt(4) === "r") {
            level1Letter5.textContent = "R"; 
        }
        if (playWordlvl2.charAt(5) === "r") {
            level1Letter6.textContent = "R"; 
        }
        if (!playWordlvl2.includes("r")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "r") {
            level1Letter1.textContent = "R"; 
        }
        if (playWordlvl3.charAt(1) === "r") {
            level1Letter2.textContent = "R"; 
        }
        if (playWordlvl3.charAt(2) === "r") {
            level1Letter3.textContent = "R"; 
        }
        if (playWordlvl3.charAt(3) === "r") {
            level1Letter4.textContent = "R"; 
        }
        if (playWordlvl3.charAt(4) === "r") {
            level1Letter5.textContent = "R"; 
        }
        if (playWordlvl3.charAt(5) === "r") {
            level1Letter6.textContent = "R"; 
        }
        if (playWordlvl3.charAt(6) === "r") {
            level1Letter7.textContent = "R"; 
        }
        if (!playWordlvl3.includes("r")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }  
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function actives() {
    s.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "s") {
            level1Letter1.textContent = "S"; 
        }
        if (playWordlvl1.charAt(1) === "s") {
            level1Letter2.textContent = "S"; 
        }
        if (playWordlvl1.charAt(2) === "s") {
            level1Letter3.textContent = "S"; 
        }
        if (playWordlvl1.charAt(3) === "s") {
            level1Letter4.textContent = "S"; 
        }
        if (playWordlvl1.charAt(4) === "s") {
            level1Letter5.textContent = "S"; 
        }
        if (!playWordlvl1.includes("s")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "s") {
            level1Letter1.textContent = "S"; 
        }
        if (playWordlvl2.charAt(1) === "s") {
            level1Letter2.textContent = "S"; 
        }
        if (playWordlvl2.charAt(2) === "s") {
            level1Letter3.textContent = "S"; 
        }
        if (playWordlvl2.charAt(3) === "s") {
            level1Letter4.textContent = "S"; 
        }
        if (playWordlvl2.charAt(4) === "s") {
            level1Letter5.textContent = "S"; 
        }
        if (playWordlvl2.charAt(5) === "s") {
            level1Letter6.textContent = "S"; 
        }
        if (!playWordlvl2.includes("s")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "s") {
            level1Letter1.textContent = "S"; 
        }
        if (playWordlvl3.charAt(1) === "s") {
            level1Letter2.textContent = "S"; 
        }
        if (playWordlvl3.charAt(2) === "s") {
            level1Letter3.textContent = "S"; 
        }
        if (playWordlvl3.charAt(3) === "s") {
            level1Letter4.textContent = "S"; 
        }
        if (playWordlvl3.charAt(4) === "s") {
            level1Letter5.textContent = "S"; 
        }
        if (playWordlvl3.charAt(5) === "s") {
            level1Letter6.textContent = "S"; 
        }
        if (playWordlvl3.charAt(6) === "s") {
            level1Letter7.textContent = "S"; 
        }
        if (!playWordlvl3.includes("s")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activet() {
    t.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "t") {
            level1Letter1.textContent = "T"; 
        }
        if (playWordlvl1.charAt(1) === "t") {
            level1Letter2.textContent = "T"; 
        }
        if (playWordlvl1.charAt(2) === "t") {
            level1Letter3.textContent = "T"; 
        }
        if (playWordlvl1.charAt(3) === "t") {
            level1Letter4.textContent = "T"; 
        }
        if (playWordlvl1.charAt(4) === "t") {
            level1Letter5.textContent = "T"; 
        }
        if (!playWordlvl1.includes("t")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
    
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "t") {
            level1Letter1.textContent = "T"; 
        }
        if (playWordlvl2.charAt(1) === "t") {
            level1Letter2.textContent = "T"; 
        }
        if (playWordlvl2.charAt(2) === "t") {
            level1Letter3.textContent = "T"; 
        }
        if (playWordlvl2.charAt(3) === "t") {
            level1Letter4.textContent = "T"; 
        }
        if (playWordlvl2.charAt(4) === "t") {
            level1Letter5.textContent = "T"; 
        }
        if (playWordlvl2.charAt(5) === "t") {
            level1Letter6.textContent = "T"; 
        }
        if (!playWordlvl2.includes("t")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "t") {
            level1Letter1.textContent = "T"; 
        }
        if (playWordlvl3.charAt(1) === "t") {
            level1Letter2.textContent = "T"; 
        }
        if (playWordlvl3.charAt(2) === "t") {
            level1Letter3.textContent = "T"; 
        }
        if (playWordlvl3.charAt(3) === "t") {
            level1Letter4.textContent = "T"; 
        }
        if (playWordlvl3.charAt(4) === "t") {
            level1Letter5.textContent = "T"; 
        }
        if (playWordlvl3.charAt(5) === "t") {
            level1Letter6.textContent = "T"; 
        }
        if (playWordlvl3.charAt(6) === "t") {
            level1Letter7.textContent = "T"; 
        }
        if (!playWordlvl3.includes("t")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }  
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activeu() {
    u.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "u") {
            level1Letter1.textContent = "U"; 
        }
        if (playWordlvl1.charAt(1) === "u") {
            level1Letter2.textContent = "U"; 
        }
        if (playWordlvl1.charAt(2) === "u") {
            level1Letter3.textContent = "U"; 
        }
        if (playWordlvl1.charAt(3) === "u") {
            level1Letter4.textContent = "U"; 
        }
        if (playWordlvl1.charAt(4) === "u") {
            level1Letter5.textContent = "U"; 
        }
        if (!playWordlvl1.includes("u")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }

    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "u") {
            level1Letter1.textContent = "U"; 
        }
        if (playWordlvl2.charAt(1) === "u") {
            level1Letter2.textContent = "U"; 
        }
        if (playWordlvl2.charAt(2) === "u") {
            level1Letter3.textContent = "U"; 
        }
        if (playWordlvl2.charAt(3) === "u") {
            level1Letter4.textContent = "U"; 
        }
        if (playWordlvl2.charAt(4) === "u") {
            level1Letter5.textContent = "U"; 
        }
        if (playWordlvl2.charAt(5) === "u") {
            level1Letter6.textContent = "U"; 
        }
        if (!playWordlvl2.includes("u")){
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "u") {
            level1Letter1.textContent = "U"; 
        }
        if (playWordlvl3.charAt(1) === "u") {
            level1Letter2.textContent = "U"; 
        }
        if (playWordlvl3.charAt(2) === "u") {
            level1Letter3.textContent = "U"; 
        }
        if (playWordlvl3.charAt(3) === "u") {
            level1Letter4.textContent = "U"; 
        }
        if (playWordlvl3.charAt(4) === "u") {
            level1Letter5.textContent = "U"; 
        }
        if (playWordlvl3.charAt(5) === "u") {
            level1Letter6.textContent = "U"; 
        }
        if (playWordlvl3.charAt(6) === "u") {
            level1Letter7.textContent = "U"; 
        }
        if (!playWordlvl3.includes("u")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }  
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activev() {
    v.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "v") {
            level1Letter1.textContent = "V"; 
        }
        if (playWordlvl1.charAt(1) === "v") {
            level1Letter2.textContent = "V"; 
        }
        if (playWordlvl1.charAt(2) === "v") {
            level1Letter3.textContent = "V"; 
        }
        if (playWordlvl1.charAt(3) === "v") {
            level1Letter4.textContent = "V"; 
        }
        if (playWordlvl1.charAt(4) === "v") {
            level1Letter5.textContent = "V"; 
        }
        if (!playWordlvl1.includes("v")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
    
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "v") {
            level1Letter1.textContent = "V"; 
        }
        if (playWordlvl2.charAt(1) === "v") {
            level1Letter2.textContent = "V"; 
        }
        if (playWordlvl2.charAt(2) === "v") {
            level1Letter3.textContent = "V"; 
        }
        if (playWordlvl2.charAt(3) === "v") {
            level1Letter4.textContent = "V"; 
        }
        if (playWordlvl2.charAt(4) === "v") {
            level1Letter5.textContent = "V"; 
        }
        if (playWordlvl2.charAt(5) === "v") {
            level1Letter6.textContent = "V"; 
        }
        if (!playWordlvl2.includes("v")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "v") {
            level1Letter1.textContent = "V"; 
        }
        if (playWordlvl3.charAt(1) === "v") {
            level1Letter2.textContent = "V"; 
        }
        if (playWordlvl3.charAt(2) === "v") {
            level1Letter3.textContent = "V"; 
        }
        if (playWordlvl3.charAt(3) === "v") {
            level1Letter4.textContent = "V"; 
        }
        if (playWordlvl3.charAt(4) === "v") {
            level1Letter5.textContent = "V"; 
        }
        if (playWordlvl3.charAt(5) === "v") {
            level1Letter6.textContent = "V"; 
        }
        if (playWordlvl3.charAt(6) === "v") {
            level1Letter7.textContent = "V"; 
        }
        if (!playWordlvl3.includes("v")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }  
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activew() {
    w.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "w") {
            level1Letter1.textContent = "W"; 
        }
        if (playWordlvl1.charAt(1) === "w") {
            level1Letter2.textContent = "W"; 
        }
        if (playWordlvl1.charAt(2) === "w") {
            level1Letter3.textContent = "W"; 
        }
        if (playWordlvl1.charAt(3) === "w") {
            level1Letter4.textContent = "W"; 
        }
        if (playWordlvl1.charAt(4) === "w") {
            level1Letter5.textContent = "W"; 
        }
        if (!playWordlvl1.includes("w")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
    
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "w") {
            level1Letter1.textContent = "W"; 
        }
        if (playWordlvl2.charAt(1) === "w") {
            level1Letter2.textContent = "W"; 
        }
        if (playWordlvl2.charAt(2) === "w") {
            level1Letter3.textContent = "W"; 
        }
        if (playWordlvl2.charAt(3) === "w") {
            level1Letter4.textContent = "W"; 
        }
        if (playWordlvl2.charAt(4) === "w") {
            level1Letter5.textContent = "W"; 
        }
        if (playWordlvl2.charAt(5) === "w") {
            level1Letter6.textContent = "W"; 
        }
        if (!playWordlvl2.includes("w")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "w") {
            level1Letter1.textContent = "W"; 
        }
        if (playWordlvl3.charAt(1) === "w") {
            level1Letter2.textContent = "W"; 
        }
        if (playWordlvl3.charAt(2) === "w") {
            level1Letter3.textContent = "W"; 
        }
        if (playWordlvl3.charAt(3) === "w") {
            level1Letter4.textContent = "W"; 
        }
        if (playWordlvl3.charAt(4) === "w") {
            level1Letter5.textContent = "W"; 
        }
        if (playWordlvl3.charAt(5) === "w") {
            level1Letter6.textContent = "W"; 
        }
        if (playWordlvl3.charAt(6) === "w") {
            level1Letter7.textContent = "W"; 
        }
        if (!playWordlvl3.includes("w")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        } 
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activex() {
    x.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "x") {
            level1Letter1.textContent = "X"; 
        }
        if (playWordlvl1.charAt(1) === "x") {
            level1Letter2.textContent = "X"; 
        }
        if (playWordlvl1.charAt(2) === "x") {
            level1Letter3.textContent = "X"; 
        }
        if (playWordlvl1.charAt(3) === "x") {
            level1Letter4.textContent = "X"; 
        }
        if (playWordlvl1.charAt(4) === "x") {
            level1Letter5.textContent = "X"; 
        }
        if (!playWordlvl1.includes("x")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
    
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "x") {
            level1Letter1.textContent = "X"; 
        }
        if (playWordlvl2.charAt(1) === "x") {
            level1Letter2.textContent = "X"; 
        }
        if (playWordlvl2.charAt(2) === "x") {
            level1Letter3.textContent = "X"; 
        }
        if (playWordlvl2.charAt(3) === "x") {
            level1Letter4.textContent = "X"; 
        }
        if (playWordlvl2.charAt(4) === "x") {
            level1Letter5.textContent = "X"; 
        }
        if (playWordlvl2.charAt(5) === "x") {
            level1Letter6.textContent = "X"; 
        }
        if (!playWordlvl2.includes("x")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "x") {
            level1Letter1.textContent = "X"; 
        }
        if (playWordlvl3.charAt(1) === "x") {
            level1Letter2.textContent = "X"; 
        }
        if (playWordlvl3.charAt(2) === "x") {
            level1Letter3.textContent = "X"; 
        }
        if (playWordlvl3.charAt(3) === "x") {
            level1Letter4.textContent = "X"; 
        }
        if (playWordlvl3.charAt(4) === "x") {
            level1Letter5.textContent = "X"; 
        }
        if (playWordlvl3.charAt(5) === "x") {
            level1Letter6.textContent = "X"; 
        }
        if (playWordlvl3.charAt(6) === "x") {
            level1Letter7.textContent = "X"; 
        }
        if (!playWordlvl3.includes("x")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function () { guess.textContent = "" }, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activey() {
    y.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "y") {
            level1Letter1.textContent = "Y"; 
        }
        if (playWordlvl1.charAt(1) === "y") {
            level1Letter2.textContent = "Y"; 
        }
        if (playWordlvl1.charAt(2) === "y") {
            level1Letter3.textContent = "Y"; 
        }
        if (playWordlvl1.charAt(3) === "y") {
            level1Letter4.textContent = "Y"; 
        }
        if (playWordlvl1.charAt(4) === "y") {
            level1Letter5.textContent = "Y"; 
        }
        if (!playWordlvl1.includes("y")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl1)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
    
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "y") {
            level1Letter1.textContent = "Y"; 
        }
        if (playWordlvl2.charAt(1) === "y") {
            level1Letter2.textContent = "Y"; 
        }
        if (playWordlvl2.charAt(2) === "y") {
            level1Letter3.textContent = "Y"; 
        }
        if (playWordlvl2.charAt(3) === "y") {
            level1Letter4.textContent = "Y"; 
        }
        if (playWordlvl2.charAt(4) === "y") {
            level1Letter5.textContent = "Y"; 
        }
        if (playWordlvl2.charAt(5) === "y") {
            level1Letter6.textContent = "Y"; 
        }
        if (!playWordlvl2.includes("y")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl2)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${7 - numberTries}`;
        displayHangman();
        winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "y") {
            level1Letter1.textContent = "Y"; 
        }
        if (playWordlvl3.charAt(1) === "y") {
            level1Letter2.textContent = "Y"; 
        }
        if (playWordlvl3.charAt(2) === "y") {
            level1Letter3.textContent = "Y"; 
        }
        if (playWordlvl3.charAt(3) === "y") {
            level1Letter4.textContent = "Y"; 
        }
        if (playWordlvl3.charAt(4) === "y") {
            level1Letter5.textContent = "Y"; 
        }
        if (playWordlvl3.charAt(5) === "y") {
            level1Letter6.textContent = "Y"; 
        }
        if (playWordlvl3.charAt(6) === "y") {
            level1Letter7.textContent = "Y"; 
        }
        if (!playWordlvl3.includes("y")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        } 
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function activez() {
    z.style.textDecoration = "line-through";
    if (playHangman.includes(playWordlvl1)) {
        if (playWordlvl1.charAt(0) === "z") {
            level1Letter1.textContent = "Z";
        }
        if (playWordlvl1.charAt(1) === "z") {
            level1Letter2.textContent = "Z"; 
        }
        if (playWordlvl1.charAt(2) === "z") {
            level1Letter3.textContent = "Z"; 
        }
        if (playWordlvl1.charAt(3) === "z") {
            level1Letter4.textContent = "Z"; 
        }
        if (playWordlvl1.charAt(4) === "z") {
            level1Letter5.textContent = "Z"; 
        }    
        if (!playWordlvl1.includes("z")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
            numberTries++;
        };
        tries.textContent = `# of Tries: ${6 - numberTries}`;
        displayHangman();
        winnerLoser();
    }
  
    if (playHangman.includes(playWordlvl2)) {
        let level1Letter6 = document.getElementById('L6');
        if (playWordlvl2.charAt(0) === "z") {
            level1Letter1.textContent = "Z"; 
        }
        if (playWordlvl2.charAt(1) === "z") {
            level1Letter2.textContent = "Z"; 
        }
        if (playWordlvl2.charAt(2) === "z") {
            level1Letter3.textContent = "Z"; 
        }
        if (playWordlvl2.charAt(3) === "z") {
            level1Letter4.textContent = "Z"; 
        }
        if (playWordlvl2.charAt(4) === "z") {
            level1Letter5.textContent = "Z"; 
        }
        if (playWordlvl2.charAt(5) === "z") {
            level1Letter6.textContent = "Z"; 
        }
        if (!playWordlvl2.includes("z")) {
            guess.textContent = "Please try again!";
            tryAgain ++;
        }
        setTimeout(function() {guess.textContent = ""}, 3000);
    if (playHangman.includes(playWordlvl2)) {
        numberTries++;
    };
    tries.textContent = `# of Tries: ${7 - numberTries}`;
    displayHangman();
    winnerLoserLvl2();
    }

    if (playHangman.includes(playWordlvl3)) {
        let level1Letter7 = document.getElementById('L7');
        if (playWordlvl3.charAt(0) === "z") {
            level1Letter1.textContent = "Z"; 
        }
        if (playWordlvl3.charAt(1) === "z") {
            level1Letter2.textContent = "Z"; 
        }
        if (playWordlvl3.charAt(2) === "z") {
            level1Letter3.textContent = "Z"; 
        }
        if (playWordlvl3.charAt(3) === "z") {
            level1Letter4.textContent = "Z"; 
        }
        if (playWordlvl3.charAt(4) === "z") {
            level1Letter5.textContent = "Z"; 
        }
        if (playWordlvl3.charAt(5) === "z") {
            level1Letter6.textContent = "Z"; 
        }
        if (playWordlvl3.charAt(6) === "z") {
            level1Letter7.textContent = "Z"; 
        }
        if (!playWordlvl3.includes("z")) {
            guess.textContent = "Please try again!";
            tryAgain++;
        }   
        setTimeout(function() {guess.textContent = ""}, 3000);
        if (playHangman.includes(playWordlvl3)) {
        numberTries++;
        };
        tries.textContent = `# of Tries: ${8 - numberTries}`;
        displayHangman();
        winnerLoserLvl3();
    }
}

function displayHangman() {
    if (tryAgain === 0) {
        hangman.setAttribute('src', './images/hangmaninit.jpg');
    }
    if (tryAgain === 1) {
        hangman.setAttribute('src', './images/hangmanhead.jpg');
    } 
    if (tryAgain === 2) {
        hangman.setAttribute('src', './images/hangmantorso.jpg');
    } 
    if (tryAgain === 3) {
        hangman.setAttribute('src', './images/hangmanLarm.jpg');
    } 
    if (tryAgain === 4) {
        hangman.setAttribute('src', './images/hangmanRarm.jpg');
    } 
    if (tryAgain === 5) {
        hangman.setAttribute('src', './images/hangmanLleg.jpg');
    }
    if (tryAgain === 6) {
        hangman.setAttribute('src', './images/hangmanRleg.jpg');
    }
 }

function winnerLoser() {
    if ((numberTries <= 6) && ((level1Letter1.textContent === playWordlvl1[0].toUpperCase()) && (level1Letter2.textContent === playWordlvl1[1].toUpperCase()) && (level1Letter3.textContent === playWordlvl1[2].toUpperCase())
        && (level1Letter4.textContent === playWordlvl1[3].toUpperCase()) && (level1Letter5.textContent === playWordlvl1[4].toUpperCase()))) {
        winner.textContent = "WINNER!!! YOU WIN HANGMAN!";
        moveAnnouncement();
        if (playHangman.includes(playWordlvl1)) {
            const lvl2btn = document.createElement('button');
            lvl2btn.innerHTML = 'Level 2';
            resetSpan.appendChild(lvl2btn);
            lvl2btn.addEventListener('click', chooseWordLevel2);
            nextLevel.textContent = "Press the Level 2 button to play the next word";
        }                       
    } else if ((numberTries === 6) && ((level1Letter1.textContent != playWordlvl1[0]) || (level1Letter2.textContent != playWordlvl1[1]) || (level1Letter3.textContent != playWordlvl1[2])
        || (level1Letter4.textContent != playWordlvl1[3]) || (level1Letter5.textContent != playWordlvl1[4]))) {
        winner.textContent = `SORRY, YOU ARE OUT OF GUESSES! YOU ARE HUNG!\n The correct answer was ${playWordlvl1}`;
        winner.style.color = "green";
        winner.style.fontWeight = 'bold';
        winner.style.fontSize = 'large';
    }
}

function winnerLoserLvl2() {
    let level1Letter6 = document.getElementById('L6');

    if ((numberTries <= 6) && ((level1Letter1.textContent === playWordlvl2[0].toUpperCase()) && (level1Letter2.textContent === playWordlvl2[1].toUpperCase()) && (level1Letter3.textContent === playWordlvl2[2].toUpperCase())
        && (level1Letter4.textContent === playWordlvl2[3].toUpperCase()) && (level1Letter5.textContent === playWordlvl2[4].toUpperCase())) 
        && (level1Letter6.textContent === playWordlvl2[5].toUpperCase())) {
        winner.textContent = "WINNER!!! YOU WIN HANGMAN!";
        moveAnnouncement();
        if (playHangman.includes(playWordlvl2)) {
            resetSpan.innerHTML = "";
            const lvl3btn = document.createElement('button');
            lvl3btn.innerHTML = 'Level 3';
            resetSpan.appendChild(lvl3btn);
            lvl3btn.addEventListener('click', chooseWordLevel3);
            nextLevel.textContent = "Press the Level 3 button to play the next word";
        }                       
    } else if ((numberTries === 6) && ((level1Letter1.textContent != playWordlvl2[0]) || (level1Letter2.textContent != playWordlvl2[1]) || (level1Letter3.textContent != playWordlvl2[2])
            || (level1Letter4.textContent != playWordlvl2[3]) || (level1Letter5.textContent != playWordlvl2[4]) || (level1Letter6.textContent != playWordlvl2[5]))) {
            winner.textContent = `SORRY, YOU ARE OUT OF GUESSES! YOU ARE HUNG!\n The correct answer was ${playWordlvl2}`;
            winner.style.color = "green";
            winner.style.fontWeight = 'bold';
            winner.style.fontSize = 'large';
    }  
}

function winnerLoserLvl3() {
    let level1Letter7 = document.getElementById('L7');

    if ((numberTries <= 6) && ((level1Letter1.textContent === playWordlvl3[0].toUpperCase()) && (level1Letter2.textContent === playWordlvl3[1].toUpperCase()) && (level1Letter3.textContent === playWordlvl3[2].toUpperCase())
        && (level1Letter4.textContent === playWordlvl3[3].toUpperCase()) && (level1Letter5.textContent === playWordlvl3[4].toUpperCase())) 
        && (level1Letter6.textContent === playWordlvl3[5].toUpperCase()) && (level1Letter7.textContent === playWordlvl3[6])) {
        winner.textContent = "WINNER!!! YOU WIN HANGMAN!";
        moveAnnouncement();
        if (playHangman.includes(playWordlvl3)) {
            resetSpan.innerHTML = "Would you like to play again?  Press the Reset Button";
        }  
    } else if ((numberTries === 6) && ((level1Letter1.textContent != playWordlvl3[0]) || (level1Letter2.textContent != playWordlvl3[1]) || (level1Letter3.textContent != playWordlvl3[2])
            || (level1Letter4.textContent != playWordlvl3[3]) || (level1Letter5.textContent != playWordlvl3[4]) || (level1Letter6.textContent != playWordlvl3[5]) || (level1Letter7.textContent != playWordlvl3[6]))) {
            winner.textContent = `SORRY, YOU ARE OUT OF GUESSES! YOU ARE HUNG!\n The correct answer was ${playWordlvl2}`;
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












