// src/services/PatternService.js
import axios from 'axios'

export const getPatternData = async (patternName) => {
  try {
    const response = await axios.get(`/patterns/${patternName.toLowerCase()}.json`)
    return response.data
  } catch (error) {
    console.error(`Ошибка загрузки паттерна ${patternName}`, error)
    throw new Error(`Паттерн "${patternName}" не найден`)
  }
}
