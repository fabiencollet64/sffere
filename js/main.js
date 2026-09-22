/* SFFERe maquette : scripts communs (menu mobile, accordéon, année). Vanilla JS. */
(function () {
  'use strict';

  // Menu mobile
  var bouton = document.querySelector('.bouton-menu');
  var nav = document.querySelector('.nav-principale');
  var entete = document.querySelector('.entete');
  var fermer = document.querySelector('.nav-fermer');

  function ouvrirMenu(ouvert) {
    if (!nav) return;
    nav.classList.toggle('ouverte', ouvert);
    entete && entete.classList.toggle('menu-ouvert', ouvert);
    bouton && bouton.setAttribute('aria-expanded', String(ouvert));
    document.body.style.overflow = ouvert ? 'hidden' : '';
    if (ouvert) {
      var premier = nav.querySelector('a, button');
      premier && premier.focus();
    } else if (bouton) {
      bouton.focus();
    }
  }
  if (bouton && nav) {
    bouton.addEventListener('click', function () {
      ouvrirMenu(bouton.getAttribute('aria-expanded') !== 'true');
    });
    fermer && fermer.addEventListener('click', function () { ouvrirMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('ouverte')) ouvrirMenu(false);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { if (nav.classList.contains('ouverte')) ouvrirMenu(false); });
    });
  }

  // Accordéon (FAQ) : boutons avec aria-expanded et aria-controls
  document.querySelectorAll('.accordeon-bouton').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var ouvert = btn.getAttribute('aria-expanded') === 'true';
      var panneau = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', String(!ouvert));
      if (panneau) panneau.hidden = ouvert;
    });
  });
  // Ouvre la question ciblée par l'ancre (#question-x)
  if (location.hash) {
    var cible = document.querySelector(location.hash + ' .accordeon-bouton');
    if (cible) cible.click();
  }

  // Année du pied de page
  document.querySelectorAll('[data-annee]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
