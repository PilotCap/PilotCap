# 🧠 PilotCap Backend

Ce dossier contient l’ensemble des microservices backend du projet **PilotCap**, une plateforme de mise en relation entre investisseurs et entreprises.

## 🏗️ Technologies principales

- **Node.js** – Environnement d'exécution JavaScript
- **Express.js** – Framework web rapide et minimal
- **MongoDB** – Base de données NoSQL
- **Mongoose** – ODM pour MongoDB
- **JWT** – Authentification stateless
- **CORS & Body Parser** – Middleware intégrés
- **Architecture** – Microservices RESTful

## 📦 Structure des microservices

- `user-service` : Authentification, rôles (investisseur / entreprise)
- `entreprise-service` : Création et gestion des profils d’entreprises
- `profile-service` : Consultation et mise à jour des données entreprise
- `investment-service` : Soumission de propositions d’investissement
- `opportunities-service` : Publication d’opportunités par les entreprises
- `propositions-service` : Consultation et gestion des propositions reçues

## 🔐 Authentification

- Basée sur **JWT**
- Middleware `verifyToken`, `isInvestor`, `isEntreprise` pour sécuriser les accès

## 🚀 Lancement des services
- pour chaque microservice:
```bash
cd user-service
npm install
npm run dev
