<script setup>
import lophorinaPreview from '../assets/images/lophorina-en-1.png'

const lightComicsIcon =
  'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/47/d8/e3/47d8e3b5-c620-9a02-3baa-6fcc13fb3743/AppIcon-0-1x_U007emarketing-0-11-0-85-220-0.png/400x400bb.webp'
</script>

<template>
  <section class="hero" id="intro">
    <div class="fade-in">
      <h1 class="hero-title">SGIOS Dev</h1>
      <p class="hero-lead">
        We build reader experiences and developer utilities for macOS and iOS. Fast reading flows,
        resilient local processing, and a polished user experience come first.
      </p>
      <div class="hero-actions">
        <RouterLink class="button primary" to="/lightcomics">View LightComics</RouterLink>
        <RouterLink class="button secondary" to="/lophorina">View Lophorina</RouterLink>
      </div>
    </div>
    <div class="hero-card fade-in">
      <h3>Core values</h3>
      <p>We care about speed, reliable offline behavior, and detail-driven finishing touches.</p>
    </div>
  </section>

  <section class="section" id="projects">
    <h2 class="section-title">Projects</h2>
    <p class="section-lead">Focused apps and tools that deliver clear, everyday value.</p>

    <div class="cards">
      <article class="card">
        <div class="badge">iOS · iPadOS</div>
        <div>
          <img :src="lightComicsIcon" alt="LightComics App Icon" width="88" height="88" />
        </div>
        <h3>LightComics</h3>
        <p>A unified reader for text, comics, PDF, and EPUB with fast indexing and flexible viewing modes for long sessions.</p>
        <ul class="feature-list">
          <li>ZIP/CBZ/RAR image viewer with webtoon scroll mode</li>
          <li>Text search, TTS, custom fonts and colors</li>
          <li>PDF/EPUB plus remote storage (WebDAV, SMB, Dropbox)</li>
        </ul>
        <div class="hero-actions">
          <a class="button primary" href="https://apps.apple.com/us/app/lightcomics/id1330843650" target="_blank" rel="noopener">App Store</a>
          <RouterLink class="button secondary" to="/lightcomics">Overview</RouterLink>
          <RouterLink class="button secondary" to="/privacy-policy">Privacy</RouterLink>
          <RouterLink class="button secondary" to="/terms-conditions">Terms</RouterLink>
        </div>
      </article>

      <article class="card">
        <div class="badge">macOS</div>
        <div>
          <img :src="lophorinaPreview" alt="Lophorina screenshot" />
        </div>
        <h3>Lophorina</h3>
        <p>An all-in-one macOS toolbox for Apple developers. Handle encoding, cryptography, JSON tooling, APNs payloads, provisioning profiles, and launchd in one place.</p>
        <ul class="feature-list">
          <li>Base64/URL encoding and AES encryption</li>
          <li>JSON formatting and Swift model generation</li>
          <li>APNs, provisioning, app icon tools, Xcode cache cleanup</li>
        </ul>
        <div class="hero-actions">
          <RouterLink class="button primary" to="/lophorina">Lophorina Overview</RouterLink>
          <a class="button secondary" href="https://github.com/segunlee/segunlee.github.io/releases/download/1.0.0/Lophorina.dmg" target="_blank" rel="noopener">Download</a>
        </div>
      </article>
    </div>
  </section>

  <section class="section" id="contact">
    <h2 class="section-title">Contact</h2>
    <p class="section-lead">Collaborations, feedback, and questions are always welcome.</p>
    <div class="hero-actions">
      <a class="button primary" href="mailto:segunleedev@gmail.com">segunleedev@gmail.com</a>
      <a class="button secondary" href="https://github.com/segunlee" target="_blank" rel="noopener">GitHub Profile</a>
    </div>
  </section>

  <footer class="footer">
    <div>© 2026 LEE SEGUN. All rights reserved.</div>
    <div>LightComics · <RouterLink to="/privacy-policy">Privacy</RouterLink> · <RouterLink to="/terms-conditions">Terms</RouterLink></div>
  </footer>
</template>
