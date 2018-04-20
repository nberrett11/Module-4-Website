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
	
 
  $('.container').click(function(){
	  alert("Do not copy.");
  });
 
  $	('.btn btn-secondary').click(function(){
	  $('p').css("font-size","24px"); 
	  $('p').css("font-size","20px"); 
  });
  
  $	('.btn btn-primary btn-lg').click(function(){
	  $('p').css("font-size", ""); 
	  $('p').css("font-size", ""); 
  });
  
  $	('h2').hover(function(){
      $(this).css("background-color", "#FFFF00");
  },
      function(){
      $( this ).css("background-color", "");
	  
  });
  	 
});
