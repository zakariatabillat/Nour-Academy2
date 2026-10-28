export const cours = [
    { id: 1, titre: "Mathématiques — préparation Bac", matiere: "maths", matiereNom: "Mathématiques", niveau: "2bac", niveauNom: "2e année Bac", creneau: "Lun. et mer. · 18h–20h", prix: 350, places: 6 },
    { id: 2, titre: "Physique-Chimie — préparation Bac", matiere: "pc", matiereNom: "Physique-Chimie", niveau: "2bac", niveauNom: "2e année Bac", creneau: "Mar. et jeu. · 18h–20h", prix: 350, places: 0 },
    { id: 3, titre: "SVT — préparation Bac", matiere: "svt", matiereNom: "SVT", niveau: "2bac", niveauNom: "2e année Bac", creneau: "Samedi · 9h–11h", prix: 300, places: 4 },
    { id: 4, titre: "Anglais — préparation Bac", matiere: "en", matiereNom: "Anglais", niveau: "2bac", niveauNom: "2e année Bac", creneau: "Samedi · 14h–16h", prix: 250, places: 1 },
    { id: 5, titre: "Mathématiques", matiere: "maths", matiereNom: "Mathématiques", niveau: "1bac", niveauNom: "1re année Bac", creneau: "Mardi · 17h–19h", prix: 300, places: 5 },
    { id: 6, titre: "Physique-Chimie", matiere: "pc", matiereNom: "Physique-Chimie", niveau: "1bac", niveauNom: "1re année Bac", creneau: "Jeudi · 17h–19h", prix: 300, places: 3 },
    { id: 7, titre: "Mathématiques", matiere: "maths", matiereNom: "Mathématiques", niveau: "tc", niveauNom: "Tronc commun", creneau: "Mercredi · 16h–18h", prix: 280, places: 7 },
    { id: 8, titre: "Français", matiere: "fr", matiereNom: "Français", niveau: "tc", niveauNom: "Tronc commun", creneau: "Samedi · 10h–12h", prix: 250, places: 2 },
    { id: 9, titre: "Mathématiques — examen régional", matiere: "maths", matiereNom: "Mathématiques", niveau: "3ac", niveauNom: "3e année collège", creneau: "Lundi · 17h–19h", prix: 250, places: 9 },
    { id: 10, titre: "Physique-Chimie", matiere: "pc", matiereNom: "Physique-Chimie", niveau: "3ac", niveauNom: "3e année collège", creneau: "Vendredi · 17h–19h", prix: 250, places: 5 },
    { id: 11, titre: "Français", matiere: "fr", matiereNom: "Français", niveau: "2ac", niveauNom: "2e année collège", creneau: "Mercredi · 14h–16h", prix: 200, places: 6 },
    { id: 12, titre: "Anglais", matiere: "en", matiereNom: "Anglais", niveau: "1ac", niveauNom: "1re année collège", creneau: "Samedi · 10h–12h", prix: 200, places: 10 },
    { id: 13, titre: "Soutien en mathématiques", matiere: "maths", matiereNom: "Mathématiques", niveau: "6ap", niveauNom: "6e année primaire", creneau: "Samedi · 9h–11h", prix: 180, places: 4 },
    { id: 14, titre: "Français — lecture et écriture", matiere: "fr", matiereNom: "Français", niveau: "4ap", niveauNom: "4e année primaire", creneau: "Mercredi · 14h–16h", prix: 180, places: 0 }
];

