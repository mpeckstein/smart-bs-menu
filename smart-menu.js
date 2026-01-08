$(document).ready(function() {

    // Mobile Menu

    if ($(window).width() < 1200) {

        $("nav.navbar .navbar-toggler").click(function(event){

            $('nav.navbar .dropdown-menu').removeClass("show");

            $("nav.navbar #collapsibleNavbar").slideToggle();

        });

        $("nav.navbar .nav-item > .dropdown-toggle").click(function(){

            $('nav.navbar .nav-item .dropdown-menu').removeClass("show");

            $(this).next(".dropdown-menu").toggleClass("show");

        });

        $("nav.navbar .dropdown-submenu .dropdown-toggle").click(function(){

            $('nav.navbar .nav-item .dropdown-menu .dropdown-menu').removeClass("show");

            $(this).next(".dropdown-menu").toggleClass("show");

        });

    }

    // Desktop Menu

    if ($(window).width() > 1199) {

        $("nav.navbar .dropdown-toggle").click(function() {

            return false;

        });

        // Init the Timer

        var hoverTimeout;

        // On Dropdown Toggle Hover Event

        $("nav.navbar .dropdown-toggle").hover(function(event) {

            event.stopPropagation();

            var element = $(this).next(".dropdown-menu");

            hoverTimeout = setTimeout(function(){

                element.addClass("show");

                element.parent("li").addClass("active");

            }, 200);

        },function(event) {

            event.stopPropagation();

            clearTimeout(hoverTimeout);

            hoverTimeout = setTimeout(function() {

                if($("nav.navbar .dropdown-menu:hover").length === 0){


                    $('nav.navbar .dropdown-menu').removeClass("show");

                }else if($("nav.navbar .dropdown-menu .dropdown-menu:hover").length === 0){


                    $('nav.navbar li.dropdown-submenu > .dropdown-menu').removeClass("show");

                }else if($("nav.navbar .dropdown-menu .dropdown-menu .dropdown-menu:hover").length === 0){


                    $('nav.navbar .dropdown-menu .dropdown-menu .dropdown-menu').removeClass("show");

                }

            }, 200);

             

            if($("nav.navbar .dropdown-menu .dropdown-menu:hover").length === 0){


                $('nav.navbar li.dropdown-submenu').removeClass("active");

            }else if( $("nav.navbar .dropdown-menu .dropdown-menu .dropdown-menu:hover").length === 0){


                $('nav.navbar li.dropdown-submenu li.dropdown-submenu').removeClass("active");

            }

        });

        // On Dropdown Menu Hover Event

        $("nav.navbar .dropdown-menu").hover(function(event){

            event.stopPropagation();

            var element = $(this);

 

            if($("nav.navbar .dropdown-menu .dropdown-menu:hover").length === 0){


                $('nav.navbar li.dropdown-submenu').removeClass("active");

                $('nav.navbar li.dropdown-submenu > .dropdown-menu').removeClass("show");

            }else if($("nav.navbar .dropdown-menu .dropdown-menu .dropdown-menu:hover").length === 0){


                $('nav.navbar li.dropdown-submenu li.dropdown-submenu').removeClass("active");

                $('nav.navbar .dropdown-menu .dropdown-menu .dropdown-menu').removeClass("show");

            }else{

            // Fix the temporary hover off

                if(!element.parent("li").hasClass("active")){

                    element.parent("li").addClass("active");

                }

            }

            clearTimeout(hoverTimeout);

        },function(event){

            event.stopPropagation();

            clearTimeout(hoverTimeout);

            var element = $(this);

            hoverTimeout = setTimeout(function() {

                if($("nav.navbar .dropdown-menu:hover").length === 0){

                    $('nav.navbar .dropdown-menu').removeClass("show");

                    $('nav.navbar li.dropdown-submenu').removeClass("active");

               }else{

                    element.parent('li.dropdown-submenu').removeClass("active");

                    element.removeClass("show");

                }

            }, 200);

        });

    }

});
