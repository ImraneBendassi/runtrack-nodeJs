const http = require('http');
const fs = require('fs');
const path = require('path');

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
    let filePath;

    // Vérifier l'URL demandée
    if (req.url === '/' || req.url === '/index.html') {
        filePath = path.join(__dirname, 'index.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else {
        // Si l'URL demandée n'est pas gérée, renvoyer une réponse 404 (Not Found)
        res.writeHead(404);
        return res.end('Page non trouvée.');
    }

    // Lire le contenu du fichier demandé de manière asynchrone
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // En cas d'erreur, renvoyer une réponse 500 (Internal Server Error)
            res.writeHead(500);
            return res.end('Erreur interne du serveur.');
        }

        // Définir l'en-tête de réponse avec le type de contenu
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Envoyer le contenu du fichier demandé
        res.end(data);
    });
});

// Écouter le serveur sur le port 8888
server.listen(8888, () => {
    console.log('Serveur démarré sur le port 8889');
});
