'use strict';
let records = {
    "KeyA": 'sound/A.mp3',
    "KeyS": 'sound/S.mp3',
    "KeyD": 'sound/D.mp3',
    "KeyF": 'sound/F.mp3',
    "KeyG": 'sound/G.mp3',
    "KeyH": 'sound/H.mp3',
    "KeyJ": 'sound/J.mp3',
    "KeyW": 'sound/W.mp3',
    "KeyE": 'sound/E.mp3',
    "KeyT": 'sound/T.mp3',
    "KeyY": 'sound/Y.mp3',
    "KeyU": 'sound/U.mp3'
};

function sound(note) {
    let audio = new Audio(records[note]);
    audio.play().then(r => {});
}

document.addEventListener('keypress', (e) => {
    sound(e.code);
})