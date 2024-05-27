<template>
  <div class="home">
        <SocketData/> 
        <HelloWorld/>
  </div>
  <footer class="bg-dark text-white mt-5 bottom">
    <div class="container py-4">
      <div class="row">
        <div class="col-md-4">
          <h5>Sobre nosotros</h5>
          <p>Conteo de Personas y Vehículos,
            Control de Ocupación Máxima,
            Gestión de Visitantes y
            Estadísticas del Flujo.
          </p>
        </div>
        <div class="col-md-4">
          <h5>Links rapidos</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Home</a></li>
            <li><a href="https://www.linkedin.com/in/yeferson-rosales-r-4a37aa15a/" class="text-white" target="_blank">Linkedin</a></li>
            <li><a href="https://github.com/Yeyref" class="text-white" target="_blank">Github</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Contactame</h5>
          <address>
            Region Metropolitana<br>
             Santiago de Chile<br>
            Email: <a href="mailto:yefersonj.rr@gmail.com" class="text-white" target="_blank">yefersonj.rr@gmail.com</a><br>
            Telefono: +56 9 87216115
          </address>
        </div>
      </div>
      <div class="text-center mt-3">
        <p>&copy; 2024 Yeferson Rosales Dev. All rights reserved.</p>
      </div>
    </div>
  </footer>
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
