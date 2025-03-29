let users = JSON.parse(localStorage.getItem("users")) || []; // Load stored users or initialize with an empty array

// Register function
function register() {
    let name = document.getElementById("regName").value;
    let phone = document.getElementById("regPhone").value;
    let pass = document.getElementById("regPass").value;

    // Validate if all fields are filled
    if (!name || !phone || !pass) {
        alert("All fields are required!");
        return;
    }

    // Check if the user already exists
    let existingUser = users.find(u => u.name === name);
    if (existingUser) {
        alert("This user is already registered.");
        return;
    }

    // Add the new user to the users array
    users.push({ name, phone, pass });
    localStorage.setItem("users", JSON.stringify(users)); // Store updated users list in localStorage

    alert("Registration successful! You can now log in.");

    // Automatically log the user in after registration
    login(name, pass);  // Call login function with the current credentials

    // Optionally, reset the registration form
    document.getElementById("registrationForm").reset(); 
}

// Login function
function login(name, pass) {
    // Find the user from the stored users array
    let user = users.find(u => u.name === name && u.pass === pass);

    if (user) {
        alert("Login successful!");
        window.location.href = "dashboard.html";  // Redirect to the dashboard
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}

// Handle login when the login form is submitted
function handleLogin() {
    let name = document.getElementById("loginName").value;
    let pass = document.getElementById("loginPass").value;

    login(name, pass);  // Call login function
}
