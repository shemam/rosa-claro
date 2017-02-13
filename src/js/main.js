(function(){
    'use strict'

    var menuButton = document.getElementById('menu-button');
    var menuButtonClose = document.getElementById('menu-button-close');
    var nav = document.getElementById('nav');

    menuButton.addEventListener('click', function(){
        nav.classList.add('nav--visible');
    });

    menuButtonClose.addEventListener('click', function(){
        nav.classList.remove('nav--visible');
    });

})()