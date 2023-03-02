var slideIndex = 1;

function showImage(n) { // for Display the first Image
    
    'use strict';
    
    var slide = document.getElementsByClassName('slides'),
        
        dots = document.getElementsByClassName('dots'),
        
        i;
    
    if (n > slide.length) { // to prevent larger values than the slide length
        
        slideIndex = 1;
    }
    
    if (n < 1) { // to avoide negative values
        
        slideIndex = slide.length;
    }
    
    for (i = 0; i < slide.length; i++) { // to make other images dispaly: none
        
        slide[i].style.display = 'none';
    }
    slide[slideIndex - 1].style.display = 'block';
    
    for (i = 0; i < dots.length; i++) { // to remove the active class from other dots
        
        dots[i].className = dots[i].className.replace(' active', '');
    }
    
    dots[slideIndex - 1].className += ' active';
}

showImage(slideIndex);

function plusIndex(n) { // for Next & Prev Actions
    
    'use strict';
    
    showImage(slideIndex += n);
}

function currentSlide(n) { // for Slide Bullets Selection
    
    'use strict';
    
    showImage(slideIndex = n);
}