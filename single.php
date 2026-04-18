<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Web_Wiz
 */

get_header();
web_wiz_init_before_pt();
?>
	<main id="single__root" class="single__root">
		<?php  
			if(have_posts()){
				while (have_posts()) {
					the_post();
					web_wiz_get_single_template();
				}
			}
		?>
	</main>
<?php
web_wiz_init_after_pt();
get_footer();
