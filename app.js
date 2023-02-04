// funktion för att menyn ska vara responsiv
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Knapp
let mybutton = document.getElementById("myBtn");

// När man scrollar visas knappen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// När man klickar kommer man till startmenyn
function topFunction() {
  document.body.scrollTop = 0; // För Safari
  document.documentElement.scrollTop = 0; // För Chrome
}