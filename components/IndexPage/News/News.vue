<template>
  <div class="news-wrapper">
    <h3 id="news-header">
      Latest News
    </h3>
    <NewsItem class="d-none d-md-flex" :img="img" :news-item-title="title" :news-item-article="article" />
    <NewsItemMobile class="d-md-none" :img="img" :news-item-title="title" :news-item-article="article" />
  </div>
</template>

<script>
import { Component, Vue, Provide } from 'nuxt-property-decorator';
import NewsItem from './NewsItem.vue';
import NewsItemMobile from './NewsItemMobile.vue';

export default @Component({
  components: { NewsItem, NewsItemMobile }
})

class News extends Vue {
  @Provide() img = 'https://uploads-ssl.webflow.com/6212e72bb840050c246ea51b/622dbb87b588c89c599161c8_derive-tokyo-cody-ellingham.jpeg'
  @Provide() title = 'Article'
  @Provide() article = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
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
