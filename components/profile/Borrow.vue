<template>
  <div>
    <div v-if="dataLend.length > 0">
      <items-list
        :list="dataLend"
        :set-page="changePage"
        :set-per-page="changePerPage"
      >
        <li v-for="item in items" :key="item._id" class="item">
          <single-item :item="item" :grid="view === 'list'">
            <p v-if="item.expires_at !== ''" class="expire">
              Expires at: {{ formatDate(item.expires_at) }}
            </p>
          </single-item>
        </li>
      </items-list>
    </div>
    <div v-else class="nodata">
      <p>No history yet</p>
      <NuxtLink :to="{name: 'categories'}" class="link">
        Find something interesting
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import moment from 'moment';
import ItemsList from '@/components/list/ItemsList.vue';
import SingleItem from '~/components/list/SingleItem.vue';
const { State, Action } = namespace('profile');
const { State: ListState, Action: ListAction } = namespace('list');

export default @Component({
  name: 'borrow',
  components: { ItemsList, SingleItem }
})

class Borrow extends Vue {
  items = [];
  // data = [];
  @State dataLend;
  @Action getLentProducts;
  @ListState view;
  @ListState page;
  @ListState perPage;
  @ListState perPageArray;
  @ListState totalPages;
  @Action deleteElem;
  @ListAction calculateTotalPages;
  @ListAction calcPage;
  @ListAction setLoad;
  @ListAction calcPerPage;

  sliceList () {
    if (this.dataLend && this.dataLend.length > 0) {
      const firstIdx = (this.page - 1) * this.perPage;
      const result = this.dataLend?.slice(firstIdx, firstIdx + this.perPage);
      this.items = result;
    }
  }

  changePage (num) {
    this.calcPage(num);
    this.sliceList();
  }

  changePerPage (num) {
    this.calcPerPage(num);
    this.sliceList();
    this.calculateTotalPages(this.dataLend);
  }

  formatDate (date) {
    return date === '' ? '' : moment(date).format('DD MMM YYYY hh:mm');
  }

  async mounted () {
    this.setLoad(true);
    // const localRents = this.$auth.$storage.getLocalStorage(this.$auth.user._id);
    // this.dataLend = localRents !== undefined ? localRents : [];
    await this.getLentProducts('62d68778176755ec2e579c3b');
    if (this.dataLend && this.dataLend !== []) {
      this.sliceList();
      this.calculateTotalPages(this.dataLend);
    }
    this.setLoad(false);
  }
}
</script>

<style lang="scss" scoped>
.expire {
  margin: 0;
  position: absolute;
  padding: 10px !important;
  right: 0;
  top: 0;
  font-weight: 500;
  font-size: 14px;
  color: $bg;
  background: rgba($light, 0.9);
  border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;

}

.isGrid .expire {
  top: calc(100% - 34px);
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  left: 0;
  padding: 5px 10px !important;
}

.nodata {
  padding: 40px 20px;
  width: 100%;
  height: 100%;

  p {
    text-align: center;
    margin: auto;
    color: $secondary;
    font-weight: 600;
  }

  .link {
    display: block;
    color: $light;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    margin: 10px auto;
    &:hover {
      color: $negative;
      text-decoration: underline;
      background-color: transparent;
      transform: scale(1.02);
      
    }
  }
}
</style>
