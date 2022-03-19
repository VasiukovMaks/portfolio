const buttons = document.querySelectorAll('.js-languages-buttons button'),
      html = document.getElementsByTagName('html')[0];

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    console.log(e.target.innerText)
    if (e.target.innerText === 'RU') {
      html.setAttribute('lang', 'ru')
    } else if (e.target.innerText === 'ENG'){
      html.setAttribute('lang', 'en')
    }
  })
})