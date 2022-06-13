$(document).ready(function () {
    // navPosition();
    // hoverEffect();
    backToTop();
});


function backToTop() {
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 200) {
            $("#back__to__top").css("display", "block");
            $("#back__to__top").css("transition", "all .3s ease-in-out");
        }
        else {
            $("#back__to__top").css("display", "none");
            $("#back__to__top").css("transition", "all .3s ease-in-out");
        }
    });
}

function navPosition() {
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 100) {
            $(".top_header").css("background-color", "rgba(0, 0, 0, 0.8)");
            $(".navbar_item .menu_nav li a").css("color", "#fff");

        }
        else {
            $(".top_header").css("background-color", "transparent");
            $(".navbar_item .menu_nav li a").css("color", "#000");
        }
    });
}

function hoverEffect() {
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 200) {
            $(".navbar_item .menu_nav li a").mouseenter(function () {
                $(this).css("color", "#A81C51");
            });
        }
        else if ($(document).scrollTop() <= 150) {
            $(this).css("color", "#000");
        }
        else {
            $(".navbar_item .menu_nav li a").mouseleave(function () {
                $(this).css("color", "#fff");
            });
        }
    });
}


