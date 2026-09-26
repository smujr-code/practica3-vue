import { ref } from 'vue'

export function useContador() {
  const contador = ref<number>(0)

  const incrementar = () => {
    contador.value++
  }

  const decrementar = () => {
    contador.value--
  }

  return {
    contador,
    incrementar,
    decrementar
  }
}

const reiniciar = () => {
    contador.value = 0
  }

  return {
    contador,
    incrementar,
    decrementar,
    reiniciar
  }