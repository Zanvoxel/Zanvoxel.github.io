
  <!-- =============================================
       REMPLACE Zanvoxel Studio PAR TON NOM/PSEUDO
       REMPLACE Zanvoxel PAR TON USERNAME GITHUB
       ============================================= -->
  <meta name="author" content="Zanvoxel Studio">

  <!-- Open Graph (aperçu sur réseaux sociaux) -->
  <meta property="og:title" content="Academic Planner & Pixel Adventure — Applications Android">
  <meta property="og:description" content="Deux applications Android 100% gratuites : un planificateur scolaire et un jeu de plateforme pixel art.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://zanvoxel.github.io">
  <meta property="og:image" content="https://zanvoxel.github.io/assets/pixel-adventure/splash.png">
  <meta property="og:locale" content="fr_FR">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Academic Planner & Pixel Adventure">
  <meta name="twitter:description" content="Deux applications Android gratuites à découvrir.">
  <meta name="twitter:image" content="https://zanvoxel.github.io/assets/pixel-adventure/splash.png">

  <!-- Favicon — utilise l'icône de l'une de tes apps -->
  <link rel="icon" type="image/png" href="assets/pixel-adventure/icon.png">
  <link rel="apple-touch-icon" href="assets/academic-planner/icon.png">

  <!-- Polices -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Press+Start+2P&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- ============================================================
       NAVIGATION
       ============================================================ -->
  <header class="header" id="header">
    <nav class="nav container">
      <a href="#" class="nav-brand">
        <span class="nav-brand-dot"></span>
        Zanvoxel
      </a>
      <div class="nav-menu" id="navMenu">
        <a href="#academic-planner" class="nav-link">Academic Planner</a>
        <a href="#pixel-adventure" class="nav-link">Pixel Adventure</a>
        <a href="#support" class="nav-link nav-link--cta">Soutenir ❤️</a>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>

  <main>

    <!-- ============================================================
         HERO
         ============================================================ -->
    <section class="hero" id="hero">
      <div class="hero-stars" id="heroStars" aria-hidden="true"></div>

      <div class="container hero-layout">
        <!-- Colonne gauche : texte -->
        <div class="hero-text">
          <p class="hero-eyebrow">Développeur Android · <span>Zanvoxel</span></p>
          <h1 class="hero-heading">
            Deux apps.<br>
            <em>Une passion.</em>
          </h1>
          <p class="hero-body">
            Je crée des applications Android <strong>100&nbsp;% gratuites</strong> — un planificateur scolaire pour t'aider à réussir, et un jeu de plateforme pixel art pour t'évader.
          </p>
          <div class="hero-actions">
            <a href="#academic-planner" class="btn btn-ap">
              <img src="assets/academic-planner/icon.png" alt="" width="24" height="24">
              Academic Planner
            </a>
            <a href="#pixel-adventure" class="btn btn-pa">
              <img src="assets/pixel-adventure/icon.png" alt="" width="24" height="24">
              Pixel Adventure
            </a>
          </div>
        </div>

        <!-- Colonne droite : visuels -->
        <div class="hero-visuals" aria-hidden="true">
          <div class="hero-card hero-card--ap">
            <img src="assets/academic-planner/screenshot-1.png"
                 alt="Academic Planner – tableau de bord"
                 loading="eager">
          </div>
          <div class="hero-card hero-card--pa">
            <img src="assets/pixel-adventure/menu.png"
                 alt="Pixel Adventure – menu"
                 loading="eager">
          </div>
        </div>
      </div>

      <!-- Séparateur de section -->
      <div class="section-fade" aria-hidden="true"></div>
    </section>

    <!-- ============================================================
         ACADEMIC PLANNER
         ============================================================ -->
    <section class="ap-section" id="academic-planner">
      <div class="container">

        <!-- En-tête -->
        <div class="app-header">
          <img src="assets/academic-planner/icon.png"
               alt="Icône Academic Planner"
               class="app-header-icon"
               width="72" height="72">
          <div>
            <span class="app-tag ap-tag">Application Android Gratuite</span>
            <h2 class="app-title ap-title">Academic Planner</h2>
            <p class="app-subtitle">Ton assistant scolaire intelligent</p>
          </div>
        </div>

        <p class="app-desc">
          Fini le stress de la désorganisation scolaire. Academic Planner centralise ton emploi du temps, tes devoirs, tes notes et tes cours dans une interface claire et rapide. Mode sombre ou clair, tu choisis.
        </p>

        <!-- Fonctionnalités -->
        <div class="features ap-features">
          <div class="feat ap-feat">
            <div class="feat-icon">📅</div>
            <h3 class="feat-title">Emploi du temps</h3>
            <p class="feat-body">Visualise ta semaine entière d'un coup d'œil. Ajoute tes cours, tes créneaux libres, et ne rate plus rien.</p>
          </div>
          <div class="feat ap-feat">
            <div class="feat-icon">⏰</div>
            <h3 class="feat-title">Suivi des devoirs</h3>
            <p class="feat-body">Enregistre tes devoirs avec dates limites. L'app t'alerte avant qu'il soit trop tard.</p>
          </div>
          <div class="feat ap-feat">
            <div class="feat-icon">📊</div>
            <h3 class="feat-title">Notes & Bulletin</h3>
            <p class="feat-body">Saisis tes notes par matière et par semestre. Ta moyenne est calculée automatiquement.</p>
          </div>
          <div class="feat ap-feat">
            <div class="feat-icon">📚</div>
            <h3 class="feat-title">Gestion des cours</h3>
            <p class="feat-body">Organise tes ressources pédagogiques par matière. Tout est à portée de main.</p>
          </div>
          <div class="feat ap-feat">
            <div class="feat-icon">🌙</div>
            <h3 class="feat-title">Thème sombre & clair</h3>
            <p class="feat-body">Bascule entre les deux modes selon tes préférences. Tes yeux te remercieront.</p>
          </div>
          <div class="feat ap-feat">
            <div class="feat-icon">⚡</div>
            <h3 class="feat-title">Interface rapide</h3>
            <p class="feat-body">Application légère et fluide. Conçue pour fonctionner parfaitement même sur les téléphones d'entrée de gamme.</p>
          </div>
        </div>

        <!-- Galerie captures d'écran -->
        <h3 class="gallery-heading ap-gallery-heading">Captures d'écran</h3>
        <div class="gallery ap-gallery">
          <button class="phone-card ap-phone-card"
                  onclick="openLightbox('assets/academic-planner/screenshot-1.png', 'Tableau de bord')"
                  aria-label="Voir le tableau de bord en grand">
            <div class="phone-frame ap-phone-frame">
              <img src="assets/academic-planner/screenshot-1.png"
                   alt="Academic Planner – tableau de bord (mode sombre)"
                   loading="lazy">
            </div>
            <p class="phone-label">Tableau de bord</p>
          </button>
          <button class="phone-card ap-phone-card"
                  onclick="openLightbox('assets/academic-planner/screenshot-2.png', 'Emploi du temps')"
                  aria-label="Voir l'emploi du temps en grand">
            <div class="phone-frame ap-phone-frame">
              <img src="assets/academic-planner/screenshot-2.png"
                   alt="Academic Planner – emploi du temps (mode clair)"
                   loading="lazy">
            </div>
            <p class="phone-label">Emploi du temps</p>
          </button>
          <button class="phone-card ap-phone-card"
                  onclick="openLightbox('assets/academic-planner/screenshot-3.png', 'Notes & Bulletin')"
                  aria-label="Voir les notes en grand">
            <div class="phone-frame ap-phone-frame">
              <img src="assets/academic-planner/screenshot-3.png"
                   alt="Academic Planner – notes et bulletin scolaire (mode clair)"
                   loading="lazy">
            </div>
            <p class="phone-label">Notes & Bulletin</p>
          </button>
        </div>

        <!-- Boutons d'action -->
        <div class="app-cta">
          <!--
            ⬇️  LIEN DE TÉLÉCHARGEMENT — ACADEMIC PLANNER
            Remplace https://github.com/Zanvoxel/Zanvoxel.github.io/releases/download/v1.0.0/AcademicPlanner.apk par ton lien Google Play ou APK direct
          -->
          <a href="https://github.com/Zanvoxel/Zanvoxel.github.io/releases/download/v1.0.0/AcademicPlanner.apk"
             class="btn btn-ap btn-large"
             target="_blank" rel="noopener noreferrer">
            ⬇️ Télécharger gratuitement
          </a>
          <!--
            ❤️  LIEN FEDAPAY
            Remplace # par ton lien de paiement FedaPay
          -->
          <a href="#"
             class="btn btn-support"
             target="_blank" rel="noopener noreferrer">
            ❤️ Soutenir le créateur
          </a>
        </div>
        <p class="free-badge">✅ Application 100 % gratuite — le soutien est entièrement facultatif</p>

      </div>
    </section>

    <!-- ============================================================
         PIXEL ADVENTURE
         ============================================================ -->
    <section class="pa-section" id="pixel-adventure">
      <div class="pa-glow" aria-hidden="true"></div>

      <div class="container">

        <!-- Grande image de lancement -->
        <button class="pa-splash-btn"
                onclick="openLightbox('assets/pixel-adventure/splash.png', 'Pixel Adventure')"
                aria-label="Voir l\'image en grand">
          <img src="assets/pixel-adventure/splash.png"
               alt="Pixel Adventure – écran de démarrage avec le personnage héros courant dans un monde pixel art coloré"
               class="pa-splash-img"
               loading="lazy">
          <div class="pa-splash-overlay" aria-hidden="true">
            <span class="pa-splash-hint">Toucher pour agrandir</span>
          </div>
        </button>

        <!-- En-tête -->
        <div class="app-header">
          <img src="assets/pixel-adventure/icon.png"
               alt="Icône Pixel Adventure"
               class="app-header-icon"
               width="72" height="72">
          <div>
            <span class="app-tag pa-tag">Jeu Android Gratuit</span>
            <h2 class="app-title pa-title">Pixel Adventure</h2>
            <p class="app-subtitle pa-subtitle">The Pixel Journey</p>
          </div>
        </div>

        <p class="app-desc pa-desc">
          30 niveaux de plateforme dans un univers pixel art coloré. Cours, saute, évite les ennemis, collecte des pièces et affronte des boss. Le mode Turbo t'attend.
        </p>

        <!-- Fonctionnalités -->
        <div class="features pa-features">
          <div class="feat pa-feat">
            <div class="feat-icon">🗺️</div>
            <h3 class="feat-title pa-feat-title">30 Niveaux</h3>
            <p class="feat-body">Du premier pas au boss final — 30 niveaux progressifs pour tous les niveaux de jeu.</p>
          </div>
          <div class="feat pa-feat">
            <div class="feat-icon">👾</div>
            <h3 class="feat-title pa-feat-title">Ennemis & Boss</h3>
            <p class="feat-body">Des ennemis variés et des boss redoutables à chaque fin de monde.</p>
          </div>
          <div class="feat pa-feat">
            <div class="feat-icon">🪙</div>
            <h3 class="feat-title pa-feat-title">Pièces & Bonus</h3>
            <p class="feat-body">Collecte des pièces dorées et active des bonus spéciaux pour survivre plus longtemps.</p>
          </div>
          <div class="feat pa-feat">
            <div class="feat-icon">⚡</div>
            <h3 class="feat-title pa-feat-title">Mode Turbo</h3>
            <p class="feat-body">Active le Turbo pour une vitesse foudroyante. Pour les vrais.</p>
          </div>
          <div class="feat pa-feat">
            <div class="feat-icon">🚩</div>
            <h3 class="feat-title pa-feat-title">Checkpoints</h3>
            <p class="feat-body">Des checkpoints bien placés pour reprendre là où tu t'es arrêté.</p>
          </div>
          <div class="feat pa-feat">
            <div class="feat-icon">🎨</div>
            <h3 class="feat-title pa-feat-title">Pixel Art soigné</h3>
            <p class="feat-body">Graphismes pixel art dessinés à la main avec des animations fluides.</p>
          </div>
        </div>

        <!-- Galerie captures d'écran — format paysage pour le jeu -->
        <h3 class="gallery-heading pa-gallery-heading">Captures d'écran</h3>
        <div class="game-gallery">
          <button class="game-card"
                  onclick="openLightbox('assets/pixel-adventure/menu.png', 'Menu principal')"
                  aria-label="Voir le menu en grand">
            <div class="game-frame">
              <img src="assets/pixel-adventure/menu.png"
                   alt="Pixel Adventure – menu principal avec le titre lumineux sur fond bleu nuit"
                   loading="lazy">
            </div>
            <p class="game-label">Menu principal</p>
          </button>
          <button class="game-card"
                  onclick="openLightbox('assets/pixel-adventure/gameplay.png', 'Gameplay – Niveau 1')"
                  aria-label="Voir le gameplay en grand">
            <div class="game-frame">
              <img src="assets/pixel-adventure/gameplay.png"
                   alt="Pixel Adventure – gameplay du niveau 1 avec le héros sur des plateformes vertes"
                   loading="lazy">
            </div>
            <p class="game-label">Gameplay — Niveau 1</p>
          </button>
        </div>

        <!-- Boutons d'action -->
        <div class="app-cta">
          <!--
            ⬇️  LIEN DE TÉLÉCHARGEMENT — PIXEL ADVENTURE
            Remplace DOWNLOAD_PIXEL_ADVENTURE par ton lien Google Play ou APK direct
          -->
          <a href="#" style="opacity:.55;cursor:not-allowed;pointer-events:none;"
             class="btn btn-pa btn-large"
             target="_blank" rel="noopener noreferrer">
            🔜 Bientôt disponible
          </a>
          <!--
            ▶️  LIEN ITCH.IO
            Remplace https://zanvoxel.itch.io/pixel-adventure par ton lien itch.io
          -->
          <a href="https://zanvoxel.itch.io/pixel-adventure"
             class="btn btn-itch"
             target="_blank" rel="noopener noreferrer">
            ▶️ Jouer en ligne — itch.io
          </a>
          <!--
            ❤️  LIEN FEDAPAY
            Remplace # par ton lien FedaPay
          -->
          <a href="#"
             class="btn btn-support"
             target="_blank" rel="noopener noreferrer">
            ❤️ Soutenir le créateur
          </a>
        </div>
        <p class="free-badge pa-free-badge">✅ Jeu 100 % gratuit — le soutien est entièrement facultatif</p>

      </div>
    </section>

    <!-- ============================================================
         SECTION SOUTIEN
         ============================================================ -->
    <section class="support-section" id="support">
      <div class="container support-container">
        <div class="support-icons" aria-hidden="true">
          <img src="assets/academic-planner/icon.png" alt="" width="56" height="56">
          <span class="support-plus">+</span>
          <img src="assets/pixel-adventure/icon.png" alt="" width="56" height="56">
        </div>
        <h2 class="support-title">Soutenir le développement</h2>
        <p class="support-body">
          Je développe ces applications sur mon temps libre, pour que tout le monde puisse y accéder gratuitement, sans publicité. Si tu apprécies mon travail, tu peux me soutenir volontairement — chaque contribution compte.
        </p>
        <!--
          ❤️  LIEN FEDAPAY PRINCIPAL
          Remplace # par ton vrai lien FedaPay
        -->
        <a href="#"
           class="btn btn-support btn-large"
           target="_blank" rel="noopener noreferrer">
          ❤️ Soutenir volontairement
        </a>
        <p class="support-note">
          Paiement sécurisé via FedaPay · Entièrement volontaire · Le téléchargement reste toujours gratuit
        </p>
      </div>
    </section>

  </main>

  <!-- ============================================================
       FOOTER
       ============================================================ -->
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-brand">
        <strong>Zanvoxel Studio</strong> — Développeur Android
      </p>
      <nav class="footer-nav" aria-label="Navigation pied de page">
        <a href="#academic-planner">Academic Planner</a>
        <a href="#pixel-adventure">Pixel Adventure</a>
        <a href="#support">Soutenir</a>
      </nav>
      <p class="footer-copy">© 2025 Zanvoxel Studio · Applications 100 % gratuites</p>
    </div>
  </footer>

  <!-- ============================================================
       LIGHTBOX (visionneuse d'images)
       ============================================================ -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image agrandie">
    <button class="lightbox-close" onclick="closeLightbox()" aria-label="Fermer">✕</button>
    <div class="lightbox-backdrop" onclick="closeLightbox()"></div>
    <div class="lightbox-content">
      <img src="" alt="" id="lightboxImg" class="lightbox-img">
      <p class="lightbox-caption" id="lightboxCaption"></p>
    </div>
  </div>

  <script src="js/script.js"></script>
</body>
</html>
