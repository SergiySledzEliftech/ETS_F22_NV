<template>
  <div>
    <Top10Goods />
    <PremiumGoods />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
import Top10Goods from '~/components/IndexPage/Top10Goods/Top10Goods.vue';
import PremiumGoods from '~/components/IndexPage/PremiumGoods/PremiumGoods.vue';

export default @Component({
  components: { Top10Goods, PremiumGoods }
})

class Index extends Vue {
  title = 'Welcome to the ETS_F22_NV project!';
}
</script>
