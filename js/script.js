function menuShow() {
    let menuMobile = document.querySelector('.mobile__menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open') 
        document.querySelector('.icon').src = "../img/botaoMenu.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "../img/botaoClose.png"
    }
}