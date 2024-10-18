function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Mostrar/ocultar o botão com base na rolagem
window.onscroll = function() {
    const button = document.getElementById("backToTop");
    const secao2 = document.getElementById("secao2");
    const rect = secao2.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        button.style.display = "block"; // Mostra o botão
    } else {
        button.style.display = "none"; // Esconde o botão
    }
};

// Função para rolar para o topo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('playButton').addEventListener('click', function() {
    const audio = document.getElementById('audioPlayer');
    if (audio.paused) {
        audio.play();
        this.textContent = '⏸️ Pausar Áudio'; // Muda o texto para "Pausar"
    } else {
        audio.pause();
        this.textContent = '🔊 Reproduzir Áudio'; // Muda o texto para "Reproduzir"
    }
});

