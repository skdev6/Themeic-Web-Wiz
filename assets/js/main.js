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


})(jQuery);