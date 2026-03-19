$(".dark-btn").click(
    function(){
        $(".box").toggleClass("dark");
        $(".container").toggleClass("dark");
});

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
        $(".chair").addClass("show");
       // $(".reveal-btn").css("display", "none");
       $(".reveal-btn").hide();
    }
);

$(".draggable").draggable();