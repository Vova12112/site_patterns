$(document).ready(function(){
    
    const 
        $header = $("#header"),
        $showMenuButton = $header.find(".menu-bar .show-items-btn"),
        $closeMenuButton = $header.find(".mobile-top-menu .close-menu-btn"),
        $mobileMenu = $header.find(".mobile-top-menu")
    ;

    $showMenuButton.on("click", function(event){
        event.preventDefault();
        $mobileMenu.show();
    });

    $closeMenuButton.on("click", function(event){
        event.preventDefault();
        $mobileMenu.hide();
    });

});