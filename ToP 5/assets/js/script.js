$(function() {

    var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = -1,

    init = function(){

        $mainMenuItems.children(".images").click(function(){
             var newIndex = $(this).parent().index(),
             $item = $mainMenuItems.eq(newIndex),
             $colorImage = $item.find(".color");
             $colorImage.animate({left:"0px"},250);
             $item.animate({width: "420px"},250);
             openedIndex = newIndex;

        });

    },

    animateItem = function($item, toOpen, speed){

        var $colorImage = $item.find(".color"),
        itemParam = toOpen ? {width: "420px"}: (width: "140px")

             $colorImage.animate({left:"0px"},250);
             $item.animate({width: "420px"},250);
             openedIndex = newIndex;

    };

init();



});
