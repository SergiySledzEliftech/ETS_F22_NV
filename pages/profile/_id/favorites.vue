<template>
  <div>
    <div v-if="data.length > 0">
      <ItemsList
        :list="items"
        :set-page="changePage"
        :set-per-page="changePerPage"
      >
        <li v-for="item in items" :key="item._id" class="item">
          <SingleItem :item="item" :grid="view === 'list'">
            <div class="btn">
              <v-tooltip bottom>
                <template #activator="{on, attrs}">
                  <v-btn fab class="btn" small v-bind="attrs" v-on="on">
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
    <div v-else class="nodata">
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
const { State, Action } = namespace('profile');
const { State: ListState, Action: ListAction } = namespace('list');

export default @Component({
  name: 'Favorites',
  components: { ItemsList, SingleItem }
})

class Favorites extends Vue {
  @State data;
  @ListState view;
  @ListState page;
  @ListState perPage;
  @ListState perPageArray;
  @ListState totalPages;
  @Action getProducts;
  @ListAction setLoad;
  @ListAction calculateTotalPages;
  @ListAction calcPage;
  @ListAction calcPerPage;
  items = [];

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

  async mounted () {
    this.setLoad(true);
    await this.getProducts();
    this.sliceList();
    this.calculateTotalPages(this.data);
    this.setLoad(false);
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
