const button = document.getElementById('button')
const form = document.getElementById('form')

button.addEventListener('click', run=()=>{
    if(form.style.display === 'none'){
        form.style.display = 'block'
        form.className = 'animation'
    }
    else{
        form.style.display = 'none'
    }
})

document.addEventListenere('click', run = ()=>{
    if(form.style.display === 'block'){
        form.style.display = 'none'

    }
    else{
        form.style.display = 'block'
    }

})