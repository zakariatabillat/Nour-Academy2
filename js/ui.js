// Tout ce qui touche à la page
import { cours } from "./data.js";
import { libellesNiveau, libellesStatut, formaterDate, formaterTel } from "./utils.js";

const corpsTableau = document.querySelector("#corps-tableau");
const compteur = document.querySelector("#compteur");

// Crée une cellule <td> avec du texte (textContent : jamais interprété comme du HTML)
function cellule(texte) {
  const td = document.createElement("td");
  td.textContent = texte;
  return td;
}

function celluleStatut(statut) {
  const td = document.createElement("td");
  const badge = document.createElement("span");
  badge.className = `statut statut--${statut}`;
  badge.textContent = libellesStatut[statut];
  td.append(badge);
  return td;
}

function titreCours(coursId) {
  const c = cours.find(function (c) {
    return c.id === coursId;
  });
  if (c === undefined) {
    return "Cours inconnu";
  }
  return c.titre;
}

export function afficherTableau(inscriptions) {
  corpsTableau.innerHTML = "";

  for (const inscription of inscriptions) {
    const { numero, eleve, niveau, coursId, tel, statut, date } = inscription;

    const ligne = document.createElement("tr");
    ligne.append(
      cellule(numero),
      cellule(eleve),
      cellule(libellesNiveau[niveau]),
      cellule(titreCours(coursId)),
      cellule(formaterTel(tel)),
      celluleStatut(statut),
      cellule(formaterDate(date))
    );
    corpsTableau.append(ligne);
  }

  compteur.textContent = `${inscriptions.length} inscriptions`;
}