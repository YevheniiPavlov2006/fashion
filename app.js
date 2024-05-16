const header = document.querySelector('header');

const headerFixedClass = 'header-fixed'

document.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop

  if (scrollTop > 0) header.classList.add(headerFixedClass)
  else header.classList.remove(headerFixedClass)
})
