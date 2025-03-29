let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
    let name = document.getElementById("regName").value;
    let phone = document.getElementById("regPhone").value;
    let pass = document.getElementById("regPass").value;

    if (!name || !phone || !pass) {
        alert("All fields are required!");
        return;
    }

    // Check if user already exists
    let existingUser = users.find(u => u.name === name);
    if (existingUser) {
        alert("This user is already registered.");
        return;
    }

    // Add new user to users array
    users.push({ name, phone, pass });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in.");
    document.getElementById("registrationForm").reset();  // Clear the form
}

function login() {
    let name = document.getElementById("loginName").value;
    let pass = document.getElementById("loginPass").value;

    let user = users.find(u => u.name === name && u.pass === pass);
    if (user) {
        alert("Login successful!");
        window.location.href = "dashboard.html";  // Redirect to dashboard
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}
