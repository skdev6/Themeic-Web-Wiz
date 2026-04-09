;(function ($) {
    'use strict';

    function init_header($scope) {
        if (!$scope.length || $scope.hasClass('header-initialized')) {
            return;
        }

        $scope.addClass('header-initialized');

        let btnThemeToggle  = $scope.find('.btn-theme-toggle');
        let btnBurgerToggle = $scope.find('.btn-menu-toggle');
        let toggleBtnInner  = btnBurgerToggle.closest('.toggle-btn-inner');
        let burgerMenu      = $scope.find('.themeic-burger-navbar-wrap');
        let burgerOverlay   = $scope.find('.burger-menu-overlay');

        let burgerInitial = {};
        let isBurgerOpen = false;

        // Theme Toggle
        btnThemeToggle.off('click.themeicHeader').on('click.themeicHeader', function () {
            $('html').toggleClass('light-mode');
        });

        // Desktop Submenu Hover (only on hover-supported devices)
        if (window.matchMedia('(hover: hover)').matches && !$scope.hasClass('hide-hover-overlay')) {
            $scope.find('.header-navbar > li > .sub-menu')
                .parent('li')
                .off('mouseenter.themeicHeader mouseleave.themeicHeader')
                .on('mouseenter.themeicHeader', function () {
                    $(this).closest('.header-area-wrap').addClass('active-sub-menu');
                })
                .on('mouseleave.themeicHeader', function () {
                    $(this).closest('.header-area-wrap').removeClass('active-sub-menu');
                });
        }

        // Set submenu item animation index
        $scope.find('.header-navbar .sub-menu').each(function () {
            $(this).children('li').each(function (index) {
                $(this).css('--index', index);
            });
        });

        // Add submenu toggles only once
        $scope.find('.burger-navbar li > .sub-menu').parent('li').each(function () {
            if (!$(this).children('.sub-menu-toggle').length) {
                $(this).append('<span class="plusminus-icon sub-menu-toggle"></span>');
            }
        });

        // Set burger menu initial position
        function set_burger_pos() {
            let toggleWrap = $scope.find('.toggle-btn-wrap');

            if (!toggleWrap.length || !burgerMenu.length) {
                return;
            }

            let toggleOffset = toggleWrap.offset();
            if (!toggleOffset) {
                return;
            }

            let menuWidth = burgerMenu.outerWidth() || 1;
            let menuHeight = burgerMenu.outerHeight() || 1;
            let toggleWidth = toggleWrap.outerWidth() || 1;
            let toggleHeight = toggleWrap.outerHeight() || 1;

            burgerInitial.left = window.innerWidth - toggleOffset.left - toggleWidth;
            burgerInitial.top = toggleOffset.top;
            burgerInitial.scaleX = toggleWidth / menuWidth;
            burgerInitial.scaleY = toggleHeight / menuHeight;

            if (burgerMenu.hasClass('open')) {
                return;
            }

            burgerMenu.css({
                '--initial-top': burgerInitial.top + 'px',
                '--initial-right': burgerInitial.left + 'px'
            });

            gsap.set(burgerMenu, {
                scaleX: burgerInitial.scaleX,
                scaleY: burgerInitial.scaleY
            });
        }

        // Set dynamic submenu icon height
        function setDynamicSubMenuIcon() {
            $scope.find('.burger-navbar li > .sub-menu').parent('li').each(function () {
                let link = $(this).children('a');
                let icon = $(this).children('.plusminus-icon');

                if (!link.length || !icon.length) {
                    return;
                }

                gsap.set(icon, {
                    '--height': link.outerHeight() + 'px'
                });
            });
        }

        set_burger_pos();
        setDynamicSubMenuIcon();

        // Reset initial state for stagger items
        let burgerStaggerItems = burgerMenu.find('.burger-menu-header, .burger-navbar > li, .burger-menu-footer');

        if (burgerStaggerItems.length) {
            gsap.set(burgerStaggerItems, {
                opacity: 0,
                y: 10
            });
        }

        // Burger Open
        function burgerOpen() {
            if (!burgerMenu.length) {
                return;
            }

            isBurgerOpen = true;

            let toggleX = burgerMenu.css('--toggle-btn-x') || 0;
            let toggleY = burgerMenu.css('--toggle-btn-y') || 0;
            let top = burgerMenu.css('--top') || '0px';
            let right = burgerMenu.css('--right') || '0px';

            burgerMenu.addClass('open');

            gsap.killTweensOf([burgerMenu[0], burgerOverlay[0], toggleBtnInner[0], burgerStaggerItems.toArray()]);

            gsap.to(burgerMenu, {
                '--initial-top': top,
                '--initial-right': right,
                ease: 'expo.out',
                delay: 0.1,
                scaleX: 1,
                scaleY: 1,
                duration: 0.6
            });

            gsap.to([burgerOverlay[0], burgerMenu[0]], {
                autoAlpha: 1,
                duration: 0.3
            });

            if (burgerStaggerItems.length) {
                gsap.to(burgerStaggerItems, {
                    opacity: 1,
                    y: 0,
                    ease: 'expo.out',
                    stagger: 0.1,
                    duration: 0.5
                });
            }

            if (toggleBtnInner.length) {
                gsap.to(toggleBtnInner, {
                    x: toggleX,
                    y: toggleY,
                    ease: 'expo.out',
                    duration: 0.5
                });
            }
        }

        // Burger Close
        function burgerClose() {
            if (!burgerMenu.length) {
                return;
            }

            isBurgerOpen = false;

            gsap.killTweensOf([burgerMenu[0], burgerOverlay[0], toggleBtnInner[0], burgerStaggerItems.toArray()]);

            gsap.to(burgerMenu, {
                '--initial-top': (burgerInitial.top || 0) + 'px',
                '--initial-right': (burgerInitial.left || 0) + 'px',
                ease: 'expo.out',
                scaleX: burgerInitial.scaleX || 1,
                scaleY: burgerInitial.scaleY || 1,
                duration: 0.5
            });

            gsap.to(burgerMenu, {
                autoAlpha: 0,
                duration: 0.3,
                delay: 0.2
            });

            gsap.to(burgerOverlay, {
                autoAlpha: 0,
                duration: 0.4
            });

            if (toggleBtnInner.length) {
                gsap.to(toggleBtnInner, {
                    x: 0,
                    y: 0,
                    ease: 'expo.out',
                    duration: 0.4
                });
            }

            if (burgerStaggerItems.length) {
                gsap.to(burgerStaggerItems, {
                    opacity: 0,
                    y: 10,
                    ease: 'expo.out',
                    stagger: 0.02,
                    duration: 0.25
                });
            }

            burgerMenu.removeClass('open');
        }

        // Burger Toggle Click
        btnBurgerToggle.off('click.themeicHeader').on('click.themeicHeader', function (e) {
            e.preventDefault();

            if (isBurgerOpen) {
                $(this).removeClass('active');
                burgerClose();
            } else {
                $(this).addClass('active');
                burgerOpen();
            }
        });

        // Overlay Click
        burgerOverlay.off('click.themeicHeader').on('click.themeicHeader', function () {
            burgerClose();
            btnBurgerToggle.removeClass('active');
        });

        // Delegated submenu toggle click
        $scope.off('click.themeicHeaderSubmenu', '.sub-menu-toggle').on('click.themeicHeaderSubmenu', '.sub-menu-toggle', function (e) {
            e.preventDefault();

            let $toggle = $(this);
            let $parent = $toggle.parent('li');
            let $submenu = $parent.children('.sub-menu');

            $toggle.toggleClass('active');
            $submenu.stop(true, true).slideToggle(200);
        });

        // Namespaced resize handler
        $(window)
            .off('resize.themeicHeader')
            .on('resize.themeicHeader', function () {
                set_burger_pos();
                setDynamicSubMenuIcon();
            });
    }

    // Normal init
    $('.header-area-wrap').each(function(){
        init_header($(this));
    })


})(jQuery);