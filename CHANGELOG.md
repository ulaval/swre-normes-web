# Changelog #
Changelog du projet des **Normes Web pour les sites de l'Université Laval**

## [v1.2] - 2023-10-19
### Changements au DOM
#### Pour le site ULaval.ca {#ulaval}
* Remplacer le bouton bascule de recherche `header-search-trigger` avec la structure suivante\
```html
<button type="button" class="header-search-trigger header-main-utilities-action" aria-expanded="false" aria-controls="header-search" aria-label="Chercher">
    <span class="switch-toggle">
        <!-- @TODO: Include this SVG as an inline SVG -->
        <!-- ./assets/dist/svg/close.svg -->
    </span>
    <span class="switch-toggle">
        <!-- @TODO: Include this SVG as an inline SVG -->
        <!-- ./assets/dist/svg/search.svg -->
    </span>
</button>
```
* Remplacer la composante du sélecteur de langues `header-language-switcher` avec la structure suivante\
```html
<nav class="header-language-switcher">
    <button type="button" class="header-language-switcher-trigger header-main-utilities-action" aria-expanded="false" aria-controls="header-language-switcher-list" aria-label="Langue actuelle : Français, Sélectionnez votre langue">
        <span aria-hidden="true" aria-role="presentation">fr</span>

        <!-- @TODO: Include this SVG as an inline SVG -->
        <!-- ./assets/dist/svg/chevron-right-angle-down.svg -->
    </button>
    <ul id="header-language-switcher-list" class="header-language-switcher-list menu" role="listbox" aria-label="Sélectionnez une langue" hidden>
        <li class="header-language-switcher-list-item" role="option" tabindex="-1" aria-posinset="1" aria-setsize="2" aria-selected="false">
        <a href="#">
            <span lang="en" aria-label="English">en</span>
        </a>
        </li>
        <li class="header-language-switcher-list-item" role="option" tabindex="-1" aria-posinset="2" aria-setsize="2" aria-selected="false">
        <a href="#">
            <span lang="es" aria-label="Español">es</span>
        </a>
        </li>
    </ul>
</nav>
```
* Remplacer le bouton de menu mobile `header-menu-trigger` avec la structure suivante\
```html
<button type="button" class="header-menu-trigger header-main-utilities-action" aria-expanded="false" aria-controls="ul-mobile-menu">
    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/menu.svg -->

    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/close.svg -->

    <span class="screen-reader-text visually-hidden">Ouvrir le menu principal</span>
</button>
```
* Ajouter à l'input avec l'ID `search-in--website` l'attribut `checked="checked"`
* Remplacer le bouton `header-search-button` avec la structure suivante\
```html
<button class="header-search-button" tabindex="0" type="submit" value="" aria-label="Chercher">
    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/search.svg -->
</button>
```
* Pour un des titres `footer-navigation-title`, remplacer le texte de "Carrière à l'UL" par "Carrière"
* Remplacer le logo SVG dans `footer-logo` pour le nouveau, anciennement `logo-ul-footer.svg` et maintenant `logo-ul-city.svg`
* Dans `footer-legal`, changer le texte du lien `Avis de confidentialité` par `Confidentialité`
#### Pour les sites des unités {#unite}
#### Pour les sites des sous-unités, en répertoire {#unite-sousmenu}
#### Pour les sites des sous-unités, en sous-domaine {#sous-unite}

### SCSS
* Dans le SCSS de configuration, un paramètre a changé. Remplacer les instances de l'ancienne variable :
* * `/assets/src/scss/abstracts/_settings.scss`: `$menu-is-always-mobile` devient `$always-force-mobile-menu`
* Plusieurs SCSS ont été mis à jour de façon importante. Remplacer les éléments suivants avec la nouvelle version :
* * `/assets/src/scss/layout/header.scss`
* * `/assets/src/scss/layout/_header-with-submenu.scss`
* * `/assets/src/scss/layout/footer.scss`
* Les SCSS suivants ont été retirés avec leurs styles réintégrés ailleurs. Supprimer les éléments suivants :
* * `/assets/src/scss/normes.scss`
* * `/assets/src/scss/normes/_icons.scss`
* * `/assets/src/scss/normes/_secure.scss`

### JS
* Le script normes.js a été mis à jour. Remplacer avec la nouvelle version :
* * `/assets/src/js/normes.js`: Correctif d'une classe pour le menu sécurisé

* Correction du `line-height` de la section droits d'auteurs et la section de liens légaux
* Remplacement du terme "Avis de confidentialité" pour "Confidentialité"
* Simplification du HTML/CSS et retrait de la balise `<div class="header-tools">`
* Remplacement d'icônes dans l'entête en `svg css` vers des `svg inline`
* Retrait de fichier svg inutilisé
* Ajout de la classe `unit-with-submenu` sur le `body` si y il a un sous-menu
* Remplacement de la classe `ul-language-switcher-list` pour `header-language-switcher-list` dans l'entête
* Remplacement de la classe `ul-link--in-language-nav` pour `header-language-switcher-list-item` dans l'entête
* Remplacement de la classe `ul-secure-menu-trigger` pour `header-secure-area-trigger` dans l'entête
* Remplacement de la classe `ul-secure-menu` pour `header-secure-area-list` dans l'entête
* Remplacement de la classe `menu-item` dans `ul-secure-menu` pour `header-secure-area-list-item` dans l'entête
* Correction d'un bogue qui fesait parfois disparaitre les icônes dans l'entête
* Uniformisation des styles des boutons de la section `header-main-utilities`
* Corrections dans les commentaires
* Suppression de la feuille de style désuette `icons.scss`
* Suppression de la feuille de style désuette `secure.scss`
* Suppression de la feuille de style désuette `normes.scss`

## [v1.1] - 2023-08-29
* Ajout de 2 icônes de réseaux sociaux
* Ajout d'une `mixin` pour faciliter le contrôle des `z-index`
* Ajout d'effet `hover` dans l'entête
* Ajout d'un séparateur dans le pied de page entre la section droits d'auteurs et la section de liens légaux
* Ajout d'un input sélectionné par défaut dans le formulaire de recherche en entête
* Remplacement du logo UL dans le pied de page
* Changement dans l'implantation des favicons
* Corrections typographiques

## [v1.0] - 2023-08-16
* Lancement de la première version des Normes Web
