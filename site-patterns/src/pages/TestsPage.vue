<template>
  <div class="tests-page">
    <SidebarMenu :menu="testCategories" @select="selectTestCategory" />
    <div class="content-area">
      <div v-if="currentTest" class="test-container">
        <h1>{{ currentTest.title }}</h1>
        
        <div v-for="(question, qIndex) in currentTest.questions" :key="qIndex" class="question">
          <h3>{{ qIndex + 1 }}. {{ question.text }}</h3>
          <div class="options">
            <div 
              v-for="(option, optIndex) in question.options" 
              :key="optIndex"
              class="option"
              :class="{ 
                'selected': selectedAnswers[qIndex] === optIndex,
                'correct': showResults && question.correct === optIndex,
                'incorrect': showResults && selectedAnswers[qIndex] === optIndex && question.correct !== optIndex
              }"
              @click="!showResults && selectAnswer(qIndex, optIndex)"
            >
              <span class="option-letter">{{ String.fromCharCode(97 + optIndex) }}</span>
              <span class="option-text">{{ option }}</span>
              <span v-if="showResults && question.correct === optIndex" class="correct-marker">✓</span>
            </div>
          </div>
        </div>

        <button class="submit-btn" @click="checkAnswers">Проверить ответы</button>

        <div v-if="showResults" class="results">
          <h2>Результаты теста</h2>
          <p>Правильных ответов: {{ correctAnswers }} из {{ currentTest.questions.length }}</p>
          <p>Процент правильных ответов: {{ Math.round((correctAnswers / currentTest.questions.length) * 100) }}%</p>
          
          <div v-for="(question, index) in currentTest.questions" :key="'result-' + index" class="question-result">
            <h4>{{ index + 1 }}. {{ question.text }}</h4>
            <p>
              Ваш ответ: 
              <span :class="{ 'correct': selectedAnswers[index] === question.correct, 'incorrect': selectedAnswers[index] !== question.correct }">
                {{ String.fromCharCode(97 + selectedAnswers[index]) }}) {{ question.options[selectedAnswers[index]] }}
              </span>
            </p>
            <p v-if="selectedAnswers[index] !== question.correct">
              Правильный ответ: 
              <span class="correct">
                {{ String.fromCharCode(97 + question.correct) }}) {{ question.options[question.correct] }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div v-else class="test-selection">
        <h1>Выберите категорию тестов</h1>
        <p>Используйте меню слева для выбора теста по одной из категорий паттернов проектирования.</p>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue'

export default {
  components: { SidebarMenu },
  data() {
    return {
      currentTest: null,
      selectedAnswers: {},
      showResults: false,
      correctAnswers: 0,
      testCategories: [
        {
          title: 'Порождающие паттерны',
          children: [
            { title: 'Тест по порождающим паттернам', category: 'creational' }
          ]
        },
        {
          title: 'Структурные паттерны',
          children: [
            { title: 'Тест по структурным паттернам', category: 'structural' }
          ]
        },
        {
          title: 'Поведенческие паттерны',
          children: [
            { title: 'Тест по поведенческим паттернам', category: 'behavioral' }
          ]
        }
      ],
      testsData: {
        creational: {
          title: 'Тест по порождающим паттернам проектирования',
          questions: [
            {
              text: 'Какую основную проблему решает паттерн "Строитель" (Builder)?',
              options: [
                'Управление жизненным циклом объектов',
                'Пошаговое создание сложных объектов с множеством параметров',
                'Обеспечение единственности экземпляра класса',
                'Динамическое создание объектов без явного указания их классов'
              ],
              correct: 1
            },
            {
              text: 'Какой паттерн позволяет создавать семейства связанных объектов, не привязываясь к их конкретным классам?',
              options: [
                'Фабричный метод',
                'Синглтон',
                'Прототип',
                'Абстрактная фабрика'
              ],
              correct: 3
            },
            {
              text: 'Какой из перечисленных паттернов использует метод clone() для создания объектов?',
              options: [
                'Фабричный метод',
                'Строитель',
                'Прототип',
                'Синглтон'
              ],
              correct: 2
            },
            {
              text: 'Какой паттерн гарантирует, что у класса будет только один экземпляр?',
              options: [
                'Мультитон',
                'Синглтон',
                'Фабричный метод',
                'Абстрактная фабрика'
              ],
              correct: 1
            },
            {
              text: 'Какой паттерн рекомендуется использовать, если создание объекта требует значительных ресурсов и его можно переиспользовать?',
              options: [
                'Строитель',
                'Прототип',
                'Пул объектов',
                'Фабричный метод'
              ],
              correct: 2
            },
            {
              text: 'Какой паттерн делегирует создание объектов подклассам, позволяя изменять тип создаваемых объектов?',
              options: [
                'Фабричный метод',
                'Абстрактная фабрика',
                'Строитель',
                'Прототип'
              ],
              correct: 0
            },
            {
              text: 'Какой паттерн является расширением Синглтона и управляет несколькими экземплярами по ключам?',
              options: [
                'Пул объектов',
                'Мультитон',
                'Абстрактная фабрика',
                'Прототип'
              ],
              correct: 1
            },
            {
              text: 'Какой из паттернов позволяет избежать "телескопических конструкторов"?',
              options: [
                'Строитель',
                'Фабричный метод',
                'Прототип',
                'Синглтон'
              ],
              correct: 0
            },
            {
              text: 'Какой паттерн лучше использовать, если нужно создавать объекты с разными вариациями (например, мебель в стиле "Барокко" или "Модерн")?',
              options: [
                'Строитель',
                'Прототип',
                'Абстрактная фабрика',
                'Пул объектов'
              ],
              correct: 2
            },
            {
              text: 'Какой паттерн обеспечивает глобальную точку доступа к единственному экземпляру класса?',
              options: [
                'Мультитон',
                'Прототип',
                'Фабричный метод',
                'Синглтон'
              ],
              correct: 3
            }
          ]
        },
        structural: {
          title: 'Тест по структурным паттернам проектирования',
          questions: [
            {
              text: 'Какой паттерн позволяет группировать объекты в древовидную структуру и работать с ними как с единым объектом?',
              options: [
                'Фасад',
                'Компоновщик (Composite)',
                'Адаптер',
                'Декоратор'
              ],
              correct: 1
            },
            {
              text: 'Какой паттерн предоставляет простой интерфейс для работы со сложной подсистемой?',
              options: [
                'Фасад (Facade)',
                'Мост',
                'Заместитель',
                'Легковес'
              ],
              correct: 0
            },
            {
              text: 'Какой паттерн разделяет абстракцию и реализацию, позволяя изменять их независимо?',
              options: [
                'Адаптер',
                'Мост (Bridge)',
                'Декоратор',
                'Компоновщик'
              ],
              correct: 1
            },
            {
              text: 'Какой паттерн используется для совместимости несовместимых интерфейсов?',
              options: [
                'Адаптер (Adapter)',
                'Прокси',
                'Легковес',
                'Фасад'
              ],
              correct: 0
            },
            {
              text: 'Какой паттерн позволяет динамически добавлять новую функциональность объектам?',
              options: [
                'Компоновщик',
                'Адаптер',
                'Декоратор (Decorator)',
                'Мост'
              ],
              correct: 2
            },
            {
              text: 'Какой паттерн заменяет реальный объект его заместителем, контролируя доступ к нему?',
              options: [
                'Легковес',
                'Фасад',
                'Компоновщик',
                'Заместитель (Proxy)'
              ],
              correct: 3
            },
            {
              text: 'Какой паттерн оптимизирует использование памяти за счёт разделения общего состояния объектов?',
              options: [
                'Адаптер',
                'Декоратор',
                'Легковес (Flyweight)',
                'Мост'
              ],
              correct: 2
            },
            {
              text: 'Какой паттерн позволяет отложить создание ресурсоёмкого объекта до его фактического использования?',
              options: [
                'Адаптер',
                'Виртуальный прокси (Proxy)',
                'Фасад',
                'Компоновщик'
              ],
              correct: 1
            },
            {
              text: 'Какой паттерн лучше всего подходит для добавления логирования или кэширования без изменения исходного класса?',
              options: [
                'Адаптер',
                'Легковес',
                'Мост',
                'Декоратор (Decorator)'
              ],
              correct: 3
            },
            {
              text: 'Какой паттерн позволяет управлять доступом к объекту, например, проверяя права доступа?',
              options: [
                'Компоновщик',
                'Фасад',
                'Защищающий прокси (Proxy)',
                'Адаптер'
              ],
              correct: 2
            }
          ]
        },
        behavioral: {
          title: 'Тест по поведенческим паттернам проектирования',
          questions: [
            {
              text: 'Какой паттерн превращает запросы в объекты, позволяя поддерживать отмену операций?',
              options: [
                'Наблюдатель',
                'Стратегия',
                'Посредник',
                'Команда (Command)'
              ],
              correct: 3
            },
            {
              text: 'Какой паттерн передает запрос последовательно по цепочке обработчиков?',
              options: [
                'Цепочка обязанностей (Chain of Responsibility)',
                'Состояние',
                'Посетитель',
                'Шаблонный метод'
              ],
              correct: 0
            },
            {
              text: 'Какой паттерн определяет общий алгоритм, делегируя реализацию шагов подклассам?',
              options: [
                'Снимок',
                'Шаблонный метод (Template Method)',
                'Итератор',
                'Стратегия'
              ],
              correct: 1
            },
            {
              text: 'Какой паттерн позволяет выбирать алгоритм во время выполнения программы?',
              options: [
                'Посредник',
                'Наблюдатель',
                'Стратегия (Strategy)',
                'Команда'
              ],
              correct: 2
            },
            {
              text: 'Какой паттерн изменяет поведение объекта при изменении его состояния?',
              options: [
                'Посетитель',
                'Состояние (State)',
                'Легковес',
                'Фасад'
              ],
              correct: 1
            },
            {
              text: 'Какой паттерн сохраняет и восстанавливает состояние объекта?',
              options: [
                'Снимок (Memento)',
                'Адаптер',
                'Декоратор',
                'Компоновщик'
              ],
              correct: 0
            },
            {
              text: 'Какой паттерн обеспечивает последовательный обход коллекции?',
              options: [
                'Команда',
                'Цепочка обязанностей',
                'Мост',
                'Итератор (Iterator)'
              ],
              correct: 3
            },
            {
              text: 'Какой паттерн добавляет новые операции без изменения классов?',
              options: [
                'Заместитель',
                'Посетитель (Visitor)',
                'Фасад',
                'Компоновщик'
              ],
              correct: 1
            },
            {
              text: 'Какой паттерн централизует взаимодействие между объектами?',
              options: [
                'Наблюдатель',
                'Стратегия',
                'Посредник (Mediator)',
                'Состояние'
              ],
              correct: 2
            },
            {
              text: 'Какой паттерн уведомляет объекты об изменениях состояния?',
              options: [
                'Наблюдатель (Observer)',
                'Команда',
                'Шаблонный метод',
                'Снимок'
              ],
              correct: 0
            }
          ]
        }
      }
    }
  },
  methods: {
    selectTestCategory(testItem) {
      this.currentTest = this.testsData[testItem.category]
      this.selectedAnswers = {}
      this.showResults = false
      this.correctAnswers = 0
    },
    selectAnswer(questionIndex, optionIndex) {
      // Просто устанавливаем значение в объекте
      this.selectedAnswers = {
        ...this.selectedAnswers,
        [questionIndex]: optionIndex
      };
    },

    checkAnswers() {
      if (Object.keys(this.selectedAnswers).length !== this.currentTest.questions.length) {
        alert('Пожалуйста, ответьте на все вопросы перед проверкой');
        return;
      }

      this.correctAnswers = this.currentTest.questions.reduce((acc, question, index) => {
        return acc + (this.selectedAnswers[index] === question.correct ? 1 : 0);
      }, 0);
      
      this.showResults = true;
      
      this.correctAnswers = 0
      this.currentTest.questions.forEach((question, index) => {
        if (this.selectedAnswers[index] === question.correct) {
          this.correctAnswers++
        }
      })
      
      this.showResults = true
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      })
    },
    watch: {
    currentTest() {
      // Сбрасываем выбранные ответы при смене теста
      this.selectedAnswers = {};
      this.showResults = false;
      this.correctAnswers = 0;
    }
  }
  }
}
</script>

