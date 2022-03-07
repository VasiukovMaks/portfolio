let header = document.getElementsByClassName('js-header')[0];
let home = document.getElementsByClassName('js-home')[0];
let about = document.getElementsByClassName('js-about')[0];
let skills = document.getElementsByClassName('js-skills')[0];
let portfolio = document.getElementsByClassName('js-portfolio')[0];
let contacts = document.getElementsByClassName('js-contacts')[0];
let body = document.getElementsByClassName('js-main')[0];

window.addEventListener('scroll', ()=> {
    if(this.scrollY > 1) {
        header.classList.add('header_fixed')
        body.setAttribute('style',`padding-top: ${header.clientHeight}px`)
    } else {
        header.classList.remove('header_fixed')
        body.removeAttribute('style')
    }
})