<script setup>
import { useNewsStore } from "../store/news";
import { storeToRefs } from "pinia";
const props = defineProps({
  cat: Object,
  i: Number,
});
const newsStore = useNewsStore();
const { selectNews } = newsStore;
</script>

<template>
  <div
    class="w-full bg-slate-100 rounded hover:bg-slate-200 hover:shadow-md"
    @click="
      () => {
        $router.push(`/detail-${i + 1}`);
        selectNews(cat);
      }
    "
  >
    <div class="flex">
      <img class="w-48 rounded" :src="cat.image" alt="" />
      <div class="flex flex-col pl-2">
        <h1 class="text-lg font-semibold">{{ cat.title }}</h1>
        <p class="">{{ cat.headline }}</p>
      </div>
    </div>
  </div>
</template>
