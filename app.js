const showBtn = document.getElementById("show-modal");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-button");
const mainContainer = document.querySelector(".main-container");

function toggleModal() {
    const isHidden = getComputedStyle(modal).display === "none";
    modal.style.display = isHidden ? "block" : "none";
    mainContainer.style.display = isHidden ? "none" : "block";
}

showBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

window.addEventListener('click', e => {
    if (e.target === modal) toggleModal();
});
