$(document).ready(function(){
    $("nav").mouseover(function(){
        $("div.nav_bg").css("display","block");
    })
    $("nav").mouseout(function(){
        $("div.nav_bg").css("display", "none");
    })
})