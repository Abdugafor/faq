const arrow = document.querySelectorAll('.arrow'),
      info = document.querySelector('.more-info'),
      cube = document.querySelector('.cube')



arrow[1].addEventListener('click', () => {
    arrow[1].classList.toggle('arrow-up')
    info.classList.toggle('more-info-show')
    cube.classList.toggle('cube-move')
    cube.classList.toggle('cube-media-move')
})