<template>
  <header class="menu">
    <div class="container">
      <router-link class="menu-logo" to="/">
        <a href="#">Biblioteca Virtual</a>
      </router-link>
      <nav class="menu-nav">
        <ul>
          <li>
            <router-link to="/">Livros</router-link>
          </li>
          <li>
            <router-link to="/books">Cadastrar</router-link>
          </li>
          <li>
            <router-link to="/">Entrar</router-link>
          </li>
          <li>
            <router-link to="/">Cadastre-se</router-link>
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
