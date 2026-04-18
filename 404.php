<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Web_Wiz
 */

get_header();
web_wiz_init_before_pt();

web_wiz_get_404_template('template-parts/content-404');

web_wiz_init_after_pt(); 
get_footer();