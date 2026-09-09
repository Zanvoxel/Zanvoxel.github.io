# 🎯 Site Officiel — Academic Planner & Pixel Adventure

Site web statique présentant deux applications Android gratuites, prêt à être hébergé sur GitHub Pages.

---

## 📂 Structure du projet

```
/
├── index.html                        ← Page principale (unique fichier HTML)
├── css/
│   └── style.css                     ← Tous les styles
├── js/
│   └── script.js                     ← Animations, navigation, lightbox
├── assets/
│   ├── academic-planner/
│   │   ├── icon.png                  ← Icône de l'application
│   │   ├── screenshot-1.png          ← Tableau de bord (mode sombre)
│   │   ├── screenshot-2.png          ← Emploi du temps (mode clair)
│   │   └── screenshot-3.png          ← Notes & Bulletin (mode clair)
│   └── pixel-adventure/
│       ├── icon.png                  ← Icône du jeu
│       ├── splash.png                ← Image de lancement colorée
│       ├── menu.png                  ← Capture du menu principal
│       └── gameplay.png              ← Capture du gameplay
└── README.md                         ← Ce fichier
```

---

## ✏️ Étape 1 — Personnaliser ton nom

Dans `index.html`, cherche et remplace **toutes** les occurrences de :

```
[VOTRE_NOM]
```

par ton vrai nom ou ton pseudo de développeur.

Et remplace :

```
[VOTRE_USERNAME]
```

par ton nom d'utilisateur GitHub (dans les balises `<meta property="og:...">` et `<meta name="twitter:...">`).

---

## 🖼️ Étape 2 — Ajouter tes images

Les images sont déjà en place si tu as suivi les instructions de départ.  
Si tu veux les remplacer par de nouvelles captures, renomme-les exactement comme ci-dessous et place-les dans le bon dossier :

### Academic Planner → `assets/academic-planner/`

| Nom de fichier       | Contenu attendu                            |
|---------------------|--------------------------------------------|
| `icon.png`          | Icône de l'application (carré 512×512 px) |
| `screenshot-1.png`  | Tableau de bord (de préférence mode sombre)|
| `screenshot-2.png`  | Emploi du temps                            |
| `screenshot-3.png`  | Notes / Bulletin scolaire                  |

### Pixel Adventure → `assets/pixel-adventure/`

| Nom de fichier   | Contenu attendu                              |
|-----------------|----------------------------------------------|
| `icon.png`      | Icône du jeu (carré 512×512 px)              |
| `splash.png`    | Écran de démarrage coloré (paysage)          |
| `menu.png`      | Menu principal (fond sombre, paysage)        |
| `gameplay.png`  | Capture de gameplay (paysage)                |

