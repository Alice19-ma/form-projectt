document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").textContent = `Thank you, ${name}! Your message has been received. We'll get back to you shortly.`;
    } else {
        document.getElementById("responseMessage").textContent = "Please fill out all fields before submitting.";
    }
});
