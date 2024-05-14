const http = require('http');
const fs = require('fs');
const path = require('path');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
    // Récupérer le chemin complet du fichier index.html
    const filePath = path.join(__dirname, 'index.html');

    // Lire le contenu du fichier index.html de manière asynchrone
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // En cas d'erreur, renvoyer une réponse 500 (Internal Server Error)
            res.writeHead(500);
            return res.end('Erreur interne du serveur.');
        }

        // Définir l'en-tête de réponse avec le type de contenu
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Envoyer le contenu du fichier index.html
        res.end(data);
    });
});


   // Écouter le serveur sur le port 8889
   server.listen(8889, () => {
    console.log('Serveur démarré sur le port 8889');
});
