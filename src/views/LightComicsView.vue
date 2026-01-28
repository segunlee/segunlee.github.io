<script setup>
const screenshots = [
  {
    src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/f3/98/bc/f398bc69-3f7f-5fb0-28c4-e1fff72a9291/968baeef-0689-4f48-88e8-bb141c2c33bd_iPhone_8_Plus-0-Bookshelf_framed.png/392x696bb.png',
    alt: 'LightComics bookshelf',
  },
  {
    src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/48/6c/7e/486c7e43-5dfc-14d8-4f20-89caeceb766a/c498ba87-6e51-4540-9147-e9256a5328cc_iPhone_8_Plus-1-Reader_framed.png/392x696bb.png',
    alt: 'LightComics reader',
  },
  {
    src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/5e/e0/53/5ee053b0-c838-4c44-041f-382ab12e630a/ad036721-9281-46fb-94a3-4098306af120_iPhone_8_Plus-2-StringR_framed.png/392x696bb.png',
    alt: 'LightComics text reader',
  },
]
</script>

<template>
  <section class="hero">
    <div class="fade-in">
      <span class="badge">iOS · iPadOS</span>
      <h1 class="hero-title">LightComics</h1>
      <p class="hero-lead">
        LightComics is an essential viewer for iPhone and iPad. It unifies text, comics, PDF, and EPUB reading with fast indexing for large files.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="https://apps.apple.com/us/app/lightcomics/id1330843650" target="_blank" rel="noopener">View on App Store</a>
        <a class="button secondary" href="mailto:segunleedev@gmail.com">Contact</a>
      </div>
    </div>
    <div class="hero-card fade-in">
      <h3>Highlights</h3>
      <p>Webtoon-style scrolling, page curl, fast navigation, bookmarks, TTS, and custom typography in one reading flow.</p>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Key Features</h2>
    <div class="cards">
      <article class="card">
        <h3>Images & Comics</h3>
        <ul class="feature-list">
          <li>ZIP, RAR, CBZ, and folder-based browsing</li>
          <li>Webtoon scroll, page curl, and two-page view</li>
          <li>Fast indexing for large ZIP files</li>
        </ul>
      </article>
      <article class="card">
        <h3>Text & EPUB</h3>
        <ul class="feature-list">
          <li>TXT plus log and markdown support</li>
          <li>Search, font and spacing controls, color themes</li>
          <li>TTS, bookmarks, and quick navigation</li>
        </ul>
      </article>
      <article class="card">
        <h3>Documents & Remote</h3>
        <ul class="feature-list">
          <li>File app integration, folder management, unzip</li>
          <li>WebDAV, SMB2/3, Dropbox, Google Drive, Box</li>
          <li>iCloud sync and biometric locking</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Screens</h2>
    <div class="screen-grid">
      <div v-for="(shot, index) in screenshots" :key="index" class="screen">
        <img :src="shot.src" :alt="shot.alt" loading="lazy" />
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Legal</h2>
    <p class="section-lead">Review the app policies and terms.</p>
    <div class="hero-actions">
      <RouterLink class="button primary" to="/privacy-policy">Privacy Policy</RouterLink>
      <RouterLink class="button secondary" to="/terms-conditions">Terms & Conditions</RouterLink>
    </div>
  </section>

  <footer class="footer">
    <div>© 2026 LEE SEGUN. All rights reserved.</div>
    <div><RouterLink to="/">Back to Home</RouterLink></div>
  </footer>
</template>
