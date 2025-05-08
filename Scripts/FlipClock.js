function updateFlipClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    updateFlip('hours', hours);
    updateFlip('minutes', minutes);
    updateFlip('seconds', seconds);
}

function updateFlip(unit, value) {
    const flip = document.getElementById(unit);
    const top = flip.querySelector('.Top');
    const bottom = flip.querySelector('.Bottom');

    if (top.textContent !== value) {
        bottom.textContent = top.textContent;
        top.textContent = value;

        flip.classList.remove('flip');
        void flip.offsetWidth; // Trigger reflow
        flip.classList.add('flip');
    }
}

setInterval(updateFlipClock, 1000);
updateFlipClock();