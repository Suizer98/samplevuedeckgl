<template>
  <v-app>
    <TopBar />
    <v-main>
      <v-container fluid class="fill-height">
        <v-row class="fill-height">
          <v-col cols="2" class="pa-0 fill-height">
            <SideBar />
          </v-col>
          <v-col cols="10" class="pa-0 fill-height">
            <Map />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Map from './components/map/Map.vue'
import SideBar from './components/view/SideBar.vue'
import TopBar from './components/view/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    SideBar,
    Map
  }
}
</script>

<style>
@import './assets/tailwind.css';

html,
body,
#app,
.v-application {
  height: 100%;
  margin: 0;
  overflow-y: hidden;
}
</style>
