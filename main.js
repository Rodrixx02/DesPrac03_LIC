$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['inicio','presentacion','productos','galeria','contacto'],
        menu: '#menu',
        navigation: true, 
        navigationPosition: 'right',
        scrollingSpeed: 700,

        //funcion que se activa cada vez que avanzamos a sig secc
        onLeave: function(index, nextIndex, direction) {

            $('body').removeClass('glitch-tansicion');

            if (index == 1 || nextIndex == 1) { 
                $('body').addClass('glitch-tansicion');
                setTimeout(function() {
                    $('body').removeClass('glitch-tansicion');
                }, 700); 
            } else {
                
                $('.section').eq(nextIndex - 1).find('.container-sm').hide();
            }
        },
            
        afterLoad: function(anchorLink, index) {
            if (index !== 1) {
                
                $('.section').eq(index - 1).find('.container-sm').fadeIn(800);
            }
        },

        controlArrows: true,

        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            
            $('.section').eq(index - 1).find('.slide').eq(nextSlideIndex).find('.container-sm').hide();
        },
        
        
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
        
            $('.section').eq(index - 1).find('.slide').eq(slideIndex).find('.container-sm').fadeIn(800);
        }
    });
});