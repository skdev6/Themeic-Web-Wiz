;(function($){
    $('.btn-theme-toggle').on('click', function(){
        $('html').toggleClass('light-mode');
    });

    $('.themeic-sub-menu-slide').each(function(){
        addSubMenuSlide($(this));
    })

    function addSubMenuSlide(menuWrap){
        let subMenu = menuWrap.find('.sub-menu');
        let menuItem = subMenu.parent('li');
        
    } 

    $('.header-navbar > li > .sub-menu').parent('li').hover(function(){
        $(this).closest('.header-area-wrap').addClass('active-sub-menu');
    }, function(){
        $(this).closest('.header-area-wrap').removeClass('active-sub-menu');
    })
    $('.header-navbar .sub-menu').each(function(){
        $(this).find('> li').each(function(index){
            $(this).css('--index', index);
        })
    });
    $('.themeic__header .sub-menu').parent('li').find('> a').each(function(){
         
    });

})(jQuery);