<template>
  <div class="theory-page">
    <SidebarMenu :menu="menuItems" @select="loadTheory" />
    <div class="content-area">
      <ContentViewer v-if="currentData" :data="currentData" />
      <p v-else>Выберите паттерн из меню слева.</p>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue'
import ContentViewer from '@/components/ContentViewer.vue'
import axios from 'axios'

export default {
  components: { SidebarMenu, ContentViewer },
  data() {
    return {
      currentData: null,
      menuItems: [
        {
          title: 'Порождающие паттерны',
          children: [
            { title: 'Builder', file: 'builder.json' },
            { title: 'Factory_Method', file: 'factory.json' },
            { title: 'Abstrct_Factory', file: 'abfactory.json' },
            { title: 'Prototype', file: 'prototype.json' },
            { title: 'Singleton', file: 'singleton.json' },
            { title: 'Multiton', file: 'multiton.json' },
            { title: 'Object_Pool', file: 'objpool.json' }
          ]
        },
        {
          title: 'Структурные паттерны',
          children: [
            { title: 'Composite', file: 'Composite.json' },
            { title: 'Facade', file: 'Facade.json' },
            { title: 'Bridge', file: 'Bridge.json' },
            { title: 'Adapter', file: 'Adapter.json' },
            { title: 'Proxy', file: 'proxy.json' },
            { title: 'Decorator', file: 'decorator.json' },
            { title: 'Flyweight', file: 'Flyweight.json' }
          ]
        },
        {
          title: 'Поведенческие паттерны',
          children: [
            { title: 'Chain', file: 'Chain.json' },
            { title: 'Strategy', file: 'Strategy.json' },
            { title: 'Command', file: 'Command.json' },
            { title: 'State', file: 'State.json' },
            { title: 'Memento', file: 'Memento.json' },
            { title: 'Iterator', file: 'Iterator.json' },
            { title: 'Visitor', file: 'Visitor.json' },
            { title: 'Mediator', file: 'Mediator.json' },
            { title: 'Observer', file: 'Observer.json' }
          ]
        }
      ]
    }
  },
  methods: {
    async loadTheory(fileItem) {
      try {
        const response = await axios.get(`/data/${fileItem.file}`)
        this.currentData = response.data
      } catch (error) {
        console.error('Ошибка загрузки файла:', error)
        this.currentData = null
      }
    }
  }
}
</script>

<style scoped>
.theory-page {
  display: flex;
}
.content-area {
  flex: 1;
  padding: 20px;
}


.java-code {
  background-color:rgb(231, 218, 218);
  color:rgb(12, 12, 12);
  padding: 12px;
  border-radius: 8px;
  font-family: Consolas, Monaco, 'Courier New', monospace;
  font-size: 14px;
  overflow-x: auto;
  line-height: 1.5;
}
</style>

