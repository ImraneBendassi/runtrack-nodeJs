const { URL } = require('url');

// Définition de l'URL initiale
const URL_STRING = "https://www.google.com&search=nodejs";

// Analyser l'URL
const parsedUrl = new URL(URL_STRING);

// Récupérer le protocole utilisé
const protocol = parsedUrl.protocol;
console.log("Protocole utilisé:", protocol);

// Récupérer le nom d'hôte
const hostname = parsedUrl.hostname;
console.log("Nom d'hôte:", hostname);

// Récupérer les paramètres de l'URL
const searchParams = parsedUrl.searchParams;
console.log("Paramètres de l'URL:", searchParams.toString());

// Reformater l'URL en une nouvelle URL valide en modifiant le nom d'hôte par "www.laplateforme.io"
parsedUrl.hostname = "www.laplateforme.io";

// Ajouter à cette nouvelle URL un paramètre
parsedUrl.searchParams.append("newParam", "valeur");

console.log("Nouvelle URL:", parsedUrl.toString());
