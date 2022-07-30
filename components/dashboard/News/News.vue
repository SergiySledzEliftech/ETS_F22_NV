<template>
  <div class="news-wrapper">
    <h3 id="news-header">
      Latest News
    </h3>
    <div v-if="!loading">
      <news-item
        class="d-none d-md-flex"
        :img="img"
        :news-item-title="title"
        :news-item-article="article"
        :is-last="!!newsData[newsIndex]"
        :is-loading="loading"
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
    <div v-else class="circle-wrapper">
      <v-progress-circular class="circle" indeterminate :size="100" />
    </div>
  </div>
</template>

<script>
import { Component, Vue, namespace } from 'nuxt-property-decorator';
import NewsItem from './NewsItem.vue';
import NewsItemMobile from './NewsItemMobile.vue';

const { Action, State } = namespace('dashboard');

export default @Component({
  components: { NewsItem, NewsItemMobile }
})

class News extends Vue {
  img = null
  title = null
  article = null

  newsData = []
  newsIndex = 1

  @Action loadNews

  @State news
  @State loading

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
      await this.loadNews();
      this.newsData = this.news;
      this.img = this.newsData[0].img;
      this.title = this.newsData[0].title;
      this.article = this.newsData[0].text;
    } catch (err) {
    }
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

  .circle-wrapper{
    min-width: 100%;
    filter: none;
    transition: filter 0.3s;
    height: 400px;

    .circle{
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
