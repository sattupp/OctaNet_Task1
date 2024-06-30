function openSettings() {
    // Create a div element for the settings panel
    var settingsPanel = document.createElement('div');
    settingsPanel.classList.add('settings-panel');

    // Add content to the settings panel
    settingsPanel.innerHTML = `
        <h2>Settings Panel</h2>
        <p>This is your settings panel content.</p>
    `;
    // Append the settings panel to the body
    document.body.appendChild(settingsPanel);
    console.log("Button clicked! open settings.....");
}

const settingsButton = document.getElementById("SettingsButton");

settingsButton.addEventListener("click", function(){
    console.log("Button Clicked!");
    window.location.href = "settings.html";
})

function handleProfileFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the form element
    const form = event.target;

    // Retrieve the values of the form fields
    const username = form.elements['username'].value;
    const email = form.elements['email'].value;
    const bio = form.elements['bio'].value;

    // Perform any necessary validation here

    // Construct the data object to be sent to the server
    const formData = {
        username: username,
        email: email,
        bio: bio
    };

    // Send the form data to the server using fetch API or XMLHttpRequest
    // Example using fetch API:
    fetch('/update_profile', {
        method: 'POST', // Adjust the HTTP method as needed
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming server responds with JSON data
    })
    .then(data => {
        // Handle the response from the server, e.g., display a success message
        console.log('Profile settings updated successfully:', data);
        alert('Profile settings updated successfully');
    })
    .catch(error => {
        // Handle errors that occur during the fetch request
        console.error('Error updating profile settings:', error);
        alert('Failed to update profile settings. Please try again later.');
    });
}

// Add event listener to the profile form
const profileForm = document.getElementById('profile-form');
profileForm.addEventListener('submit', handleProfileFormSubmission);


// Function to handle form submission for notification settings
function handleNotificationFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the form element
    const form = event.target;

    // Retrieve the values of the form fields
    const emailNotifications = form.elements['email-notifications'].checked;
    const pushNotifications = form.elements['push-notifications'].checked;
    const smsNotifications = form.elements['sms-notifications'].checked;

    // Construct the data object to be sent to the server
    const formData = {
        emailNotifications: emailNotifications,
        pushNotifications: pushNotifications,
        smsNotifications: smsNotifications
    };

    // Send the form data to the server using fetch API or XMLHttpRequest
    // Example using fetch API:
    fetch('/update_notification_settings', {
        method: 'POST', // Adjust the HTTP method as needed
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming server responds with JSON data
    })
    .then(data => {
        // Handle the response from the server, e.g., display a success message
        console.log('Notification settings updated successfully:', data);
        alert('Notification settings updated successfully');
    })
    .catch(error => {
        // Handle errors that occur during the fetch request
        console.error('Error updating notification settings:', error);
        alert('Failed to update notification settings. Please try again later.');
    });
}

// Add event listener to the notification form
const notificationForm = document.getElementById('notification-form');
notificationForm.addEventListener('submit', handleNotificationFormSubmission);


// Function to handle form submission for privacy settings
function handlePrivacyFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the form element
    const form = event.target;

    // Retrieve the values of the form fields
    const publicProfile = form.elements['public-profile'].checked;
    const hideEmail = form.elements['hide-email'].checked;
    const hideFriendsList = form.elements['hide-friends-list'].checked;

    // Construct the data object to be sent to the server
    const formData = {
        publicProfile: publicProfile,
        hideEmail: hideEmail,
        hideFriendsList: hideFriendsList
    };

    // Send the form data to the server using fetch API or XMLHttpRequest
    // Example using fetch API:
    fetch('/update_privacy_settings', {
        method: 'POST', // Adjust the HTTP method as needed
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming server responds with JSON data
    })
    .then(data => {
        // Handle the response from the server, e.g., display a success message
        console.log('Privacy settings updated successfully:', data);
        alert('Privacy settings updated successfully');
    })
    .catch(error => {
        // Handle errors that occur during the fetch request
        console.error('Error updating privacy settings:', error);
        alert('Failed to update privacy settings. Please try again later.');
    });
}

// Add event listener to the privacy form
const privacyForm = document.getElementById('privacy-form');
privacyForm.addEventListener('submit', handlePrivacyFormSubmission);
