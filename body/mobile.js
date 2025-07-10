let btnMenuMob = document.querySelector('#btn-menu-mobile')
let lineOne = document.querySelector('.line-menumob-1')
let lineTwo = document.querySelector('.line-menumob-2')

btnMenuMob.addEventListener("click", ()=>{
    lineOne.classList.toogle('active1')
    lineTwo.classList.toogle('active2')
})
