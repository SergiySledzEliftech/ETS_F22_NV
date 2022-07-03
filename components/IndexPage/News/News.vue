<template>
  <div class="news-wrapper">
    <h3>Latest News</h3>
    <NewsItem v-if="show" />
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import NewsItem from './NewsItem.vue';

export default @Component({
  components: { NewsItem }
})

class News extends Vue {
  data () {
    return {
      show: true
    };
  }
}
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
</style>
