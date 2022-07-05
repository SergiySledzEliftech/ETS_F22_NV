<template>
  <div>
    <items-list :list="list">
      <div class="buttons">
        here will be buttons
      </div>
    </items-list>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ItemsList from '@/components/list/List.vue'

export default @Component({
  name: 'lend',
  components: { ItemsList },
  props: {
    list: {
      type: Array,
      required: true
    }
  }
})

class Lend extends Vue {}
</script>

<style lang="scss" scoped>
.buttons {
  padding: 5px;
  text-align: center;
  margin-top: 10px;
  border: 1px dashed rgba($light, 0.5);
}
</style>
