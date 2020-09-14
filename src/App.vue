<template>
  <div id="app">
    <SuperInfo />
    <Header />
    <div>
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import SuperInfo from './components/superinfo/Superinfo.vue'

export default {
  name: 'app',
  components: {
    Header,
    SuperInfo
  }
}
</script>

<style>
  @import './assets/reset.css';
</style>
