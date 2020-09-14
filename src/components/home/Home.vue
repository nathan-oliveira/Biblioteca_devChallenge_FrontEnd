<template>
  <!-- <section class="produtos">
    <div class="container table-produtos">
      <table class="table">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
      </table>
    </div>
  </section> -->
  <section class="livros">
    <div v-for="book of ListagemBooks" :key="book.id" class="livros-item">
      <img :src="book.foto" />
      <h2>Titulo: "{{ book.titulo }}"</h2>
      <h3>Editora: {{ book.editora }}</h3>
      <h3>Autor(a): {{ book.autores.reduce((author, next) => `${author}, ${next}`) }}</h3>
    </div>
  </section>
</template>

<script>
import Books from "../../services/home"

export default {
  name: 'Home',
  props: {

  },
  data() {
    return {
      ListagemBooks: []
    }
  },
  mounted() {
    this.listagem()
  },
  methods: {
    listagem() {
      Books.listar()
        .then(resp => {
          this.ListagemBooks = resp.data.dados;
        })
    }
  }
}
</script>

<style scoped>
  @import './home.css';
</style>
