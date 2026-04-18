<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Web_Wiz
 */

get_header();
web_wiz_init_before_pt();
?>
	<main id="primary" class="site-main">
		<?php get_template_part('template-parts/content', 'page-hero'); ?>
		<?php web_wiz_get_archive_template('template-parts/content-blog'); ?>
	</main><!-- #main -->
<?php
web_wiz_init_after_pt(); 
get_footer(); 