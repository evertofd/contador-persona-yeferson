<template>
  <div class="container">
    <div class="text-center mb-4">
      <div class="text-center">
        <h2>Actualizar aforo: {{ counter }}</h2>
      </div>
      <div class="row">
        <div class="col-6">
          <button @click="changeCount('manual-add', 1)" class="btn btn-outline-success">Aumenta aforo</button>
        </div>
        <div class="col-6">
          <button @click="changeCount('manual-sub', 1)" class="btn btn-outline-danger">Disminuye Aforo</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useCounterStore } from '../stores/counter';
import { useSocketStore } from '../stores/socket';

export default {
  setup() {
    const counterStore = useCounterStore();
    const socketStore = useSocketStore();

    socketStore.connect();
    const counter = computed(() => counterStore.count);
    const changeCount = (type, quantity) => {
      counterStore.changeCount(type, quantity);
    };
    return { counter, changeCount };
  },
  beforeUnmount() {
    const socketStore = useSocketStore();
    socketStore.disconnect();
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
