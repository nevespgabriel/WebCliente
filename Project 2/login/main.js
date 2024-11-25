function findUserByEmail(email) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.email === email);
    return user || null;
}

document.querySelector("#entrar").addEventListener("click", () => {
    const email = document.querySelector("email");
    const user = findUserByEmail(email);
    const senha = document.querySelector("senha");
    if(user && user.senha == senha){
        window.location.href = "../principal/index.html";
    } else {
        alert("Email ou senha incorretos!");
    }
})