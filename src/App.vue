<template>
  <div id="app">
    <Header />
    <div>
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Header from './components/header/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
  @import './assets/reset.css';
</style>
