<script setup>
import { useNewsStore } from "../store/news";
import { storeToRefs } from "pinia";

const newsStore = useNewsStore();
const { selectedNews } = storeToRefs(newsStore);
</script>

<template>
  <div class="h-screen">
    <Navbar />
    <div class="flex h-full justify-center p-2">
      <div class="flex flex-col justify-center">
        <div class="bg-slate-200 p-2 rounded-xl border shadow-md">
          <h2 class="text-2xl pt-2 font-bold font-sans flex justify-center">
            {{ selectedNews.title }}
          </h2>
          <div class="flex m-4 gap-2">
            <img :src="selectedNews.image" alt="" class="w-2/4 flex" />
            <div class="flex flex-col w-3/4 justify-between">
              <div>
                <h2>published at : {{ selectedNews.pusblised_at }}</h2>
                <h2>category : {{ selectedNews.category }}</h2>
                <h2>link : {{ selectedNews.link }}</h2>
                <p>
                  {{ selectedNews.headline }}
                </p>
              </div>

              <div class="flex justify-end">
                <button
                  class="btn bg-blue-300 rounded-md w-20 h-8 hover:bg-blue-200 bordered shadow-xs"
                >
                  edit news
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
