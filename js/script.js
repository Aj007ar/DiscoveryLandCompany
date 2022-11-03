const toggleButton=document.getElementsByClassName('toggle-button')[0]
const Links=document.getElementsByClassName('headerright')[0]

toggleButton.addEventListener('click',()=>{
    Links.classList.toggle('active')
})