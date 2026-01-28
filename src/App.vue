<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div class="page">
    <header class="nav">
      <div class="logo">
        <RouterLink to="/">SGIOS Dev</RouterLink>
      </div>
      <nav class="nav-links" aria-label="Primary">
        <RouterLink to="/lightcomics" class="tab">LightComics</RouterLink>
        <RouterLink to="/lophorina" class="tab">Lophorina</RouterLink>
      </nav>
    </header>

    <main id="main-content">
      <RouterView />
    </main>
  </div>
</template>
