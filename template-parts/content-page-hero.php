<?php
/**
 * Page Hero Section
 */
$post_id = get_queried_object_id(); 

// apply_filters( 'web_wiz_elementor_page_title', true ) &&  || web_wiz_meta('is_themeic_hero', $post_id, true)

if (web_wiz_meta('is_themeic_hero', $post_id, true) === '1') :

// Get custom hero title from meta 

$hero_title = web_wiz_meta( 'hero_custom_title', $post_id);

// Fallback logic for hero title
if ( empty( $hero_title ) ) {
    if ( is_home() ) {
        $hero_title = __( 'Our Blogs', 'web-wiz' );
    } 
    elseif ( is_singular() ) {
        $hero_title = get_the_title();
    } 
    elseif ( is_archive() ) {
        $hero_title = get_the_archive_title();
    } 
    elseif ( is_search() ) {
        $hero_title = sprintf( __( 'Search Results for: %s', 'web-wiz' ), get_search_query() );
    } 
    else {
        $hero_title = get_the_title(); // fallback
    }
}
?>

<section class="page-hero has-abs-header">
    <div class="container-fluid">
        <h2 class="title display-h1 text-center">
            <?php echo wp_kses_post( $hero_title ); ?>
        </h2>

        <div class="d-flex flex-wrap align-items-center gap-4 gap-y-2"> 
            <p class="text-md mb-0 mr-auto">
                &copy; <?php echo date('Y'); ?> Web Wiz
            </p>
            <?php get_template_part('template-parts/content', 'breadcrumb');  ?>
            <ul class="social-icons">
                <li><a href="#" aria-label="Facebook"><i class="themeic-icon-facebook"></i></a></li>
                <li><a href="#" aria-label="YouTube"><i class="themeic-icon-youtube"></i></a></li>
                <li><a href="#" aria-label="Instagram"><i class="themeic-icon-instagram"></i></a></li>
                <li><a href="#" aria-label="X (Twitter)"><i class="themeic-icon-x"></i></a></li>
            </ul>
        </div>
    </div>
</section>

<?php endif; ?>