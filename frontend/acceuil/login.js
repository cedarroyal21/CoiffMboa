// On récupère les éléments du DOM
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const googleSignInBtn = document.getElementById('googleSignIn');
const googleSignUpBtn = document.getElementById('googleSignUp');

// Ajoute la classe 'right-panel-active' au conteneur
// C'est cette classe qui déclenche l'animation CSS
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

// Retire la classe 'right-panel-active' du conteneur
signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Gestion fictive des clics Google
// Affiche une alerte pour indiquer que la fonctionnalité nécessite un backend
function handleGoogleAuth(e) {
    e.preventDefault(); // Empêche le formulaire de s'envoyer
    alert(
        "Avertissement : La connexion Google est une fonctionnalité avancée.\n" +
        "Elle nécessite une configuration backend (OAuth 2.0) avec Google Cloud Platform " +
        "et un serveur pour gérer l'authentification. Ceci n'est qu'une démo visuelle."
    );
}

googleSignInBtn.addEventListener('click', handleGoogleAuth);
googleSignUpBtn.addEventListener('click', handleGoogleAuth);