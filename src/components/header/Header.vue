<template>
  <header class="menu-bg">
    <div class="menu">
      <div class="menu-logo">
        <router-link to="/">Biblioteca Virtual</router-link>
      </div>

      <nav class="menu-nav">
        <ul>
          <li>
            <router-link to="/books">Cadastrar</router-link>
          </li>
          <li>
            <router-link to="/">Carrinho</router-link>
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
