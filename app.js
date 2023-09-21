document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("emailInput");
  const errorSpan = document.getElementById("error");

  const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (emailRegex.test(email.value)) {
    document.getElementById("emailForm").classList.remove("errorEmail");
    errorSpan.textContent = "";
    eliminarInfo();
  } else {
    errorSpan.textContent = "Valid email required";
    document.getElementById("emailForm").classList.add("errorEmail");
  }
});

function eliminarInfo() {
  const cardData = document.getElementsByClassName("card-info");

  for (let i = 0; i < cardData.length; i++) {
    const card = cardData[i];

    while (card.firstChild) {
      card.removeChild(card.firstChild);
    }
    card.classList.remove("card-info");

    const success = document.createElement("div");
    success.classList.add("succes");
    success.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
    <h1>  Thanks for subscribing! </h1>
    <p> A confirmation email has been sent to
      ash@loremcompany.com. Please open it and click the button inside to confirm
      your subscription.</p>
      <button>  Dismiss message </button>
`;

    card.appendChild(success);
  }
}
