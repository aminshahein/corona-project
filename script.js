NodeList.prototype.indexOf = Array.prototype.indexOf;

mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
}

const faqBtn = document.querySelectorAll(".faq-btn");
const cool7 = document.querySelectorAll(".cool7");
let oldIndex = 0;

faqBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let newIndex = faqBtn.indexOf(btn);
    console.log(newIndex);
    if (newIndex != oldIndex) {
      cool7[newIndex].classList.remove("d-none");

      cool7[oldIndex].classList.add("d-none");
      oldIndex = newIndex;
    }
    console.log(cool7[newIndex]);
    console.log(cool7[oldIndex]);
  });
});

let accordionBtns = document.querySelectorAll(".occordion");
accordionBtns.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    if (accordion.nextElementSibling.classList.contains("d-none")) {
      accordion.nextElementSibling.classList.remove("d-none");
      accordion.classList.add("activ");
    } else {
      accordion.nextElementSibling.classList.add("d-none");
      accordion.classList.remove("activ");
    }
  });
});
