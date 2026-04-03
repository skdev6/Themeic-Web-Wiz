<?php
$section_title = web_wiz_option( 'blog_page_section_title' );
$section_sub_title = web_wiz_option( 'blog_page_section_sub_title' );

if ( empty( $section_title ) || !$section_title) {
    $section_title = __( 'Hyper frame offers more than you’d Blogs.', 'web-wiz' );
}
if ( empty( $section_sub_title ) || !$section_sub_title) {
    $section_sub_title = __( '(Our Blogs)', 'web-wiz' );
}
?>

<section class="sec-space-y bg-grd-muted sec-rounded">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">

                <div class="sec-title d-flex flex-wrap gap-2 align-items-center justify-content-between title-h3 auto-title-space">
                    <h2 class="title-h3 max-w-550 mb-0"><?php echo esc_html( $section_title ); ?></h2>
                    <span class="th-text-secondary text-sora text-lg"><?php echo esc_html( $section_sub_title ); ?></span>
                </div>

                <?php if ( have_posts() ) : ?>
                    <div class="row post-row-wrap">
                        <?php
                        while ( have_posts() ) :
                            the_post();
                            get_template_part( 'template-parts/loop', 'post' );
                        endwhile;
                        ?>
                    </div>
                <?php endif; ?>

            </div>

            <div class="col-lg-4"></div>
        </div>
    </div>
</section>