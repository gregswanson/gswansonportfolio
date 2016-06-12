/////Open Modal
$('#lightbox').on( 'click', '.hover-text', function() {
	var modalID = this.id;
	//alert(modalID);
	$('#modalImages').empty();
	$('#modalTitle').empty();
	$('#modalDes').empty();
	$('#modalTech').empty();
	// var url = $(this).data('youtube');
	// var level = myUsers2[modalID].level;
   $('#myModal').modal('show');

   $('#modalTitle').html('<h2 class="modalText">' + portfolioimg[modalID].noteone +'</h2>');
   $('#modalSubTitle').html('<h3 class="modalText">' + portfolioimg[modalID].notetwo +'</h3>');
   $('#modalDes').html('<p class="modalText">' + portfolioimg[modalID].desc +'</p>');
   $('#modalTech').html('<p class="modalText">' + portfolioimg[modalID].tech +'</p>');

   if(portfolioimg[modalID].site){
   	$('#modalSite').html('<p><a href="'+ portfolioimg[modalID].site +'"  target="_blank" class="modalText">Visit the site  <span class="fa fa-external-link-square"></span></a></p>');
   } else {
   	$('#modalSite').empty();
   }

   for(var i = 0; i < portfolioimg[modalID].imgs.length; i++) {
   	$('#modalImages').append('<div><img src="' + portfolioimg[modalID].imgs[i] + '" class="modalImage image-responsive"></div>');
   };

 	
 //  $('#modalInst').text(myUsers2[modalID].Instrument);
 //  $('#modalCity').text(myUsers2[modalID].city);
 //  $('#modalLevel').text(myUsers2[modalID].level);
 //  $('#modalAbout').text(myUsers2[modalID].about);
 //  $('#modalFrame').attr('src', url);
});