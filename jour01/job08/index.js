const fs = require('fs');

// Chemin vers le fichier data.txt
const filePath = 'C:\\Users\\b13im\\Downloads\\data.txt';

// Nouveau contenu à écrire dans le fichier
const newContent = "Je manipule les fichiers avec un module node !";

// Écriture du nouveau contenu dans le fichier
fs.writeFile(filePath, newContent, (err) => {
  if (err) {
    console.error("Erreur lors de la modification du fichier:", err);
    return;
  }
  console.log("Le contenu du fichier a été modifié avec succès !");
});
