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
