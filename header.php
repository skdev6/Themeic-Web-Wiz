<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Web_Wiz
 */
$color_mode = web_wiz_option('default_color_mode_settings');
?>
<!doctype html>
<html <?php language_attributes(); ?> class="<?php echo $color_mode ? esc_attr($color_mode) : ''; ?>">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<main id="page__root" class="page__root">
	<header class="header-content-area"><?php web_wiz_get_header_template(); ?></header>
	
	<?php web_wiz_init_before_pt(); ?>
