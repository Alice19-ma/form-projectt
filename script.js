document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        document.getElementById("responseMessage").textContent = `Thank you, ${name}. We have received your information!`;
    } else {
        document.getElementById("responseMessage").textContent = "Please fill out all fields.";
    }
});

