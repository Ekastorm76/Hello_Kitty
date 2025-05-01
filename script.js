document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const siBtn = document.getElementById('siBtn');

    noBtn.addEventListener('click', () => {
        const currentSize = parseFloat(window.getComputedStyle(siBtn).fontSize);
        siBtn.style.fontSize = (currentSize * 1.2) + 'px';
    });

    siBtn.addEventListener('click', () => {
        window.location.href = 'gracias.html';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const siBtn = document.getElementById('siBtn');
    let noClickCount = 0;
    let isNoButtonAbsolute = false; // Nueva variable para rastrear si la posición es absoluta

    noBtn.addEventListener('click', () => {
        noClickCount++;
        const currentSiSize = parseFloat(window.getComputedStyle(siBtn).fontSize);
        siBtn.style.fontSize = (currentSiSize * 1.2) + 'px';

        if (noClickCount >= 4) {
            if (!isNoButtonAbsolute) {
                noBtn.style.position = 'absolute';
                isNoButtonAbsolute = true;
            }

            const windowWidth = window.innerWidth - noBtn.offsetWidth;
            const windowHeight = window.innerHeight - noBtn.offsetHeight;
            const newX = Math.random() * windowWidth;
            const newY = Math.random() * windowHeight;

            noBtn.style.left = newX + 'px';
            noBtn.style.top = newY + 'px';
            noClickCount = 0; // Reiniciar el contador
        }
    });

    siBtn.addEventListener('click', () => {
        window.location.href = 'gracias.html';
    });
});