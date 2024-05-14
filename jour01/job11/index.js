const http = require('http');

// Définition de la fonction de gestion de requête
const requestHandler = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World !\n');
};

// Création du serveur HTTP
const server = http.createServer(requestHandler);

// Écoute du serveur sur le port 8888
server.listen(8888, (err) => {
  if (err) {
    return console.error('Erreur lors du démarrage du serveur :', err);
  }
  console.log('Serveur démarré sur le port 8888');
});
    
