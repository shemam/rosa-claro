(function(){
    'use strict'

    var menuButton = document.getElementById('menu-button');
    var nav = document.getElementById('nav');

    menuButton.addEventListener('click', function(){
        nav.classList.add('nav--visible');
    });

})()