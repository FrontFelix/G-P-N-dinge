function navFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
        $('.rotate').toggleClass('down');
    } else {
        $('.rotate').toggleClass('down');
        x.style.display = "block";
    }

    /*$(".hamburger").click(function () {
        $(".rotate").toggleClass("down");
    });*/
}


$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);