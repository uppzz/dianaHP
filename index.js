function checkPassword() {
    // Passwortfeld und Button-Container
    var passwordInput = document.getElementById('passwordInput').value;
    var passwordSection = document.getElementById('passwordSection');

    // Das zu versteckende div
    var firstHiddenDiv = document.getElementById('firstHidden');

    // Passwortüberprüfung
    if (passwordInput === "anaid") {
        // Zeige das versteckte div an
        firstHiddenDiv.style.display = 'block';

        // Verberge das Passwortfeld und den Button
        passwordSection.style.display = 'none';
    } else {
        alert("Falsches Passwort!");
    }
}
