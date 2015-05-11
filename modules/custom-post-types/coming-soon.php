<?php
/*
 * Plugin Name: Jetpack Coming Soon
 * Plugin URI:
 * Author: Automattic
 * Version: 0.1
 * License: GPL v2 or later
 * Text Domain: jetpack
 * Domain Path: /languages/
 */

class Jetpack_Coming_Soon {
	const OPTION_NAME = 'jetpack-coming-soon';
	const THEME_MOD   = 'jetpack_coming_soon';


	var $version = '0.1';

	public $theme_mod_option;

	static function init() {
		static $instance = false;

		if ( ! $instance )
			$instance = new Jetpack_Coming_Soon;

		return $instance;
	}

	/**
	 * Conditionally hook into WordPress.
	 *
	 * Themes must declare that they support this module by adding
	 * add_theme_support( 'jetpack-coming-soon' ); during after_setup_theme.
	 *
	 * If no theme support is found there is no need to hook into
	 * WordPress. We'll just return early instead.
	 */
	function __construct() {
		// Add an option to enable the CPT
		add_action( 'admin_init', array( $this, 'settings_api_init' ) );

		// Admin Customization
		add_action( 'customize_register', array( $this, 'customize_register' ) );
		add_action( 'customize_preview_init', array( $this, 'preview_enqueue' ) );

		// If called via REST API, we need to register later in lifecycle
		add_action( 'restapi_theme_init', array( $this, 'maybe_register_cpt' ) );

		$this->theme_mod_option = get_theme_mod( 'jetpack_coming_soon' );

		// Render the home page if the option is checked!
		if ( $this->theme_mod_option['active'] ) {
			add_action( 'template_redirect', array( $this, 'jetpack_coming_soon_render' ) );
		}
	}

	/**
	 * Add a checkbox field in 'Settings' > 'Writing'
	 * for enabling CPT functionality.
	 *
	 * @return null
	 */
	function settings_api_init() {
		add_settings_field(
			self::OPTION_NAME,
			'<span class="cpt-options">' . __( 'Coming Soon', 'jetpack' ) . '</span>',
			array( $this, 'setting_html' ),
			'writing',
			'jetpack_cpt_section'
		);
		register_setting(
			'writing',
			self::OPTION_NAME,
			'intval'
		);

		// Check if CPT is enabled first so that intval doesn't get set to NULL on re-registering
		register_setting(
			'writing',
			self::THEME_MOD,
			'intval'
		);
	}



	/**
	 * HTML code to display a checkbox true/false option
	 * for the Coming Soon setting.
	 *
	 * @return html
	 */
	function setting_html() {
		?>
		<label for="<?php echo esc_attr( self::OPTION_NAME ); ?>">
			<input name="<?php echo esc_attr( self::OPTION_NAME ); ?>" id="<?php echo esc_attr( self::OPTION_NAME ); ?>" <?php echo checked( get_option( self::OPTION_NAME, '0' ), true, false ); ?> type="checkbox" value="1" />
			<?php esc_html_e( 'Enable Coming Soon page for this site.', 'jetpack' ); ?>
		</label>
	<?php }

	function set_coming_soon_option() {
		$coming_soon_option = get_option( 'jetpack_coming_soon' );

		$coming_soon = wp_count_posts( 'jetpack-coming-soon' );
		$published_coming_soon = $coming_soon->publish;

		update_option( 'jetpack_coming_soon', $published_coming_soon );
	}

