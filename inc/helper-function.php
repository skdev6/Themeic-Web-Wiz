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

function web_wiz_meta( $field, $id = null ) {
    if ( empty( $field ) || ! is_string( $field ) ) {
        return false;
    }

    // Resolve ID: use passed value or current post
    if ( $id === null ) {
        $id = get_the_ID();
    }

    if ( empty( $id ) || ! is_numeric( $id ) ) {
        return false;
    }

    $id = absint( $id );   // safer than (int)

    if ( function_exists( 'get_themeic_framework_meta' ) ) {
        return get_themeic_framework_meta( $field, $id );
    }

    return get_post_meta( $id, $field, true );
}