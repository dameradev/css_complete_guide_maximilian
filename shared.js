let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll(".plan .button");
let modalNoButton = document.querySelector('.modal .modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

selectPlanButtons.forEach(b => {
  b.addEventListener('click', ()=> { 
    backdrop.classList.add("open")
    modal.classList.add("open")
  })
})

if (modalNoButton){
  modalNoButton.addEventListener('click', closeModal)
}
backdrop.addEventListener('click', () => {
  mobileNav.classList.remove("open")
  closeModal();
})

function closeModal() {
  backdrop.classList.remove("open")
  if (modal) {
    modal.classList.remove("open")
  }
}

toggleButton.addEventListener('click', ()=> {
  mobileNav.classList.add("open")
  backdrop.classList.add("open")
})
