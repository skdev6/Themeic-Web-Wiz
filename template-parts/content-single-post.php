<?php
get_template_part('template-parts/content', 'page-hero');

?>

<section class="sec-space-y bg-grd-muted sec-rounded">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="sec-title d-flex flex-wrap gap-2 align-items-center justify-content-between title-h3 mb-3">
                    <h2 class="title-h2 mb-0"><?php the_title(); ?></h2>
                </div>

                <div class="d-flex align-items-center gap-2 max-w-350">
                    <div class="author__block text-sm th-text-secondary d-flex align-items-center">
                        <?php
                        $author_id    = get_the_author_meta( 'ID' );
                        $author_data  = get_userdata( $author_id );
                        $author_roles = array();

                        if ( $author_data && ! empty( $author_data->roles ) && is_array( $author_data->roles ) ) {
                            $author_roles = array_map( 'ucfirst', $author_data->roles );
                        }

                        echo get_avatar( $author_id, 48 );
                        ?>

                        <div class="author-info">
                            <?php the_author_posts_link(); ?>
                            <?php if ( ! empty( $author_roles ) ) : ?>
                                <span class="d-block">
                                    <?php echo esc_html( implode( ', ', $author_roles ) ); ?>
                                </span>
                            <?php endif; ?>
                        </div>
                    </div>

                    <div class="date__block ml-auto d-flex gap-1 text-md align-items-center">
                        <i class="themeic-icon-date" aria-hidden="true"></i>
                        <span><?php echo esc_html( get_the_date() ); ?></span>
                    </div>
                </div>
                
                <div class="single-post-content">
                    <?php the_content(); ?>
                </div>
                <div class="themeic-comment-section">
                    <?php 
                        if ( comments_open() || get_comments_number() ) :
                            comments_template();
                        endif;
                    ?>
                </div>
            </div>
            <div class="col-lg-4">
                <?php get_sidebar(); ?>
            </div>
        </div>
    </div>
</section>