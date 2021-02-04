<template>
  <div class="app">
    <header class="app__header">
      <h1 class="text-7xl text-center my-6">Elenco libri</h1>
      <my-input
        id="filterForm"
        v-model="searchValue"
        label="Filtra per titolo o autore"
        clearable
      />
    </header>

    <main class="mt-8">
      <!-- NO LIBRI -->
      <!-- --------------------------------------------------------------------------------------------------------- -->
      <template v-if="bookListFiltered.length <= 0">
        <template v-if="!searchValue">
          Nessun libro presente
        </template>
        <template v-else>
          Nessun libro soddisfa i criteri di ricerca.
        </template>
      </template>

      <!-- LISTA LIBRI -->
      <!-- --------------------------------------------------------------------------------------------------------- -->
      <template v-else>
        <transition-group
          name="my-book-list"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <my-book-item
            v-for="book in bookListFiltered"
            :key="book.isbn"
            :book="book"
            class="bg-white shadow py-6 px-4"
          />
        </transition-group>
      </template>
    </main>
  </div>
</template>

<script>
import { getBookList } from "@/services/api";
import MyBookItem from "@/components/MyBookItem";
import MyInput from "@/components/MyInput";

export default {
  name: "Home",
  components: { MyInput, MyBookItem },
  data() {
    return {
      bookList: [],
      searchValue: ""
    };
  },
  computed: {
    bookListFiltered() {
      let result = this.bookList;
      let toSearch = this.searchValue || "";
      toSearch = toSearch.trim().toUpperCase();

      if (toSearch) {
        result = result.filter(b => {
          let searchable = [b.title, b.author].join(" | ").toUpperCase();
          return searchable.includes(toSearch);
        });
      }

      return result;
    }
  },
  created() {
    this.loadBookList();
  },
  methods: {
    async loadBookList() {
      try {
        let { data } = await getBookList();
        this.bookList = data;
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-book-list-move {
  transition: transform 0.8s ease;
}

.my-book-list-enter-active,
.my-book-list-leave-active {
  transition: all 1s ease;
}
.my-book-list-enter-from,
.my-book-list-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
