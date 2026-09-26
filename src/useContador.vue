mkdir -p src/composables
cat << 'EOF' > src/composables/useContador.ts
import { ref } from 'vue'

export function useContador() {
  const contador = ref<number>(0)

  const decrementar = () => {
    contador.value--
  }

  return {
    contador,
    decrementar
  }
}
EOF