<?php
/**
 * Get theme option from Themeic Framework or Redux fallback.
 *
 * @param string $key Option key.
 * @param mixed  $default Default value if option is not found.
 * @return mixed
 */
function web_wiz_option( $key, $default = false ) {
    if ( empty( $key ) ) {
        return $default;
    }

    if ( function_exists( 'get_themeic_framework_option' ) ) {
        $value = get_themeic_framework_option( $key );

        return $value ? $value : $default;
    }

    if ( class_exists( 'Redux' ) ) {
        $value = Redux::get_option( 'themeic_theme_settings', $key );

        return null !== $value ? $value : $default;
    }

    return $default;
}

function web_wiz_meta( $field, $id = null, $default = false ) {
    if ( empty( $field ) || ! is_string( $field ) ) {
        return $default;
    }

    // Resolve ID: use passed value or current post
    if ( $id === null ) {
        $id = get_the_ID();
    }

    if ( empty( $id ) || ! is_numeric( $id ) ) {
        return $default;
    }

    $id = absint( $id );   // safer than (int)

    if ( function_exists( 'get_themeic_framework_meta' ) ) {
        return get_themeic_framework_meta( $field, $id );
    }

    if(get_post_meta( $id, $field, true )){
        return get_post_meta( $id, $field, true );
    }
    return $default;
}

function web_wiz_init_before_pt(){
    $is_ajax_page_transition = web_wiz_option("is_ajax_page_transition");

    if($is_ajax_page_transition){
        $pt_slug = '';
        $current_page = get_queried_object();
        if ( isset( $current_page->post_name ) ) {
            $pt_slug = $current_page->post_name;
        }
        echo '<div data-themeic-ajax-template="wrap"><div data-themeic-ajax-template="container" data-themeic-ajax-template-namespace="'. $pt_slug .'">';
    }
}
function web_wiz_init_after_pt(){
    $is_ajax_page_transition = web_wiz_option("is_ajax_page_transition");

    if($is_ajax_page_transition) echo '</div></div>';
}
/**
 * Renders an inline SVG or a standard image tag fallback.
 *
 * @param string $image_url  The public URL of the image/SVG.
 * @param string $class_name Optional. CSS classes to apply to the element.
 * @param string $alt_text   Optional. Alternative text for image tags.
 * @return void
 */
function web_wiz_renderSvgImage( $image_url, $class_name = '', $alt_text = '' ) {
    if ( empty( $image_url ) ) {
        return;
    }

    // 1. Check if file is an SVG
    $path_ext = pathinfo( parse_url( $image_url, PHP_URL_PATH ), PATHINFO_EXTENSION );
    $is_svg   = ( strtolower( $path_ext ) === 'svg' );

    if ( $is_svg ) {
        // 2. Convert public URL to absolute local server path
        $upload_dir = wp_upload_dir();
        $server_path = str_replace( $upload_dir['baseurl'], $upload_dir['basedir'], $image_url );

        // 3. Output inline SVG if file exists
        if ( file_exists( $server_path ) ) {
            $svg_content = file_get_contents( $server_path );
            
            if ( ! empty( $class_name ) ) {
                $svg_content = str_replace( '<svg', '<svg class="' . esc_attr( $class_name ) . '"', $svg_content );
            }
            
            echo $svg_content;
            return;
        }
    }

    // 4. Fallback for non-SVGs or missing files
    $class_attr = ! empty( $class_name ) ? ' class="' . esc_attr( $class_name ) . '"' : '';
    $alt_attr   = ! empty( $alt_text ) ? ' alt="' . esc_attr( $alt_text ) . '"' : ' alt=""';
    
    echo '<img' . $class_attr . ' src="' . esc_url( $image_url ) . '"' . $alt_attr . ' loading="lazy">';
}
