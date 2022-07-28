<template>
  <div class="news-wrapper">
    <h3 id="news-header">
      Latest News
    </h3>
    <news-item
      class="d-none d-md-flex"
      :img="img"
      :news-item-title="title"
      :news-item-article="article"
      :is-last="!!newsData[newsIndex]"
      @nextArticle="nextArticleClicked"
    />
    <news-item-mobile
      class="d-md-none"
      :img="img"
      :news-item-title="title"
      :news-item-article="article"
      :is-last="!!newsData[newsIndex]"
      @nextArticle="nextArticleClicked"
    />
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import NewsItem from './NewsItem.vue';
import NewsItemMobile from './NewsItemMobile.vue';
import { serverApiUrl } from '@/settings/config';

export default @Component({
  components: { NewsItem, NewsItemMobile }
})

class News extends Vue {
  img = 'https://www.solidbackgrounds.com/images/3840x2160/3840x2160-dark-gray-solid-color-background.jpg'
  title = 'Loading...'
  article = 'Loading...'

  newsData = []
  newsIndex = 1

  nextArticleClicked () {
    if (this.newsData[this.newsIndex]) {
      this.img = this.newsData[this.newsIndex].img;
      this.title = this.newsData[this.newsIndex].title;
      this.article = this.newsData[this.newsIndex].text;

      this.newsIndex++;
    }
  }

  async mounted () {
    try {
      const res = await this.$axios.get(`${serverApiUrl}news`);
      this.newsData = res.data;
      this.img = res.data[0].img;
      this.title = res.data[0].title;
      this.article = res.data[0].text;
    } catch (error) {}
  }
}
</script>

<style scoped lang="scss">
  h3{
    text-align: center;
    margin-bottom: 50px !important;
  }

  .news-wrapper{
    padding-top: 80px;
    padding-bottom: 80px;
  }
</style>
