$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
      if ($("#content").css("margin-right") == "0px") {
          //if the content is across screen, set margin right, and animate sidebar
            $("#rightmenu").animate({'right' : '0px'});
            $("#content").animate({"marginRight":"250px"});
            $("#content").css("margin-right", "250px");
        }
        else {
            //set back to OG 
            $("#rightmenu").animate({'right' : '-250px'});
            $("#content").animate({"marginRight":"0px"});
            $("#content").css("margin-right", "0px");
        }
    });

    $('.carousel').carousel();
});