	/**
	 * Adds coming soon section to the Customizer.
	 */
	function customize_register( $wp_customize ) {
		// Include our custom control.
//		require( dirname( __FILE__ ) . '/class-coming-soon-control.php' );

		jetpack_coming_soon_custom_control_classes();

		$wp_customize->add_section(
			'jetpack_coming_soon',
			array(
				'title'    => esc_html__( 'Coming Soon', 'jetpack' ),
				'priority' => 130,
			)
		);

		// Enable?
		$wp_customize->add_setting(
			'jetpack_coming_soon[active]',
			array(
				'sanitize_callback'    => array( 'Jetpack_Coming_Soon_Checkbox_Control', 'sanitize_content' ),
				'sanitize_js_callback' => array( 'Jetpack_Coming_Soon_Checkbox_Control', 'sanitize_content' ),
				'transport'            => 'postMessage',
			)
		);

		$wp_customize->add_control( 'jetpack_coming_soon[active]', array(
			'section' => 'jetpack_coming_soon',
			'label'   => esc_html__( 'Enable coming soon', 'jetpack' ),
			'type'    => 'checkbox',
		) );

		// Page Title
		$wp_customize->add_setting(
			'jetpack_coming_soon[page-title]',
				array(
				'default'              => esc_html__( 'Coming Soon', 'jetpack' ),
				'sanitize_callback'    => array( 'Jetpack_Coming_Soon_Title_Control', 'sanitize_content' ),
				'sanitize_js_callback' => array( 'Jetpack_Coming_Soon_Title_Control', 'sanitize_content' ),
				'transport'            => 'postMessage',
			)
		);

		$wp_customize->add_control( 'jetpack_coming_soon[page-title]', array(
			'section' => 'jetpack_coming_soon',
			'label'   => esc_html__( 'Coming_Soon Page Title', 'jetpack' ),
			'type'    => 'text',
		) );

		// Page Content
		$wp_customize->add_setting(
			'jetpack_coming_soon[page-content]',
			array(
				'default'              => '',
				'sanitize_callback'    => array( 'Jetpack_Coming_Soon_Textarea_Control', 'sanitize_content' ),
				'sanitize_js_callback' => array( 'Jetpack_Coming_Soon_Textarea_Control', 'sanitize_content' ),
				'transport'            => 'postMessage',
			)
		);

		$wp_customize->add_control( new Jetpack_Coming_Soon_Textarea_Control( $wp_customize, 'jetpack_coming_soon[page-content]', array(
			'section'  => 'jetpack_coming_soon',
			'settings' => 'jetpack_coming_soon[page-content]',
			'label'    => esc_html__( 'Coming Soon Page Content', 'jetpack' ),
		) ) );

		// Featured Image
		$wp_customize->add_setting(
			'jetpack_coming_soon[featured-image]',
			array(
				'default'              => '',
				'sanitize_callback'    => 'attachment_url_to_postid',
				'sanitize_js_callback' => 'attachment_url_to_postid',
				'theme_supports'       => 'post-thumbnails',
				'transport'            => 'postMessage',
			)
		);

		$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'jetpack_coming_soon[featured-image]', array(
			'section' => 'jetpack_coming_soon',
			'label'   => esc_html__( 'Coming Soon Page Featured Image', 'jetpack' ),
		) ) );


		if ( $wp_customize->is_preview() && ! is_admin() ) {
			add_action( 'wp_footer', 'example_customize_preview', 21 );
		}
	}

	/**
	 * Enqueue scripts for the Customizer live preview.
	 *
	 * @uses wp_enqueue_script()
	 * @uses plugins_url()
	 * @uses current_theme_supports()
	 * @uses Site_Logo::header_text_classes()
	 * @uses wp_localize_script()
	 */
	public function preview_enqueue() {
		$theme_mod_enabled = $this->theme_mod_option['active'];

		wp_enqueue_script( 'coming-soon-preview', plugins_url( 'js/coming-soon.js', __FILE__ ), array( 'jquery' ), 'today', true );
		wp_localize_script( 'coming-soon-preview', 'comingSoon',
			array(
				'defaultTemplate' => $this->jetpack_get_default_template(),
				'enabled' => $theme_mod_enabled
			)
		);
	}

	/*
	 * Render the coming soon page
	 *
	 * When the option is checked, we show the coming soon page
	 * to visitors who are not logged in.
	 *
	 * @return html
	 */
	public function jetpack_coming_soon_render() {
		// Check if user is logged in.
		if ( ! is_user_logged_in() ) {
			return false;
		}

		// Make sure it's enabled


		$default = $this->jetpack_get_default_template();

		require_once $default;
		// And that's it!
		exit();
	}

	/*
	 * Load up the default template
	 *
	 * @return file contents
	 */
	function jetpack_get_default_template() {
		$default_file = plugin_dir_path( __FILE__ ) . 'coming-soon/default-template.php';

		return $default_file;
	}
}

function jetpack_coming_soon_custom_control_classes() {
	class Jetpack_Coming_Soon_Checkbox_Control extends WP_Customize_Control {
		public static function sanitize_content( $input ) {
			if ( 1 == $input ) {
				return 1;
			} else {
				return '';
			}
		}
	}

	class Jetpack_Coming_Soon_Title_Control extends WP_Customize_Control {
		public static function sanitize_content( $value ) {
			if ( '' != $value )
				$value = trim( convert_chars( wptexturize( $value ) ) );

			return $value;
		}
	}

	class Jetpack_Coming_Soon_Textarea_Control extends WP_Customize_Control {
		public $type = 'textarea';

		public function render_content() {
			?>
			<label>
				<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
				<textarea rows="5" style="width:100%;" <?php $this->link(); ?>><?php echo esc_textarea( $this->value() ); ?></textarea>
			</label>
		<?php
		}

		public static function sanitize_content( $value ) {
			if ( ! empty( $value ) )
				/** This filter is already documented in core. wp-includes/post-template.php */
				$value = apply_filters( 'the_content', $value );

			$value = preg_replace( '@<div id="jp-post-flair"([^>]+)?>(.+)?</div>@is', '', $value ); // Strip WPCOM and Jetpack post flair if included in content

			return $value;
		}
	}
}

add_action( 'init', array( 'Jetpack_Coming_Soon', 'init' ) );

// Check on plugin activation if theme supports CPT
register_activation_hook( __FILE__,                         array( 'Jetpack_Coming_Soon', 'activation_post_type_support' ) );
add_action( 'jetpack_activate_module_custom-content-types', array( 'Jetpack_Coming_Soon', 'activation_post_type_support' ) );
