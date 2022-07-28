<template>
  <div class="wrapper">
    <div v-if="!disablePagination" class="view-wrap">
      <div class="perpage-select">
        <p>Items per page</p>
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn
              dark
              text
              color="var(--light)"
              class="ml-2"
              v-bind="attrs"
              v-on="on"
            >
              {{ perPage }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(number, index) in optsArray"
              :key="index"
              @click="setPerPage(number)"
            >
              <v-list-item-title>{{ number }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="list_view_btns">
        <p>Displaying:</p>
        <v-btn icon medium @click.prevent="changeDisplaying">
          <v-icon color="var(--light)">
            {{ icon }}
          </v-icon>
        </v-btn>
      </div>
    </div>
    <div v-if="loading" class="loader">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="loading">
    </div>
    <ul v-if="!loading" :class="view">
      <slot />
    </ul>
    <template v-if="!disablePagination">
      <v-pagination
        v-model="currentPage"
        value="currentPage"
        :length="totalPages"
        total-visible="5"
        @input="setPage"
        @next="nextPage"
        @previous="previousPage"
      />
    </template>
  </div>
</template>

<script>
import { Vue, Component, namespace, Prop } from 'nuxt-property-decorator';
import SingleItem from './SingleItem.vue';
const { State, Mutation } = namespace('profile');

export default @Component({
  name: 'items-list',
  components: { SingleItem }
})

class ItemsList extends Vue {
  icon = 'mdi-format-list-bulleted-square';
  @State view;
  @State loading;
  @Mutation changeView;
  @Prop({ type: Array, required: true }) list;
  @Prop({ type: Number, required: true }) page;
  @Prop({ type: Number, required: true }) totalPages;
  @Prop({ type: Function, required: true }) setPage;
  @Prop({ type: Function, required: true }) setPerPage;
  @Prop({ type: Number, required: true }) perPage;
  @Prop({ type: Array, required: true }) optsArray;
  @Prop({ default: false, type: Boolean }) disablePagination;

  currentPage = 0
  changeIcon () {
    this.icon =
      this.icon === 'mdi-view-grid-outline'
        ? 'mdi-format-list-bulleted-square'
        : 'mdi-view-grid-outline';
  }

  changeDisplaying () {
    this.changeView();
    this.changeIcon();
  }

  nextPage () {
    if (this.page < this.totalPages) {
      this.setPage(this.page + 1);
    }
  }

  previousPage () {
    if (this.page > 1) {
      this.setPage(this.page - 1);
    }
  }

  mounted () {
    this.icon =
      this.view === 'grid'
        ? 'mdi-format-list-bulleted-square'
        : 'mdi-view-grid-outline';
    this.currentPage = this.page;
    this.setPage(1);
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  padding-top: 8px;
  p {
    margin: 0 10px 0 0;
    @media (max-width: 599px) {
      font-size: 16px;
    }
  }
}

.view-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media(max-width: 440px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
}

.perpage-select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 234px;
  @media(max-width: 440px) {
    width: 224px;
  }
}

.list_view_btns {
  padding: 4px 6px;
  display: flex;
  align-items: center;
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
    &:hover,
    &:focus {
      box-shadow: 0px 10px 50px rgba(119, 152, 181, 0.4);
    }
  }
  &.grid {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 899px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 499px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &.list {
    display: flex;
    flex-direction: column;

    .item {
      width: 100%;
      margin-bottom: 10px;
    }
    @media (max-width: 599px) {
      .item {
        padding: 5px;
      }
    }
  }

}
  .loader {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
