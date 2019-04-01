function menu() {
  /*recupere le menu burger  */
var mon_menu=document.getElementById("burger");
/*si le menu est invisible */

if(mon_menu.style.visibility == "hidden"){
/*le rendre visible*/
    mon_menu.style.visibility = "initial"
    /*si non le mettre invisible*/
}else{
    mon_menu.style.visibility="hidden";
}

}
/*2 eme methode plus courte   
mon_menu.style.visibility=(mon_menu.style.visibility =="hidden" )
                            ? "initial":"hiden";*/


