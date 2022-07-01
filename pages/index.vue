<template>
  <div>
    <Top10Goods />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Top10Goods from '~/components/IndexPage/Top10Goods/Top10Goods.vue'

export default @Component({
  components: { Top10Goods }
})

class Index extends Vue {
  title = 'Welcome to the ETS_F22_NV project!';
}
</script>
