<template>
  <div class="container">
    <ItemsList />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ItemsList from '@/components/list/list.vue'
export default @Component({
  name: 'my-ads',
  components: { ItemsList }
})

class MyAds extends Vue {

}
</script>

<style scoped>
.container {
  width: 1280px;
}

</style>
