<script setup>
import lophorinaEn from '../assets/images/lophorina-en-1.png'
import lophorinaKo from '../assets/images/lophorina-ko-1.png'
</script>

<template>
  <section class="hero">
    <div class="fade-in">
      <span class="badge">macOS only</span>
      <h1 class="hero-title">Lophorina</h1>
      <p class="hero-lead">
        A macOS utility suite for Apple developers. It provides Base64/URL encoding, JSON formatting and Swift model generation, AES encryption, APNs payload creation, provisioning profile inspection, launchd helper management, Xcode cache cleanup, and app icon generation.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="https://github.com/segunlee/segunlee.github.io/releases/download/1.0.0/Lophorina.dmg" target="_blank" rel="noopener">Download</a>
      </div>
    </div>
    <div class="hero-card fade-in">
      <h3>Local-first by design</h3>
      <p>Lophorina keeps your data local and avoids sending user data to external services.</p>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Toolbox</h2>
    <div class="cards">
      <article class="card">
        <h3>Encoder / Decoder</h3>
        <ul class="feature-list">
          <li>Base64 Encoder/Decoder</li>
          <li>URL Encoder/Decoder</li>
          <li>Korean Decoder</li>
        </ul>
      </article>
      <article class="card">
        <h3>Cryptor & JSON</h3>
        <ul class="feature-list">
          <li>AES Encrypt/Decrypt</li>
          <li>JSON Format / JSON to Swift</li>
          <li>Swift model generation</li>
        </ul>
      </article>
      <article class="card">
        <h3>Apple Utilities</h3>
        <ul class="feature-list">
          <li>APNs payload builder</li>
          <li>Provisioning profile viewer</li>
          <li>LaunchDaemon and Agent management</li>
          <li>App icon generator</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Screens</h2>
    <div class="screen-grid">
      <div class="screen"><img :src="lophorinaEn" alt="Lophorina screenshot English" loading="lazy" /></div>
      <div class="screen"><img :src="lophorinaKo" alt="Lophorina screenshot Korean" loading="lazy" /></div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Support</h2>
    <p class="section-lead">For support or feedback, email the team.</p>
    <div class="hero-actions">
      <a class="button primary" href="mailto:segunleedev@gmail.com">Email support</a>
    </div>
  </section>

  <footer class="footer">
    <div>© 2026 LEE SEGUN. All rights reserved.</div>
    <div><RouterLink to="/">Back to Home</RouterLink></div>
  </footer>
</template>
