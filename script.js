const autor = document.querySelector('.author-before')
const newAutor = document.querySelector('.author-after')

autor.addEventListener('click', function () {
  newAutor.style.display = 'block'
})
newAutor.addEventListener('click', function () {
  newAutor.style.display = ''
})
