import { initialiser, getInscriptions } from "./state.js";
import { afficherTableau } from "./ui.js";

initialiser();
afficherTableau(getInscriptions());