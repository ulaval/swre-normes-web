// Fermeture du menu
var closeMainMenu=function(){
  document.querySelector(".ulaval-header-mobile-menu").classList.remove("open");
  document.querySelector(".ulaval-header-menu-trigger").querySelector("span.screen-reader-text").innerText="Ouvrir le menu principal";
  document.querySelector(".ulaval-header-menu-trigger").setAttribute("aria-expanded","false");
  document.body.classList.remove("ulaval-nav-mobile-open");
}


// Fermeture du moteur de recherche
var closeMainSearch=function(){
  document.querySelector(".ulaval-header-search").classList.add("remove");
  document.querySelector(".ulaval-header-search").classList.remove("open");
  document.querySelector(".ulaval-header-search-trigger").setAttribute("aria-expanded","false");
}

// Fermeture d'un menu d'outil
var closeToolMenu=function(menu,trigger){
  document.getElementById(menu).hidden=true;
  document.querySelector(trigger).setAttribute("aria-expanded","false");
  if(currentlyFocusedLang=document.querySelector("#"+menu+">li[aria-selected=true]")){
    currentlyFocusedLang.setAttribute("aria-selected","false");
  }
  document.removeEventListener('keyup', function(e){toolMenuKeyUp(e,menu,trigger)});
  document.removeEventListener('keydown', function(e){preventScrollOnNavKeyDowns(e,menu,trigger)});
  document.removeEventListener('click', function(e){detectClickOutside(e,menu,trigger)});
  const switcherItems = document.querySelectorAll("#"+menu+">li a");
      switcherItems.forEach(item=>{
        item.removeEventListener("mouseover",blurSwitcherItems);
      });
}

// Ouverture d'un menu d'outil
var openToolMenu=function(menu,trigger){
  triggerButton=document.querySelector(trigger);
  if(triggerButton.getAttribute("aria-expanded")=="false"){
    document.getElementById(menu).hidden=false;
    triggerButton.setAttribute("aria-expanded","true");
    document.querySelector("#"+menu+">li:first-child a").focus();
    document.querySelector("#"+menu+">li:first-child").setAttribute("aria-selected","true");
    document.addEventListener('keyup', function(e){toolMenuKeyUp(e,menu,trigger)});
    document.addEventListener('keydown', function(e){preventScrollOnNavKeyDowns(e,menu,trigger)});
    document.addEventListener('click', function(e){detectClickOutside(e,menu,trigger)});
    const menuItems = document.querySelectorAll("#"+menu+">li a");
    menuItems.forEach(item=>{
      item.addEventListener("mouseover",blurSwitcherItems);
    });
    }
    else{
      closeToolMenu(menu,trigger);
    }
}

//Comportement du bouton de menu mobile
document.querySelector(".ulaval-header-menu-trigger").addEventListener("click",function(){
    if(this.getAttribute("aria-expanded")=="false"){
      if(searchBarButton=document.querySelector(".ulaval-header-search-trigger")){
        if(searchBarButton.getAttribute("aria-expanded")=="true"){
          closeMainSearch();
        }
      }

      document.querySelector(".ulaval-header-mobile-menu").classList.add("open");
      this.querySelector("span.screen-reader-text").innerText="Fermer le menu principal";
      this.setAttribute("aria-expanded","true");
      document.body.classList.add("ulaval-nav-mobile-open");
    }
    else{
      closeMainMenu();
    }
  });

//Comportement du bouton du moteur de recherche principal
if(searchBarButton=document.querySelector(".ulaval-header-search-trigger")){
searchBarButton.addEventListener("click",function(){
    if(this.getAttribute("aria-expanded")=="false"){
      if(document.querySelector(".ulaval-header-menu-trigger").getAttribute("aria-expanded")=="true"){
        closeMainMenu();
      }
    document.querySelector(".ulaval-header-search").classList.add("open");
    document.querySelector(".champ-recherche").focus();
    this.setAttribute("aria-expanded","true");
    }
    else{
      closeMainSearch();
    }
});
}

// Activation du sélecteur de langue si disponible
if(languageSwitcher = document.querySelector(".ulaval-language-switcher-trigger")){
  languageSwitcher.addEventListener("click",function(){openToolMenu("ulaval-language-switcher-list",".ulaval-language-switcher")});
}

// Activation du menu sécurisé si disponible
if(secureMenu = document.querySelector(".ulaval-secure-menu-trigger")){
  secureMenu.addEventListener("click",function(){openToolMenu("ulaval-secure-menu",".ulaval-secure-menu-trigger")});
}

var blurSwitcherItems=function(e,menu,trigger){
  const switcherItems = document.querySelectorAll("#"+menu+">li a");
  switcherItems.forEach(item=>{
    if(item == document.activeElement){
      item.blur();
    }
  });
}

var detectClickOutside=function(e,menu,trigger){
  if(!document.querySelector(trigger).parentElement.contains(e.target)){
    closeToolMenu(menu,trigger);
  }
}

// Prévient le scroll down lorsque nous sommes en train de sélectionner une langue avec les flèches
var preventScrollOnNavKeyDowns=function(e,menu,trigger){
  if (e.keyCode == 38 || e.keyCode == 40) {
    e.preventDefault();
}
}

// Détection des touches pour la navigation du sélecteur de langue par clavier
var toolMenuKeyUp=function(e,menu,trigger){
  const currentFocus=document.activeElement.parentElement;
  const currentIndex=[...currentFocus.parentElement.children].indexOf(currentFocus);
  switch(e.keyCode){
    case 38: //Up
      currentFocus.setAttribute("aria-selected","false");
      if(currentIndex==0){
        document.querySelector("#"+menu+" li:last-child a").focus();
        document.querySelector("#"+menu+" li:last-child").setAttribute("aria-selected","true");
      }
      else{
          currentFocus.previousElementSibling.querySelector("a").focus();
          currentFocus.previousElementSibling.setAttribute("aria-selected","true");
      }
      break;
    case 40: //Down
      currentFocus.setAttribute("aria-selected","false");
      if(currentIndex==([...currentFocus.parentElement.children].length-1)){
        document.querySelector("#"+menu+" li:first-child a").focus();
        document.querySelector("#"+menu+" li:first-child").setAttribute("aria-selected","true");
      }
      else{
          currentFocus.nextElementSibling.querySelector("a").focus();
          currentFocus.nextElementSibling.setAttribute("aria-selected","true");
      }
      break;
    case 27: //Escape
    case 9: //Tab
      closeToolMenu(menu,trigger);
      document.querySelector(trigger).focus();
      break;
  }
}

// Ajout/retrait de certaines classes durant les périodes d'animation pour aider à la fluidité
document.addEventListener('animationstart', function (e) {
if (e.animationName === 'ulaval-header-search-fadeIn' || e.animationName === 'ulaval-header-mobile-fadeIn') {
    e.target.classList.add('remove');
}
});
document.addEventListener('animationend', function (e) {
if (e.animationName === 'ulaval-header-search-fadeOut' || e.animationName === 'ulaval-header-mobile-fadeOut') {
    e.target.classList.remove('remove');
    }
});