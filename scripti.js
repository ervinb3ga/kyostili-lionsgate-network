function sendMmail() {
    let paramss = {
        name: document.getElementById("form-field-Name").value,
        lastname: document.getElementById("form-field-field_99a6585").value,
        email: document.getElementById("form-field-Email").value,
        country: document.getElementById("form-field-country").value,
        mobilephone: document.getElementById("form-field-Phone").value,
        reason: document.getElementById("form-field-Reason").value,
        losses: document.getElementById("form-field-field_003be7b").value,
        message: document.getElementById("form-field-field_6eb0b67").value,
    }
    emailjs.send("service_2mdn9gq","template_i4r5m6q",paramss).then(alert("Email sent successfully!"));
}