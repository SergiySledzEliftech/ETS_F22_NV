<template>
  <div>
    <div>
      <ItemsList
        :list="items"
        :set-page="changePage"
        :set-per-page="changePerPage"
      >
        <li v-for="item in items" :key="item._id" class="item">
          <SingleItem :item="item.item" :grid="view === 'list'">
            <div class="btn">
              <v-tooltip bottom>
                <template #activator="{on, attrs}">
                  <v-btn
                    fab
                    class="btn"
                    small
                    v-bind="attrs"
                    v-on="on"
                    @click.prevent="deleteElem(item._id)"
                  >
                    <v-icon color="error">
                      mdi-heart
                    </v-icon>
                  </v-btn>
                </template>
                <span>Remove from favorites</span>
              </v-tooltip>
            </div>
          </SingleItem>
        </li>
      </ItemsList>
    </div>
    <div v-if="!isData" class="nodata">
      <p>No favorites yet</p>
      <NuxtLink :to="{name: 'categories'}" class="link">
        Find something interesting
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import ItemsList from '~/components/list/ItemsList.vue';
import SingleItem from '~/components/list/SingleItem.vue';
const { State, Action, Mutation } = namespace('favorites');
const { State: ListState, Action: ListAction } = namespace('list');

export default @Component({
  name: 'Favorites',
  components: { ItemsList, SingleItem }
})

class Favorites extends Vue {
  @State data;
  @ListState loading;
  @ListState view;
  @ListState page;
  @ListState perPage;
  @ListState perPageArray;
  @ListState totalPages;
  @Action getFavorites;
  @Action removeFromFavorites;
  @ListAction setLoad;
  @ListAction calculateTotalPages;
  @ListAction calcPage;
  @ListAction calcPerPage;
  @Mutation setData;
  items = [];
  isData = true;
  sliceList () {
    const firstIdx = (this.page - 1) * this.perPage;
    const result = this.data.slice(firstIdx, firstIdx + this.perPage);
    this.items = result;
  }

  changePage (num) {
    this.calcPage(num);
    this.sliceList();
  }

  changePerPage (num) {
    this.calcPerPage(num);
    this.sliceList();
    this.calculateTotalPages(this.data);
  }

  async deleteElem (id) {
    this.setLoad(true);
    await this.removeFromFavorites(id)
      .then(() => this.getFavorites(this.$route.params.id));
    this.sliceList();
    this.calculateTotalPages(this.data);
    this.setLoad(false);
    this.isData = this.data.length > 0;
  }

  async mounted () {
    this.setLoad(true);
    await this.getFavorites(this.$route.params.id);
    this.sliceList();
    this.calculateTotalPages(this.data);
    this.setLoad(false);
    this.isData = this.data.length > 0;
  }
}

</script>

<style scoped lang="scss">
.btn {
  position: absolute;
  top: -5px;
  right: -5px;
}
</style>
