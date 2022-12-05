const autor = document.querySelector('.author')
const newAutor = document.querySelector('.author_after-click')
const arrow = document.getElementById('first-arrow')
const pic = autor.querySelector('img')
const opis = document.querySelector('.description')
// const newButton = document.querySelector('.author_after-click')
const newArrow = document.getElementById('grey-arrow')

autor.addEventListener('click', function () {
  newAutor.style.display = 'block'
})
newAutor.addEventListener('click', function () {
  newAutor.style.display = ''
})

// opis.addEventListener('mouseover', function () {
//   autor.style.backgroundColor = 'hsl(217, 19%, 35%)'
//   opis.style.backgroundColor = 'green'
//   pic.style.display = 'none'
// })
// opis.addEventListener('mouseout', function () {
//   autor.style.backgroundColor = ''
//   opis.style.backgroundColor = ''
//   pic.style.display = ''
// })

// arrow.addEventListener('mouseover', function () {
//   newButton.style.display = 'block'
// })
// arrow.addEventListener('mouseout', function () {
//   newButton.style.display = ''
// })
