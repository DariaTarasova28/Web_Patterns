<template>
  <div class="sidebar">
    <ul>
      <li v-for="section in menu" :key="section.title">
        <h3>{{ section.title }}</h3>
        <ul>
          <li
            v-for="item in section.children"
            :key="item.title"
            @click="$emit('select', item)"
            class="menu-item"
          >
            {{ item.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menu: Array
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  border-right: 1px solid #ccc;
  padding: 15px;
}
.menu-item {
  cursor: pointer;
  color:rgb(227, 139, 7);
}
.menu-item:hover {
  text-decoration: underline;
}
</style>
