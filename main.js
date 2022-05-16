const dropDown = document.querySelectorAll( '.select' )
const [dropDown1, dropDown2] = dropDown
console.log(dropDown1)
dropDown1.addEventListener('click', showOptions1)
dropDown2.addEventListener('click', showOptions2)
function showOptions1() {
    let options1 = document.querySelectorAll('.dropdownList1')
    options1.forEach( e => {
        if(e.classList.contains('hide')) {
            e.classList.remove('hide')
            document.querySelector('.arrow1').src = "images/icon-arrow-up.svg"
        }else {
            e.classList.add('hide')
            document.querySelector('.arrow1').src = "images/icon-arrow-down.svg"
        }
    } ) 
}

function showOptions2() {
    let options2 = document.querySelectorAll('.dropdownList2')
    options2.forEach( e => {
        if(e.classList.contains('hide')) {
            e.classList.remove('hide')
            document.querySelector('.arrow2').src = "images/icon-arrow-up.svg" 
        }else {
            e.classList.add('hide')
            document.querySelector('.arrow2').src = "images/icon-arrow-down.svg"
        }
    } ) 
}

const menu = document.querySelector('.menu')
menu.addEventListener('click', menuShow)
function menuShow() {
    if(document.querySelector('.navContainer').style.width < '70%') {
        document.querySelector('.navContainer').style.padding = '3rem 1.5rem'
        document.querySelector('.menu').src = 'images/icon-close-menu.svg'
        document.querySelector('.overlay').style.visibility = 'visible'
        //document.querySelector('.navContainer').style.visibility = 'visible'
        document.querySelector('.navContainer').style.width = '70%'
    }else{
        document.querySelector('.menu').src = 'images/icon-menu.svg'
        document.querySelector('.overlay').style.visibility = 'hidden'
        document.querySelector('.navContainer').style.width = '0%'
        document.querySelector('.navContainer').style.padding = '0'
        //document.querySelector('.navContainer').style.visibility = 'hidden'
    }
}
//document.querySelector('.navContainer').style.width = '60%'
  
