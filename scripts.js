const downloadBtns = document.querySelectorAll(".download");
const jnrNav = document.querySelectorAll(".jnr");
const snrNav = document.querySelectorAll(".snr");
const homeNav = document.querySelectorAll(".navbutton a");
const aboutNav = document.querySelectorAll(".about");
const closeModalBtn = document.getElementById("closeModal");
const downloadForm = document.querySelector(".about");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const navMenu = document.getElementById("nav-menu");
const hambugger = document.querySelector(".hambugger");
const sideBar = document.querySelector("aside");

downloadBtns.forEach((downloadBtn) => {
  downloadBtn.addEventListener("click", () => {
    console.log("Download Button clicked");
    modal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
  });
});

// Close Modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});
// Optionally, handle form submission
downloadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // You can handle the form submission logic here
  alert("Form submitted!");

  // Optionally close the modal after form submission
  modal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
});

scrollBtn(homeNav);
scrollBtn(jnrNav, "jnr");
scrollBtn(snrNav, "snr");
scrollBtn(aboutNav, "about");

hambugger.addEventListener("click", (e) => {
  hambugger.classList.toggle("active");
  sideBar.classList.toggle("hidden");
});

function scrollBtn(elements, targetId) {
  elements.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (sideBar || hambugger) {
        sideBar.classList.add("hidden"); // Show/Hide menu
        hambugger.classList.remove("active");
      }
      if (targetId)
        document
          .getElementById(targetId)
          .scrollIntoView({ behavior: "smooth" });
    });
  });
}
