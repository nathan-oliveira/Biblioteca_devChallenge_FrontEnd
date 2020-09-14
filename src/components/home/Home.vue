<template>
  <section class="livros">
    <div v-for="book of ListagemBooks" :key="book.id" class="livros-item">
      <img :src="book.foto" />
      <h2>Titulo: "{{ book.titulo }}"</h2>
      <h3>Editora: {{ book.editora }}</h3>
      <h3>Autor(a): {{ book.autores.reduce((author, next) => `${author}, ${next}`) }}</h3>
    </div>
  </section>
</template>

<script src="./script"></script>

<style scoped>
  @import './home.css';
</style>
