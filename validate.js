document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let form = event.target;
    let password = form.password.value;
    let phone = form.phone.value;

    // Password check
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        event.preventDefault();
        return;
    }

    // Phone number check
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits.");
        event.preventDefault();
        return;
    }

    // Ensure at least one hobby is selected
    let hobbies = form.querySelectorAll("input[name='hobbies']:checked");
    if (hobbies.length === 0) {
        alert("Please select at least one hobby.");
        event.preventDefault();
        return;
    }
});
