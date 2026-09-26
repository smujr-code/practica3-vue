<script setup lang="ts">
import { useContador } from './composables/useContador'

const { contador, incrementar, decrementar, reiniciar } = useContador()
</script>

<template>
  <div class="contador-container">
    
    <div class="titulo-badge">
      <h1>PRÁCTICA 3</h1>
    </div>
    <p class="numero" :class="{ 'positivo': contador > 0, 'negativo': contador < 0 }">{{ contador }}</p>

    <div class="botones">
      <button @click="decrementar" class="btn-menos">-</button>
      <button @click="reiniciar" class="btn-reiniciar">C</button>
      <button @click="incrementar" class="btn-mas">+</button>
    </div>
  </div>
</template>