<template>
  <section class="produtos">
    <div class="table-produtos">
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
  </section>
</template>

<script>
export default {
  name: 'Books',
  props: {

  }
}
</script>

<style scoped>
  @import './books.css'
</style>
