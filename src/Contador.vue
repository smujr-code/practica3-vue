<script setup lang="ts">
import { useContador } from './composables/useContador'

const { contador, decrementar } = useContador()
</script>

<template>
  <div class="contador-container">
    <h1>Practica 3 Vue</h1>
    <p class="numero">{{ contador }}</p>

    <div class="botones">
      <button @click="decrementar">- Menos</button>
    </div>
  </div>
</template>