window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        const navbarElement = document.querySelector('.navbar');
        navbarElement.classList.toggle('sticky', window.scrollY > 0)
    })

    const menuBtnElement = document.querySelector('.menu-btn');
    const navListElement = document.querySelector('.nav-list');

    menuBtnElement.addEventListener('click', () =>{
        menuBtnElement.classList.toggle('active')
        navListElement.classList.toggle('active')
    })
})