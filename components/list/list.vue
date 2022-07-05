<template>
  <div>
    <ul class="list">
      <li v-for="item in list" :key="item.id" class="item" :class="{'item-list': isList}">
        <list-item :grid="toggle_displaying === 'list'" :item="item" />
        <slot />
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
export default @Component({
  name: 'items-list',
  props: {
    isList: {
      type: Boolean
    },
    list: {
      type: Array,
      required: true
    }
  }
})

class ItemsList extends Vue {
}
</script>

<style lang="scss" scoped>

  .list {
  list-style-type: none;
  padding: 0 0 30px;
  margin: 20px 0 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  .item {
  width: 360px;
  padding: 20px;
  border-radius: 10px;
  background: $bg;
  transition: all 250ms ease-in;
    &:hover, &:focus {
    box-shadow: 0px 10px 50px rgba(119, 152, 181, 0.4);
    }
    &.item-list{
      width: 100%;
      display: flex;
    }
  }
}
</style>

// <div class="list_view_btns">
//   <p>Displaying:</p>
//   <v-btn-toggle v-model="toggle_displaying">
//     <v-btn value="grid">
//       <v-icon>mdi-view-grid-outline</v-icon>
//     </v-btn>
//     <v-btn value="list">
//       <v-icon>mdi-format-list-bulleted-square</v-icon>
//     </v-btn>
//   </v-btn-toggle>
// </div>
