<template>
  <div class="layout">
    <div class="background-overlay">
      <header class="header">
        <!-- Логотип теперь — ссылка -->
        <RouterLink to="/" class="logo-link">
          <img :src="javaLogo" alt="Logo" class="logo" />
        </RouterLink>

        <!-- Навигация чуть ближе к центру -->
        <nav class="nav">
          <RouterLink to="/theory">Теория</RouterLink>
          <RouterLink to="/tests">Тесты</RouterLink>
        </nav>
      </header>

      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import javaLogo from '@/assets/java.png'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background-image: url('@/assets/back.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.background-overlay {
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(58, 58, 58, 0.8);
  padding: 1rem 2rem;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 40px;
  cursor: pointer;
}

.nav {
  display: flex;
  gap: 3rem;
  margin-right: 10%; /* Сдвигает меню немного к центру */
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: opacity 0.3s;
}

.nav a:hover {
  text-decoration: underline;
  opacity: 0.8;
}

.content {
  padding: 2rem;
}
</style>



