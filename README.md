Devoir de maison implementation d'une interface Chatbot

Interface de chatbot simple développée avec React (frontend) et NestJS (backend).

Stack technique
Frontend : React (Create React App)
Backend : NestJS
Communication : API REST (JSON) entre le frontend et le backend
Structure du projet
```
chatbot_devoir/
├── chatbot_backend/     # API NestJS
│   └── src/
│       └── chat/        # Module, Controller et Service du chatbot
├── chatbot_frontend/    # Interface React
│   └── src/
│       ├── App.js
│       └── Chat.js       # Composant principal du chat
└── README.md
```
Prérequis
Node.js (version LTS recommandée)
npm (installé avec Node.js)
Installation
Clonez le dépôt puis installez les dépendances dans chaque dossier :
```bash
git clone https://github.com/marybere/chatbot_devoir.git
cd chatbot-devoir

cd chatbot_backend
npm install

cd ../chatbot_frontend
npm install
```
Lancer le projet
Le backend et le frontend doivent tourner en même temps, dans deux terminaux séparés.
1. Démarrer le backend (depuis `chatbot_backend/`) :
```bash
npm run start:dev
```
Le serveur démarre sur `http://localhost:3000`.
2. Démarrer le frontend (depuis `chatbot_frontend/`) :
```bash
npm start
```
L'interface s'ouvre automatiquement sur `http://localhost:3001` (ou un autre port si le 3000 est déjà utilisé par le backend).
Fonctionnement
L'utilisateur tape un message dans le champ de texte et clique sur "Envoyer".
Le frontend React envoie une requête `POST` à `http://localhost:3000/chat` avec le message.
Le backend NestJS traite le message dans `ChatService` et renvoie une réponse.
Le frontend affiche la réponse du bot dans la conversation.
Route API
Méthode	Route	Body attendu	Réponse
POST	/chat	`{ "message": "texte" }`	`{ "reply": "texte" }`

Auteur : BERE P Marie Lydia
                    Formation WoeAcademy