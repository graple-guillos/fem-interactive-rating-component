const submitBtn = document.querySelector('#submit')
const orangeLetter = document.querySelector('.orange-text')

submitBtn.addEventListener('click', function() {
  const card = document.querySelector('.main-container')
  const cardShow = document.querySelector('.hidden-card')
  card.classList.add('hidden')
  cardShow.classList.remove('hidden')
})

submitBtn.disabled = true

const choosenRating = document.querySelector('.orange-letters')
const rating = document.querySelectorAll('.number-button')

rating.forEach((rt) => {
  rt.addEventListener('click', () => {
    choosenRating.textContent = `You selected ${rt.textContent} out of 5`
    submitBtn.disabled = true
  })
})

