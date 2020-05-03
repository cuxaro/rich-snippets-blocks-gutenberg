<?php

/**
 *
 * @link              https://ivanbarreda.com/
 * @since             1.0.0
 *
 * @wordpress-plugin
 * Plugin Name:       Gutenberg blocks Rich Snippets
 * Description:       Generate Rich Snipets with gutenberg blocks.
 * Version:           1.0.0
 * Author:            Ivan Barreda
 * Author URI:        https://ivanbarreda.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       gutenberg-rich-snippets
 * Domain Path:       /languages
 */

if (!defined('WPINC')) {
	die;
}

define('PLUGIN_NAME_VERSION', '1.0.0');


function ib_gutenberg_rich_blocks_function()
{

	wp_register_script(
		'rich-snippets',
		plugins_url( 'js/gutenberg-blocks-rich-snippets.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
	);

	register_block_type( 'ivanbarreda/rich-snippet-review', array(
		'editor_script' => 'rich-snippets',
	) );
}


add_action('init', 'ib_gutenberg_rich_blocks_function');
