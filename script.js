document.addEventListener('DOMContentLoaded', () => {
    // Confetti settings
    const confettiSettings = {
        target: 'confetti-canvas',
        max: 150,
        size: 1.5,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
        clock: 25,
        rotate: true,
        width: window.innerWidth,
        height: window.innerHeight,
        start_from_edge: true,
        respawn: true
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    // "No" button functionality
    const noBtn = document.querySelector('.btn-no');
    noBtn.addEventListener('mouseover', () => {
        const x = Math.floor(Math.random() * (window.innerWidth - 100));
        const y = Math.floor(Math.random() * (window.innerHeight - 50));
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    noBtn.addEventListener('click', () => {
        alert('Think again, please! 😉');
    });
});