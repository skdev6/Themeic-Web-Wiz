<div class="col-sm-6">
    <article id="post-<?php the_ID(); ?>" <?php post_class( 'blog-post-cart' ); ?>>
        <?php if ( has_post_thumbnail() ) : ?>
            <div class="thumbnail">
                <?php the_post_thumbnail( 'large' ); ?>
            </div>
        <?php endif; ?>

        <div class="d-flex align-items-center gap-2">
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

            <div class="date__block ml-auto mr-auto d-flex gap-1 text-md align-items-center">
                <i class="themeic-icon-date" aria-hidden="true"></i>
                <span><?php echo esc_html( get_the_date() ); ?></span>
            </div>
        </div>

        <a class="card-title title-h5 d-block" href="<?php the_permalink(); ?>">
            <?php echo esc_html( get_the_title() ); ?>
        </a>

        <a href="<?php echo esc_url( get_permalink() ); ?>" class="th-btn">
            <i class="themeic-icon-agnle-right themeic-icon-after"></i>
            <span class="btn-text">
                <span class="word"><?php esc_html_e( 'Read More', 'web-wiz' ); ?></span>
            </span>
        </a>
    </article>
</div>