<script setup>
const screenshots = [
  {
    src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/b6/ce/0a/b6ce0adc-798b-3430-6412-2295ec9496cf/7c9cf16e-3ee5-4e26-8b35-749d46646bdb_iPhone_8_Plus-0-Bookshelf_framed.png/392x696bb.png',
    alt: 'LightComics bookshelf',
  },
  {
    src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/59/16/ee/5916ee35-9ccd-e0ee-8b76-d92b3dbd3844/dac3be72-f0c9-4db6-9728-1de9a58796b6_iPhone_8_Plus-1-Reader_framed.png/392x696bb.png',
    alt: 'LightComics reader',
  },
  {
    src: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource125/v4/88/ea/e0/88eae030-73cb-375a-0794-8b24917dfef5/8d00b7e5-996a-434f-bf3f-829158cdc557_iPhone_8_Plus-2-StringR_framed.png/392x696bb.png',
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
        아이폰과 아이패드의 필수 뷰어 LightComics 애플리케이션입니다. 텍스트, 만화책, PDF, EPUB을 자연스럽게 이어주는 읽기 전용 뷰어로 대용량 파일도 빠르게 인덱싱합니다.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="https://apps.apple.com/kr/app/lightcomics/id1330843650" target="_blank" rel="noopener">App Store에서 보기</a>
        <a class="button secondary" href="mailto:segunleedev@gmail.com">문의하기</a>
      </div>
    </div>
    <div class="hero-card fade-in">
      <h3>핵심 기능</h3>
      <p>웹툰 스타일 스크롤, 페이지 말림, 빠른 이동, 북마크, TTS, 커스텀 폰트까지 포함한 통합 리딩 경험을 제공합니다.</p>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">주요 기능</h2>
    <div class="cards">
      <article class="card">
        <h3>이미지 & 만화</h3>
        <ul class="feature-list">
          <li>ZIP, RAR, CBZ 및 폴더 기반 이미지 탐색</li>
          <li>웹툰 스크롤, 페이지 말림, 두 페이지 보기</li>
          <li>대용량 ZIP 파일을 위한 빠른 인덱싱</li>
        </ul>
      </article>
      <article class="card">
        <h3>텍스트 & EPUB</h3>
        <ul class="feature-list">
          <li>TXT, 로그, 마크다운 등 텍스트 파일 지원</li>
          <li>검색, 글꼴/행간 조절, 배경/텍스트 컬러</li>
          <li>TTS, 북마크, 빠른 페이지 이동</li>
        </ul>
      </article>
      <article class="card">
        <h3>문서 & 원격</h3>
        <ul class="feature-list">
          <li>File 앱 연동, 폴더 정리 및 압축 해제</li>
          <li>WebDAV, SMB2/3, Dropbox, Google Drive, Box</li>
          <li>iCloud 동기화 및 생체인식 잠금</li>
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
    <p class="section-lead">앱 사용 정책과 약관을 확인하세요.</p>
    <div class="hero-actions">
      <RouterLink class="button primary" to="/privacy-policy">Privacy Policy</RouterLink>
      <RouterLink class="button secondary" to="/terms-conditions">Terms & Conditions</RouterLink>
    </div>
  </section>

  <footer class="footer">
    <div>© 2026 LightComics. All rights reserved.</div>
    <div><RouterLink to="/">Back to Home</RouterLink></div>
  </footer>
</template>