<style scoped>
.tests-page {
  display: flex;
}

.content-area {
  flex: 1;
  padding: 20px;
  color: #dcdcdc;
}

.test-container {
  max-width: 800px;
  margin: 0 auto;
}

.test-selection {
  text-align: center;
  margin-top: 50px;
}

.test-selection h1 {
  color: #ff6d00;
  margin-bottom: 20px;
}

h1 {
  color: #ff6d00;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.question {
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 8px;
}

h3 {
  color: #dcdcdc;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.option {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin: 5px 0;
  background: rgba(40, 40, 40, 0.7);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.option:hover:not(.selected) {
  background: rgba(60, 60, 60, 0.7);
}

.option.selected {
  background: rgba(227, 139, 7, 0.3);
  border: 1px solid #ff6d00;
  box-shadow: 0 0 0 2px rgba(227, 139, 7, 0.3);
}

/* Стили для правильного ответа (при показе результатов) */
.option.correct {
  background: rgba(76, 175, 80, 0.2);
  border: 1px solid #4caf50;
}

/* Стили для неправильного ответа (при показе результатов) */
.option.incorrect {
  background: rgba(244, 67, 54, 0.2);
  border: 1px solid #f44336;
}

.correct-marker {
  margin-left: auto;
  color: #4caf50;
  font-weight: bold;
}

.option-letter {
  font-weight: bold;
  margin-right: 10px;
  color: #ff6d00;
}

.submit-btn {
  display: block;
  margin: 2rem auto;
  padding: 12px 24px;
  background: #ff6d00;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: #e65c00;
}

.results {
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 8px;
}

.results h2 {
  color: #ff6d00;
  text-align: center;
  margin-bottom: 1.5rem;
}

.results p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.question-result {
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(40, 40, 40, 0.7);
  border-radius: 6px;
}

.question-result h4 {
  color: #dcdcdc;
  margin-bottom: 0.5rem;
}

.correct {
  color: #4caf50;
  font-weight: bold;
}

.incorrect {
  color: #f44336;
  font-weight: bold;
}
</style>