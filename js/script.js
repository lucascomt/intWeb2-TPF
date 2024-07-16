const form = document.getElementById('form');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const sujet = document.getElementById('sujet');
const texte = document.getElementById('texte');

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const sendData = () => {
    fetch('scripts/formmail.php', { // Remplacez 'votre_script_php.php' par le chemin de votre script PHP
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prenom: prenom.value.trim(),
            nom: nom.value.trim(),
            email: email.value.trim(),
            sujet: sujet.value.trim(),
            texte: texte.value.trim()
        })
    })

    .then(data => {
        window.location.replace('merci.php');
    })
};

const validateInputs = () => {

    let noError = true;

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();
    const sujetValue = sujet.value.trim();
    const texteValue = texte.value.trim();

    if(prenomValue === '') {
        setError(prenom, 'Prenom est requis');
        noError = false;
    } else {
        setSuccess(prenom);
    }

    if(nomValue === '') {
        setError(nom, 'Nom est requis');
        noError = false;
    } else {
        setSuccess(nom);
    }

    if(emailValue === '') {
        setError(email, 'Courriel est requis');
        noError = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Donnez une adresse de courriel valide');
        noError = false;
    } else {
        setSuccess(email);
    }

    if(sujetValue === '') {
        setError(sujet, 'Sujet est requis');
        noError = false;
    } else {
        setSuccess(sujet);
    }

    if(texteValue === '') {
        setError(texte, 'Message est requis');
        noError = false;
    } else {
        setSuccess(texte);
    }

    if (noError) {
        sendData(); // Appel de la fonction pour envoyer les données
    }
    return noError;
};

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    
});