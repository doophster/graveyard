
$(".reveal-btn").click(
    function(){
        $(".key").addClass("show");
       // $(".reveal-btn").css("display", "none");
       $(".reveal-btn").hide();
    }
);

$(".draggable").draggable({
    containment: ".container",
    scroll: false,
    
});