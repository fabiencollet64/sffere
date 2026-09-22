/* Annuaire filtrable : recherche par nom + filtre par spécialité. Vanilla JS, sans dépendance. */
(function () {
  'use strict';
  var liste = window.PRATICIENS || [];
  var categories = window.CATEGORIES || [];
  var grille = document.getElementById('grille-praticiens');
  var compte = document.getElementById('resultat-compte');
  var recherche = document.getElementById('recherche-nom');
  var puces = document.getElementById('puces-filtre');
  if (!grille || !puces) return;

  var etat = { texte: '', categorie: 'tous' };

  // Filtre initial depuis l'URL (?specialite=gyneco), utilisé par les pages parcours
  var param = new URLSearchParams(location.search).get('specialite');
  if (param && categories.some(function (c) { return c.id === param; })) etat.categorie = param;

  function normaliser(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function initiales(nom) {
    return nom.replace(/^Dr\s+/, '').replace(/\[.*?\]/g, '').trim().split(/\s+/).slice(0, 2).map(function (m) { return m[0] || ''; }).join('').toUpperCase() || '?';
  }
  function libelle(id) {
    var c = categories.filter(function (x) { return x.id === id; })[0];
    return c ? c.label : id;
  }
  function echapper(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }

  function rendre() {
    var q = normaliser(etat.texte);
    var resultats = liste.filter(function (p) {
      var okCat = etat.categorie === 'tous' || p.categorie === etat.categorie;
      var okTexte = !q || normaliser(p.nom).indexOf(q) !== -1 || normaliser(p.role).indexOf(q) !== -1;
      return okCat && okTexte;
    });
    grille.innerHTML = resultats.map(function (p) {
      var actions = [];
      if (p.doctolib) actions.push('<a href="' + echapper(p.doctolib) + '" data-doctolib="utm-a-verifier" rel="noopener">Prendre rendez-vous</a>');
      if (p.fiche) actions.push('<a href="' + echapper(p.fiche) + '">Voir la fiche</a>');
      if (!actions.length) actions.push('<span class="texte-doux">Rendez-vous par téléphone</span>');
      var detail = p.detail ? '<p class="detail">' + echapper(p.detail).replace(/\[(.*?)\]/g, '<span class="a-completer">[$1]</span>') + '</p>' : '';
      return '<article class="carte carte-praticien">' +
        '<div class="portrait" aria-hidden="true">' + echapper(initiales(p.nom)) + '</div>' +
        '<div><h3>' + echapper(p.nom).replace(/\[(.*?)\]/g, '<span class="a-completer">[$1]</span>') + '</h3>' +
        '<p class="role">' + echapper(p.role).replace(/\[(.*?)\]/g, '<span class="a-completer">[$1]</span>') + '</p>' + detail +
        '<div class="actions">' + actions.join('') + '</div></div></article>';
    }).join('');
    if (!resultats.length) {
      grille.innerHTML = '<div class="aucun-resultat" style="grid-column:1/-1">Aucun praticien ne correspond à votre recherche. Essayez un autre nom ou une autre spécialité, ou appelez le 01 70 83 43 60.</div>';
    }
    if (compte) {
      compte.textContent = resultats.length + (resultats.length > 1 ? ' praticiens' : ' praticien') +
        (etat.categorie !== 'tous' ? ' · ' + libelle(etat.categorie) : '') +
        (etat.texte ? ' · « ' + etat.texte + ' »' : '');
    }
    puces.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.categorie === etat.categorie));
    });
  }

  // Puces de filtre
  puces.innerHTML = categories.map(function (c) {
    var n = c.id === 'tous' ? liste.length : liste.filter(function (p) { return p.categorie === c.id; }).length;
    return '<button type="button" data-categorie="' + c.id + '" aria-pressed="false">' + echapper(c.label) + ' <span class="texte-doux">(' + n + ')</span></button>';
  }).join('');
  puces.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    etat.categorie = b.dataset.categorie;
    rendre();
  });
  if (recherche) {
    recherche.addEventListener('input', function () { etat.texte = recherche.value.trim(); rendre(); });
  }
  rendre();
})();
