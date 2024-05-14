const fs = require('fs');

// Chemin vers le fichier
const filePath = 'data.txt';

// Lecture du fichier de manière asynchrone
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier:", err);
    return;
  }
  // Affichage du contenu du fichier
  console.log("Contenu du fichier:");
  console.log(data);
});

