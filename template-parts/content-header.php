<?php
/**
 * Header Template
 *
 * @package Web_Wiz
 */

$logo_light         = web_wiz_option( 'header_logo_light' );
$logo_dark          = web_wiz_option( 'header_logo_dark' );
$navbar_responsive  = web_wiz_option( 'header-nav-responsive-show-hide' );
$call_to_btns       = web_wiz_option( 'header-call-to-btns' );
$is_copy            = web_wiz_option( 'is-header-copy-text' );
$burger_menu        = web_wiz_option( 'burger_menu_show_hide' );
$header_btns        = web_wiz_option( 'header_btns_show_hide' );
$color_mode_res     = web_wiz_option( 'header_color_mode_show_hide' );
$is_copy_custom     = web_wiz_option( 'is-header-custom-copy-text' );

$logo_light = ( is_array( $logo_light ) && ! empty( $logo_light['url'] ) )
    ? $logo_light['url']
    : get_template_directory_uri() . '/assets/img/logo-light.svg';

$logo_dark = ( is_array( $logo_dark ) && ! empty( $logo_dark['url'] ) )
    ? $logo_dark['url']
    : get_template_directory_uri() . '/assets/img/logo.svg';

$navbar_responsive = is_array( $navbar_responsive ) ? implode( ' ', $navbar_responsive ) : 'd-none d-lg-flex';
$burger_menu       = is_array( $burger_menu ) ? implode( ' ', $burger_menu ) : 'd-lg-none';
$header_btns       = is_array( $header_btns ) ? implode( ' ', $header_btns ) : '';
$color_mode_res    = is_array( $color_mode_res ) ? implode( ' ', $color_mode_res ) : '';

$site_name = get_bloginfo( 'name' );
?>

