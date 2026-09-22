# Maquette de refonte : Centre SFFERe

Maquette de démonstration réalisée par Collet Marketing pour présenter le potentiel d'une
refonte du site https://www.sffere.com/ (centre d'expertise en gynécologie obstétrique,
11 rue de la Ferme, 92100 Boulogne-Billancourt).

Site statique : HTML, CSS et JavaScript vanilla, sans framework ni build.
Toutes les pages portent `<meta name="robots" content="noindex, nofollow">`.

## Pages

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil : hero avec CTA Doctolib, 5 parcours, chiffres, le centre, articles, infos pratiques |
| `parcours-grossesse.html` | Page parcours complète (modèle) |
| `parcours-gynecologie.html` | Page parcours complète (modèle) |
| `equipe.html` | Annuaire filtrable par spécialité et recherche par nom (`js/equipe.js`, `data/praticiens.js`) |
| `praticien-alexandre-ballout.html` | Fiche praticien type, données structurées Physician |
| `infos-pratiques.html` | Accès, horaires, urgences (rappel du 15), carte |
| `faq.html` | FAQ en accordéon, données structurées FAQPage |

Les parcours Fertilité, Après la naissance et Accompagnement global suivent le modèle des
deux pages parcours et restent à produire.

## Structure

- `css/styles.css` : feuille de style unique, palette en variables dans `:root`
- `js/main.js` : menu mobile, accordéon, année du pied de page
- `js/equipe.js` et `data/praticiens.js` : annuaire
- `content/` : contenu source extrait du site actuel (markdown), avec les placeholders
- `tools/` : partials (en-tête, pied de page) et script d'assemblage des pages.
  Pour modifier l'en-tête ou le pied de page sur toutes les pages : éditer
  `tools/partials/*.html` puis lancer `tools/assemble.sh`. Les corps de page sont dans
  `tools/pages/*.html` (avec un fichier `.meta` pour title, description et JSON-LD).

## Ce qui reste à compléter avant présentation

Le site actuel n'était pas accessible depuis l'environnement de production de la maquette
(voir `content/README.md`). Les informations non vérifiées sont signalées entre crochets,
sur fond jaune, dans les pages. À reprendre depuis le site actuel :

1. Les photos (hero, centre, articles, portraits) : remplacer les blocs `visuel-placeholder`
   par les URL des images du site.
2. Les paramètres utm des liens Doctolib : chaque lien porte `data-doctolib="utm-a-verifier"`.
3. L'annuaire complet (`data/praticiens.js`) : 20 praticiens vérifiés sur plus de 40.
4. Le texte complet de la fiche du Dr Ballout et les questions restantes de la FAQ.
5. Les lignes de bus, le stationnement et les tarifs sur la page infos pratiques.
6. La palette : les variables `--c-prune*` dans `css/styles.css` sont à caler sur les
   couleurs exactes du logo (`https://www.sffere.com/img/SFFERe_logo3.png`).

## Déploiement GitHub Pages

Le workflow `.github/workflows/pages.yml` publie la racine du dépôt à chaque push sur `main`.
Une fois le dépôt `sffere-maquette` créé sur le compte `fabiencollet64` :

1. Pousser ce contenu sur la branche `main`.
2. Dans Settings → Pages, choisir Source : « GitHub Actions ».
3. L'URL sera https://fabiencollet64.github.io/sffere-maquette/

Sans workflow, l'option « Deploy from a branch » (branche `main`, dossier `/`) fonctionne aussi,
le fichier `.nojekyll` étant présent.
