<template>
  <div>
    <top10-goods />
    <premium-goods />
    <news />
    <statistics />
    <partners />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Top10Goods from '~/components/dashboard/Top10Goods/Top10Goods.vue'
import PremiumGoods from '~/components/dashboard/PremiumGoods/PremiumGoods.vue'
import News from '~/components/dashboard/News/News.vue'
import Statistics from '~/components/dashboard/Statistics/Statistics.vue'
import Partners from '~/components/dashboard/Partners/Partners.vue'

export default @Component({
  components: { Top10Goods, PremiumGoods, News, Statistics, Partners }
})

class Index extends Vue {}
</script>
