<template>
  <div class="layout">
    <div class="sidebar">
      <div class="logo-container">
        <div class="default-logo">Design Patterns</div>
      </div>
      
      <div class="search-container" v-if="searchable">
        <div class="search-box">
          <input 
            type="text" 
            placeholder="Поиск..." 
            v-model="searchQuery"
            @input="handleSearch"
          >
          <svg class="search-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
          </svg>
        </div>
      </div>
      
      <div class="menu-scroll">
        <ul class="menu-list">
          <li v-for="section in filteredMenu" :key="section.title" class="menu-section">
            <div class="section-header" @click="toggleSection(section)">
              <h3>{{ section.title }}</h3>
              <svg 
                class="chevron" 
                :class="{ 'rotate-90': section.expanded }" 
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </div>
            
            <transition name="slide" mode="out-in">
              <ul v-show="section.expanded" class="submenu">
                <li
                  v-for="item in section.children"
                  :key="item.title"
                  @click="$emit('select', item)"
                  class="menu-item"
                >
                  {{ item.title }}
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>
    </div>
    
    <main class="content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true
    },
    searchable: {
      type: Boolean,
      default: true
    }
  },
  
  data() {
    return {
      searchQuery: '',
      filteredMenu: this.menu.map(section => ({
        ...section,
        expanded: section.expanded || true
      }))
    }
  },
  
  methods: {
    toggleSection(section) {
      section.expanded = !section.expanded
    },
    
    handleSearch() {
      if (!this.searchQuery) {
        this.filteredMenu = this.menu.map(section => ({
          ...section,
          expanded: true
        }))
        return
      }
      
      const query = this.searchQuery.toLowerCase()
      this.filteredMenu = this.menu.map(section => {
        const filteredChildren = section.children.filter(item => 
          item.title.toLowerCase().includes(query)
        )
        
        return {
          ...section,
          expanded: filteredChildren.length > 0,
          children: filteredChildren
        }
      })
    }
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  --primary-color: rgb(227, 139, 7);
  --primary-light: rgba(227, 139, 7, 0.2);
  --primary-dark: rgba(227, 139, 7, 0.4);
  --bg-color: #121212;
  --bg-light: #1e1e1e;
  --text-color: #e0e0e0;
  --text-light: #b0b0b0;
  --text-dark: #808080;
  --transition-speed: 0.15s; /* Уменьшил время анимации */
  
  width: 280px;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.content {
  flex-grow: 1;
  padding: 20px;
  background: #1a1a1a;
}

/* Стили для сайдбара */
.logo-container {
  padding: 20px;
  background: var(--bg-light);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.default-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.search-container {
  padding: 15px;
  background: var(--bg-light);
}

.search-box {
  position: relative;
  width: 100%;
}

.search-box input {
  width: 100%;
  padding: 10px 15px 10px 40px;
  border: none;
  border-radius: 4px;
  background: var(--bg-color);
  color: var(--text-color);
  font-size: 0.9rem;
  box-sizing: border-box;
}

.search-box input:focus {
  outline: 2px solid var(--primary-dark);
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--text-dark);
}

.menu-scroll {
  flex: 1;
  overflow-y: auto;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-section {
  margin-bottom: 2px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  background: var(--bg-color);
  color: var(--text-color);
}

.section-header:hover {
  background: var(--bg-light);
}

.section-header h3 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-light);
}

.chevron {
  width: 16px;
  height: 16px;
  color: var(--text-dark);
  transition: transform var(--transition-speed);
}

.chevron.rotate-90 {
  transform: rotate(90deg);
  color: var(--primary-color);
}

.submenu {
  list-style: none;
  padding: 0;
  margin: 0;
  background: var(--bg-light);
  overflow: hidden;
}

.slide-enter-active, .slide-leave-active {
  transition: all var(--transition-speed) ease;
  will-change: height, opacity;
}

.slide-enter-from, .slide-leave-to {
  height: 0;
  opacity: 0;
}

.slide-enter-to, .slide-leave-from {
  height: auto;
  opacity: 1;
}

.menu-item {
  padding: 12px 20px 12px 45px;
  cursor: pointer;
  color: var(--text-color);
  transition: all var(--transition-speed);
}

.menu-item:hover {
  color: var(--primary-color);
  background: rgba(0, 0, 0, 0.2);
}

/* Стили для скроллбара */
.menu-scroll::-webkit-scrollbar {
  width: 6px;
}

.menu-scroll::-webkit-scrollbar-thumb {
  background-color: var(--primary-dark);
  border-radius: 3px;
}

.menu-scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--primary-color);
}
</style>