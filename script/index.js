const menu = document.querySelector('.cabecalho')

document.addEventListener('scroll', (e) => {
    if(window.scrollY > 80){
        menu.style.position = "fixed";
        menu.style.top = "0";
        menu.style.width = "100%";
    }else{
        menu.style.position = "static"
    }
})