const fs = require('fs');


const filePath = 'C:\\Users\\b13im\\Downloads\\data.txt';


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier:", err);
    return;
  }

  
  let letters = '';
  for (let i = 0; i < data.length; i += 2) {
    letters += data[i];
  }
  console.log("Lettres sur deux du contenu du fichier:");
  console.log(letters);
});
