<template>
  <section class="livros">
    <div v-for="book of ListagemBooks" :key="book.id" class="livros-item">
      <img :src="book.foto" />
      <h2>{{ book.titulo.substring(0,27) }}...</h2>
      <h3>Editora: {{ book.editora }}</h3>
      <h4>Autor(a): {{ book.autores.reduce((author, next) => `${author}, ${next}`).substring(0,17) }} ...</h4>
      <div class="buttonCart">
        <button class="btn">Comprar</button>
      </div>
    </div>
  </section>
</template>

<script src="./script"></script>

<style scoped>
  @import './home.css';
</style>
