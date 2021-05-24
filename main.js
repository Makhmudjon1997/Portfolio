window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        const navbarElement = document.querySelector('.navbar');
        navbarElement.classList.toggle('sticky', window.scrollY > 0)
    })

    const menuBtnElement = document.querySelector('.menu-btn');
    const navListElement = document.querySelector('.nav-list');
    const navListItemsElement = document.querySelectorAll('.nav-link');
    const scrollBtnElement = document.querySelector('.scrollToTop-btn');


    menuBtnElement.addEventListener('click', () =>{
        menuBtnElement.classList.toggle('active')
        navListElement.classList.toggle('active')
    })

    navListItemsElement.forEach(navItem => {
        navItem.addEventListener('click', ()=> {
            menuBtnElement.classList.remove('active');
            navListElement.classList.remove('active')
        })
    })

    window.addEventListener('scroll', () =>{
        scrollBtnElement.classList.toggle('active', window.scrollY > 500)
    })

    scrollBtnElement.addEventListener('click', ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })


    window.addEventListener('scroll', ()=>{
        let revealElement = document.querySelectorAll('.reveal');

        for(let i = 0; i < revealElement.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = revealElement[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint){
                revealElement[i].classList.add('active')
            }
        }
    });
})