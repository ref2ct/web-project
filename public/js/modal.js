const modalEdit = document.getElementById("modal-edit");
const modalDelete = document.getElementById("modal-delete");
const overlay = document.querySelector(".overlay");
const openModalBtnEdit = document.getElementById("btn-open-edit");
const openModalBtnDelete = document.getElementById("btn-open-delete");
const closeModalBtnEdit = document.querySelector(".btn-close");
const closeModalBtnDelete = document.querySelector("#btn-close-delete");
// close modal function
const closeModalEdit = function () {
  modalEdit.classList.add("hidden");
  overlay.classList.add("hidden");
};
const closeModalDelete = function () {
    modalDelete.classList.add("hidden");
    overlay.classList.add("hidden");
  };

// close the modal when the close button and overlay is clicked
closeModalBtnEdit.addEventListener("click", closeModalEdit);
closeModalBtnDelete.addEventListener("click", closeModalDelete);
overlay.addEventListener("click", closeModalEdit);
overlay.addEventListener("click", closeModalDelete);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalEdit();
    closeModalDelete();
  }
});

// open modal function
const openModalEdit = function () {
    console.log('teste')
    modalEdit.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openModalDelete = function () {
    console.log('teste')
    modalDelete.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtnEdit.addEventListener("click", openModalEdit);
openModalBtnDelete.addEventListener("click", openModalDelete);