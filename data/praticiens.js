/* Annuaire des praticiens du Centre SFFERe (Boulogne-Billancourt).
   Source : site actuel et annonces du centre. Liste partielle : le site actuel
   liste plus de 40 praticiens ; ceux dont le nom et la spécialité n'ont pas pu
   être vérifiés ne figurent pas ici. Champs vides = information à compléter. */
window.PRATICIENS = [
  { nom: "Dr Alexandre Ballout", categorie: "gyneco", role: "Gynécologue-obstétricien", detail: "Obstétrique, échographie, chirurgie gynécologique mini-invasive, infertilité, endométriose. CEO et co-fondateur des Centres SFFERe.", fiche: "praticien-alexandre-ballout.html", doctolib: "https://www.doctolib.fr/gynecologue-obstetricien/boulogne-billancourt/alexandre-ballout" },
  { nom: "Dr Gihad Chalouhi", categorie: "gyneco", role: "Gynécologue-obstétricien, médecine et chirurgie fœtales", detail: "Sur-spécialisé en médecine fœtale et chirurgie fœtale in utero. Co-fondateur du CéBB et du Centre SFFERe.", fiche: "https://www.sffere.com/specialists/Gihad/", doctolib: "" },
  { nom: "Dr Louise Sonnier", categorie: "gyneco", role: "Gynécologue-obstétricienne, échographie et médecine fœtale", detail: "Ancienne praticienne hospitalière à Bicêtre (diagnostic anténatal et échographie fœtale).", fiche: "", doctolib: "https://www.doctolib.fr/gynecologue-obstetricien/boulogne-billancourt/louise-sonnier" },
  { nom: "Dr Aurore Bonnin", categorie: "gyneco", role: "Gynécologue-obstétricienne, échographies", detail: "", fiche: "", doctolib: "" },
  { nom: "Dr Julie Cormier", categorie: "gyneco", role: "Gynécologue-obstétricienne", detail: "", fiche: "", doctolib: "" },
  { nom: "Dr Marta Le Galic", categorie: "gyneco", role: "Gynécologue-obstétricienne, médecine fœtale", detail: "DIU de médecine fœtale, université Paris Descartes.", fiche: "https://www.sffere.com/specialists/Marta/", doctolib: "" },
  { nom: "Dr Emmanuel Spaggiari", categorie: "gyneco", role: "Gynécologue-obstétricien, échographie et médecine fœtale", detail: "Diagnostic prénatal. Plus de dix ans à l'hôpital Necker-Enfants Malades.", fiche: "", doctolib: "" },
  { nom: "Dr Victoire Weymuller", categorie: "gyneco", role: "Gynécologue-obstétricienne", detail: "Consulte à Issy SFFERe et au CéBB.", fiche: "https://www.sffere.com/specialists/Victoire_Weymuller/", doctolib: "" },
  { nom: "Dr Leya Daher", categorie: "gyneco", role: "Assistante spécialiste en gynécologie-obstétrique", detail: "", fiche: "https://sffere.com/specialists/Leya_Daher/", doctolib: "" },
  { nom: "Dr Juan Pablo Estevez", categorie: "gyneco", role: "Chirurgien gynécologue et oncologue", detail: "Chirurgie mini-invasive et robotique.", fiche: "", doctolib: "" },
  { nom: "Dr [Prénom] Oueld", categorie: "gyneco", role: "Gynécologue-obstétricien, pathologie du col et HPV", detail: "Pathologie cervico-vaginale, vulvaire et papillomavirus.", fiche: "", doctolib: "" },
  { nom: "Florie Oksenberg-Varamo", categorie: "sage-femme", role: "Sage-femme diplômée d'État", detail: "Suivi de grossesse, monitoring obstétrical, préparation à l'accouchement en petits groupes.", fiche: "https://www.sffere.com/specialists/Oksenberg/", doctolib: "https://www.doctolib.fr/sage-femme/paris/florie-varamo" },
  { nom: "Marlène Barlier", categorie: "sage-femme", role: "Sage-femme", detail: "", fiche: "", doctolib: "" },
  { nom: "Marion Laborde", categorie: "osteo", role: "Ostéopathe", detail: "Accompagnement des troubles gynécologiques : endométriose, SOPK, règles douloureuses, fibromes. Femme enceinte et post-partum.", fiche: "", doctolib: "" },
  { nom: "Garence Naigeon", categorie: "diet", role: "Diététicienne-nutritionniste", detail: "Spécialisée en santé de la femme.", fiche: "https://www.sffere.com/specialists/garence_naigeon/", doctolib: "" },
  { nom: "Amélie Schwerer", categorie: "diet", role: "Diététicienne et micronutritionniste", detail: "Micronutrition de la femme enceinte (DIU MAPS).", fiche: "", doctolib: "" },
  { nom: "Alexandra Schlienger", categorie: "sophro", role: "Sophrologue certifiée RNCP", detail: "Formatrice et jury RNCP à l'Institut de Formation en Sophrologie Paris X.", fiche: "", doctolib: "" },
  { nom: "[Nom de la psychologue]", categorie: "psy", role: "Psychologue", detail: "Consultations pendant la grossesse et en post-partum. Nom à compléter depuis le site actuel.", fiche: "", doctolib: "" },
  { nom: "Lucie Stetten-Pigasse", categorie: "autre", role: "[Rôle à préciser]", detail: "", fiche: "https://www.sffere.com/specialists/Lucie/", doctolib: "" },
  { nom: "Armand Babatounde", categorie: "autre", role: "[Rôle à préciser]", detail: "", fiche: "https://sffere.com/specialists/armand/", doctolib: "" }
];
window.CATEGORIES = [
  { id: "tous", label: "Tous" },
  { id: "gyneco", label: "Gynécologues-obstétriciens" },
  { id: "sage-femme", label: "Sages-femmes" },
  { id: "osteo", label: "Ostéopathes" },
  { id: "diet", label: "Diététiciennes" },
  { id: "psy", label: "Psychologue" },
  { id: "sophro", label: "Sophrologue" },
  { id: "autre", label: "Autres" }
];
