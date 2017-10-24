//Call back függvény
function fadeDone(){
    console.log(this);
}

//Eseménykezelő beállítása
$("p").click(function(){
    $(this).hide();
    //$(this).fadeTo(4000,1, fadeDone);
    $(this).slideDown(3500);
});

//Esemény beállítása
$("p").click();

//Kattintás megelőzés
$("nav a.nav-link").click( function(ev){
    ev.preventDefault();
    var link = $(this);
    $(document.body).animate({
        opacity: '0'
    },3000, function(){
        document.location = link.attr("href");
    });
});