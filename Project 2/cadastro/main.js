function addUser(nome, email, senha) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ nome: nome, email: email, senha: senha });
    localStorage.setItem('users', JSON.stringify(users));
}

function getAllUsers() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
}
 
 document.querySelector("#submit").addEventListener("click", () => {
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    addUser(nome, email, senha);
    event.preventDefault()
    alert(getAllUsers());
 });   
    