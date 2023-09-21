function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function acionaModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function fechaModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function altura() {
  const card = document.querySelector(".card");
  console.log(card.clientWidth);
  console.log(card.clientHeight);
}
altura();