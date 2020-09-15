<template>
  <section class="books">
    <div class="table-books">
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
            <td class="table-acoes">Editar - Alterar</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script src="./script"></script>

<style scoped>
  @import './books.css'
</style>
