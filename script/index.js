const menu = document.querySelector('.cabecalho')
let cont = 1;

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
    cont++
    const main = document.querySelector('.principal')
    const borda = document.querySelector('.bruno');
    const home = document.querySelector('.home')

    borda.classList.toggle('borda')
    main.classList.toggle('darki')
    menu.classList.toggle('dark-menu')

    aplicaTodos(document.querySelectorAll('section'), 'light-dark')
    aplicaTodos(document.querySelectorAll('h2'), 'h2') 
    aplicaTodos(document.querySelectorAll('.barra-externa'), 'light-dark')
    aplicaTodos(document.querySelectorAll('.card'), 'darki')
    aplicaTodos(document.querySelectorAll('.barra-interna'), 'bckl')
    aplicaTodos(document.querySelectorAll('.barra-lateral'), 'bckl')
    aplicaTodos(document.querySelectorAll('.instituicao'), 'h2')

    for(let e of menu.children){
        if(cont % 2 === 0){
            let urlCorreta = e.src.replace('http://127.0.0.1:5500/imagens/', 'http://127.0.0.1:5500/imagens/black-')
            e.src = urlCorreta
            document.querySelector('.flecha').src = 'http://127.0.0.1:5500/imagens/orange-flecha.png' 
            document.querySelector('.cerebro').src = 'http://127.0.0.1:5500/imagens/orange-brain.png'
        }
        else{
            let urlCorreta = e.src.replace('http://127.0.0.1:5500/imagens/black-', 'http://127.0.0.1:5500/imagens/')
            e.src = urlCorreta
            document.querySelector('.flecha').src = 'http://127.0.0.1:5500/imagens/flecha-azul.png' 
            document.querySelector('.cerebro').src = 'http://127.0.0.1:5500/imagens/blue-brain.png'
        }
    }
}

function aplicaTodos(elemento, classe){
    elemento.forEach((e) => {
        e.classList.toggle(`${classe}`)
    })
}
