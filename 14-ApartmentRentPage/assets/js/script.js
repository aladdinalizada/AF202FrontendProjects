let searchBtn = document.querySelector("#searchBtn");
let sendMessageBtn = document.querySelector(".sendMessageBtn");

// Fetching the data from the JSON file

fetch("data/db.json")
  .then((response) => response.json())
  .then((data) => {
    data;
    // Search button event listener
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let filterCheckIn = document.querySelector(".filterCheckIn").value;
      let filterCheckOut = document.querySelector(".filterCheckOut").value;
      let filterAdults = document.querySelector(".filterAdults").value;
      let filterKids = document.querySelector(".filterKids").value;
      fetch(" http://localhost:8000/filterData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CheckIn: filterCheckIn,
          checkOUT: filterCheckOut,
          adults: filterAdults,
          children: filterKids,
        }),
      });
    });
    // Send message button event listener
    sendMessageBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let name = document.querySelector(".name").value;
      let email = document.querySelector(".email").value;
      let message = document.querySelector(".message").value;
      fetch("http://localhost:8000/ContactData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
    });
  });

// Silder
// Script to open and close sidebar when on tablets and phones
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Slideshow Apartment Images
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
// }

// function currentDiv(n) {
//   showDivs((slideIndex = n));
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
//   }
//   x[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " w3-opacity-off";
// }
