const autor = document.querySelector('.author')
const arrow = document.querySelector('.arrow-share')
const pic = autor.querySelector('img')
const opis = document.querySelector('.description')

arrow.addEventListener('mouseover', function () {
  autor.style.backgroundColor = 'hsl(217, 19%, 35%)'
  opis.style.backgroundColor = 'green'
  pic.style.display = 'none'
})
arrow.addEventListener('mouseout', function () {
  autor.style.backgroundColor = ''
  opis.style.backgroundColor = ''
  pic.style.display = ''
})
