<template>
  <div>
    <ListViewButtons :view="toggle_displaying" />
    <ul class="list">
      <li class="item" :class="{'item-list': toggle_displaying === 'list'}">
        <ListItem :grid="toggle_displaying === 'list'" />
      </li>
      <li class="item" :class="{'item-list': toggle_displaying === 'list'}">
        <ListItem :grid="toggle_displaying === 'list'" />
      </li>
      <li class="item" :class="{'item-list': toggle_displaying === 'list'}">
        <ListItem :grid="toggle_displaying === 'list'" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ListItem from './item.vue'
import ListViewButtons from './displayingButtons.vue'
export default @Component({
  name: 'items-list',
  components: { ListItem, ListViewButtons }
})

class ItemsList extends Vue {
  data () {
    return {
      toggle_displaying: 'grid'
    }
  }
}
</script>

<style lang="scss" scoped>

  .list {
  list-style-type: none;
  padding: 0 0 30px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
  width: 400px;
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
