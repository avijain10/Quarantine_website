var menu= document.getElementById('menu')
var nav = document.getElementById('nav')
var bcircle = document.getElementById('bcircle')

menu.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile')
})

bcircle.addEventListener('click', function(e){
    nav.classList.add('hide-mobile')
})