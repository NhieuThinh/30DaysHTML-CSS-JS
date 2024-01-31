const eBox = document.querySelector('.box')
const MainButton = document.querySelector('.button-main')
const eMainResult = document.querySelector('.main-result')
const eKey = document.querySelector('.card-key .card-result')
const eLocation = document.querySelector('.card-location .card-result')
const eWhich = document.querySelector('.card-which .card-result')
const eCode = document.querySelector('.card-code .card-result')

document.addEventListener('keydown', function(e){
  console.log(e)
  MainButton.classList.add('hide')
  eBox.classList.remove('hide')
  eMainResult.innerText=e.keyCode
  eKey.innerText=e.key
  eLocation.innerText=e.location
  eWhich.innerText=e.keyCode
  eCode.innerText=e.code
})