> **Conseil performance :** Compresse tes images avant de les pousser.  
> Outils gratuits : [Squoosh](https://squoosh.app) ou [TinyPNG](https://tinypng.com).

---

## 🔗 Étape 3 — Remplacer les liens

Ouvre `index.html` et fais une recherche (`Ctrl+F` ou `Cmd+F`) pour chaque placeholder :

### Téléchargements

| Placeholder                  | Remplacer par                                  |
|-----------------------------|------------------------------------------------|
| `DOWNLOAD_ACADEMIC_PLANNER` | Lien Google Play ou URL directe de ton APK     |
| `DOWNLOAD_PIXEL_ADVENTURE`  | Lien Google Play ou URL directe de ton APK     |

### Jeu en ligne

| Placeholder                  | Remplacer par                    |
|-----------------------------|----------------------------------|
| `ITCH_IO_PIXEL_ADVENTURE`   | Ton lien de page itch.io         |

### Soutien

| Placeholder            | Remplacer par                        |
|-----------------------|--------------------------------------|
| `FEDAPAY_SUPPORT_LINK` | Ton lien de paiement public FedaPay  |

Ce placeholder apparaît **3 fois** dans le fichier (une par application + la section dédiée).  
Remplace-les tous en une fois avec `Ctrl+H` (remplacer tout).

---

## 💳 Étape 4 — Configurer FedaPay

1. Crée un compte sur [fedapay.com](https://fedapay.com)
2. Dans ton tableau de bord, crée un **lien de paiement** (montant libre ou suggéré)
3. Copie l'URL publique du lien
4. Dans `index.html`, remplace `FEDAPAY_SUPPORT_LINK` par cette URL (3 occurrences)

---

## 🌐 Étape 5 — Publier avec GitHub Pages

### 5.1 Créer le dépôt

1. Va sur [github.com](https://github.com) et clique **New repository**
2. Nom recommandé : `[ton-pseudo].github.io` → le site sera sur `https://[ton-pseudo].github.io`  
   (Ou un autre nom comme `mes-apps` → le site sera sur `https://[ton-pseudo].github.io/mes-apps`)
3. Laisse le dépôt **Public**
4. Clique **Create repository**

### 5.2 Pousser les fichiers

Depuis le dossier du projet sur ton ordinateur :

```bash
git init
git add .
git commit -m "Initial commit — Site officiel"
git branch -M main
git remote add origin https://github.com/[TON_USERNAME]/[NOM_DEPOT].git
git push -u origin main
```

### 5.3 Activer GitHub Pages

1. Dans le dépôt GitHub, clique **Settings**
2. Menu gauche → **Pages**
3. Source : **Deploy from a branch**
4. Branch : **main** / **(root)**
5. Clique **Save**
6. Patiente 1–2 minutes — ton site est en ligne ! 🎉

> L'URL de ton site s'affichera en haut de la page Pages.

---

## 🔄 Mises à jour futures

Pour mettre à jour le site après publication :

```bash
# Modifier les fichiers, puis :
git add .
git commit -m "Mise à jour — [description]"
git push
```

GitHub Pages se remet à jour automatiquement en 1–2 minutes.

---

## ➕ Ajouter des pages

Le site est structuré pour évoluer facilement :

- **Page téléchargement** : crée `download.html` et ajoute un lien dans la nav
- **Page à propos** : crée `about.html`
- **Actualités** : ajoute une `<section id="news">` dans `index.html`
- **Formulaire de contact** : ajoute un `<form>` ou un service comme Formspree

---

## 🎨 Changer les couleurs

Dans `css/style.css`, modifie les variables CSS au début du fichier :

```css
:root {
  --ap-500: #2563EB;   /* Bleu principal d'Academic Planner */
  --ap-600: #1D4ED8;   /* Bleu foncé AP */
  --pa-500: #3B6FE4;   /* Bleu électrique de Pixel Adventure */
  --support: #E11D48;  /* Rouge du bouton Soutenir */
  /* ... */
}
```

---

## ✅ Checklist avant publication

- [ ] Remplacé tous les `[VOTRE_NOM]`
- [ ] Remplacé tous les `[VOTRE_USERNAME]`
- [ ] Remplacé `DOWNLOAD_ACADEMIC_PLANNER`
- [ ] Remplacé `DOWNLOAD_PIXEL_ADVENTURE`
- [ ] Remplacé `ITCH_IO_PIXEL_ADVENTURE`
- [ ] Remplacé `FEDAPAY_SUPPORT_LINK` (3 fois)
- [ ] Images correctement nommées et placées dans `assets/`
- [ ] Testé sur mobile (Chrome Android)
- [ ] Dépôt GitHub créé et GitHub Pages activé

---

## 📱 Compatibilité

| Navigateur              | Support |
|------------------------|---------|
| Chrome Android (priorité) | ✅ |
| Chrome Desktop         | ✅ |
| Firefox                | ✅ |
| Safari iOS             | ✅ |
| Samsung Internet       | ✅ |
| Edge                   | ✅ |

---

© 2025 — Site statique, aucun backend requis, hébergement 100 % gratuit via GitHub Pages.
