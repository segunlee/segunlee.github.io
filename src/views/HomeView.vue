<script setup>
import lophorinaPreview from '../assets/images/lophorina-en-1.png'

const lightComicsIcon =
  'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/47/d8/e3/47d8e3b5-c620-9a02-3baa-6fcc13fb3743/AppIcon-0-1x_U007emarketing-0-11-0-85-220-0.png/400x400bb.webp'
</script>

<template>
  <section class="hero" id="intro">
    <div class="fade-in">
      <h1 class="hero-title">일상에 녹아드는 도구를 만듭니다.</h1>
      <p class="hero-lead">
        macOS와 iOS에서 작동하는 뷰어와 개발자 유틸리티를 설계합니다. 빠른 읽기 흐름,
        단단한 로컬 처리, 그리고 매끄러운 사용 경험을 우선합니다.
      </p>
      <div class="hero-actions">
        <RouterLink class="button primary" to="/lightcomics">LightComics 보기</RouterLink>
        <RouterLink class="button secondary" to="/lophorina">Lophorina 보기</RouterLink>
      </div>
    </div>
    <div class="hero-card fade-in">
      <h3>핵심 가치</h3>
      <p>복잡한 작업을 빠르게 끝내는 흐름, 오프라인에서도 안정적인 동작, 그리고 세심한 마감 디테일을 추구합니다.</p>
    </div>
  </section>

  <section class="section" id="projects">
    <h2 class="section-title">프로젝트</h2>
    <p class="section-lead">작지만 확실한 효용을 주는 앱과 도구를 소개합니다.</p>

    <div class="cards">
      <article class="card">
        <div class="badge">iOS · iPadOS</div>
        <div>
          <img :src="lightComicsIcon" alt="LightComics App Icon" width="88" height="88" />
        </div>
        <h3>LightComics</h3>
        <p>텍스트, 만화책, PDF, EPUB까지 한 번에 읽는 뷰어. 빠른 인덱싱과 정교한 보기 옵션으로 긴 독서 세션을 지원합니다.</p>
        <ul class="feature-list">
          <li>ZIP/CBZ/RAR 이미지 뷰어와 웹툰 스크롤 모드</li>
          <li>텍스트 검색, TTS, 커스텀 폰트/색상</li>
          <li>PDF/EPUB, 원격 저장소(WebDAV, SMB, Dropbox)</li>
        </ul>
        <div class="hero-actions">
          <a class="button primary" href="https://apps.apple.com/kr/app/lightcomics/id1330843650" target="_blank" rel="noopener">App Store</a>
          <RouterLink class="button secondary" to="/lightcomics">소개 페이지</RouterLink>
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
        <p>Apple 개발자를 위한 올인원 macOS 툴박스. 인코딩, 암호화, JSON 가공부터 APNs 페이로드, 프로비저닝 프로파일, launchd 관리까지 한 곳에서 처리합니다.</p>
        <ul class="feature-list">
          <li>Base64/URL 인코딩·디코딩, AES 암복호화</li>
          <li>JSON 포맷 및 Swift 모델 생성</li>
          <li>APNs, 프로비저닝, 앱 아이콘 생성, Xcode 캐시 정리</li>
        </ul>
        <div class="hero-actions">
          <RouterLink class="button primary" to="/lophorina">Lophorina 소개</RouterLink>
          <a class="button secondary" href="https://github.com/segunlee/Lophorina/releases" target="_blank" rel="noopener">다운로드</a>
          <a class="button secondary" href="https://github.com/segunlee/Lophorina" target="_blank" rel="noopener">GitHub</a>
        </div>
      </article>
    </div>
  </section>

  <section class="section" id="contact">
    <h2 class="section-title">Contact</h2>
    <p class="section-lead">협업, 피드백, 문의는 언제든지 환영합니다.</p>
    <div class="hero-actions">
      <a class="button primary" href="mailto:segunleedev@gmail.com">segunleedev@gmail.com</a>
      <a class="button secondary" href="https://github.com/segunlee" target="_blank" rel="noopener">GitHub Profile</a>
    </div>
  </section>

  <footer class="footer">
    <div>© 2026 Segun Lee. All rights reserved.</div>
    <div>LightComics · <RouterLink to="/privacy-policy">Privacy</RouterLink> · <RouterLink to="/terms-conditions">Terms</RouterLink></div>
  </footer>
</template>
