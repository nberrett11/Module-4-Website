// JavaScript Document

<script type='text/javascript' src= 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
 

$(document).ready(function(){ 
 
 var time = new Date();
 var hr = time.getHours();
 var fs = $('dd').css("font-size", "");

  if (hr > 19 || hr < 7)
	{
     $('.container').css("font-weight", "bolder");
     $('dt').css("text-decoration", "underline");
	}
	
 
  $('.section_1').click(function(){
	  alert("Do not copy.");
  });
 
  $	('#b1').click(function(){
	  $('dt').css("font-size","24px"); 
	  $('dd').css("font-size","20px"); 
  });
  
  $	('#b2').click(function(){
	  $('dt').css("font-size", ""); 
	  $('dd').css("font-size", ""); 
  });
  
  $	('dt').hover(function(){
      $(this).css("background-color", "#FFFF00");
  },
      function(){
      $( this ).css("background-color", "");
	  
  });
  	 
});
