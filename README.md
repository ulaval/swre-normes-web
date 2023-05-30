# Normes web pour les sites de l'Université Laval #
Les normes comprennent l'entête et le pied de page pour tous les sites universitaires.

Les différentes cas d'utilisation sont démontrer dans les quatre gabarits du dépôt de code.

### Gabarits de référence ###
En fonction de votre type de site, utilisez le fichier HTML correspondant à votre URL:

* `ulaval.ca` devrait utilisé le gabarit `university.html`.
* `unite.ulaval.ca` devrait utilisé le gabarit `unit--no-submenu.html`.
* `unite.ulaval.ca/sous-unite` devrait utilisé le gabarit `subunit--with-submenu.html`.
* `sous-unite.unite.ulaval.ca` devrait utilisé le gabarit `subunit.html`.

### Structure de dossier ###
La structure de dossier suivante est recommandé pour la bonne compilation des styles et des scripts.

```bash
project/
├── assets/
│   ├── dist/
│   │   ├── css/
│   │   │   └── *.css
│   │   ├── favicon/
│   │   │   └── *.png
│   │   ├── fonts/
│   │   │   └── *.woff
│   │   ├── img/
│   │   │   └── *.jpg
│   │   ├── js/
│   │   │   └── *.js
│   │   └── svg/
│   │       └── *.svg
│   └── src/
│       ├── js/
│       │   └── *.js
│       └── scss/
│           └── *.scss
├── templates/
│   └── *.html.twig
├── .stylelintignore
├── .stylelintrc
├── package.json
├── package-lock.json
└── webpack.config.js
```

### Installation et utilisation du compilateur de code ###
```bash
# Install Node Package Manager (NPM)
npm install

# Watch folder and compile during development
npm run watch

# Build for production before any commits
npm run build
```

### Documentation ###
Les normes web ont été construites à partir de nos standards de programmation définit ici: [Standards de programmation du SWRE](https://wiki.dti.ulaval.ca/display/OrgBSW/UL+-+Normes+web).

### Soutien à l'installation ###
Contacter [aide@bsw.ulaval.ca](mailto:aide@bsw.ulaval.ca) pour obtenir de l'aide.

### Demande d'évolution et correctifs ###
Les demande d'évolution sont les bienvenus sous forme de *pull request*.

Pour les problèmes majeurs, veuillez ouvrir un billet en écrivant à [aide@bsw.ulaval.ca](mailto:aide@bsw.ulaval.ca) en expliquant comment répliquer le problème.

### Contributeurs ###
* Alexandre Breton (ALBRE40)
* Bruno Gosselin (BRGOS17)
* Dave Gingras (DAGIN39)
* Maxime Breton (MABRE140)

### Mainteneurs ###
* Alexandre Breton (ALBRE40)
