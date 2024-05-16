// Importation du module Express
const express = require('express');

// Importation des routes définies dans un fichier séparé (route.js)
const routes = require('./route.js');

// Fonction pour créer et configurer un serveur Express
function createServer() {
  // Création d'une instance d'application Express
  const app = express();

  // Utilisation du middleware pour gérer les données JSON
  app.use(express.json());

  // Montage des routes sous le préfixe '/api'
  app.use('/api', routes);

  // Retourner l'application configurée
  return app;
}
