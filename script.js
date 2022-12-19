const designer = document.querySelector('.designer')
const sharefield = document.querySelector('.box-sharefield')

const clickArrow = designer.querySelector('.designer__arrow')
const clickNewArrow = sharefield.querySelector('.sharefield__arrow')
const mediaQuery = window.matchMedia('(max-width: 700px)')
const arrow = document.querySelector('.first-arrow')

if (mediaQuery.matches) {
  designer.addEventListener('mouseover', function () {
    sharefield.style.display = 'block'
  })

  sharefield.addEventListener('mouseout', function () {
    sharefield.style.display = ''
  })
} else {
  designer.addEventListener('mouseover', function () {
    sharefield.style.display = 'block'
    clickArrow.style.backgroundColor = 'hsl(214, 17%, 51%)'
    arrow.classList.add('new-arrow')
  })

  designer.addEventListener('mouseout', function () {
    sharefield.style.display = ''
    clickArrow.style.backgroundColor = ''
    arrow.classList.remove('new-arrow')
  })
}
