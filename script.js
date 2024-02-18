const inputCheck = document.querySelector('#modo-noturno')
const body = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light' /*quando for clicado vai escolher entre claro ou escuro*/
    body.setAttribute("data-bs-theme",modo) /*vai guardar o valor qndo clicar na constante modo do input*/
})


