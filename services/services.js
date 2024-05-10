const textEl = document.getElementById('text');
const text = 'Committed to Your Smile, Dedicated to Your Wellness.';
let idx = 0;

writeText();

function writeText() {
    textEl.innerHTML = `<span style="color: white; font-family: 'Platypi', serif;">${text.slice(0, idx)}</span>`;

    idx++;

    if (idx > text.length) {
        idx = 0;
    }

    setTimeout(writeText, 100);
}
