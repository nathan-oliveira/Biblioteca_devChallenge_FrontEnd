import Books from "../../services/books"
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