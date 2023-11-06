<template>
  <div class="container">
    <header>
      <!-- ヘッダーコンテンツ -->
    </header>
    <div class="content">
      <aside class="sidebar">
        <!-- サイドバーコンテンツ -->
      </aside>
      <main class="main-content">
        <NuxtPage />
      </main>
    </div>
    <footer>
      <!-- フッターコンテンツ -->
    </footer>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #4caf50;
  color: #fff;
  padding: 1em;
  text-align: center;
}

.content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.sidebar {
  background-color: #333;
  color: #fff;
  padding: 1em;
  width: 250px;
  overflow-y: auto;
}

.main-content {
  flex: 1;
  background-color: #f4f4f4;
  padding: 1em;
  overflow-y: auto;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1em;
}

/* レスポンシブデザインのためのメディアクエリ */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
  }

  .content {
    flex-direction: column;
  }
}
</style>
