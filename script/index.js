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

function mudarTema(evento){
    const main = document.querySelector('.principal')

    aplicaTodos(document.querySelectorAll('section'), 'light-dark')
    aplicaTodos(document.querySelectorAll('h2'), 'h2') 
    aplicaTodos(document.querySelectorAll('.barra-externa'), 'light-dark')
    aplicaTodos(document.querySelectorAll('.card'), 'darki')
    aplicaTodos(document.querySelectorAll('.barra-interna'), 'bckl')


    main.classList.toggle('darki')
    menu.classList.toggle('dark-menu')
}

function aplicaTodos(elemento, classe){
    elemento.forEach((e) => {
        e.classList.toggle(`${classe}`)
    })
}