var startLeft, startTop;

// grab starting position after the page settles
setTimeout(function() {
    startLeft = $("#key").position().left;
    startTop = $("#key").position().top;
}, 60);

$("#key").draggable({ zIndex: 99 });

$(".chest").droppable({
    accept: "#key",
    tolerance: "pointer",
    drop: function(e, ui) {
        var chestNum = $(this).data("n");

        if (chestNum == 3) {
            $(".chest").droppable("disable");
            $("#key").draggable("disable");

            // center the key on the chest
            var chestLeft = $(this).offset().left;
            var chestTop = $(this).offset().top;
            var keyLeft = chestLeft + $(this).outerWidth() / 2 - $("#key").outerWidth() / 2;
            var keyTop = chestTop + $(this).outerHeight() / 2 - $("#key").outerHeight() / 2;

            $("#key").animate({ left: keyLeft, top: keyTop }, 200, function() {
                $("#key").addClass("key-spin");
                setTimeout(function() {
                    $("#reveal").addClass("show");
                    setTimeout(function() {
                        $("#reveal").addClass("fade");
                    }, 10);
                }, 2000);
            });

        } else {
            // wrong chest — send key back home
            $("#key").animate({ left: startLeft, top: startTop }, 280);
            $(this).addClass("chest-wrong");
            var wrongChest = $(this).closest(".chest-wrap");
            setTimeout(function() {
                wrongChest.css("visibility", "hidden");
            }, 500);
        }
    }
});