//Call back függvény
function fadeDone(){
    console.log(this);
}

//Eseménykezelő beállítása
$("p").click(function(){
    $(this).hide();
    $(this).fadeTo(4000,1, fadeDone);
});

//Esemény beállítása
$("p").click();

//Kattintás megelőzés
$("nav a.nav-link").click( function(ev){
    ev.preventDefault();
    console.log(ev);
});