function menuShow() {
    let menuMobile = document.querySelector('.mobile__menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open') 
        document.querySelector('.icon').src = "../img/menu.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "../img/Sem título.png"
    }
}