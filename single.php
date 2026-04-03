<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Web_Wiz
 */

get_header();
?>
	<main id="single__root" class="single__root">
		<?php 
			get_template_part('template-parts/content', 'page-hero'); 
			web_wiz_get_single_template();
		?>
	</main>
<?php
get_sidebar();
get_footer();
