# Changelog #
Changelog du projet des **Normes Web pour les sites de l'Université Laval**

## [v1.2] - 2023-10-19
### Changements au DOM
* Remplacer le bouton bascule de recherche `header-search-trigger` avec la structure suivante
```html
<button type="button" class="header-search-trigger header-main-utilities-action" aria-expanded="false" aria-controls="header-search" aria-label="Chercher">
    <span class="switch-toggle switch-toggle--close">
        <!-- @TODO: Include this SVG as an inline SVG -->
        <!-- ./assets/dist/svg/close.svg -->
    </span>
    <span class="switch-toggle switch-toggle--search">
        <!-- @TODO: Include this SVG as an inline SVG -->
        <!-- ./assets/dist/svg/search.svg -->
    </span>
</button>
```
* Remplacer la composante du sélecteur de langues `header-language-switcher` avec la structure suivante
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
* Remplacer le bouton de menu mobile `header-menu-trigger` avec la structure suivante
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
* Remplacer le bouton `header-search-button` avec la structure suivante
```html
<button class="header-search-button" tabindex="0" type="submit" value="" aria-label="Chercher">
    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/search.svg -->
</button>
```
* Pour un des titres `footer-navigation-title`, remplacer le texte de "Carrière à l'UL" par "Carrière"
* Dans `footer-legal`, changer le texte du lien `Avis de confidentialité` par `Confidentialité`
* Remplacer le logo SVG dans `footer-logo` pour le nouveau, anciennement `logo-ul-footer.svg` et maintenant `logo-ul-city.svg`
* Remplacer la composante `header-secure-area` avec la structure suivante
    * Lorsque l'utilisateur est déconnecté
    ```html
    <a href="#" class="header-main-utilities-action" aria-label="Espace sécurisé" title="Espace sécurisé">
    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/user-void.svg -->
    </a>
    ```
    * Lorsque l'utilisateur est connecté
    ```html
    <nav class="header-secure-area">
        <button type="button" id="ul-secure-menu-button" aria-haspopup="true" class="header-secure-area-trigger header-main-utilities-action" aria-expanded="false" aria-controls="ul-secure-menu" aria-label="Ouvrir le menu sécurisé" title="Espace sécurisé">
            <!-- @TODO: Include this SVG as an inline SVG -->
            <!-- ./assets/dist/svg/user-filled.svg -->

            <!-- @TODO: Include this SVG as an inline SVG -->
            <!-- ./assets/dist/svg/chevron-right-angle-down.svg -->
        </button>

        <ul id="header-secure-area-list" class="header-secure-area-list menu" role="listbox" aria-label="Faites un choix" hidden>
            <li class="header-secure-area-list-item" role="option" tabindex="-1" aria-posinset="1" aria-setsize="2" aria-selected="false">
            <a href="#">
                <span>Espace sécurisé</span>
            </a>
            </li>
            <li class="header-secure-area-list-item" role="option" tabindex="-1" aria-posinset="2" aria-setsize="2" aria-selected="false">
            <a href="#">
                <span>Déconnexion (IDUL00)</span>
            </a>
            </li>
        </ul>
    </nav>
    ```
#### Spécifique aux sites des unités
* Retirer le div `header-tools` en conservant son contenu
#### Spécifique aux sites des sous-unités, en répertoire ou en sous-domaine
* Retirer le div `header-tools` en conservant son contenu
* Remplacer le bouton `header-sub-nav-button` avec la structure suivante
```html
<button type="button" class="header-sub-nav-button" aria-expanded="false" aria-controls="header-sub-nav-main" aria-label="Menu de sous-navigation">
    <!-- @TODO: Include this SVG as an inline SVG -->
    <!-- ./assets/dist/svg/chevron-right-angle-down.svg -->
</button>
```

### Changements aux styles
* Dans le SCSS de configuration, un paramètre a changé. Remplacer les instances de l'ancienne variable :
    * `/assets/src/scss/abstracts/_settings.scss`: `$menu-is-always-mobile` devient `$always-force-mobile-menu`
* Plusieurs SCSS ont été mis à jour de façon importante. Remplacer les éléments suivants avec la nouvelle version :
    * `/assets/src/scss/layout/header.scss`
    * `/assets/src/scss/layout/_header-with-submenu.scss`
    * `/assets/src/scss/layout/footer.scss`
* Les SCSS suivants ont été retirés avec leurs styles réintégrés ailleurs. Supprimer les éléments suivants :
    * `/assets/src/scss/normes.scss`
    * `/assets/src/scss/normes/_icons.scss`
    * `/assets/src/scss/normes/_secure.scss`
* Recompiler le SCSS, avec vos paramètres dans le SCSS de configuration `_settings.scss`

### Changements aux scripts
* Le script normes.js a été mis à jour. Remplacer avec la nouvelle version :
    * `/assets/src/js/normes.js`: Correctif d'un sélecteur pour le menu sécurisé
* Recompiler le JS

### Changements aux icônes
* Les icônes suivantes ont été ajoutées :
    * `/assets/dist/svg/chevron-obtuse-angle-left.svg`
    * `/assets/dist/svg/chevron-right-angle-down.svg`
    * `/assets/dist/svg/close.svg`
    * `/assets/dist/svg/logo-ul-city.svg`
    * `/assets/dist/svg/menu.svg`
    * `/assets/dist/svg/search.svg`
    * `/assets/dist/svg/user-filled.svg`
    * `/assets/dist/svg/user-void.svg`
* Plusieurs icônes ont été mises à jour. Remplacer les éléments suivants avec la nouvelle version :
    * `assets/dist/svg/social-flickr.svg`
    * `assets/dist/svg/social-vimeo.svg`
* Les icônes suivantes ont été retirées. Supprimer les éléments suivants :
    * `/assets/dist/svg/chevron-bottom.svg`
    * `/assets/dist/svg/chevron-left.svg`
    * `/assets/dist/svg/logo-ul-footer.svg`

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
