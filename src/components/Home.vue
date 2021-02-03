<template>
  <div className="App">
    <header className="App-header">
      <h1>Elenco libri</h1>
      <div className="filter">
        <label htmlFor="filterForm">Filtra per titolo o autore:</label>
        <input type="text" id="filterForm" />
        <button>Annulla</button>
      </div>
    </header>
    <main>
      <p>
        Per modificare, editare e salvare <code>src/components/Home.vue</code>
      </p>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
