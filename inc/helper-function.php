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