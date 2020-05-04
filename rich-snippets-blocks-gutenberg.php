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


//Register the Gutenberg Blocks
function ib_gutenberg_rich_blocks_function()
{

    //Register the js to handle the block
    // we need the follow dependencies:
    // 'wp-blocks', 'wp-i18n', 'wp-element'
    wp_register_script(
        'rich-snippets',
        plugins_url('js/gutenberg-blocks-rich-snippets.build.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-data'),
    );

    //Register ivanbarreda/rich-snippet-review block
    // the functionalaty is handle in JS file
    register_block_type('ivanbarreda/rich-snippet-review', array(
        'editor_script' => 'rich-snippets',
    ));


}
add_action('init', 'ib_gutenberg_rich_blocks_function');


//Create Custom Blocks Category Rich Snippets
function ib_rich_snippet_category($categories, $post)
{


    /*
    if ( $post->post_type !== 'post' ) {
        return $categories;
	}
	*/
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'rich-snippets',
                'title' => __('Rich Snippets', 'gutenberg-rich-snippets'),
                'icon'  => 'wordpress',
            ),
        )
    );
}
add_filter('block_categories', 'ib_rich_snippet_category', 10, 2);


//This CSS only is showed in Backend 
function ib_rich_snippet_css_backend($hook)
{
    if ('edit.php' == $hook) {
        return;
    }
    wp_register_style('backend-gutenberg-blocks-rich-snipptes', plugin_dir_url(__FILE__) . 'css/backend-gutenberg-blocks-rich-snippets.css', array(), '1.0');
    wp_enqueue_style('backend-gutenberg-blocks-rich-snipptes');
}
add_action('admin_enqueue_scripts', 'ib_rich_snippet_css_backend');


//This CSS only is showed in FrontEnd
function ib_rich_snippet_css_frontend($hook)
{


    wp_register_style('frontend-gutenberg-blocks-rich-snipptes', plugin_dir_url(__FILE__) . 'css/frontend-gutenberg-blocks-rich-snippets.css', array(), '1.0');
    wp_enqueue_style('frontend-gutenberg-blocks-rich-snipptes');
}
add_action('wp_enqueue_scripts', 'ib_rich_snippet_css_frontend');
