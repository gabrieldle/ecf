document.addEventListener('DOMContentLoaded', function() {
    const menu
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    menuToggle.addEventListener('click', function() {
        sideMenu.style.width = '300px'; // Ajustez la largeur du menu coulissant
        menuToggle.style.display = 'none'; // Masquer l'icône de menu
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.style.width = '0';
        menuToggle.style.display = 'block'; // Afficher l'icône de menu
    });

    // Fermer le menu si l'utilisateur clique en dehors de celui-ci
    window.addEventListener('click', function(event) {
        if (event.target !== sideMenu && !sideMenu.contains(event.target) && event.target !== menuToggle) {
            sideMenu.style.width = '0';
            menuToggle.style.display = 'block'; // Afficher l'icône de menu
        }
    });
});

// Détecter le défilement de la page
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var nav = document.querySelector('nav');

    // Si le défilement est supérieur à 50px du haut de la page
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Ajouter la classe 'scrolled'
        nav.style.backgroundColor = '#147117'; // Changer la couleur de fond du nav
    } else {
        header.classList.remove('scrolled'); // Retirer la classe 'scrolled'
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Réinitialiser la couleur de fond
    }
});



