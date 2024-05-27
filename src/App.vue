<template>
  <NavbarComponent/>
  <router-view />
  <FooterComponent/>
</template>
<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: linear-gradient( #fffefe, #c0c0c0);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #c0c0c0;
}

nav a.router-link-exact-active {
  color: #59bc3e;
}
</style>
