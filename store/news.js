import { defineStore } from 'pinia'
import axios from 'axios'

export const useNewsStore = defineStore({
  id: 'news-store',
  state: () => {
    return {
      news:[],
      selected:{}
    }
  },
  actions: {
    async setNews(){
        const { data } = await axios.get('https://jakpost.vercel.app/api/category/indonesia')
        this.news = data.posts
    },
    selectNews(news){
      this.selected = news
    }
  },
  getters: {
    newsList: state => state.news,
    selectedNews: state => state.selected
  },
})
