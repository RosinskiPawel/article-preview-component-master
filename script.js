const autor = document.querySelector('.author-before')
const newAutor = document.querySelector('.author-after')

// autor.addEventListener('click', function () {
//   newAutor.style.display = 'block'
// })
// newAutor.addEventListener('click', function () {
//   newAutor.style.display = ''
// })

// const autor = document.querySelector('.author-before')

// function greyshare() {
//   autor.classList.toggle('author-after')
// }
const clickArrow = autor.querySelector('.author-before__arrow')
const clickNewArrow = newAutor.querySelector('.author-after__arrow')
// const text = document.querySelector('.header-text')
// function changeColor() {
//   text.style.color = 'red'
// }

// clickArrow.addEventListener('click', function () {
//   newAutor.style.display = 'block'
// })
// clickNewArrow.addEventListener('click', function () {
//   newAutor.style.display = ''
// })
function showShare() {
  newAutor.style.display = 'block'
}
function hideShare() {
  newAutor.style.display = ''
}
