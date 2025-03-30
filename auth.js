let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
    let name = document.getElementById("regName").value;
    let phone = document.getElementById("regPhone").value;
    let pass = document.getElementById("regPass").value;
    
    users.push({ name, phone, pass, approved: false });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration submitted! Wait for admin approval.");
}

function login() {
    let name = document.getElementById("loginName").value;
    let pass = document.getElementById("loginPass").value;

    let user = users.find(u => u.name === name && u.pass === pass);
    if (user && user.approved) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid login or waiting for approval.");
    }
}
