// ELIGIBILITY CHECKER

function checkEligibility() {

    let age = Number(document.getElementById("age").value);
    let entry = document.getElementById("entry").value;
    let result = document.getElementById("result");

    if (age <= 0 || age > 100 || entry === "") {
        alert("Please enter valid details.");
        return;
    }

    let eligible = false;

    // Sample age ranges for demonstration only

    if (entry === "NDA" && age >= 16 && age <= 19) {
        eligible = true;
    }

    else if (entry === "AFCAT" && age >= 20 && age <= 26) {
        eligible = true;
    }

    else if (entry === "Agniveervayu" && age >= 17 && age <= 21) {
        eligible = true;
    }

    if (eligible) {
        result.style.color = "green";
        result.innerHTML =
            "✓ Your age matches the sample range for " + entry +
            ". Check the official notification for actual eligibility.";
    }

    else {
        result.style.color = "red";
        result.innerHTML =
            "Your age does not match the sample range for " + entry +
            ". This is not an official eligibility decision.";
    }
}


// CANDIDATE REGISTRATION

function registerCandidate(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let result = document.getElementById("registrationResult");

    // Name validation
    if (name.length < 3) {
        alert("Name must contain at least 3 characters.");
        return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email.");
        return;
    }

    // Mobile number validation
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Confirmation dialog box
    let confirmRegistration = confirm(
        "Do you want to submit your registration?"
    );

    if (confirmRegistration) {

        // Display success message
        result.style.color = "green";
        result.textContent =
            "Registration successful! Welcome, " + name +
            ". This is a demonstration registration only.";

        alert("Thank you, " + name + "! Registration successful.");

        // Reset the form
        event.target.reset();
    }
}