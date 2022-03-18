let main = document.getElementsByClassName('js-main')[0];
let header = document.getElementsByClassName('js-header')[0];
const mainElements = [
    document.getElementsByClassName('js-home')[0],
    document.getElementsByClassName('js-about')[0],
    document.getElementsByClassName('js-skills')[0],
    document.getElementsByClassName('js-portfolio')[0],
    document.getElementsByClassName('js-contacts')[0],
].reverse(),
  headerElements = Array.prototype.slice.call( document.getElementsByClassName('header_item') ).reverse();

window.addEventListener('scroll', (e)=> {
    throttle(fixHeader, 100)();
    throttle(setActiveSection, 200)();
})

const fixHeader = () => {
  if(this.scrollY > 1) {
    header.classList.add('header_fixed')
    main.setAttribute('style',`padding-top: ${header.clientHeight}px`)
  } else {
    header.classList.remove('header_fixed')
    main.removeAttribute('style')
  }
}

const setActiveSection = () => {
  mainElements.some((element, index)=>{
    if (getTopPositionByWindow(element.getBoundingClientRect()) < getCenterWindow()){
      headerElements.forEach((elem) => elem.classList.remove('active'));
      headerElements[index].classList.add('active')
      return true
    }
  })
}

const getTopPositionByWindow = (rect) => {
  return rect.top + window.pageYOffset || document.documentElement.scrollTop
}

const getCenterWindow = () => {
  return document.documentElement.clientHeight / 2 + (window.pageYOffset || document.documentElement.scrollTop)
}

setActiveSection()
