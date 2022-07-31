<template>
  <div>
    <div v-if="data.length > 0">
      <items-list
        :list="data"
        :page="page"
        :total-pages="totalPages"
        :set-page="changePage"
        :set-per-page="changePerPage"
        :per-page="perPage"
        :opts-array="perPageArray"
      >
        <li v-for="item in items" :key="item.good._id" class="item">
          <single-item :item="item.good" :grid="view === 'list'">
            <p v-if="item.good.expires_at !== ''" class="expire">
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
import { Vue, Component, Prop, namespace } from 'nuxt-property-decorator';
import moment from 'moment';
import ItemsList from '@/components/list/ItemsList.vue';
import SingleItem from '~/components/list/SingleItem.vue';
const { State, Action, Mutation } = namespace('profile');
export default @Component({
  name: 'borrow',
  components: { ItemsList, SingleItem }
})

class Borrow extends Vue {
  @Prop({ type: String, required: true }) view;
  items = [];
  data = [];
  @State page;
  @State perPage;
  @State perPageArray;
  @State totalPages;
  @Action deleteElem;
  @Action calculateTotalPages;
  @Action calcPage;
  @Action setLoad;
  @Mutation setPerPage;

  sliceList () {
    const firstIdx = (this.page - 1) * this.perPage;
    const result = this.data?.slice(firstIdx, firstIdx + this.perPage);
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

  formatDate (date) {
    return moment(date).format('DD MMM YYYY hh:mm');
  }

  mounted () {
    this.setLoad(true);
    const localRents = this.$auth.$storage.getLocalStorage(this.$auth.user._id);
    this.data = localRents !== null ? localRents : [];
    console.log(this.data);
    if (this.data !== []) {
      this.sliceList();
      this.calculateTotalPages(this.data);
    }
    this.setLoad(false);
  }
}
</script>

<style lang="scss" scoped>
.expire {
  margin: 0;
  position: absolute;
  padding: 10px;
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
  padding: 5px 10px;
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
