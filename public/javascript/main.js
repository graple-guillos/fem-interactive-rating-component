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

rating[0].addEventListener('click', function(){
  choosenRating.textContent = 'You selected 1 out of 5'
  submitBtn.disabled = false
})

rating[1].addEventListener('click', function(){
  choosenRating.textContent = 'You selected 2 out of 5'
  submitBtn.disabled = false
})

rating[2].addEventListener('click', function(){
  choosenRating.textContent = 'You selected 3 out of 5'
  submitBtn.disabled = false
})

rating[3].addEventListener('click', function(){
  choosenRating.textContent = 'You selected 4 out of 5'
  submitBtn.disabled = false
})

rating[4].addEventListener('click', function(){
  choosenRating.textContent = 'You selected 5 out of 5'
  submitBtn.disabled = false
})

