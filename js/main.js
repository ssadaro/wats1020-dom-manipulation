
$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    $('#login-form .btn').on('click', function(event) {
    $('#login-form').hide();
    $('.user-info').show();
    $('.user-fullname').text(' ' + userInfo.firstName + ' ' + userInfo.lastName);
  
});
      $('.view-details').on('click', function(event){                 
        console.log(event);
          var targetElement = event.target;                         
          var container = targetElement.parentElement.parentElement;
          $(container).find('.details').each(function(index, el){   
              if ($(el).is(':visible')){                            
                  $(el).fadeOut();                                  
                  targetElement.innerText = "View Details"          

              } else {                                             
                  $(el).fadeIn();
                  targetElement.innerText = "Hide Details"
              }
          });
    });
    $('.vote').on('click', function(event){                                   
        console.log(event);
        if ($(this).attr('data-vote')==="great"){                             
            voteCounts.great++;                                               
            voteCounts.total++;
        }else{
            if ($(this).attr('data-vote')==="greatest"){                      
                voteCounts.greatest++;                                        
                voteCounts.total++;
            }
        }
    var greatPercent = voteCounts.great / voteCounts.total * 100 + '%';      
    var greatestPercent = voteCounts.greatest / voteCounts.total * 100 + '%'; 
    $('.great-progress').css('width', greatPercent);                          
    $('.greatest-progress').css('width', greatestPercent);  
    });
});


