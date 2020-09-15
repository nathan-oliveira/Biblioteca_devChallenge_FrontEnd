import Books from "../../services/home"
export default {
  name: 'Books',
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