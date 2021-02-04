<template>
  <div class="my-book-item">
    <div class="text-lg font-bold">{{ title }}</div>
    <div class="text-sm font-medium text-gray-600">{{ subtitle }}</div>
    <div class="mt-4">{{ description }}</div>
    <div class="mt-4 text-sm text-right space-x-4 font-bold">
      <span class="text-green-600">{{ author }}</span>
      <span class="text-gray-500">{{ pubDateFormatted || '' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyBookItem",
  props: {
    book: { type: Object, required: false, default: () => null }
  },
  data() {
    return {};
  },
  computed: {
    title() {
      return this.book?.title;
    },
    subtitle() {
      return this.book?.subtitle;
    },
    author() {
      return this.book?.author;
    },
    pubDate() {
      return this.book?.published;
    },
    pubDateFormatted() {
      if (!this.pubDate) return null;
      return this.pubDate.split("T")[0];
    },
    description() {
      return this.book?.description;
    }
  },
  created() {},
  methods: {}
};
</script>

<style scoped></style>
