// Importation des modules nécessaires
const express = require('express');
const routes = express.Router(); // Création d'un routeur Express pour définir les routes
const fs = require('fs'); // Module pour interagir avec le système de fichiers
const data = require('./data.json'); // Chargement des données à partir du fichier JSON

// Route pour récupérer toutes les tâches
routes.get('/tasks', (req, res) => {
  res.json(data); // Répondre avec les données JSON
});

// Route pour ajouter une nouvelle tâche
routes.post('/tasks', (req, res) => {
  const newTask = req.body; // Récupération des données de la nouvelle tâche à partir de la requête

  // Génération d'un nouvel identifiant pour la tâche
  const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  newTask.id = newId;

  // Ajout de la nouvelle tâche au tableau des données
  data.push(newTask);

  // Écriture des nouvelles données dans le fichier JSON
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      // Gestion des erreurs d'écriture dans le fichier
      res.status(500).json({ error: 'Erreur lors de l\'écriture des données.' });
    } else {
      // Réponse avec la nouvelle tâche créée
      res.status(201).json(newTask);
    }
  });
});

// Route pour mettre à jour une tâche existante
routes.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id; // Récupération de l'identifiant de la tâche à mettre à jour
  const updatedTaskData = req.body; // Récupération des nouvelles données de la tâche

  // Recherche de la tâche à mettre à jour
  const taskToUpdate = data.find(task => task.id == taskId);
  if (!taskToUpdate) {
    return res.status(404).json({ error: 'Tâche non trouvée.' }); // Gestion de l'erreur si la tâche n'existe pas
  }

  // Mise à jour de la tâche avec les nouvelles données
  Object.assign(taskToUpdate, updatedTaskData);

  // Écriture des nouvelles données dans le fichier JSON
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
      // Gestion des erreurs d'écriture dans le fichier
      res.status(500).json({ error: 'Erreur lors de l\'écriture des données.' });
    } else {
      // Réponse avec la tâche mise à jour
      res.status(200).json(taskToUpdate);
    }
  });
});

// Route pour supprimer une tâche
routes.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id; // Récupération de l'id
