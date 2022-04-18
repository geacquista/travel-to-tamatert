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
});
// $(document).ready(function(){
//     $("#introduction").css("top", (($(window).height() - $("#introduction").height()) / 2) + "px");

//     $("#menu").click(function(){
//         if ($("#main_wrapper").css("left") == "0px") {
//             $("#navbar").animate({'left' : '-250px'});
//             document.getElementById("sidebar").style.width = "250px";
//             $("#footer").animate({'left' : '-250px'});
//         }
//         else {
//             $("#main_wrapper").animate({'left' : '0px'});
//             $("#sidebar").animate({'right' : '250px'});
//             document.getElementById("sidebar").style.width = "0";
//             $("#footer").animate({'left' : '0px'});
//         }
//     });

//     // $("#open_sidebar").click(function(){ 
//     //     $("#main_wrapper").animate({'left' : '0px'});
//     //     $("#navbar").animate({'left' : '0px'});
//     //     document.getElementById("sidebar").style.width = "250px";
//     //     $("#footer").animate({'left' : '0px'});
//     // });

//     $(document).scroll(function() {
        
//         $("#name").html($(document).scrollTop());
//         $("#menu").html($(window).height());
//         //intro - hello world (home)
//         if ($(document).scrollTop() > $(window).height() -50) {
//             $("#navbar").css("top", "0px");
//             $("#navbar").css("background", "#2A3239");
//             $("#intro").css("color", "#FFF");
//             $("#home").css("color", "#888");
//             $("#edu").css("color", "#888");
//             $("#exp").css("color", "#888");
//             $("#prj").css("color", "#888");
//       }
//     })
// });

// /* Set the width of the side navigation to 250px */
// function openNav() {
//     var menu = document.getElementById("sidebar");
//     var nav = document.getElementById("navbar");

//     if (menu.style.width == "0px") {
//         menu.style.width = "250px";
//         nav.style.left = "-250px";

//     } else {
//         menu.style.width = "0";
//     }
//   }
  