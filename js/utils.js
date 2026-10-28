// Petites fonctions utiles partout (aucun import, aucun accès à la page)

export const libellesNiveau = {
  "1ap": "1re année primaire",
  "2ap": "2e année primaire",
  "3ap": "3e année primaire",
  "4ap": "4e année primaire",
  "5ap": "5e année primaire",
  "6ap": "6e année primaire",
  "1ac": "1re année collège",
  "2ac": "2e année collège",
  "3ac": "3e année collège",
  "tc": "Tronc commun",
  "1bac": "1re année Bac",
  "2bac": "2e année Bac"
};

export const libellesStatut = {
  "en-attente": "En attente",
  "valide": "Validé",
  "paye": "Payé"
};

// "2026-09-04" → "04/09/2026"
export function formaterDate(dateIso) {
  const [annee, mois, jour] = dateIso.split("-");
  return `${jour}/${mois}/${annee}`;
}

// "0726018159" → "07 26 01 81 59"
export function formaterTel(tel) {
  if (tel.startsWith("+212")) {
    return "+212 " + tel.slice(4);
  }
  return tel.replace(/(\d{2})(?=\d)/g, "$1 ");
}