<template>
  <div v-if="pattern">
    <h1>
      {{ pattern.name?.ru || 'Название отсутствует' }}
      <span v-if="pattern.name?.en">({{ pattern.name.en }})</span>
    </h1>

    <p v-if="pattern.type"><strong>Тип паттерна:</strong> {{ pattern.type }}</p>

    <section v-if="pattern.core_idea">
      <h2>Основная идея</h2>
      <p>{{ pattern.core_idea }}</p>
    </section>

    <section v-if="pattern.description">
      <h2>Описание</h2>
      <p v-if="pattern.description.main">{{ pattern.description.main }}</p>
      <p v-if="pattern.description.detailed">{{ pattern.description.detailed }}</p>
      <ul v-if="pattern.description.bullets?.length">
        <li v-for="(bullet, index) in pattern.description.bullets" :key="index">{{ bullet }}</li>
      </ul>
    </section>

    <section v-if="pattern.usage_scenarios?.length">
      <h2>Когда использовать</h2>
      <ul>
        <li v-for="(scenario, index) in pattern.usage_scenarios" :key="index">{{ scenario }}</li>
      </ul>
    </section>

    <section v-if="pattern.structure?.components?.length">
      <h2>Структура паттерна</h2>
      <div
        v-for="(component, index) in pattern.structure.components"
        :key="index"
        class="structure-component"
      >
        <h3>{{ component.name }}</h3>
        <p v-if="component.description">{{ component.description }}</p>
        <ul v-if="component.methods?.length">
          <li v-for="(method, mIndex) in component.methods" :key="mIndex">{{ method }}</li>
        </ul>
      </div>
    </section>

    <section v-if="pattern.implementation">
      <h2>Реализация</h2>
      <p v-if="pattern.implementation.general">{{ pattern.implementation.general }}</p>
      <ol v-if="pattern.implementation.steps?.length">
        <li v-for="(step, index) in pattern.implementation.steps" :key="index">{{ step }}</li>
      </ol>
    </section>

    <section v-if="pattern.examples?.length">
      <h2>Примеры</h2>
      <div v-for="(ex, index) in pattern.examples" :key="index" class="example">
        <h3>{{ ex.name || 'Без названия' }}</h3>
        <p v-if="ex.description">{{ ex.description }}</p>
        <pre v-if="ex.code" class="java-code">{{ ex.code }}</pre>
      </div>
    </section>

    <section v-if="pattern.analogies?.length">
      <h2>Аналогии</h2>
      <ul>
        <li v-for="(analogy, index) in pattern.analogies" :key="index">{{ analogy }}</li>
      </ul>
    </section>

    <section v-if="pattern.comparison_table">
      <h2>{{ pattern.comparison_table.title }}</h2>
      <div class="table-container">
        <table class="comparison-table">
          <thead>
            <tr>
              <th v-for="(header, index) in pattern.comparison_table.headers" :key="index">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in pattern.comparison_table.rows" :key="rowIndex">
              <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section v-if="pattern.pros?.length">
      <h2>Преимущества</h2>
      <ul>
        <li v-for="(item, index) in pattern.pros" :key="index">{{ item }}</li>
      </ul>
    </section>

    <section v-if="pattern.cons?.length">
      <h2>Недостатки</h2>
      <ul>
        <li v-for="(item, index) in pattern.cons" :key="index">{{ item }}</li>
      </ul>
    </section>

    <section v-if="pattern.conclusion">
      <h2>Заключение</h2>
      <p>{{ pattern.conclusion }}</p>
    </section>

  </div>

  <div v-else>
    <p>Данные паттерна не загружены...</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  computed: {
    pattern() {
      return this.data?.pattern || null;
    },
  },
};
</script>

<style scoped>
/* Основные стили заголовков */
h1 {
 color: #ff6d00; 
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}

h2 {
  color: #ff6d00; /* Оранжевый цвет как в меню */
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eee;
  font-weight: 600;
}

h3 {
 color: #dcdcdc;
  font-size: 1.4rem;
  margin: 1.5rem 0 0.8rem;
}

/* Стили для контента */
p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #dcdcdc;
}

ul, ol {
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

li {
  margin-bottom: 0.5rem;
}

/* Стили для примеров кода */
pre {
  background: rgb(14, 13, 13);
  padding: 10px;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: monospace;
  font-size: 13px;
}

.java-code {
  background-color: #282c34;
  color: #dcdcdc;
  padding: 12px;
  border-radius: 6px;
  font-family: Consolas, Monaco, 'Courier New', monospace;
  font-size: 14px;
  overflow-x: auto;
  white-space: pre-wrap;
  line-height: 1.5;
  margin: 10px 0;
}

.example {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eaeaea;
}

/* Стили для таблицы */
.table-container {
  overflow-x: auto;
  margin-bottom: 2rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.9rem;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #444;
}

.comparison-table th {
  background-color: #333;
  color: #ff6d00;
  font-weight: 600;
}

.comparison-table tr:nth-child(even) {
  background-color: #222;
}

.comparison-table tr:hover {
  background-color: #333;
}

/* Дополнительные акценты */
strong {
  color: #333;
  font-weight: 600;
}

section {
  margin-bottom: 2rem;
}
</style>