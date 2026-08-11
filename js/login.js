/* =================================
   CAMPUSCONNECT
   LOGIN SYSTEM
================================= */


/* ---------- LOGIN FORM ---------- */

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const loginError = document.getElementById("loginError");


/* ---------- PASSWORD TOGGLE ---------- */

const passwordToggle =
    document.getElementById("passwordToggle");


if (passwordToggle) {

    passwordToggle.addEventListener("click", function () {

        const icon =
            passwordToggle.querySelector("i");


        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

        } else {

            passwordInput.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");
        }

    });

}


/* ---------- LOGIN ---------- */

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value;


        /* Clear previous error */

        loginError.textContent = "";


        /* ---------- VALIDATION ---------- */

        if (email === "") {

            loginError.textContent =
                "Please enter your email address.";

            emailInput.focus();

            return;
        }


        if (password === "") {

            loginError.textContent =
                "Please enter your password.";

            passwordInput.focus();

            return;
        }


        /* ---------- DEMO LOGIN ---------- */

        const validEmail =
            "student@campusconnect.com";

        const validPassword =
            "123456";


        if (
            email === validEmail &&
            password === validPassword
        ) {

            /* Save login status */

            localStorage.setItem(
                "campusConnectLoggedIn",
                "true"
            );


            localStorage.setItem(
                "campusConnectUser",
                email
            );


            /* Remember user */

            const remember =
                document.getElementById("remember");


            if (remember && remember.checked) {

                localStorage.setItem(
                    "campusConnectRemember",
                    "true"
                );

            } else {

                localStorage.removeItem(
                    "campusConnectRemember"
                );
            }


            /* Go to dashboard */

            window.location.href =
                "index.html";

        } else {

            loginError.textContent =
                "Invalid email or password.";

            passwordInput.focus();
        }

    });

}