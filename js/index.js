$(document).ready(function(){
    (function($) {
        $.fn.goTo = function() {
            $('html, body').animate({
                scrollTop: $(this).offset().top + 'px'
            }, 'fast');
            return this; 
        };
    })(jQuery);
    
    $('#about-me-btn').click(function(){
        $('#about-me').goTo();
    });
    
    $('#skills-btn').click(function(){
        $('#skills').goTo();
    });
    
    $('#portfolio-btn').click(function(){
        $('#portfolio').goTo();
    });

    $('.social-media-link').click(function(){
        var link = $(this).attr('data-link');
        window.location = link;
    });
    
    $('#resume-btn').click(function(){
        var link = $(this).attr('data-link');
        window.location = link;
    });
});