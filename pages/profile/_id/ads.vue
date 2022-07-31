<template>
  <div>
    <ItemsList
      :list="items"
      :page="page"
      :total-pages="totalPages"
      :set-page="changePage"
      :set-per-page="changePerPage"
      :per-page="perPage"
      :opts-array="perPageArray"
    >
      <li v-for="item in items" :key="item.id" class="item">
        <SingleItem :item="item" :grid="view === 'list'">
          <div class="buttons">
            <v-tooltip bottom>
              <template #activator="{on, attrs}">
                <!-- на кліку має бути функція переходу на сторінку редагування товару-->
                <v-btn v-bind="attrs" icon small v-on="on" @click.prevent="">
                  <v-icon :class="view">
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template #activator="{on,attrs}">
                <v-btn v-bind="attrs" icon small v-on="on" @click.prevent="deleteElem(item.id)">
                  <v-icon :class="view">
                    mdi-trash-can
                  </v-icon>
                </v-btn>
              </template>
              <span>Delete</span>
            </v-tooltip>
          </div>
        </SingleItem>
      </li>
    </ItemsList>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import ItemsList from '~/components/list/ItemsList.vue';
import SingleItem from '~/components/list/SingleItem.vue';
const { State, Action, Mutation } = namespace('profile');

export default @Component({
  name: 'profile-ads',
  components: { ItemsList, SingleItem }
})
class ProfileAds extends Vue {
  // @State data;
  @State view;
  @State page;
  @State perPage;
  @State perPageArray;
  @State totalPages;
  @Action getUser;
  @Action setLoad;
  @Action deleteElem;
  @Action calculateTotalPages;
  @Action calcPage;
  @Mutation setPerPage;
  data = [];
  items = [];
  disable = true;

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
    this.setPerPage(num);
    this.changePage(1);
    this.calculateTotalPages(this.data);
  }

  async mounted () {
    try {
      const { products } = await this.$axios.$get('https://dummyjson.com/products?limit=50');
      this.data = products;
      console.log(this.items);
      this.sliceList();
      this.calculateTotalPages(products);
      this.setLoad(false);
    } catch (e) {
      console.log('data failed', e.message);
    }
  }
}

</script>

<style lang="scss" scoped>
.buttons {
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba($light, 0.8);
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: all 350ms ease;
  i {
      transition: all 350ms ease;
  }
  button {
    margin-left: 5px;
    &:hover, &:focus {
      background: rgba($bg, 0.85);
      i {
    color: $light
  }
    }
  }
  i.list {
    color: rgba($secondary, 0.8);
  }
  i.grid {
    color: $bg
  }
}

.isGrid .buttons {
  padding: 20px;
  top: calc(100% - 68px);
  background: none;
  border-radius: 0;
  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
    top: calc(100% - 68px);
    padding: 5px
  }
}

</style>
