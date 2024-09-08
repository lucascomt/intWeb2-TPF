let deferredPrompt;

// Écoute l'événement beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
    // Empêche l'affichage automatique de la bannière
    e.preventDefault();
    // Sauvegarde l'événement pour l'utiliser plus tard
    deferredPrompt = e;
    // Affiche le bouton d'installation
    const installButton = document.getElementById('install-button');
    installButton.style.display = 'block';

    // Ajoute un écouteur d'événement au bouton pour déclencher l'installation
    installButton.addEventListener('click', () => {
        // Cache le bouton d'installation
        installButton.style.display = 'none';
        // Affiche la demande d'installation
        deferredPrompt.prompt();
        // Attends la réponse de l'utilisateur
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('L\'utilisateur a accepté l\'installation');
            } else {
                console.log('L\'utilisateur a refusé l\'installation');
            }
            // Réinitialise deferredPrompt pour le rendre à nouveau disponible
            deferredPrompt = null;
        });
    });
});
