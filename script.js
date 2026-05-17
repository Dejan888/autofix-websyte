function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// Klik na dugme vraća na vrh
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // sprečava slanje dok se ne proveri

  let errors = [];
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Validacija imena
  if (name.length < 2) {
    errors.push("Ime mora imati najmanje 2 karaktera.");
  }

  // Validacija emaila
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    errors.push("Unesite validnu email adresu.");
  }

  // Validacija poruke
  if (message.length < 10) {
    errors.push("Poruka mora imati najmanje 10 karaktera.");
  }

  // Prikaz grešaka ili slanje forme
  let errorDiv = document.getElementById("errorMessages");
  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
  } else {
    errorDiv.innerHTML = "";
    alert("Forma je uspešno poslata!");
    // ovde možeš dodati AJAX ili PHP za slanje podataka na server
  }
});
