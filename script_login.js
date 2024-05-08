document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('loginForm');
    const eField = form.querySelector(".email");
    const eInput = eField.querySelector("input");
    const pField = form.querySelector(".password");
    const pInput = pField.querySelector("input");

    form.onsubmit = (e) => {
        e.preventDefault();

        (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
        (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();

        setTimeout(() => {
            eField.classList.remove("shake");
            pField.classList.remove("shake");
        }, 500);

        eInput.onkeyup = () => { checkEmail(); }
        pInput.onkeyup = () => { checkPass(); }

        function checkEmail() {
            let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!eInput.value.match(pattern)) {
                eField.classList.add("error");
                eField.classList.remove("valid");
                let errorTxt = eField.querySelector(".error-txt");

                (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
            } else {
                eField.classList.remove("error");
                eField.classList.add("valid");
            }
        }

        function checkPass() {
            if (pInput.value == "") {
                pField.classList.add("error");
                pField.classList.remove("valid");
            } else {
                pField.classList.remove("error");
                pField.classList.add("valid");
            }
        }

        // Check email and password before redirecting
        if (eField.classList.contains("valid") && pField.classList.contains("valid")) {
            // Check if the entered email and password match the expected values
            if ((eInput.value === "thiru123@gmail.com" && pInput.value === "Thiru@123") || (eInput.value === "navas123@gmail.com" && pInput.value === "Navas@123")) {
                window.location.href = form.getAttribute("action");
            } else {
                // If the entered credentials are incorrect, display an error message
                alert("Incorrect email or password. Please try again.");
            }
        }
    };
});
