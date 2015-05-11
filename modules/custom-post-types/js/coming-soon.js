/**
 * JS for handling the Site Logo real-time display in the Customizer preview frame.
 */
(function($){
    var api = wp.customize,
        $body, $anchor, $logo, size, data;

    data = {
        //'something' : comingSoon.defaultTemplate
    };

    // Checkbox enable
    wp.customize( 'jetpack_coming_soon[active]', function( value ) {
        value.bind( function( active ) {
            if ( active ) {
                $( 'html' ).html( '<body></body>' );
                $( 'body' ).css( 'background', 'white' );
            }
        });
    });


})(jQuery);