<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Web_Wiz
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function web_wiz_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'web_wiz_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function web_wiz_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'web_wiz_pingback_header' );

/**
 * Load template from Themeic Framework or fallback to theme template part.
 *
 * @param string $type Action hook name.
 * @param string $template_slug Template slug/path.
 * @return void
 */
function web_wiz_get_header_template( $template_slug = 'template-parts/content-header' ) {
    if ( class_exists( 'Themeic\\Framework\\Base' ) ) {
        do_action(
            'themeic_header_builder',
            array(
                'default' => $template_slug,
            )
        );
    } else {
        get_template_part( $template_slug );
    }
}

function web_wiz_get_footer_template( $template_slug = 'template-parts/footer/default' ) {
    if ( class_exists( 'Themeic\\Framework\\Base' ) ) {
        do_action(
            'themeic_footer_builder',
            array(
                'default' => $template_slug,
            )
        );
    } else {
        get_template_part( $template_slug );
    }
}

function web_wiz_get_single_template( $template_slug = 'template-parts/content-post' ) { 
    if ( class_exists( 'Themeic\\Framework\\Base' ) ) {
        do_action(
            'themeic_single_builder',
            array(
                'default' => $template_slug,
            )
        );
    } else {
        get_template_part( $template_slug );
    }
}

function web_wiz_get_archive_template( $template_slug = 'template-parts/content-blog' ) {
    if ( class_exists( 'Themeic\\Framework\\Base' ) ) {
        do_action(
            'themeic_archive_builder',
            array(
                'default' => $template_slug,
            )
        );
    } else {
        get_template_part( $template_slug );
    }
}