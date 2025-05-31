<template>
  <div class="home">
    <section class="hero">
      <div class="hero-left">
        <h1>Изучи паттерны проектирования профессионально</h1>
        <p>Понятные объяснения, примеры кода и реальные применения для твоего успеха</p>
        <RouterLink to="/theory" class="btn-start">Начать обучение</RouterLink>
      </div>

      <div class="hero-right">
        <div class="reviews-flower">
          <div class="review-card center">
            <p>«Очень понятные объяснения»</p>
          </div>
          <div class="review-card top">
            <p>«Лучшее руководство по паттернам»</p>
          </div>
          <div class="review-card right">
            <p>«Сложные темы объяснены просто»</p>
          </div>
          <div class="review-card bottom">
            <p>«Этот курс помог мне в работе»</p>
          </div>
          <div class="review-card left">
            <p>«Отличный материал и примеры»</p>
          </div>
        </div>
      </div>
    </section>
     <footer class="footer">
      <p>© 2025 Паттерны проектирования. Все права защищены.</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: url('/path-to-your-background.jpg') no-repeat center center fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.hero {
  flex: 1; /* чтобы занять всё оставшееся пространство */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 4rem;
  position: relative;
}

.hero-left {
  flex: 1 1 45%;
  max-width: 600px;
  z-index: 2;
}

.hero-left h1 {
  font-size: 3.4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.2rem;
  color: #ff6a3d;
}

.hero-left p {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  color: #ddd;
  line-height: 1.5;
}

.btn-start {
  display: inline-block;
  background-color: #ff6a3d;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(255, 106, 61, 0.4);
  transition: background-color 0.3s, box-shadow 0.3s;
  user-select: none;
}

.btn-start:hover {
  background-color: #ff4a1a;
  box-shadow: 0 8px 20px rgba(255, 74, 26, 0.6);
}

.hero-right {
  flex: 1 1 55%;
  position: relative;
  height: 450px;
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reviews-flower {
  position: relative;
  width: 360px;
  height: 360px;
}

/* Общие стили для карточек */
.review-card {
  position: absolute;
  background-color: rgba(255, 106, 61, 0.25);
  border-radius: 25px;
  padding: 1rem 1.4rem;
  box-shadow: 0 5px 20px rgba(255, 106, 61, 0.3);
  color: #fff;
  font-style: italic;
  user-select: none;
  cursor: default;
  border: 1.5px solid rgba(255, 106, 61, 0.7);
  line-height: 1.4;
  font-size: 1.1rem;
  width: 160px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Центр */
.review-card.center {
  top: 150px;
  left: 90px;
  background-color: rgba(255, 106, 61, 0.35);
  font-weight: 700;
  font-style: normal;
  width: 180px;
  height: 100px;
}

/* Верх */
.review-card.top {
  top: 5px;
  left: 300px;
}

/* Право */
.review-card.right {
  top: 5px;
  left: -70px;
}

/* Низ */
.review-card.bottom {
  top: 295px;
  left: -70px;
}

/* Лево */
.review-card.left {
  top: 295px;
  left: 300px;
}


/* Мобильная адаптация */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
  }
  .hero-left,
  .hero-right {
    max-width: 100%;
    flex: none;
  }
  .hero-right {
    height: auto;
  }
  .reviews-flower {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  .review-card {
    position: static;
    width: auto;
    height: auto;
    max-width: 90%;
    min-width: auto;
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1rem;
    border-radius: 15px;
  }
  :global(html, body) {
  height: 100%;
  margin: 0;
  padding: 0;
}

.footer {
  text-align: center;
  padding: 1rem 0;
  background: rgba(0, 0, 0, 0.4); /* полупрозрачный фон, чтобы не отвлекал */
  font-size: 0.95rem;
  color: #ddd;
}

}
</style>











