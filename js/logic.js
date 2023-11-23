
document.addEventListener('DOMContentLoaded', function () {
    // Afficher la bannière à chaque chargement de page
    document.getElementById('age-banner').style.display = 'flex';

    // Ajouter un gestionnaire d'événements pour le bouton de confirmation d'âge
    document.getElementById('confirm-age').addEventListener('click', function () {
        document.getElementById('age-banner').style.display = 'none';
    });

    // Ajouter un gestionnaire d'événements pour le bouton de confirmation YouTube
    document.getElementById('confirm-agen').addEventListener('click', function () {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });

    // Fonction pour gérer le texte déroulant en réponse à un clic sur l'image
    function handleTextToggle() {
        var moreText = document.getElementById('more-text');

        // Vérifier si la propriété filter n'est pas définie ou est égale à 'blur(3px)'
        if (!moreText.style.filter || moreText.style.filter === 'blur(3px)') {
            moreText.style.transition = 'filter 0.3s ease'; // Ajouter une transition
            moreText.style.filter = 'blur(0px)';
        } else {
            moreText.style.transition = 'filter 0.3s ease'; // Ajouter une transition
            moreText.style.filter = 'blur(3px)';
        }
    }


    // Ajouter un gestionnaire d'événements pour le clic sur l'image
    var centeredImage = document.getElementById('centered-image');
    centeredImage.addEventListener('click', function () {
        // Vérifier quelle image est actuellement affichée
        if (centeredImage.src.endsWith('img/fleche.png')) {
            // Si l'ancienne image est affichée, changer vers la nouvelle image
            centeredImage.src = 'img/flecheinverse.png';
        } else {
            // Si la nouvelle image est affichée, changer vers l'ancienne image
            centeredImage.src = 'img/fleche.png';
        }
    });

    // Ajouter un gestionnaire d'événements pour le texte déroulant
    document.getElementById('centered-image').addEventListener('click', handleTextToggle);

    document.getElementById('scrollToIntro').addEventListener('click', function () {
        var introTextElement = document.getElementById('intro-text');

        // Faire défiler jusqu'à l'élément intro-text avec une animation fluide
        introTextElement.scrollIntoView({ behavior: 'smooth' });
    });


});
