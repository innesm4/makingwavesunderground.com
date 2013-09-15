	
	$('.thank-you').hide();
	$('#enquire').live('submit', function(e) {
		e.preventDefault();
		var xhr = new $.ajax({
		    type: 'POST',
		    url: 'send.php',
		    data: {
		        send_enquiry: true,
		        user_name: $('#enquire input.name').val(),
		        user_company: $('#enquire input.company').val(),
		        user_email: $('#enquire input.email').val()
		    },
		    error: function() {
		        /*console.warn('There was a problem.');
		        */
	        },
		    dataType: "json",
		    success: function(response, textStatus, XMLHttpRequest) {
			    $('#enquire,#hello').fadeOut(function(){
				   $('.thank-you').fadeIn(); 
			    });
		   }
		});
	});