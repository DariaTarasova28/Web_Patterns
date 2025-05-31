<template>
  <div v-if="pattern">
    <h1>
      {{ pattern.name?.ru || 'Название отсутствует' }}
      <span v-if="pattern.name?.en">({{ pattern.name.en }})</span>
    </h1>

    <p v-if="pattern.type"><strong>Тип паттерна:</strong> {{ pattern.type }}</p>

    <section v-if="pattern.description">
      <h2>Описание</h2>
      <p v-if="pattern.description.main">{{ pattern.description.main }}</p>
      <p v-if="pattern.description.detailed">{{ pattern.description.detailed }}</p>
    </section>

    <section v-if="pattern.usage_scenarios?.length">
      <h2>Когда использовать</h2>
      <ul>
        <li v-for="(scenario, index) in pattern.usage_scenarios" :key="index">{{ scenario }}</li>
      </ul>
    </section>

    <section v-if="pattern.structure?.components?.length">
      <h2>Структура паттерна</h2>
      <div v-for="(component, index) in pattern.structure.components" :key="index" class="structure-component">
        <h3>{{ component.name }}</h3>
        <p v-if="component.description">{{ component.description }}</p>
        <ul v-if="component.methods?.length">
          <li v-for="(method, methodIndex) in component.methods" :key="methodIndex">{{ method }}</li>
        </ul>
      </div>
    </section>

    <section v-if="pattern.implementation">
      <h2>Реализация</h2>
      <p v-if="pattern.implementation.general">{{ pattern.implementation.general }}</p>
      
      <div v-if="pattern.implementation.details">
        <h3>Детали реализации</h3>
        <div v-if="pattern.implementation.details.pool_management">
          <p><strong>Управление пулом:</strong> {{ pattern.implementation.details.pool_management }}</p>
        </div>
        <div v-if="pattern.implementation.details.object_reset">
          <p><strong>Сброс объектов:</strong> {{ pattern.implementation.details.object_reset }}</p>
        </div>
        <div v-if="pattern.implementation.details.thread_safety">
          <p><strong>Потокобезопасность:</strong> {{ pattern.implementation.details.thread_safety }}</p>
        </div>
      </div>
    </section>

    <section v-if="pattern.examples?.length">
      <h2>Примеры</h2>
      <div v-for="(ex, index) in pattern.examples" :key="index" class="example">
        <h3>{{ ex.name || 'Без названия' }}</h3>
        <p v-if="ex.description">{{ ex.description }}</p>
        <ul v-if="ex.features?.length">
          <li v-for="(feat, idx) in ex.features" :key="idx">{{ feat }}</li>
        </ul>
        <pre v-if="ex.code" class="java-code">{{ ex.code }}</pre>
      </div>
    </section>

    <section v-if="pattern.advantages?.length">
      <h2>Преимущества</h2>
      <ul>
        <li v-for="(adv, index) in pattern.advantages" :key="index">{{ adv }}</li>
      </ul>
    </section>

    <section v-if="pattern.disadvantages?.length">
      <h2>Недостатки</h2>
      <ul>
        <li v-for="(disadv, index) in pattern.disadvantages" :key="index">{{ disadv }}</li>
      </ul>
    </section>

    <section v-if="pattern.comparison_table">
      <h2>{{ pattern.comparison_table.title || 'Сравнение реализаций' }}</h2>
      <table v-if="pattern.comparison_table.headers?.length && pattern.comparison_table.rows?.length">
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
    </section>

    <section v-if="pattern.criticism">
      <h2>{{ pattern.criticism.title || 'Критика паттерна' }}</h2>
      <ul v-if="pattern.criticism.points?.length">
        <li v-for="(point, index) in pattern.criticism.points" :key="index">{{ point }}</li>
      </ul>
    </section>

    <section v-if="pattern.additional_info">
      <h2>Дополнительная информация</h2>
      <p v-if="pattern.additional_info.standard_library_example">
        <strong>Пример в стандартной библиотеке:</strong> {{ pattern.additional_info.standard_library_example }}
      </p>

      <div v-if="pattern.additional_info.literature_references">
        <h3>Литература</h3>
        <ul>
          <li v-if="pattern.additional_info.literature_references.book1">{{ pattern.additional_info.literature_references.book1 }}</li>
          <li v-if="pattern.additional_info.literature_references.book2">{{ pattern.additional_info.literature_references.book2 }}</li>
        </ul>
      </div>

      <div v-if="pattern.additional_info.articles?.length">
        <h3>Статьи</h3>
        <ul>
          <li v-for="(article, index) in pattern.additional_info.articles" :key="index">{{ article }}</li>
        </ul>
      </div>
    </section>

    <section v-if="pattern.sources?.length">
      <h2>Источники</h2>
      <ul>
        <li v-for="(source, index) in pattern.sources" :key="index">{{ source }}</li>
      </ul>
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
/* Общий стиль для всех pre, если используется где-то ещё */
pre {
  background: rgb(14, 13, 13);
  padding: 10px;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: monospace;
  font-size: 13px;
}

/* Специальный стиль для Java-кода */
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

table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;
  background-color: #282c34;
  color: #dcdcdc;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #282c34;
}

tr:nth-child(even) {
  background-color: #282c34;
}

.structure-component {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #2c3e50;
  border-radius: 5px;
}

.example {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #3d4e5f;
}
</style>

