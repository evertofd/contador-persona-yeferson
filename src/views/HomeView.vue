<template>
  <div class="home">
        <SocketData/> 
        <HelloWorld/>
  </div>
  
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import SocketData from '@/components/SocketData.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SocketData
  }
}
</script>
