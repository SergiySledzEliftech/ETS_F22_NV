<template>
  <v-data-iterator
    :items="goods"
    :items-per-page.sync="itemsPerPage"
    :page.sync="page"
    :search="searchFromResultsValue"
    :sort-by="sortBy.toLowerCase()"
    :sort-desc="sortDesc"
    hide-default-footer
  >
    <template #header>
      <v-container
        id="scroll-target"
        class="data-iterator-container rounded-lg mb-2"
      >
        <!--↓ INPUT SEARCH ↓ -->
        <v-container class="d-flex align-baseline mb-2">
          <v-toolbar-title v-if="$vuetify.breakpoint.smAndUp" class="mr-4 white--text">
            Find your Product
          </v-toolbar-title>
          <v-autocomplete
            v-model="autocompleteValue"
            :loading="isLoading"
            :items="searchingItems"
            :search-input.sync="isSearch"
            cache-items
            flat
            hide-no-data
            hide-details
            solo
            label="Global search"
            item-text="title"
          >
            <template #item="{ item }">
              <v-list-item-content>
                <v-list-item-title> {{ item.title }}</v-list-item-title>
                <v-list-item-subtitle> {{ item.category }}</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-autocomplete>
        </v-container>
        <!--↑ INPUT SEARCH ↑ -->

        <!--↓ BTN GO TO TOP ↓ -->
        <v-btn
          v-show="goTop"
          v-scroll="onScroll"
          fab
          dark
          fixed
          bottom
          right
          color="primary"
          @click="toTop"
        >
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
        <!--↑ BTN GO TO TOP ↑ -->

        <v-container class="filter-container d-sm-flex justify-sm-space-between">
          <!--↓ INPUT SEARCH FOR CATEGORY ↓ -->
          <v-autocomplete
            v-model="selectedCategoryValue"
            :items="categories"
            label="Categories"
            solo
            hide-details
            flat
            prepend-inner-icon="mdi-magnify"
            class="mr-sm-5 mb-2 mb-sm-0"
            @input="searchFromCategory"
          />
          <!--↑ INPUT SEARCH FOR CATEGORY ↑ -->

          <!--↓ INPUT SEARCH FROM RESULT ↓ -->
          <v-text-field
            v-model="searchFromResultsValue"
            clearable
            flat
            solo
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search from results"
          />
        <!--↑ INPUT SEARCH FROM RESULT ↑ -->
        </v-container>
        <v-container
          class="sort-container align-center d-flex"
        >
          <div class="align-end d-sm-flex ">
            <!--↓ Inputs PRICE SORT from largest to smallest ↓ -->
            <v-responsive
              class="mb-2 mb-sm-0"
              content-class="d-flex pt-1 "
              max-width="140"
            >
              <v-text-field
                v-model="priceMinValue"
                dense
                dark
                outlined
                hide-spin-buttons
                hide-details="auto"
                type="number"
                color="teal"
                label="min"
                placeholder="min"
                class="mr-2 teal--text"
              />
              <v-text-field
                v-model="priceMaxValue"
                dense
                dark
                outlined
                hide-spin-buttons
                hide-details="auto"
                type="number"
                color="teal"
                label="max"
                placeholder="max"
              />
            </v-responsive>
            <!--↑ Inputs  PRICE SORT from largest to smallest ↑ -->

            <!--↓ new or used SORT ↓ -->
            <v-btn-toggle
              background-color="transparent"
              dark
              class="ml-0 ml-sm-2 mb-2 mb-sm-0"
            >
              <v-btn
                id="new"
                dark
                small
                outlined
                color="teal"
                plain
                height="40px"
                @click="sortNewOrUsed = 'new'"
              >
                new
              </v-btn>
              <v-btn
                id="used"
                dark
                small
                outlined
                color="teal"
                plain
                height="40px"
                @click="sortNewOrUsed = 'used'"
              >
                used
              </v-btn>
            </v-btn-toggle>
            <!--↑ new or used SORT ↑ -->

            <!--↓ isAvailable SORT ↓ -->
            <v-checkbox
              v-model="isAvailable"
              dark
              hide-details
              color="teal"
              label="Available"
              class="ml-0 ml-sm-2 mt-auto mb-auto"
            />
            <!--↑ isAvailable SORT ↑ -->

            <!--↓ isFree SORT ↓ -->
            <v-checkbox
              v-model="isFree"
              dark
              hide-details
              color="teal"
              label="Free"
              class="ml-0 ml-sm-2 mt-auto mb-auto"
            />
            <!--↑ isFree SORT ↑ -->
          </div>

          <div class="ml-auto d-flex flex-column">
            <!--↓ CLEAR SORT ↓ -->
            <v-btn
              :style="showBtn()"
              dark
              small
              outlined
              color="teal"
              plain
              height="40px"
              class="mb-2"
              @click="clear"
            >
              clear
            </v-btn>
            <!--↑ CLEAR SORT ↑ -->

            <!--↓ PRICE SORT from largest to smallest ↓ -->
            <v-btn-toggle
              v-model="sortDesc"
              background-color="transparent"
              mandatory
              dark
            >
              <v-btn
                small
                outlined
                fab
                plain
                color="teal"
                :value="false"
              >
                <v-icon color="teal">
                  mdi-arrow-up
                </v-icon>
              </v-btn>
              <v-btn
                small
                outlined
                fab
                plain
                color="teal"
                :value="true"
              >
                <v-icon color="teal">
                  mdi-arrow-down
                </v-icon>
              </v-btn>
            </v-btn-toggle>
          <!--↑ PRICE SORT from largest to smallest ↑ -->
          </div>
        </v-container>
      </v-container>
    </template>
    <!--↓ CARDS ↓ -->
    <template #default="props">
      <items-list :list="props.items" :change-view="changeView" :view="view">
        <li v-for="(item,index) in props.items" :key="index" class="item">
          <single-item
            :item="item"
            :grid="view === 'list'"
          />
        </li>
      </items-list>
    </template>
    <!--↑ CARDS ↑ -->

    <template #footer>
      <v-row
        class="ma-2 flex-column flex-sm-row justify-sm-space-between"
        align="center"
      >
        <div>
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <v-spacer />

        <div>
          <span class="mr-4 grey--text">
            Page {{ page }} of {{ numberOfPages() }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="prevPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-row>
    </template>
  </v-data-iterator>
</template>
<script>

import { Component, Vue, Watch } from 'nuxt-property-decorator';
import ItemsList from '@/components/list/ItemsList';
import SingleItem from '@/components/list/SingleItem';
// import { productProps, products } from '@/pages/test';

export default @Component({
  name: 'Nazar',
  components: { ItemsList, SingleItem }
})
class Nazar extends Vue {
  isAvailable = false
  isFree = false
  goTop = false
  isCategorySelected = false
  isLoading = false
  isSearch = null
  sortDesc = false
  sortNewOrUsed = null
  view = 'grid'
  sortBy = 'price'
  priceMinValue = null
  priceMaxValue = null
  autocompleteValue = null
  selectedCategoryValue = null
  searchFromResultsValue = null
  page = 1
  itemsPerPageArray = [25, 50, 100]
  itemsPerPage = this.itemsPerPageArray[0]
  goods = []
  categories = []
  searchingItems = []

  @Watch('isSearch')
  searchWatch (value) {
    if (value) {
      this.fetchEntriesDebounced(value, this.searching, 1000);
    }
  }

  async searching (searchValue) {
    this.isLoading = true;
    try {
      const { products } = await this.$axios.$get(`https://dummyjson.com/products/search?q=${searchValue}`);
      this.searchingItems = products.map(({
        title,
        category
      }) => ({
        title,
        category
      }));
      if (this.autocompleteValue) {
        const { products } = await this.$axios.$get(`https://dummyjson.com/products/search?q=${searchValue}`);
        this.goods = products;
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      this.isLoading = false;
    }
  }

  fetchEntriesDebounced (searchingValue, searchingFn, delay = 500) {
    clearTimeout(this._searchTimerId);
    this._searchTimerId = setTimeout(() => {
      return searchingFn(searchingValue);
    }, delay); /* delay ms throttle */
  }

  async fetch () {
    this.isLoading = true;
    try {
      const categories = await this.$axios.$get('https://dummyjson.com/products/categories');
      // https://dummyjson.com/products?limit=10&skip=10&select=title,price
      const { products } = await this.$axios.$get('https://dummyjson.com/products?limit=100');
      this.goods = products;
      this.categories = categories;
    } catch (err) {
      console.log(err.message);
    } finally {
      this.isLoading = false;
    }
  }

  async searchFromCategory (categoryValue) {
    this.isLoading = true;
    try {
      if (categoryValue) {
        const { products } = await this.$axios.$get(`https://dummyjson.com/products/category/${categoryValue}`);
        this.goods = products;
        this.autocompleteValue = null;
        console.log(products);
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      this.isLoading = false;
    }
  }

  showBtn () {
    return { visibility: this.isFree || this.isAvailable || this.priceMaxValue || this.sortNewOrUsed ? 'visible' : 'hidden' };
  }

  changeView () {
    this.view = this.view === 'grid' ? 'list' : 'grid';
  }

  numberOfPages () {
    return Math.ceil(this.goods.length / this.itemsPerPage);
  }

  nextPage () {
    if (this.page + 1 <= this.numberOfPages()) {
      this.page += 1;
    }
  }

  prevPage () {
    if (this.page - 1 >= 1) {
      this.page -= 1;
    }
  }

  updateItemsPerPage (number) {
    this.itemsPerPage = number;
  }

  onScroll () {
    if (typeof window !== 'undefined') {
      this.goTop = window.pageYOffset > 1000;
    }
  }

  toTop () {
    this.$vuetify.goTo(0);
  }

  clear () {
    this.sortNewOrUsed = null;
    this.priceMinValue = null;
    this.priceMaxValue = null;
    this.isAvailable = false;
    this.isFree = false;
  }
}

</script>

<style scoped lang="scss">
@import '../assets/variables.scss';

.data-iterator-container {
  background-color: $secondary;
}

</style>
