// Welcome message
window.onload = function () {
  console.log("Welcome to Kisan Bandhu 🌾");
};

// Hire Labour Form
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("✅ Job Posted Successfully!");

    form.reset();
  });
}

// Apply button
const applyButtons = document.querySelectorAll(".job button");

applyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Application Submitted!");
  });
});

// Machine booking
const machineButtons = document.querySelectorAll(".machine button");

machineButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("🚜 Machine booked successfully!");
  });
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;

      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


window.addEventListener("scroll", () => {

let scroll = window.scrollY;

document.querySelector(".layer1").style.transform =
"translateY(" + scroll * 0.2 + "px)";

document.querySelector(".layer2").style.transform =
"translateY(" + scroll * 0.4 + "px)";

document.querySelector(".layer3").style.transform =
"translateY(" + scroll * 0.6 + "px)";

});


/*open new page on click */
function openPage(page){

window.location.href = page;

}

function callLabour(number){

window.location.href = "tel:" + number;

}




document.getElementById("labourForm").addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    farmerName: document.getElementById("farmerName").value,
    workType: document.getElementById("workType").value,
    location: document.getElementById("location").value,
    workersNeeded: document.getElementById("workersNeeded").value
  };

  fetch("http://localhost:5000/labour/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
  })
  .catch(err => console.log(err));
});