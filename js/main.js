//Call back függvény
function fadeDone(){
    console.log(this);
}

//Eseménykezelő beállítása
$("p").click(function(){
    //$(this).hide();
    //$(this).fadeTo(4000,1, fadeDone);
    //$(this).slideDown(3500).css("color","blue");
});

//Esemény beállítása
//$("p").click();

//Kattintás megelőzés
$("nav a.nav-link").click( function(ev){
    ev.preventDefault();
    var link = $(this);
    var prop    = link.data("prop");
    var val     = link.data("value");
    var speed   = link.data("speed");
    var settings = {};
    settings[prop]=val;

    $(document.body).animate(settings, speed, function(){
        document.location = link.attr("href");
    });
});

//Event oldal
$(".events-search-row input").on("keyup", function(ev){
    var elem;
    var search;
    var content;
    $.each($(".events-card-deck .card .card-title"),function(index,elem){
      elem = $(elem);
      search = ev.target.value.toLowerCase();
      content = elem.html().toLocaleLowerCase();
      if (content.indexOf(search) == -1){
        elem.parents(".card").hide();
      } else {
        elem.parents(".card").show();
      }
    });
  }
);

//Regiszter oldal
$(".cherry-custom-file").on(
    "change", function(ev){
      var name = ev.target.value.split("\\").pop();
      $(this)
        .find(".file-name")
        .html(name);
    }
  );

  var alertBox = $(".alert.alert-primary");
function showInvalidMessage(){
  alertBox
    .removeClass("alert-primary")
    .addClass("alert-danger")
    .find(".alert-message")
    .text("Sikertelen belépés!");  
}

//Ticket oldal
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })