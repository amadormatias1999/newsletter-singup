document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("emailInput");
  const errorSpan = document.getElementById("error");

  const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (emailRegex.test(email.value)) {
    document.getElementById("emailForm").classList.remove("errorEmail");
    errorSpan.textContent = "";
  } else {
    errorSpan.textContent = "Correo electrónico inválido";
    document.getElementById("emailForm").classList.add("errorEmail");
  }
});
