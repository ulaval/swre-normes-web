//Hauteur calculée de l'en-tête (pour calculer la hauteur du menu)
const mainHeader=document.querySelector("header.ulaval-header");
document.body.style.setProperty(
  "--header-height",
  `${mainHeader.clientHeight}px`
);

// Largeur calculée de la scrollbar
document.body.style.setProperty(
  "--scrollbar-width",
  `${(window.innerWidth - document.body.clientWidth) / 2}px`
);

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

// Comportement du sélecteur de langue
if(languageSwitcher = document.querySelector(".ulaval-language-switcher-trigger")){
  languageSwitcher.addEventListener("click",function(){
    if(this.getAttribute("aria-expanded")=="false"){
      document.getElementById("ulaval-language-switcher-list").hidden=false;
      this.setAttribute("aria-expanded","true");
      document.querySelector("#ulaval-language-switcher-list>li:first-child a").focus();
      document.addEventListener('keyup', languageSwitcherKeys);
      }
      else{
        document.getElementById("ulaval-language-switcher-list").hidden=true;
        this.setAttribute("aria-expanded","false");
        document.removeEventListener('keyup', languageSwitcherKeys);
      }
  });
}

// Détection des touches pour la navigation du sélecteur de langue par clavier
var languageSwitcherKeys=function(e){
  const currentFocus=document.activeElement.parentElement;
  const currentIndex=[...currentFocus.parentElement.children].indexOf(currentFocus);
  console.log(currentIndex);
  switch(e.keyCode){
    case 38: //Up
      if(currentIndex==0){
        document.querySelector("#ulaval-language-switcher-list li:last-child a").focus();
      }
      else{
          currentFocus.previousElementSibling.querySelector("a").focus();
      }
      break;
    case 40: //Down
      if(currentIndex==([...currentFocus.parentElement.children].length-1)){
        document.querySelector("#ulaval-language-switcher-list li:first-child a").focus();
      }
      else{
          currentFocus.nextElementSibling.querySelector("a").focus();
      }
      break;
    case 27: //Escape
    case 9: //Tab
      document.getElementById("ulaval-language-switcher-list").hidden=true;
      document.querySelector(".ulaval-language-switcher-trigger").focus();
      document.querySelector(".ulaval-language-switcher-trigger").setAttribute("aria-expanded","false");
      document.removeEventListener('keyup', languageSwitcherKeys);
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