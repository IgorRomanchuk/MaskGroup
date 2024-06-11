const openModalButton = document.querySelector('.button')
const modal = document.querySelector('.modal-wrap')
const closeModal = document.querySelector('.close')

openModalButton.addEventListener('click', () => {
  modal.style.display = 'block'
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-wrap')) {
    modal.style.display = 'none'
  }
})