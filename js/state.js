// La liste des inscriptions pendant que l'application tourne
import { inscriptionsDemo } from "./data.js";
import { charger, sauvegarder, effacer } from "./storage.js";

let inscriptions = [];

function copieDemo() {
  return inscriptionsDemo.map(function (i) {
    return { ...i };
  });
}

export function initialiser() {
  const donnees = charger();

  if (donnees === null) {
    inscriptions = copieDemo();
    sauvegarder(inscriptions);
    console.log("Premier lancement : données de démo enregistrées.");
  } else {
    inscriptions = donnees;
  }
}

export function getInscriptions() {
  return inscriptions;
}

export function reinitialiserDemo() {
  effacer();
  initialiser();
}