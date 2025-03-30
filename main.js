// Se inicializa AOS
AOS.init({
    duration: 1000,
    once: true
});




// Se actualiza el contador de jugadores
function updatePlayerCount() {
    const playerCount = document.querySelector('.online');
    const players = document.querySelectorAll('.player');
    playerCount.textContent = players.length;
    if (playerCount) {
        setInterval(() => {
            const currentCount = parseInt(playerCount.textContent);
            const variation = Math.floor(Math.random() * 11) - 5; // Random number between -5 and 5
            playerCount.textContent = currentCount + variation;
        }, 5000);
    }
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Se inicia cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', () => {
    handleNavigation();
    updatePlayerCount();
});