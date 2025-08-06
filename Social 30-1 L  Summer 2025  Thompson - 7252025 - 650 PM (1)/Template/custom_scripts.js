
$(document).ready(function(){
	"use strict";
	$('div.Solution').hide();
	$('div.Solution').after('<button type="button" class="SolutionButton">Show Solution</button>');
                $("button").click(function() {
                                $(this).prev("div.Solution").slideToggle( "slow" );
                });

	$('head').append('<link href="../Template/cbestylesheet_print.css" rel="stylesheet" type="text/css" media="print" />');
	$('head').append('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML"></script><!-- Import solution slider javascript-->');
	
	$('<p class="CentreAlign PrintText"><em><a href="javascript:window.print()">Print</a> a copy of this page.</em></p>').insertAfter('#header');

});

