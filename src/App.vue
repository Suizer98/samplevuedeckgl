<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>My DeckGL Map with CARTO Basemap</h1>
    <Map />
  </div>
</template>

<script>
import './assets/tailwind.css'
import Map from './components/map/Map.vue'

export default {
  name: 'App',
  components: {
    Map
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
