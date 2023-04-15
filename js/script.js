function menuShow() {
    let menuMobile = document.querySelector('.mobile__menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open') 
        document.querySelector('.icon').src = "../img/icons8-menu-arredondado-50.png"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "../img/icons8-excluir-50.png"
    }
}