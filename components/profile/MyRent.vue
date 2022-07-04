<template>
  <div>
    <ItemsList />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ItemsList from '@/components/list/List.vue'
export default @Component({
  name: 'my-rent',
  components: { ItemsList }
})

class MyRent extends Vue {

}
</script>

<style scoped>

</style>
