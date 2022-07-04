<template>
  <div class="list_view_btns">
    <p>Displaying:</p>
    <v-btn-toggle v-model="view">
      <v-btn value="grid">
        <v-icon>mdi-view-grid-outline</v-icon>
      </v-btn>
      <v-btn value="list">
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
export default @Component({
  name: 'list-view-buttons',
  props: {
    view: {
      type: String,
      required: true
    }
  }
})

class ListViewButtons extends Vue {

}
</script>

<style lang="scss" scoped>
.list_view_btns {
  display: flex;
  align-items: center;
  padding: 20px;

  p {
    margin: 0 20px 0 0;
  }
}
</style>
