<template>
  <div>
    <PremiumGoods />
    <Top10Goods />
    <News />
    <Statistics />
    <Partners />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
import Top10Goods from '~/components/IndexPage/Top10Goods/Top10Goods.vue';
import PremiumGoods from '~/components/IndexPage/PremiumGoods/PremiumGoods.vue';
import News from '~/components/IndexPage/News/News.vue';
import Statistics from '~/components/IndexPage/Statistics/Statistics.vue';
import Partners from '~/components/IndexPage/Partners/Partners.vue';

export default @Component({
  components: { Top10Goods, PremiumGoods, News, Statistics, Partners }
})

class Index extends Vue {}
</script>
