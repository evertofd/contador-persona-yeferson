<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">Contador Manual de Personas</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page"><router-link to="/">Estado de la tienda</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" ><router-link to="/about">Desconectar servicio</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Bievenidos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

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
