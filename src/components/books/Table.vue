<template>
  <div>
    <section class="books">
      <div class="table-books">
        <button @click="cadastrarView" class="btn">
          <i class='bx bxs-book-add bx-tada'></i> Adicionar
          </button>
        <table class="table">
          <thead>
            <th class="table-col1">Titulo</th>
            <th class="table-col2">Editora</th>
            <th class="table-col3">Autor</th>
            <th class="table-acoes">Ações</th>
          </thead>
          <tbody>
            <tr v-for="book of ListagemBooks" :key="book.id">
              <td class="table-col1">{{book.titulo}}</td>
              <td class="table-col2">{{book.editora}}</td>
              <td class="table-col3">{{ book.autores.reduce((author, next) => `${author}, ${next}`) }}</td>
              <td class="table-acoes">
                <a href="#"><i class='bx bx-edit'></i></a>
                <a href="#"><i class='bx bx-trash'></i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <Cadastrar :methodListagem="listagem" />
  </div>
</template>

<script>
import Cadastrar from "./Cadastrar.vue"
import Books from "../../services/books"

export default {
  name: 'Books',
  components: {
    Cadastrar
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
    },
    cadastrarView() {
      let element1 = document.getElementsByClassName('table-books');
      let element2 = document.getElementsByClassName('cadastrar_book');
      for(let x = 0; x < element1.length; x++) {
        element1[x].classList.add('display');
      }

      for(var y = 0; y < element2.length; y++) {
        element2[y].classList.remove('display');
      }
    }
  }
}
</script>

<style scoped>
  @import './table.css';
</style>
