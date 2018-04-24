////////////////////////////////////////////////////
//Version: 	1.0.0
//Author:  	Bruno Henrique de Oliveira Peixoto
//Usage:	Automated url scroll extension scripts
//Date:		23 April 2018
////////////////////////////////////////////////////

define( [
        // Load the properties.js file using requireJS
        // Note: If you load .js files, omit the file extension, otherwhise
        // requireJS will not load it correctly 
		'jquery',
		'qlik' ,
        './properties/properties' ,
//		'./properties/initialProperties',
		/***********************
		This is used to reference specific CSS V2.0 upwards.
		QlikSense set the CSS class qv-object-[extension name] on your visualizations 
		and your CSS rules should be prefixed with that.
		************************/
		'text!./css/automated-URL-scroll.css'  
		
    ],
	
    function ( $, qlik, props, /*initProps,*/ styleSheet) {
		var idTimeout;
        'use strict';	
		//Inject Stylesheet into header of current document
		$( '<style>' ).html(styleSheet).appendTo( 'head' );

        return {

			//Define the properties tab - these are defined in the properties.js file
             definition: props,
			
			//Define the data properties - how many rows and columns to load.
//			 initialProperties: initProps,
			
			//Not sure if there are any other options available here.
			  snapshot: {cantTakeSnapshot: true
			 }, 
			
			
			 
			 
//************************ ACTION ***********************************************
			//paint function creates the visualisation. - this one makes a very basic table with no selections etc.
            paint: function ( $element , layout ) {
				
				$element.empty();

				var $ToggleButton = $( document.createElement( 'div' ) );
                $ToggleButton.html( '<label class="switch"> <input id="switchOnCarrousel" type="checkbox"><span class="slider round"></span></label>' );
                $element.append( $ToggleButton );

				var selectedSheet = layout.selectedSheet;
				
				console.log('Sheet selected', selectedSheet);
				
				var timeDelay = layout.timeDelay;
				
				console.log('Time delay selected', timeDelay);
				
				if (qlik.navigation.getMode() != 'edit' ) {	
								
				//	var idTimeout =	setTimeout(function() {window.location.replace(selectedSheet);}, timeDelay);
								
						};
					 $('#switchOnCarrousel').change(function() {
						 
						 clearTimeout(eval(idTimeout))
						 console.log(clearTimeout(eval(idTimeout)));
							if(this.checked) {
								idTimeout =	setTimeout(function() {window.location.replace(selectedSheet+'&vscroll=true');}, timeDelay);
							} else {
								clearTimeout(eval(idTimeout))
								idTimeout(null);

							}
							
						});						
					$( document ).ready(function() {

						var vscroll = getUrlParameter('vscroll');
						if (vscroll == 'true'){
							idTimeout =	setTimeout(function() {window.location.replace(selectedSheet+'&vscroll=true');}, timeDelay);
							$('#switchOnCarrousel').prop('checked', true);
						}
					});
						
			}
			
        }
    }
);

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};











