const downloadBtns = document.querySelectorAll(".download");
const downloadJnr = document.querySelector(".uppercase .jnr");
const downloadSnr = document.querySelector(".snr");
const about = document.querySelector(".about");
const closeModalBtn = document.getElementById("closeModal");
const downloadForm = document.querySelector(".about");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");

document.addEventListener("DOMContentLoaded", () => {
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
  downloadJnr.addEventListener("click", (e) => {
    console.log("JNR Button clicked");
    document.getElementById("jnr").scrollIntoView({ behavior: "smooth" });
  });

  downloadSnr.addEventListener("click", (e) => {
    console.log("Snr Button clicked");
    document.getElementById("snr").scrollIntoView({ behavior: "smooth" });
  });

  about.addEventListener("click", (e) => {
    console.log("About Button clicked");
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });
});
