/*====================================
    Portfolio Isotope Filter
    ======================================*/
$(window).load(function() {

var portfolioimg = [];
var originURL = document.location.origin; 
var queryURL = '/api';

$.ajax({url: originURL + queryURL, method: 'GET'}).done(function(data){
        for (var i = 0; i < data.length; i++) {
            portfolioimg.push(data[i]);
        }
        //console.log(data)
        // console.log(myUsers2)

//grid container
    var $isogrid = $('#lightbox');
        
        $isogrid.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $isogrid.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

         //console.log(portfolioimg);  

// Populate Iso grid

    $("#lightbox").html("");
    
    for (var i = 0; i < portfolioimg.length; i++){

    var $newitems = 
            $('<div class="col-sm-6 col-md-3 col-lg-3 ' + portfolioimg[i].imgClass + '"><div class="portfolio-item"><div class="hover-bg"><div class="hover-text" id="' + [i] + '"><h4>' + portfolioimg[i].noteone + '</h4><small>' + portfolioimg[i].notetwo + '</small><div class="clearfix"></div><i class="fa fa-external-link-square"></i></div><img src="' + portfolioimg[i].cover + '" class="img-responsive darken" alt="' + portfolioimg[i].noteone + '"></div></div>');
        $isogrid.isotope( 'insert', $newitems );


    };

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
        });







    });
});



    






               