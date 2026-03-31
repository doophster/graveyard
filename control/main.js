var homeLeft, homeTop;

setTimeout(function() {
    homeLeft = $("#key").position().left;
    homeTop  = $("#key").position().top;
}, 60);

$("#key").draggable({ zIndex: 99 });

$(".chest").droppable({
    accept: "#key",
    tolerance: "pointer",
    drop: function(e, ui) {
        var n = parseInt($(this).data("n"));

        if (n === 3) {
            $(".chest").droppable("disable");
            $("#key").draggable("disable");

            var snapL = $(this).offset().left + $(this).outerWidth()  / 2 - $("#key").outerWidth()  / 2;
            var snapT = $(this).offset().top  + $(this).outerHeight() / 2 - $("#key").outerHeight() / 2;

            $("#key").animate({ left: snapL, top: snapT }, 200, function() {
                $("#key").addClass("key-spin");
                setTimeout(function() {
                    $("#reveal").addClass("show");
                    setTimeout(function() { $("#reveal").addClass("fade"); }, 10);
                }, 2000);
            });

        } else {
            $("#key").animate({ left: homeLeft, top: homeTop }, 280);
            $(this).addClass("chest-wrong");
            var wrap = $(this).closest(".chest-wrap");
            setTimeout(function() { wrap.css("visibility", "hidden"); }, 500);
        }
    }
});