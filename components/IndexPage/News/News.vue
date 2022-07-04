<template>
  <div class="news-wrapper">
    <h3>Latest News</h3>
    <NewsItem />
    <v-btn color="#E31F26" class="see-all-news-btn">
      <span class="btn-text">See all news</span>
    </v-btn>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import NewsItem from './NewsItem.vue';

export default @Component({
  components: { NewsItem }
})

class News extends Vue {}
</script>

<style scoped lang="scss">
  h3{
    text-align: center;
    margin-bottom: 55px !important;
  }

  .news-wrapper{
    padding-top: 80px;
    padding-bottom: 70px;
  }

  .btn-text{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    text-align: center;

    color: #FFFFFF;
  }

  .see-all-news-btn{
    margin-top: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
</style>
