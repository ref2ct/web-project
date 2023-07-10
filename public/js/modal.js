
  function openDeleteModal() {
    var modalContainer = document.getElementById("modal-container");
    var modalDelete = document.getElementById("modal-delete");
    modalContainer.classList.remove("hidden");
    modalDelete.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }

  function openEditModal() {
    var modalContainer = document.getElementById("modal-container");
    var modalEdit = document.getElementById("modal-edit");
    modalContainer.classList.remove("hidden");
    modalEdit.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalContainer = document.getElementById("modal-container");
    var modals = document.querySelectorAll(".modal");
    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.add("hidden");
    }
    modalContainer.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
  
  var deleteButton = document.getElementById("btn-open-delete");
  var editButton = document.getElementById("btn-open-edit");
  var closeButton = document.querySelectorAll(".btn-close");

  deleteButton.addEventListener("click", openDeleteModal);
  editButton.addEventListener("click", openEditModal);
  for (var i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", closeModal); 
  } 
