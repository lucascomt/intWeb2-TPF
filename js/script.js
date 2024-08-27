document.getElementById('customForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Réinitialiser les messages d'erreur
    const errorFields = document.querySelectorAll('.error-message');
    errorFields.forEach(function(field) {
        field.textContent = '';
    });

    let isValid = true;

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const birthdate = document.getElementById('birthdate').value;

    if (username.length < 3) {
        document.getElementById('usernameError').textContent = "Le nom d'utilisateur doit contenir au moins 3 caractères.";
        isValid = false;
    }

    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = "Veuillez entrer une adresse email valide.";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = "Le mot de passe doit contenir au moins 6 caractères.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Les mots de passe ne correspondent pas.";
        isValid = false;
    }

    if (firstname.trim() === '') {
        document.getElementById('firstnameError').textContent = "Le prénom est requis.";
        isValid = false;
    }

    if (lastname.trim() === '') {
        document.getElementById('lastnameError').textContent = "Le nom de famille est requis.";
        isValid = false;
    }

    if (phone.length < 10 || !/^\d+$/.test(phone)) {
        document.getElementById('phoneError').textContent = "Veuillez entrer un numéro de téléphone valide.";
        isValid = false;
    }

    if (birthdate.trim() === '') {
        document.getElementById('birthdateError').textContent = "Le date de naissance est requis.";
        isValid = false;
    }

    if (new Date(birthdate) > new Date()) {
        document.getElementById('birthdateError').textContent = "La date de naissance ne peut pas être dans le futur.";
        isValid = false;
    }

    if (isValid) {
        alert("Formulaire validé avec succès !");
        // Ici, vous pouvez envoyer le formulaire ou effectuer d'autres actions
    }
});
