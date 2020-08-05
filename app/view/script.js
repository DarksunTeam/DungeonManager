let menu = document.querySelectorAll( '#menu-buttons > .menu-button' );

menu.forEach( ( button, key ) => {
    button.addEventListener( 'click', function( ) {
        menu.forEach( ( button ) => { button.classList.remove('menu-button-selected') });
        this.classList.add('menu-button-selected');
    });
});
