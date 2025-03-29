let users = JSON.parse(localStorage.getItem("users")) || [];

function register() {
    let name = document.getElementById("regName").value;
    let phone = document.getElementById("regPhone").value;
    let pass = document.getElementById("regPass").value;

    // Check if the fields are filled
    if (!name || !phone || !pass) {
        alert("All fields are required!");
        return;
    }

    // Add the new user to the users array
    users.push({ name, phone, pass });
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Registration successful! You can now log in.");
    document.getElementById("registrationForm").reset();  // Clear the form
}

function login() {
    let name = document.getElementById("loginName").value;
    let pass = document.getElementById("loginPass").value;

    // Check if the user exists and the password matches
    let user = users.find(u => u.name === name && u.pass === pass);
    if (user) {
        alert("Login successful!");
        window.location.href = "dashboard.html";  // Redirect to the dashboard page
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}
