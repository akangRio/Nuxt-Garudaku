<script setup>
import { useNewsStore } from "../store/news";
import { storeToRefs } from "pinia";

const newsStore = useNewsStore();

const { setNews } = newsStore;
setNews();
const { newsList } = storeToRefs(newsStore);
</script>

<template>
  <div>
    <Navbar />
    <h2 class="text-2xl font-sans flex justify-center m-3">HeadLine News</h2>
    <div class="flex flex-col gap-1 py-1 min-h-screen bg-slate-50">
      <Thumbnail v-for="(cat, i) in newsList" :cat="cat" :key="i" :i="i" />
    </div>
  </div>
</template>

<style></style>
