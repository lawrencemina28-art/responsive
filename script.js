    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message =
            document.getElementById("formMessage");

        if (password !== confirmPassword) {

            message.className = "mt-3 alert alert-danger";
            message.textContent =
                "Passwords do not match. Please try again.";

            document.getElementById("confirmPassword").focus();
            return;
        }

        message.className = "mt-3 alert alert-success";
        message.textContent =
            "Registration form submitted successfully!";

        form.reset();

    })
