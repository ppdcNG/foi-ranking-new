// vanilla
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// vanilla

(function ($) {

    $(function () {

        let $year = $(".nav .active").html();
        $("#ranking-year").html($year);

        $(document).on("click", ".nav li a", () => {
            let $year = $(".nav .active").html();
            $("#ranking-year").html($year);
            $("#ranking-year").css("float", "left");
        });

        $('.card-header').on('click', function () {
            $(this).closest('.card').toggleClass('clicked');
            $(this).closest('.card').siblings().removeClass('clicked');
        });


    }); // end of document ready
})(jQuery); // end of jQuery name space
