<template>
  <header class="menu-bg" id="header">
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
  name: "Header",
  props: {},
  mounted() {
    let menuHeader = document.getElementById("header");

    window.onscroll = function () {
      var top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 120) {
        menuHeader.classList.add("fixed");
      } else {
        menuHeader.classList.remove("fixed");
      }
    };
  },
};
</script>

<style scoped>
@import "./header.css";
</style>
