<!-- src/views/PatternView.vue -->
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getPatternData } from '@/services/PatternService'
import ContentViewer from '@/components/ContentViewer.vue'

const route = useRoute()
const patternName = ref(route.params.name)

const patternData = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchPattern = async () => {
  loading.value = true
  error.value = null
  try {
    patternData.value = await getPatternData(patternName.value)
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}

onMounted(fetchPattern)

watch(() => route.params.name, (newName) => {
  patternName.value = newName
  fetchPattern()
})
</script>

<template>
  <div>
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error" style="color: red;">Ошибка: {{ error.message }}</div>
    <div v-else>
      <ContentViewer :data="patternData" />
    </div>
  </div>
</template>
