<ul class="breadcrumb mr-auto text-md ml-0">

    <!-- Home Link (only show if not on homepage) -->
    <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php _e( 'Home', 'web-wiz' ); ?></a></li>

    <?php
    // Build hierarchical breadcrumbs with parent pages
    if ( is_page() || ( is_singular() && ! is_singular( 'post' ) ) ) {

        $ancestors = get_post_ancestors( get_queried_object_id() );
        $ancestors = array_reverse( $ancestors ); // Show from top parent to immediate parent

        foreach ( $ancestors as $ancestor_id ) {
            echo '<li><a href="' . esc_url( get_permalink( $ancestor_id ) ) . '">' . 
                 esc_html( get_the_title( $ancestor_id ) ) . '</a></li>';
        }

        // Current page (not linked)
        echo '<li>' . esc_html( get_the_title() ) . '</li>';

    } 
    // For Single Posts (you can customize category or parent page here if needed)
    elseif ( is_singular( 'post' ) ) {

        // Optional: Show Category instead of just post title
        $categories = get_the_category();
        if ( ! empty( $categories ) ) {
            $cat = $categories[0];
            echo '<li><a href="' . esc_url( get_category_link( $cat->term_id ) ) . '">' . 
                 esc_html( $cat->name ) . '</a></li>';
        }

        echo '<li>' . esc_html( get_the_title() ) . '</li>';

    } 
    // Archives, Search, 404 etc.
    else {
        echo '<li>' . get_the_title(get_queried_object_id()) . '</li>';
    }

    // Pagination support (Page 2 of 5, etc.)
    if ( is_paged() ) {
        $current_page = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : get_query_var( 'page' );
        if ( $current_page > 1 ) {
            echo '<li class="breadcrumb-pagination">' . 
                 sprintf( __( 'Page %d', 'web-wiz' ), $current_page ) . 
                 '</li>';
        }
    }
    ?>

</ul>