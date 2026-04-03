<header class="themeic__header header-area-wrap fixed-header">
    <div class="header-overlay"></div>
    <div class="header-area">
        <div class="header-container d-flex align-items-center">
            <a href="#" class="logo">
                <img class="th-show-light" class="" src="../assets/img/logo.svg" alt="">
                <img class="th-show-dark" class="" src="../assets/img/logo-light.svg" alt="">
            </a>
            <?php 
                if(has_nav_menu('primary-menu')){
                    wp_nav_menu(array(
                        'theme_location'=>'primary-menu',
                        'container'=>'ul',
                        'menu_class'=>'header-navbar ml-space-12 d-xl-flex d-none'
                    ));
                }
            ?>
            <!-- <ul class="header-navbar ml-space-12 d-xl-flex d-none">
                <li>
                    <a href="#">Home</a>
                    <ul class="sub-menu">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a>
                            <ul class="sub-menu">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a>
                                    <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a>
                                <li><a href="#">Contact</a>
                                <li><a href="#">Contact</a>
                                <li><a href="#">Contact</a>
                                <ul class="sub-menu">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a>
                                
                                </li>
                            </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul> -->
            <div class="ml-auto mr-space-12 gap-x-53 d-flex align-items-center">
                <div class="header-copyright th-text-secondary d-none d-lg-block">© 2026</div>
                <button class="btn-theme-toggle th-text-primary">
                    <span class="tgl-icon d-flex">
                        <i class="themeic-icon-color-mode th-icon"></i>
                    </span>
                </button>
            </div>
            <div class="toggle-btn-wrap">
                <div class="toggle-btn-inner">
                    <button class="btn-menu-toggle with-border">
                        <span class="menu-text">
                            <span class="open">Menu</span>
                            <span class="close">Close</span>
                        </span> 
                        <span class="menu-line2"></span>
                    </button>
                </div>
            </div>
            <div class="burger-menu-overlay"></div>
            <div class="themeic-burger-navbar-wrap">
                <div class="burger-menu-inner">
                    <div class="burger-menu-header d-flex align-items-center justify-content-between">
                        <span class="menu-text th-text-muted d-block">Menu</span>
                        <span class="btn-pos"></span>
                    </div>
                    <?php 
                        if(has_nav_menu('hamburger-menu')){
                            wp_nav_menu(array(
                                'theme_location'=>'hamburger-menu',
                                'container'=>'ul',
                                'menu_class'=>'burger-navbar'
                            ));
                        }
                    ?>
                    <div class="burger-menu-footer">
                        <p class="footer-info th-text-primary d-block">
                            <span class="th-text-muted d-block">Our Office are open 07AM - 22PM</span>
                            Monday - Friday
                        </p>
                        <ul class="social-icons">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>