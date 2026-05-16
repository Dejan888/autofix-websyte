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