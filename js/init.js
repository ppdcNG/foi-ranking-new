(function ($) {

  $(function () {

    let $year = $(".tabs .active").html();
    $("#foi-year").html($year);

    $(document).on("click", ".tabs li a", () => {
      let $year = $(".tabs .active").html();
      $("#foi-year").html($year);
    })

    $('.sidenav').sidenav();

    $('.tabs').tabs({
      swipeable: true
    });

    $('.dropdown-trigger').dropdown();

  }); // end of document ready
})(jQuery); // end of jQuery name space