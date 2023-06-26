
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function signInOpenModal() {
  var signInModal = document.getElementById("signInMyModal");
  signInModal.style.display = "block";
}

function signInCloseModal() {
  var signInModal = document.getElementById("signInMyModal");
  signInModal.style.display = "none";
}

function switchToSignUpModal() {
  var signInModal = document.getElementById("signInMyModal");
  var signUpModal = document.getElementById("myModal");
  signInModal.style.display = "none";
  signUpModal.style.display = "block";
}

function redirectToBlogList() {
  window.open("postslist/postslist.html", "_blank");
}

function openCreatePostModal() {
  var createPostModal = document.getElementById("createPostModal");
  createPostModal.style.display = "block";
}

function closeCreatePostModal() {
  var createPostModal = document.getElementById("createPostModal");
  createPostModal.style.display = "none";
}