<header class="themeic__header header-area-wrap hide-hover-overlay fixed-header">
    <div class="header-overlay"></div>

    <div class="header-area header-py">
        <div class="header-container d-flex align-items-center">

            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo" aria-label="<?php echo esc_attr( $site_name ); ?>">
                <img
                    class="th-show-light"
                    src="<?php echo esc_url( $logo_dark ); ?>"
                    alt="<?php echo esc_attr( $site_name ); ?>"
                    loading="lazy"
                >
                <img
                    class="th-show-dark"
                    src="<?php echo esc_url( $logo_light ); ?>"
                    alt="<?php echo esc_attr( $site_name ); ?>"
                    loading="lazy"
                >
            </a>

            <?php if ( has_nav_menu( 'primary-menu' ) ) : ?>
                <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'primary-menu',
                        'container'      => false,
                        'menu_class'     => 'header-navbar nav-style-rounded navbar-abs-center bg-on-base ml-auto mr-auto ' . esc_attr( $navbar_responsive ),
                        'fallback_cb'    => false,
                    )
                );
                ?>
            <?php endif; ?>

            <div class="ml-auto d-flex align-items-center gap-x-53">

                <?php if ( is_array( $call_to_btns ) && ! empty( $call_to_btns['redux_repeater_data'] ) ) : ?>
                    <div class="btn-grp-wrap <?php echo esc_attr( $header_btns ); ?>">
                        <?php foreach ( $call_to_btns['redux_repeater_data'] as $key => $btn ) : ?>
                            <?php
                            $btn_name  = ! empty( $call_to_btns['header-call-to-btn-name'][ $key ] ) ? $call_to_btns['header-call-to-btn-name'][ $key ] : '';
                            $btn_url   = ! empty( $call_to_btns['header-call-to-btn-url'][ $key ] ) ? $call_to_btns['header-call-to-btn-url'][ $key ] : '#';
                            $btn_style = ! empty( $call_to_btns['header-call-to-btn-style'][ $key ] ) ? $call_to_btns['header-call-to-btn-style'][ $key ] : '';
                            ?>
                            <a href="<?php echo esc_url( $btn_url ); ?>" class="th-btn <?php echo esc_attr( $btn_style ); ?>">
                                <i class="themeic-icon-agnle-right themeic-icon-after" aria-hidden="true"></i>
                                <span class="btn-text">
                                    <span class="word"><?php echo esc_html( $btn_name ); ?></span>
                                </span>
                            </a>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>

                <button
                    type="button"
                    class="btn-theme-toggle th-text-primary <?php echo esc_attr( $color_mode_res ); ?>"
                    aria-label="<?php echo esc_attr__( 'Toggle color mode', 'web-wiz' ); ?>"
                >
                    <span class="tgl-icon d-flex">
                        <i class="themeic-icon-color-mode th-icon" aria-hidden="true"></i>
                    </span>
                </button>

                <?php if ( ! empty( $is_copy ) ) : ?>
                    <div class="header-copyright th-text-secondary d-none d-lg-block">
                        <?php
                        if ( 'cusom' === $is_copy_custom ) {
                            $copy_text = web_wiz_option( 'header-copy-text' );

                            if ( ! empty( $copy_text ) ) {
                                echo wp_kses_post( $copy_text );
                            }
                        } else {
                            echo esc_html( '© ' . wp_date( 'Y' ) );
                        }
                        ?>
                    </div>
                <?php endif; ?>

                <div class="toggle-btn-wrap <?php echo esc_attr( $burger_menu ); ?>">
                    <div class="toggle-btn-inner">
                        <button type="button" class="btn-menu-toggle with-border" aria-expanded="false" aria-label="<?php echo esc_attr__( 'Toggle menu', 'web-wiz' ); ?>">
                            <span class="menu-text">
                                <span class="open"><?php esc_html_e( 'Menu', 'web-wiz' ); ?></span>
                                <span class="close"><?php esc_html_e( 'Close', 'web-wiz' ); ?></span>
                            </span>
                            <span class="menu-line2"></span>
                        </button>
                    </div>
                </div>

            </div>

            <div class="burger-menu-overlay"></div>

            <div class="themeic-burger-navbar-wrap">
                <div class="burger-menu-inner">

                    <div class="burger-menu-header d-flex align-items-center justify-content-between">
                        <span class="menu-text th-text-muted d-block"><?php esc_html_e( 'Menu', 'web-wiz' ); ?></span>
                        <span class="btn-pos"></span>
                    </div>

                    <?php if ( has_nav_menu( 'hamburger-menu' ) ) : ?>
                        <?php
                        wp_nav_menu(
                            array(
                                'theme_location' => 'hamburger-menu',
                                'container'      => false,
                                'menu_class'     => 'burger-navbar',
                                'fallback_cb'    => false,
                            )
                        );
                        ?>
                    <?php endif; ?>

                    <div class="burger-menu-footer">

                        <div class="footer-info th-text-primary d-block">
                            <?php
                            $burger_footer_text = web_wiz_option( 'header_burger_footer_text' );

                            if ( ! empty( $burger_footer_text ) ) {
                                echo wp_kses_post( $burger_footer_text );
                            }
                            ?>
                        </div>

                        <?php
                        $social_media = web_wiz_option( 'header_burger_social_media' );

                        if ( is_array( $social_media ) && ! empty( $social_media['redux_repeater_data'] ) ) :
                            ?>
                            <ul class="social-icons">
                                <?php foreach ( $social_media['redux_repeater_data'] as $key => $media ) : ?>
                                    <?php
                                    $social_name = ! empty( $social_media['themeic-social-icon'][ $key ] ) ? $social_media['themeic-social-icon'][ $key ] : '';
                                    $social_url  = ! empty( $social_media['themeic-social-url'][ $key ] ) ? $social_media['themeic-social-url'][ $key ] : '#';
                                    ?>
                                    <li>
                                        <a href="<?php echo esc_url( $social_url ); ?>" target="_blank" rel="noopener noreferrer">
                                            <i class="<?php echo esc_attr( $social_name ); ?>" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        <?php endif; ?>

                    </div>
                </div>
            </div>

        </div>
    </div>
</header>