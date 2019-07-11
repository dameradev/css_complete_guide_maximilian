let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll(".plan .button");
let noButton = document.querySelector('.modal .modal__action--negative');


// console.log(button);
selectPlanButtons.forEach(b => {
  b.addEventListener('click', ()=> {
    backdrop.style.display = "block"
    modal.style.display = "block";
  })
})

console.log(noButton);
noButton.addEventListener('click', closeModal)
backdrop.addEventListener('click', closeModal)

function closeModal() {
  backdrop.style.display = "none"
  modal.style.display = "none";
}