<template>
  <div>
    <items-list
      :list="items"
      :page="page"
      :total-pages="totalPages"
      :set-page="changePage"
      :set-per-page="changePerPage"
      :per-page="perPage"
      :opts-array="perPageArray"
    >
      <li v-for="item in items" :key="item.id" class="item">
        <single-item :item="item" :grid="view === 'list'">
          <p class="expire">
            Expires at: {{ item.expired }}
          </p>
        </single-item>
      </li>
    </items-list>
  </div>
</template>

<script>
import { Vue, Component, Prop, namespace } from 'nuxt-property-decorator';
import ItemsList from '@/components/list/ItemsList.vue';
import SingleItem from '~/components/list/SingleItem.vue';
const { State, Action, Mutation } = namespace('profile');
export default @Component({
  name: 'history',
  components: { ItemsList, SingleItem }
})

class History extends Vue {
  @Prop({ type: Array, required: true }) list;
  @Prop({ type: String, required: true }) view;
  items = [];
  @State page;
  @State perPage;
  @State perPageArray;
  @State totalPages;
  @Action deleteElem;
  @Action calculateTotalPages;
  @Action calcPage;
  @Mutation setPerPage;

  sliceList () {
    const firstIdx = (this.page - 1) * this.perPage;
    const result = this.list.slice(firstIdx, firstIdx + this.perPage);
    this.items = result;
  }

  changePage (num) {
    this.calcPage(num);
    this.sliceList();
  }

  changePerPage (num) {
    this.setPerPage(num);
    this.changePage(1);
    this.calculateTotalPages(this.list);
  }

  mounted () {
    this.sliceList();
    this.calculateTotalPages(this.list);
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

</style>
