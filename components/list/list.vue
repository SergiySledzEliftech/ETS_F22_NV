<template>
  <div>
    <ul class="list">
      <li v-for="item in list" :key="item.id" class="item" :class="{'item-list': isList}">
        <list-item :grid="isList" :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ListItem from './Item.vue'
import ListViewButtons from './DisplayingButtons.vue'
export default @Component({
  name: 'items-list',
  components: { ListItem, ListViewButtons },
  props: {
    isList: {
      type: Boolean,
      required: true
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
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
