<template>
  <v-navigation-drawer app permanent>
    <v-list>
      <v-list-item v-for="item in items" :key="item" @click="">
        {{ item }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      items: ['Layer 1', 'Layer 2', 'Layer 3']
    }
  }
}
</script>

<style scoped></style>
