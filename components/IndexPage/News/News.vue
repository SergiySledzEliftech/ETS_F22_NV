<template>
  <div class="news-wrapper">
    <h3 id="news-header">
      Latest News
    </h3>
    <NewsItem class="d-none d-md-flex" news-item-title="Article" news-item-article="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." />
    <NewsItemMobile class="d-md-none" news-item-title="Article" news-item-article="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." />
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import NewsItem from './NewsItem.vue';
import NewsItemMobile from './NewsItemMobile.vue';

export default @Component({
  components: { NewsItem, NewsItemMobile }
})

class News extends Vue {}
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
