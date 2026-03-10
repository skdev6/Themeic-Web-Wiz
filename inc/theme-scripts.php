<?php 
function web_wiz_scripts() {
	wp_enqueue_style( 'web-wiz-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_enqueue_style ('themeic-grid', get_template_directory_uri() . '/assets/css/themeic-grid.min.css', array(), _S_VERSION, null);
	wp_enqueue_style ('web-wiz', get_template_directory_uri() . '/assets/css/style.css', array(), _S_VERSION, null);

	wp_enqueue_script( 'gsap', get_template_directory_uri() . '/assets/js/gsap.min.js', array('jquery'), _S_VERSION, true );
	wp_enqueue_script( 'ScrollTrigger', get_template_directory_uri() . '/assets/js/ScrollTrigger.min.js', array('jquery'), _S_VERSION, true );
	wp_enqueue_script( 'SplitText', get_template_directory_uri() . '/assets/js/SplitText.min.js', array('jquery'), _S_VERSION, true );
	wp_enqueue_script( 'web-wiz-main', get_template_directory_uri() . '/assets/js/main.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'web_wiz_scripts' );

/**
 * Register Google Fonts
 */

function web_wiz_fonts_url() {

    $fonts_url = '';

    /*
    Translators: If there are characters in your language that are not supported
    by the chosen font(s), translate this to 'off'. Do not translate into your own language.
    */
    if ( 'off' !== _x( 'on', 'Google font: on or off', 'web-wiz' ) ) {

        $font_families = array();

        $font_families[] = 'Big Shoulders:opsz,wght@10..72,100..900';
        $font_families[] = 'Instrument Serif:ital@0;1';
        $font_families[] = 'Sora:wght@100..800';

        $query_args = array(
            'family'  => implode( '&family=', $font_families ),
            'display' => 'swap',
        );

        $fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css2' );
    }

    return esc_url_raw( $fonts_url );
}


function web_wiz_fonts_style() {

    wp_enqueue_style(
        'web-wiz-google-fonts',
        web_wiz_fonts_url(),
        array(),
        null
    );

}

add_action( 'wp_enqueue_scripts', 'web_wiz_fonts_style' );