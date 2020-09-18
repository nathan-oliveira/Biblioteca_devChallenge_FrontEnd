<template>
  <section class="cadastrar_book display">
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
            placeholder=" ">
          <label class="form_label">Titulo</label>
        </div>

        <div class="form_div col-6">
          <input 
            type="text"
            class="form_input"
            v-model="books.editora"
            placeholder=" ">
          <label class="form_label">Editora</label>
        </div>

        <div class="form_div col-6">
          <input 
            type="text"
            class="form_input"
            v-model="books.foto"
            placeholder=" ">
          <label class="form_label">Foto (URL)</label>
        </div>
        
        <div class="form_div col-12">
          <input type="text" id="autor" class="form_input" placeholder=" ">
          <label class="form_label">Autor(a)</label>
        </div>

        <div class="chips">
          <div class="chip" tabindex="0">
            <ul id="list">
              <li v-for="book of books.autores" :key="book.id" >
                <span>{{book}}</span>
                <a @click="deleteAutor(book)"><i class='bx bx-x close'></i></a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="form-row form_buttons">
        <a @click="tableView" class="btn form_button2"><i class='bx bx-arrow-back'></i> Voltar</a>
        <button type="submit" class="btn form_button1"><i class='bx bx-save'></i> Salvar</button>
      </div>
    </form>
  </section>
</template>

<script>
import Books from "../../services/books"

export default {
  name: 'Cadastrar',
  components: {
    
  },
  props: {
    methodListagem: { 
      type: Function 
    }
  },
  data() {
    return {
      books: {
        id: null,
        titulo: null,
        editora: null,
        foto: null,
        autores: []
      }
    }
  },
  mounted() {
    let txt = document.getElementById("autor");

    document.getElementById("form").addEventListener('keypress', function(e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode === 13) {
        e.preventDefault();
        return false;
      }
    });

    txt.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        let val = txt.value;
        if (val !== "") {
          if (this.books.autores.indexOf(val) >= 0) {
            alert("Autor duplicado!");
          } else {
            if(this.books.autores.length < 5) {
              this.books.autores.push(val);
              txt.value = "";
              txt.focus();
            } else {
              alert("É permitido no máximo cinco autores");
            }
            
          }
        } else {
          alert("Autor não pode ser vazio!");
        }
      }
    });
  },
  methods: {
    deleteAutor(i) {
      this.books.autores = this.books.autores.filter((item) => item !== i)
    },
    tableView() {
      let element1 = document.getElementsByClassName('table-books');
      let element2 = document.getElementsByClassName('cadastrar_book');

      for(let x = 0; x < element1.length; x++) {
        element1[x].classList.remove('display');
      }

      for(var y = 0; y < element2.length; y++) {
        element2[y].classList.add('display');
      }
    },
    salvar() {
      Books.salvar(this.books)
        .then(resp => {
          console.log('RESP: ', resp)
          this.clear()
          this.methodListagem()
          this.tableView()
        })
    },
    clear() {
      let list = document.getElementById("list");
      // let erros = document.getElementById("erros");
      let autor = document.getElementById("autor");

      list.innerHTML = "";
      // erros.innerHTML = "";
      autor.value = "";

      this.books = { titulo: null, editora: null, foto: null, autores: [] }
    }
  }
}
</script>

<style scoped>
  @import './cadastrar.css';
</style>