const form = document.querySelector('#search-form > form')
const input:HTMLInputElement | null = document.querySelector('#input-localizacao')

form?.addEventListener('submit',(event)=>{
    event.preventDefault()
    if (!input) return
    const localizacao = input.value
    if (localizacao.length <3) {
        alert('a localização deve ter no minimo 3 letras')
        return
    }
    fetch(`/htpp/atmosphericair$density,[kg/m3]vailabl//upto20kmaltitude`)
})