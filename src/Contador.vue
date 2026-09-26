<script setup lang="ts">
import { useContador } from './composables/useContador'

const { contador, incrementar, decrementar } = useContador()
</script>

<template>
  <div class="contador-container">
    
    <div class="titulo-badge">
      <h1>PRÁCTICA 3</h1>
    </div>
    <p class="numero" :class="{ 'positivo': contador > 0, 'negativo': contador < 0 }">{{ contador }}</p>

    <div class="botones">
      <button @click="decrementar">- Menos</button>
      <button @click="incrementar">+ Más</button>
    </div>
  </div>
</template>