<template>
  <header class="menu">
    <div class="container">
      <router-link class="menu-logo" to="/">
        <img src="../../assets/logo.png" alt="Logo" />
      </router-link>
      <nav class="menu-nav">
        <ul>
          <li>
            <router-link to="/">Livros</router-link>
            <!-- <a href="#"></a> -->
          </li>
          <li>
            <a href="#">Entrar</a>
            </li>
          <li>
            <a href="#">Cadastre-se</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {

  }
}
</script>

<style scoped>
  @import './header.css';
</style>
