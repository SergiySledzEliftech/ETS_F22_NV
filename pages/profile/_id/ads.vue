<template>
  <div>
    <ItemsList
      :list="items"
      :set-page="changePage"
      :set-per-page="changePerPage"
    >
      <li v-for="item in items" :key="item._id" class="item">
        <SingleItem :item="item" :grid="view === 'list'">
          <div v-if="show" class="buttons">
            <v-tooltip bottom>
              <template #activator="{on, attrs}">
                <NuxtLink :to="/edit-ad/ +item._id">
                  <v-btn v-bind="attrs" icon small v-on="on">
                    <v-icon :class="view">
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                </NuxtLink>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template #activator="{on,attrs}">
                <v-btn v-bind="attrs" icon small v-on="on" @click.prevent="deleteItem(item._id)">
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
    <div v-if="!isData" class="nodata">
      <p>You haven't created any adverts yet</p>
      <NuxtLink :to="{name: 'categories'}" class="link">
        Create new advert
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { Vue, Component, namespace, Prop } from 'nuxt-property-decorator';
import ItemsList from '~/components/list/ItemsList.vue';
import SingleItem from '~/components/list/SingleItem.vue';
const { State, Action } = namespace('profile');
const { State: ListState, Action: ListAction } = namespace('list');

export default @Component({
  name: 'profile-ads',
  components: { ItemsList, SingleItem }
})

class ProfileAds extends Vue {
  @State data;
  @ListState view;
  @ListState page;
  @ListState perPage;
  @ListState perPageArray;
  @ListState totalPages;
  @Action getUser;
  @Action getProducts;
  @Action deleteProduct;
  @ListAction setLoad;
  @ListAction calculateTotalPages;
  @ListAction calcPage;
  @ListAction calcPerPage;
  @Prop({ default: '' }) isMy;
  items = [];
  show = this.isMy !== '';
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

  async deleteItem (id) {
    this.setLoad(true);
    await this.deleteProduct(id).then(() =>
      this.getProducts(this.$route.params.id));
    this.sliceList();
    this.calculateTotalPages(this.data);
    this.setLoad(false);
  }

  async mounted () {
    this.setLoad(true);
    await this.getProducts(this.$route.params.id);
    this.sliceList();
    this.calculateTotalPages(this.data);
    this.setLoad(false);
    this.isData = this.data.length > 0;
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
