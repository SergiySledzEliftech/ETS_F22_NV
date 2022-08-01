<template>
  <div>
    <div v-if="data.length > 0">
      <items-list
        :list="data"
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
    </div>
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
  name: 'lend',
  components: { ItemsList, SingleItem }
})

class Lend extends Vue {
  items = [];
  @State data;
  @ListState view;
  @ListState page;
  @ListState perPage;
  @ListState perPageArray;
  @ListState totalPages;
  @Action getProducts;
  @Action deleteElem;
  @ListAction setLoad;
  @ListAction calculateTotalPages;
  @ListAction calcPage;
  @ListAction calcPerPage;

  sliceList () {
    if (this.data.length > 0) {
      const firstIdx = (this.page - 1) * this.perPage;
      const result = this.data.slice(firstIdx, firstIdx + this.perPage);
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
    this.calculateTotalPages(this.data);
  }

  formatDate (date) {
    return moment(date).format('DD MMM YYYY hh:mm');
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
.nodata{
  padding: 40px 20px;
  width: 100%;
  height: 100%;
  
  p {
    text-align: center;
    margin: auto;
    color: $secondary;
    font-weight: 600;
  }
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
