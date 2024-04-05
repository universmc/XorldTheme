Je suis heureux de vous aider ! Voici le code JavaScript pour afficher un message dans la console lors du chargement de la page d'index :

<script type="text/javascript" src="script.js"></script>

Et dans le fichier script.js, vous pouvez écrire le code JavaScript suivant :

document.addEventListener('DOMContentLoaded', function() {
console.log('Le document a été chargé');
});

Ce code utilise l'événement DOMContentLoaded pour exécuter une fonction lorsque le document a été entièrement chargé. Dans cette fonction, nous appelons la méthode console.log() pour afficher un message dans la console.