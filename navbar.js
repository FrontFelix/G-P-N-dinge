var y = document.getElementById("serviceDropdown");
var z = document.getElementById('refDropdown')


function navFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none"
        $('.rotate').toggleClass('down');
    } else {
        $('.rotate').toggleClass('down');
        x.style.display = "block";
    }

    /*$(".hamburger").click(function () {
        $(".rotate").toggleClass("down");
    });*/
}


function serviceButton() {
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}


function refButton() {
    if (z.style.display === "block") {
        z.style.display = "none";
    } else {
        z.style.display = "block";
    }
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