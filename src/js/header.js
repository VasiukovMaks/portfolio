let main = document.getElementsByClassName('js-main')[0],
    header = document.getElementsByClassName('js-navigation')[0];

const blocks = Array.prototype.slice.call( document.getElementsByClassName('js-block') ).reverse(),
      navLinks = Array.prototype.slice.call( document.getElementsByClassName('nav__link') ).reverse();

window.addEventListener('scroll', (e)=> {
    throttle(fixHeader, 100)();
    throttle(setActiveSection, 200)();
})

const fixHeader = () => {
  if(this.scrollY > 1) {
    header.classList.add('nav_fixed')
    main.setAttribute('style',`padding-top: ${header.clientHeight}px`)
  } else {
    header.classList.remove('nav_fixed')
    main.removeAttribute('style')
  }
}

const setActiveSection = () => {
  blocks.some((element, index)=>{
    if (getElementPositionByWindow(element.getBoundingClientRect()) < getCenterScreen()){
      navLinks.forEach((elem) => elem.classList.remove('nav__link_active'));
      navLinks[index].classList.add('nav__link_active')
      return true
    }
  })
}

const getElementPositionByWindow = (rect) => {
  return rect.top + window.pageYOffset || document.documentElement.scrollTop
}

const getCenterScreen = () => {
  return document.documentElement.clientHeight / 2 + (window.pageYOffset || document.documentElement.scrollTop)
}

setActiveSection()
