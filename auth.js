let users = JSON.parse(localStorage.getItem("users")) || []; // Load stored users or an empty array

// Register function
function register() {
    let name = document.getElementById("regName").value;
    let phone = document.getElementById("regPhone").value;
    let pass = document.getElementById("regPass").value;

    // Validate input fields
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

    // Optionally, auto-login after registration (or redirect to login page)
    login(name, pass);  // Automatically log the user in after registering

    // Reset the registration form
    document.getElementById("registrationForm").reset();
}

// Login function
function login(name, pass) {
    // Find the user by name and password
    let user = users.find(u => u.name === name && u.pass === pass);

    if (user) {
        alert("Login successful!");
        window.location.href = "dashboard.html";  // Redirect to the dashboard
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}

// Handle login via the form
function handleLogin() {
    let name = document.getElementById("loginName").value;
    let pass = document.getElementById("loginPass").value;

    login(name, pass);  // Call the login function
}
