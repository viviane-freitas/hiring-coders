const form = document.getElementById('form')
//const newEmailInput = document.querySelector('[data-new-email-input]')
//const newNameInput = document.querySelector('[data-new-name-input]')
//const newMonthInput = document.querySelector('[data-new-month-input]')

//let lists = [{id: 1, name: 'html'}, {id: 2, name: 'css'}]
var localUserCount = 1;

/*function render() {
    clearElement(listUsers)
    usersAdded.forEach(function(user) {
        const item = document.createElement('')
        item.classList.add('item')
        console.log(user)
        listUsers.appendChild(item)
    })
}*/

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let userName = document.getElementById('input-name').value;
    let userEmail = document.getElementById('input-email').value;
    let month = document.getElementById('month').value;
    let newUser = {name: userName, email: userEmail, monthOfBirthday: month};

    let convertData = JSON.stringify(newUser);

    localStorage.setItem(`User ${localUserCount}`, convertData);
    localUserCount++;
    console.log("Novo usuário adicionado.");
    document.getElementById('form').innerText = "Cadastro realizado. Novidades em breve!";
})

/*function createUser() {
    let userName = newNameInput;
    let userEmail = newEmailInput;
    let month = newMonthInput;
    let newUser = {name: userName, email: userEmail, userBirthmonth: month};

    console.log(newUser)
    return {id: Date.now().toString(), newUser}
}*/

/*function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}*/