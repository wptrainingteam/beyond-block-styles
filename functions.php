<?php

add_action( 'wp_enqueue_scripts', 'themeslug_assets' );

function themeslug_assets() {
	$asset = include get_parent_theme_file_path( 'public/css/screen.asset.php' );

	// Loads the primary stylesheet.
	wp_enqueue_style(
		'themeslug-style',
		get_parent_theme_file_uri( 'public/css/screen.css' ),
		$asset['dependencies'],
		$asset['version']
	);
}

add_action( 'after_setup_theme', 'themeslug_editor_styles' );

function themeslug_editor_styles() {
	add_editor_style( [
		get_parent_theme_file_uri( 'public/css/screen.css' )
	] );
}

add_action( 'enqueue_block_editor_assets', 'themeslug_editor_assets' );

function themeslug_editor_assets() {
	$script_asset = include get_parent_theme_file_path( 'public/js/editor.asset.php'  );
	$style_asset  = include get_parent_theme_file_path( 'public/css/editor.asset.php' );

	wp_enqueue_script(
		'themeslug-editor',
		get_parent_theme_file_uri( 'public/js/editor.js' ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	wp_enqueue_style(
		'themeslug-editor',
		get_parent_theme_file_uri( 'public/css/editor.css' ),
		$style_asset['dependencies'],
		$style_asset['version']
	);
}
