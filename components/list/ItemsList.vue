<template>
  <div class="wrapper">
    <div>
      <div class="list_view_btns">
        <p>Displaying:</p>
        <v-btn icon medium @click.prevent="changeDisplaying">
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </div>
    </div>

    <ul :class="view">
      <slot />
    </ul>
    <v-pagination
      v-model="page"
      :length="totalPages"
    />
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import SingleItem from './SingleItem.vue';
const { State, Mutation } = namespace('profile');

export default @Component({
  name: 'items-list',
  props: {
    list: {
      type: Array
    }
  },
  components: { SingleItem }
})

class ItemsList extends Vue {
  icon = 'mdi-format-list-bulleted-square';
  page = 1;
  perPage = 9;
  totalPages = 1;
  @State view
  @Mutation changeView

  changeIcon () {
    this.icon = this.icon === 'mdi-view-grid-outline' ? 'mdi-format-list-bulleted-square' : 'mdi-view-grid-outline';
  }

  changeDisplaying () {
    this.changeView();
    this.changeIcon();
  }

  setPerPage (e) {
    this.perPage = e.target.value;
    this.page = 1;
  }

  setPage (e) {
    this.page = e.target.value;
  }

  mounted () {
    this.icon = this.view === 'grid' ? 'mdi-format-list-bulleted-square' : 'mdi-view-grid-outline';
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  position: relative;
  padding-top: 48px;
}

.list_view_btns {
  position: absolute;
  padding: 4px 6px;
  display: flex;
  right: 0;
  z-index: 200;
  top: 0;
  align-items: center;
  p {
    margin: 0 10px 0 0;
    @media (max-width: 599px) {
      font-size: 16px;
    }
  }
}

ul {
    list-style-type: none;
  padding: 0 0 30px;
  margin: 20px 0 0;
  width: 100%;
  .item {
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background: $bg;
  transition: all 250ms ease-in;
  position: relative;
    &:hover, &:focus {
    box-shadow: 0px 10px 50px rgba(119, 152, 181, 0.4);
    }
  }
  &.grid {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 899px) {
    grid-template-columns: repeat(2, 1fr)
  }
  @media screen and (max-width: 499px) {
    grid-template-columns: repeat(1, 1fr)
  }

  }
  &.list {
    display: flex;
    flex-direction: column;

    .item {
    width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
  }
  @media (max-width: 599px) {
    .item {
        padding: 5px;

    }
  }
  }
}
</style>
