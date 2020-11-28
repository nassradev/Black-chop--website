let menuButton = document.querySelectorAll('.button')

menuButton.forEach(function(button){
button.addEventListener('click', function(e){
    e.preventDefault()
    function openMenu (){
        window.open('./files/BlackChopMenu.pdf')
    }
    openMenu()
})
})

