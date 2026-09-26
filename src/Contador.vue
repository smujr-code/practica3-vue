<script setup lang="ts">
import { ref } from 'vue'

// Variable reactiva para el número del contador
const contador = ref<number>(0)
</script>

<template>
  <div class="contador-container">
    <h2>Contador</h2>
    <p>{{ contador }}</p>
  </div>
</template>