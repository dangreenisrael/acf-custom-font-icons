
var initialize_field = function ($field) {
	// function format(icon) {
	// 	var originalOption = icon.element;
	// 	return '<i class="fa ' + jQuery(originalOption).data('icon') + '"></i> ' + icon.text;
	// }
	// var display = jQuery($field).find('.font-icon-display i');
	// jQuery($field).find('.wpmse_select2').each(function () {
	// 	var element = jQuery(this);
	// 	element.select2({
	// 		formatResult: format
	// 	}).on('change', function (e) {
	// 		var css_class = e.val;
	// 		console.log(css_class);
	// 		display.removeClass().addClass("fa "+ css_class);
	// 	});
	// });
};

(function($){
	function initialize_field( $field ) {
		function format(icon) {
			var originalOption = icon.element;
			return '<i class="fa ' + jQuery(originalOption).data('icon') + '"></i> ' + icon.text;
		}
		var display = jQuery($field).find('.font-icon-display i');
		jQuery($field).find('.wpmse_select2').each(function () {
			var element = jQuery(this);
			element.select2({
				formatResult: format
			}).on('change', function (e) {
				var css_class = e.val;
				console.log(css_class);
				display.removeClass().addClass("fa "+ css_class);
			});
		});
	}
	
	
	if( typeof acf.add_action !== 'undefined' ) {
	
		/*
		*  ready append (ACF5)
		*
		*  These are 2 events which are fired during the page load
		*  ready = on page load similar to $(document).ready()
		*  append = on new DOM elements appended via repeater field
		*
		*  @type	event
		*  @date	20/07/13
		*
		*  @param	$el (jQuery selection) the jQuery element which contains the ACF fields
		*  @return	n/a
		*/
		
		acf.add_action('ready append', function( $el ){
			
			// search $el for fields of type 'custom_font_icons'
			acf.get_fields({ type : 'custom_font_icons'}, $el).each(function(){
				initialize_field( $(this) );
			});
			
		});
		
		
	} else {
		
		
		/*
		*  acf/setup_fields (ACF4)
		*
		*  This event is triggered when ACF adds any new elements to the DOM. 
		*
		*  @type	function
		*  @since	1.0.0
		*  @date	01/01/12
		*
		*  @param	event		e: an event object. This can be ignored
		*  @param	Element		postbox: An element which contains the new HTML
		*
		*  @return	n/a
		*/
		
		$(document).on('acf/setup_fields', function(e, postbox){
			
			$(postbox).find('.field[data-field_type="custom_font_icons"]').each(function(){
				
				initialize_field( $(this) );
				
			});
		
		});
	
	
	}


})(jQuery);
