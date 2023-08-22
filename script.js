document.addEventListener("DOMContentLoaded", function () {
  const captchaText = generateCaptchaText();
  document.getElementById("captchaText").textContent = captchaText;

  document
    .getElementById("checkCaptcha")
    .addEventListener("click", function () {
      const captchaInput = document.getElementById("captchaInput").value;
      if (captchaInput.toLowerCase() === captchaText.toLowerCase()) {
        alert("CAPTCHA passed! You are human.Go and Grab your attention :)");
      } else {
        alert("CAPTCHA failed! Please try again.");
        // Generate a new CAPTCHA on failure
        document.getElementById("captchaText").textContent =
          generateCaptchaText();
        document.getElementById("captchaInput").value = "";
      }
    });

  // make funtion to genrate random words for captcha

  function generateCaptchaText() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captchaText += characters.charAt(randomIndex);
    }
    return captchaText;
  }
});
