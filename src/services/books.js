import { http } from './config'

export default {
  listar:() => {
    return http.get('books')
  },

  salvar:(book) => {
    if(book.id == null) {
      return http.post('books', book)
    } else {
      return http.put(`books/${book.id}`, book)
    }
  },

  deletar:(book) => {
    return http.delete(`books/${book.id}`)
  }
}