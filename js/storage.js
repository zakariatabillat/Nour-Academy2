// Le seul fichier qui touche à localStorage
const CLE = "nour-inscriptions";

export function charger() {
  const texte = localStorage.getItem(CLE);
  if (texte === null) {
    return null;
  }

  try {
    return JSON.parse(texte);
  } catch {
    return null;
  }
}

export function sauvegarder(inscriptions) {
  localStorage.setItem(CLE, JSON.stringify(inscriptions));
}

export function effacer() {
  localStorage.removeItem(CLE);
}