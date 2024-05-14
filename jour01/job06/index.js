const fs = require('fs');

// Chemin du fichier à lire
const filePath = 'C:\\Users\\b13im\\Downloads\\data.txt';

// Lecture synchrone du fichier
try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
} catch (err) {
    console.error('Erreur lors de la lecture du fichier:', err);
}
