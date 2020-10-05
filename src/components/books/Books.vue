<template>
  <div>
    <section v-if="visibled" class="books" id="books">
      <div class="table-books">
        <button @click="visibled = false" class="btn">
          <i class="bx bxs-book-add bx-tada"></i> Adicionar
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
              <td class="table-col1">{{ book.titulo }}</td>
              <td class="table-col2">{{ book.editora }}</td>
              <td class="table-col3">
                {{
                  book.autores.length > 0
                    ? book.autores.reduce(
                        (author, next) => `${author}, ${next}`
                      )
                    : ""
                }}
              </td>
              <td class="table-acoes">
                <a @click="editar(book)">
                  <i class="bx bx-edit"></i>
                </a>
                <a @click="deletar(book)">
                  <i class="bx bx-trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="cadastrar_book" v-if="!visibled" id="cadastrar">
      <form @submit.prevent="salvar" class="form" id="form">
        <div class="form_title">
          <label>Cadastrar Livro</label>
        </div>
        <div class="form-row">
          <div class="form_div col-12">
            <input
              type="text"
              class="form_input"
              v-model="books.titulo"
              placeholder=" "
            />
            <label class="form_label">Titulo</label>
          </div>

          <div class="form_div col-6">
            <input
              type="text"
              class="form_input"
              v-model="books.editora"
              placeholder=" "
            />
            <label class="form_label">Editora</label>
          </div>

          <div class="form_div col-6">
            <input
              type="text"
              class="form_input"
              v-model="books.foto"
              placeholder=" "
            />
            <label class="form_label">Foto (URL)</label>
          </div>

          <div class="form_div col-12">
            <input
              type="text"
              id="autor"
              class="form_input"
              v-on:keydown.enter.prevent="adicionarAutor"
              placeholder=" "
            />
            <label class="form_label">Autor(a)</label>
          </div>

          <div class="chips">
            <div class="chip" tabindex="0">
              <ul id="list">
                <li v-for="book of books.autores" :key="book.id">
                  <span>{{ book }}</span>
                  <a @click="deleteAutor(book)">
                    <i class="bx bx-x close"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="form-row form_buttons">
          <a @click="spa(true)" class="btn form_button2">
            <i class="bx bx-arrow-back"></i> Voltar
          </a>
          <button type="submit" class="btn form_button1">
            <i class="bx bx-save"></i> Salvar
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import Books from "../../services/books";

export default {
  name: "Books",
  data() {
    return {
      books: {
        id: null,
        titulo: null,
        editora: null,
        foto: null,
        autores: [],
      },
      ListagemBooks: [],
      visibled: true,
    };
  },
  mounted() {
    this.listagem();
  },
  methods: {
    listagem() {
      Books.listar().then((resp) => {
        this.ListagemBooks = resp.data.dados;
      });
    },
    adicionarAutor(e) {
      if (e.keyCode === 13) {
        if (e.target.value !== "") {
          if (this.books.autores.indexOf(e.target.value) >= 0) {
            alert("Autor duplicado!");
          } else {
            if (this.books.autores.length < 5) {
              this.books.autores.push(e.target.value);
              e.target.value = "";
            } else {
              alert("É permitido no máximo cinco autores");
            }
          }
        } else {
          alert("Autor não pode ser vazio!");
        }
      }
    },
    deleteAutor(i) {
      this.books.autores = this.books.autores.filter((item) => item !== i);
    },
    editar(book) {
      this.spa(false);
      this.books = book;
    },
    spa(action) {
      this.clear();
      this.visibled = action;
    },
    salvar() {
      if (this.books.autores.length === 0) {
        alert("Autor não pode ser vazio!");
      } else {
        Books.salvar(this.books).then((resp) => {
          if (!resp.data.error) {
            this.listagem();
            this.spa(true);
          }
        });
      }
    },
    deletar(book) {
      if (confirm("Deseja excluir o livro?")) {
        Books.deletar(book).then((resp) => {
          if (!resp.data.error) {
            this.clear();
            this.listagem();
          }
        });
      }
    },
    clear() {
      this.books = { titulo: null, editora: null, foto: null, autores: [] };
    },
  },
};
</script>

<style scoped>
@import "./table.css";
@import "./cadastrar.css";
</style>