// Jeu de données fictif (loi 09-08 : aucune donnée réelle)
export const inscriptionsDemo = [
    { numero: "NA-2026-000001", parent: "Fatima Ouali", email: "fatima.ouali@gmail.com", tel: "0726018159", eleve: "Yassine", niveau: "2bac", coursId: 1, statut: "valide", date: "2026-09-04" },
    { numero: "NA-2026-000002", parent: "Karim Benali", email: "karim.benali@gmail.com", tel: "0683016613", eleve: "Salma", niveau: "2bac", coursId: 1, statut: "paye", date: "2026-09-07" },
    { numero: "NA-2026-000003", parent: "Nadia El Amrani", email: "nadia.elamrani@gmail.com", tel: "0686091390", eleve: "Adam", niveau: "2bac", coursId: 1, statut: "en-attente", date: "2026-09-10" },
    { numero: "NA-2026-000004", parent: "Rachid Tahiri", email: "rachid.tahiri@gmail.com", tel: "0703082462", eleve: "Imane", niveau: "2bac", coursId: 1, statut: "valide", date: "2026-09-13" },
    { numero: "NA-2026-000005", parent: "Samira Chakir", email: "samira.chakir@gmail.com", tel: "0694821993", eleve: "Omar", niveau: "2bac", coursId: 1, statut: "paye", date: "2026-09-16" },
    { numero: "NA-2026-000006", parent: "Hassan Idrissi", email: "hassan.idrissi@gmail.com", tel: "0718190937", eleve: "Lina", niveau: "2bac", coursId: 1, statut: "en-attente", date: "2026-09-19" },
    { numero: "NA-2026-000007", parent: "Laila Bennani", email: "laila.bennani@gmail.com", tel: "0757975432", eleve: "Ayoub", niveau: "2bac", coursId: 1, statut: "valide", date: "2026-09-22" },
    { numero: "NA-2026-000008", parent: "Mustapha Rami", email: "mustapha.rami@gmail.com", tel: "0619487574", eleve: "Hiba", niveau: "2bac", coursId: 1, statut: "paye", date: "2026-09-25" },
    { numero: "NA-2026-000009", parent: "Khalid Alaoui", email: "khalid.alaoui@gmail.com", tel: "0618625276", eleve: "Rayan", niveau: "2bac", coursId: 1, statut: "en-attente", date: "2026-09-01" },
    { numero: "NA-2026-000010", parent: "Zineb Haddad", email: "zineb.haddad@gmail.com", tel: "0618955597", eleve: "Aya", niveau: "2bac", coursId: 1, statut: "valide", date: "2026-09-04" },
    { numero: "NA-2026-000011", parent: "Youssef Mansouri", email: "youssef.mansouri@gmail.com", tel: "0711471049", eleve: "Mehdi", niveau: "2bac", coursId: 1, statut: "paye", date: "2026-09-07" },
    { numero: "NA-2026-000012", parent: "Souad Berrada", email: "souad.berrada@gmail.com", tel: "0746507529", eleve: "Nour", niveau: "2bac", coursId: 1, statut: "en-attente", date: "2026-09-10" },
    { numero: "NA-2026-000013", parent: "Driss Kettani", email: "driss.kettani@gmail.com", tel: "0670342366", eleve: "Ilyas", niveau: "2bac", coursId: 1, statut: "valide", date: "2026-10-13" },
    { numero: "NA-2026-000014", parent: "Hanane Ziani", email: "hanane.ziani@gmail.com", tel: "0712768426", eleve: "Malak", niveau: "2bac", coursId: 1, statut: "paye", date: "2026-10-16" },
    { numero: "NA-2026-000015", parent: "Fatima Ouali", email: "fatima.ouali@gmail.com", tel: "0726018159", eleve: "Yassine", niveau: "2bac", coursId: 4, statut: "en-attente", date: "2026-10-19" },
    { numero: "NA-2026-000016", parent: "Karim Benali", email: "karim.benali@gmail.com", tel: "0683016613", eleve: "Salma", niveau: "2bac", coursId: 3, statut: "valide", date: "2026-10-22" },
    { numero: "NA-2026-000017", parent: "Abdellah Fassi", email: "abdellah.fassi@gmail.com", tel: "0765632122", eleve: "Hamza", niveau: "1bac", coursId: 5, statut: "paye", date: "2026-10-25" },
    { numero: "NA-2026-000018", parent: "Meryem Lahlou", email: "meryem.lahlou@gmail.com", tel: "0630792440", eleve: "Sara", niveau: "tc", coursId: 7, statut: "en-attente", date: "2026-10-01" },
    { numero: "NA-2026-000019", parent: "Omar Saidi", email: "omar.saidi@gmail.com", tel: "0668599528", eleve: "Anas", niveau: "3ac", coursId: 9, statut: "valide", date: "2026-10-04" },
    { numero: "NA-2026-000020", parent: "Najat Bouzid", email: "najat.bouzid@gmail.com", tel: "0678666617", eleve: "Kawtar", niveau: "2ac", coursId: 11, statut: "paye", date: "2026-10-07" },
    { numero: "NA-2026-000021", parent: "Aziz Belkadi", email: "aziz.belkadi@gmail.com", tel: "0703137215", eleve: "Yahya", niveau: "6ap", coursId: 13, statut: "en-attente", date: "2026-10-10" },
    { numero: "NA-2026-000022", parent: "Houda Amrani", email: "houda.amrani@gmail.com", tel: "0610928159", eleve: "Ines", niveau: "1ac", coursId: 12, statut: "valide", date: "2026-10-13" },
    { numero: "NA-2026-000023", parent: "Nadia El Amrani", email: "nadia.elamrani@gmail.com", tel: "0686091390", eleve: "Adam", niveau: "2bac", coursId: 3, statut: "paye", date: "2026-10-16" },
    { numero: "NA-2026-000024", parent: "Rachid Tahiri", email: "rachid.tahiri@gmail.com", tel: "0703082462", eleve: "Imane", niveau: "2bac", coursId: 4, statut: "en-attente", date: "2026-10-19" }
];