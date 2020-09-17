<template>
  <div>
    <Table />
    <Cadastrar />
  </div>
</template>

<script>
import Table from "./Table.vue"
import Cadastrar from "./Cadastrar.vue"

export default {
  name: 'Books',
  components: {
    Table,
    Cadastrar
  }
}
</script>