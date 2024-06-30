
    document.addEventListener("DOMContentLoaded", function() {
        // Get the logout button element by its id
        const logoutButton = document.getElementById("logoutButton");

        // Attach an event listener to the logout button
        logoutButton.addEventListener("click", function() {
            // Clear any user authentication tokens or session data
            // Replace this with your actual logout logic
            // For example, you could remove a token from localStorage
            localStorage.removeItem("authToken");

            // Redirect the user to the login page
            window.location.href = "login.html";
        });
    });