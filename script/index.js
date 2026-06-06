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
    const body = document.querySelector('body')
    const borda = document.querySelector('.bruno');
    const home = document.querySelector('.home')
    const svg = document.querySelectorAll('.svg')
    const footer = document.querySelector('footer')

    borda.classList.toggle('borda')
    body.classList.toggle('darki')
    menu.classList.toggle('dark-menu')
    footer.classList.toggle('light-dark')

    aplicaTodos(document.querySelectorAll('section'), 'light-dark')
    aplicaTodos(document.querySelectorAll('h2'), 'h2') 
    aplicaTodos(document.querySelectorAll('.barra-externa'), 'light-dark')
    aplicaTodos(document.querySelectorAll('.card'), 'darki')
    aplicaTodos(document.querySelectorAll('.barra-interna'), 'bckl')
    aplicaTodos(document.querySelectorAll('.barra-lateral'), 'bckl')
    aplicaTodos(document.querySelectorAll('.instituicao'), 'h2')

    svg.forEach((e) => {
        console.log(e)
        if(cont % 2 === 0){
            let urlCorreta = e.src.replace('assets/', 'assets/laranja-')
            e.src = urlCorreta
        }else{
            let urlCorreta = e.src.replace('assets/laranja-', 'assets/')
            e.src = urlCorreta
        }
    })

    for(let e of menu.children){
        if(cont % 2 === 0){
            let urlCorreta = e.src.replace('imagens/', 'imagens/black-')
            e.src = urlCorreta
            document.querySelector('.flecha').src = 'imagens/orange-flecha.png' 
            document.querySelector('.cerebro').src = 'imagens/orange-brain.png'
        }
        else{
            let urlCorreta = e.src.replace('imagens/black-', 'imagens/')
            e.src = urlCorreta
            document.querySelector('.flecha').src = 'imagens/flecha-azul.png' 
            document.querySelector('.cerebro').src = 'imagens/blue-brain.png'
        }
    }
}

function aplicaTodos(elemento, classe){
    elemento.forEach((e) => {
        e.classList.toggle(`${classe}`)
    })
}
