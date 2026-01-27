<script setup>
import lophorinaEn from '../assets/images/lophorina-en-1.png'
import lophorinaKo from '../assets/images/lophorina-ko-1.png'
</script>

<template>
  <section class="hero">
    <div class="fade-in">
      <span class="badge">macOS 전용</span>
      <h1 class="hero-title">Lophorina</h1>
      <p class="hero-lead">
        Apple 개발자를 위한 macOS 유틸리티 모음입니다. Base64/URL 인코딩, JSON 포맷과 Swift 모델 생성, AES 암복호화, APNs 페이로드 작성, 프로비저닝 프로파일 확인, launchd 헬퍼 관리, Xcode 캐시 정리, 앱 아이콘 생성을 제공합니다.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="https://github.com/segunlee/Lophorina/releases" target="_blank" rel="noopener">다운로드</a>
        <a class="button secondary" href="https://github.com/segunlee/Lophorina" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
    <div class="hero-card fade-in">
      <h3>모든 작업을 로컬에서</h3>
      <p>Lophorina는 사용자 데이터를 외부로 전송하지 않고, 대부분의 처리를 로컬에서 수행하도록 설계되었습니다.</p>
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
          <li>Swift 모델 생성</li>
        </ul>
      </article>
      <article class="card">
        <h3>Apple Utilities</h3>
        <ul class="feature-list">
          <li>APNs Payload 제작</li>
          <li>Provisioning Profile 뷰어</li>
          <li>LaunchDaemon/Agent 관리</li>
          <li>App Icon 생성</li>
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
    <p class="section-lead">문의와 이슈는 GitHub에서 관리합니다.</p>
    <div class="hero-actions">
      <a class="button primary" href="https://github.com/segunlee/Lophorina/issues" target="_blank" rel="noopener">Issue 등록</a>
      <a class="button secondary" href="mailto:segunleedev@gmail.com">메일 문의</a>
    </div>
  </section>

  <footer class="footer">
    <div>© 2026 Lophorina. All rights reserved.</div>
    <div><RouterLink to="/">Back to Home</RouterLink></div>
  </footer>
</template>
