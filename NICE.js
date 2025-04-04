document.addEventListener("DOMContentLoaded", function () {
    const emailBtn = document.getElementById("showEmailBtn");
    const emailText = document.getElementById("email");

    emailBtn.addEventListener("click", function () {
        if (emailText.style.display === "none") {
            emailText.style.display = "block";
            emailBtn.textContent = "연락처 숨기기";
        } else {
            emailText.style.display = "none";
            emailBtn.textContent = "연락처 보기";
        }
    });
});
