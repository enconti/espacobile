$(document).ready(function () {
   $.getJSON("http://127.0.0.1/espacobile/galeria/server/php/index.php", function (json) {

   for ( i in json.files) {
     $('<div class="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Awesome"> \
       <div href="#lb-gallery1-4" data-slide-to='+i+' data-toggle="modal"> \
       <img src='+json.files[i].url+' alt=""> \
       <span class="icon-focus"></span> </div> </div>'        
     ).appendTo('#grid-gallery');


     $('<div class="carousel-item gallery-item" slider-fullscreen-image" > \
         <div class="container container-slide"><div class="image_wrapper">\
       <img src="' + json.files[i].url + '"> </div> </div> </div>').appendTo('#gallery-carousel');

      $('<li data-target="#carousel-example-generic" data-slide-to="' + i + '"></li>').appendTo('#gallery-indicator')

   }
   $('.gallery-item').first().addClass('active');
   $('#lb-gallery1-4').carousel();
 })});