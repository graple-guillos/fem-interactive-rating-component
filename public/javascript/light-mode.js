let lightLocalStorage = localStorage.getItem('lightMode')
const toggleLightMode = document.querySelector('.light-mode-toggle')

function lightMode(){
  localStorage.setItem('lightMode', 'enabled')
  document.body.classList.add('light')
}

function darkMode(){
  localStorage.setItem('lightMode', null)
  document.body.classList.remove('light')
}

if (lightLocalStorage === 'enabled') {
  lightMode()
}

toggleLightMode.addEventListener('click', function(){
  lightLocalStorage = localStorage.getItem('lightMode')
    lightMode()
  if (lightLocalStorage !== 'enabled') {
    lightMode()
  } else {
    darkMode()
  }
})
