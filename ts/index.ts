const form = document.querySelector('#search-form > form')
const input:HTMLInputElement | null = document.querySelector('#input-localizacao')

form?.addEventListener('submit',(event)=>{
    event.preventDefault()
    if (!input) return
    const localizacao = input.value
})