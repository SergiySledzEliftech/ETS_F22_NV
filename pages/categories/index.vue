<template>
  <v-data-iterator
    :items="items"
    :search="searchFromResultsValue"
    :sort-by="sortBy.toLowerCase()"
    :sort-desc="sortDesc"
    hide-default-footer
    :loading="isLoading"
    :items-per-page.sync="items.length"
    :page.sync="page"
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
            :loading="autocompleteLoader"
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
            @input="setOptions(['category',selectedCategoryValue])"
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
          <div>
            <div class="d-sm-flex align-end">
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
                  :disabled="isFree"
                  @input="setPrice(['$gte',+priceMinValue])"
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
                  :disabled="!!(isFree || (priceMinValue === null))"
                  @input="setPrice(['$lte', +priceMaxValue])"
                />
              </v-responsive>
              <!--↑ Inputs  PRICE SORT from largest to smallest ↑ -->

              <!--↓ individual or business SORT ↓ -->
              <v-btn-toggle
                background-color="transparent"
                dark
                class="ml-0 ml-sm-2 mb-2 mb-sm-0"
                @change="setOptions(['sellerStatus', sellerStatus])"
              >
                <v-btn
                  id="new"
                  dark
                  small
                  outlined
                  color="teal"
                  plain
                  height="40px"
                  @click="sellerStatus = 'business'"
                >
                  business
                </v-btn>
                <v-btn
                  id="used"
                  dark
                  small
                  outlined
                  color="teal"
                  plain
                  height="40px"
                  @click="sellerStatus = 'individual'"
                >
                  individual
                </v-btn>
              </v-btn-toggle>
              <!--↑ individual or business SORT ↑ -->

              <!--↓ new or used SORT ↓ -->
              <v-btn-toggle
                background-color="transparent"
                dark
                class="ml-0 ml-sm-2 mb-2 mb-sm-0"
                @change="setOptions(['condition', sortNewOrUsed])"
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
            </div>

            <div class="mt-0 mt-sm-2 d-sm-flex">
              <!--↓ isContractPrice SORT ↓ -->
              <v-checkbox
                v-model="isContractPrice"
                dark
                hide-details
                color="teal"
                label="Contract price"
                class="mt-auto mb-auto"
                @change="setOptions(['isContractPrice', isContractPrice])"
              />
              <!--↑ isContractPrice SORT ↑ -->

              <!--↓ isAvailable SORT ↓ -->
              <v-checkbox
                v-model="isAvailable"
                dark
                hide-details
                color="teal"
                label="Available"
                class="ml-0 ml-sm-2 mt-auto mb-auto"
                @change="setOptions(['status',isAvailable ? 'available' : 'unavailable'])"
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
                :disabled="Boolean(price.$gte && price.$lte)"
                @change="setOptions(['isFree',isFree])"
              />
              <!--↑ isFree SORT ↑ -->
            </div>

            <!--↓ Rating SORT ↓ -->
            <v-responsive
              max-width="160"
              class="mt-2"
            >
              <div class="d-flex align-center">
                <span class="mt-1 v-label theme--dark">Rating</span>
                <v-rating
                  v-model="rating"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  color="yellow accent-4"
                  dense
                  half-increments
                  hover
                  size="18"
                  @input="setOptions(['rating',{$lte: +rating}])"
                />
              </div>
            </v-responsive>
            <!--↑ Rating btn ↑ -->

            <div class="mt-3">
              <!--↓ Find btn ↓ -->
              <v-btn
                :disabled="showBtn()"
                dark
                small
                outlined
                color="teal"
                plain
                height="40px"
                class="mr-4"
                @click="onFind"
              >
                find
              </v-btn>
              <!--↑ Find btn ↑ -->

              <!--↓ CLEAR SORT ↓ -->
              <v-btn
                :disabled="showBtn()"
                dark
                small
                outlined
                color="teal"
                plain
                height="40px"
                @click="clear"
              >
                clear
              </v-btn>
            <!--↑ CLEAR SORT ↑ -->
            </div>
          </div>

          <div class="clearAndSortPrice d-flex flex-column">
            <!--↓ PRICE SORT from largest to smallest ↓ -->
            <div>
              <div class="aselect" :data-value="value" :data-list="list">
                <div class="selector" @click="toggle()">
                  <div class="label">
                    <span>{{ value }}</span>
                  </div>
                  <div class="arrow" :class="{ expanded : visible }" />
                  <div :class="{ hidden : !visible, visible }">
                    <ul class="rounded">
                      <li v-for="item in list" :key="item" :class="{ current : item === value }" @click="select(item)">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
            </div>
          <!--↑ PRICE SORT from largest to smallest ↑ -->
          </div>
        </v-container>
      </v-container>
    </template>

    <template #no-data>
      <div class="mt-5">
        <v-alert
          prominent
          type="error"
        >
          <v-row align="center">
            <v-col class="grow">
              Sorry by your parameters the product was not found. Try cleaning the filter and try again.
            </v-col>
            <v-col class="shrink">
              <v-btn @click="clear">
                Clear parameters
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </div>
    </template>

    <template #loading>
      <div class="progress">
        <progress-circular />
      </div>
    </template>

    <template #default="props">
      <!--        ↓ CARDS ↓-->
      <items-list
        :list="props.items"
        :set-page="changePage"
        :set-per-page="changePerPage"
      >
        <li v-for="item in props.items" :key="item._id" class="item">
          <single-item
            :item="item"
            :grid="view === 'list'"
          >
            <ul class="status-list">
              <li class="status-item">
                <p>
                  Seller status:<span :class="item.sellerStatus === 'business' ? 'greenText' : 'redText'">
                    {{ item.sellerStatus }}
                  </span>
                </p>
              </li>
              <li class="status-item">
                <p>
                  Price negotiable:
                  <span :class="item.isContractPrice ? 'greenText' : 'redText'">
                    {{ item.isContractPrice ? 'Yes' : 'No' }}
                  </span>
                </p>
              </li>
              <li class="status-item">
                <p>
                  Condition:
                  <span :class="item.condition === 'new' ? 'greenText' : 'redText'">
                    {{ item.condition }}
                  </span>
                </p>
              </li>
            </ul>
          </single-item>
        </li>
      </items-list>
      <!--        ↑ CARDS ↑-->
    </template>
  </v-data-iterator>
</template>
<script>

import { Component, namespace, Vue, Watch } from 'nuxt-property-decorator';
import ItemsList from '~/components/list/ItemsList';
import SingleItem from '~/components/list/SingleItem';
import ProgressCircular from '~/components/global/Progress';
const { State: listState, Action: listAction, Mutation: listMutation } = namespace('list');
const { State: categoriesState, Action: categoriesAction, Mutation: categoriesMutation } = namespace('categories');

export default @Component({
  components: { ItemsList, SingleItem, ProgressCircular }
})

class Categories extends Vue {
  @categoriesState categories
  @categoriesState goods
  @categoriesState isLoading
  @categoriesState searchingItems
  @categoriesState autocompleteLoader
  @categoriesState options
  @categoriesState price
  @listState view
  @listState page
  @listState perPage
  @listState perPageArray
  @listState totalPages
  @categoriesAction getAllCategories
  @categoriesAction clearOpt
  @categoriesAction getAllGoodsAndCategories;
  @categoriesAction searchProduct
  @categoriesAction filterProducts
  @listAction calcPage
  @listAction calculateTotalPages
  @listAction calcPerPage
  @categoriesMutation setOptions
  @categoriesMutation setPrice
  @listMutation setPerPage
  sortBy = 'price'
  isAvailable = false
  isContractPrice=false
  isFree = false
  goTop = false
  isSearch = null
  sortDesc = false
  sellerStatus = null
  sortNewOrUsed = null
  rating = null
  priceMinValue= null
  priceMaxValue= null
  autocompleteValue = null
  selectedCategoryValue = null
  searchFromResultsValue = null
  items = [];
  list = ['price', 'rating']
  value = this.list[0]
  visible= false

  @Watch('selectedCategoryValue')
  clearAutocompleteValue () {
    this.autocompleteValue = null;
  }

  @Watch('isSearch')
  searchWatch (value) {
    if (value) {
      this.fetchEntriesDebounced({ value, selectedValue: this.autocompleteValue }, this.searchProduct);
    }
  }

  @Watch('goods', { deep: true })
  changeItems () {
    this.items = this.goods;
    this.sliceList();
    this.calculateTotalPages(this.goods);
  }

  onFind () {
    if (this.price.$gte && this.price.$lte) {
      let minPrice = +this.priceMinValue;
      let maxPrice = +this.priceMaxValue;
      if (minPrice > maxPrice) {
        this.priceMinValue = maxPrice;
        this.priceMaxValue = minPrice;
        minPrice = this.priceMinValue;
        maxPrice = this.priceMaxValue;
        return this.filterProducts({ ...this.options, price: { $gte: minPrice, $lte: maxPrice } });
      } if (minPrice === maxPrice) {
        return this.filterProducts({ ...this.options, price: { $lte: maxPrice } });
      } else {
        this.filterProducts({ ...this.options, price: { $gte: minPrice, $lte: maxPrice } });
      }
    } else {
      return this.filterProducts(this.options);
    }
  }

  async mounted () {
    if (this.$route.params.category) {
      const categoryName = this.$route.params.category.toLowerCase();
      this.getAllCategories();
      this.selectedCategoryValue = categoryName;
      this.setOptions(['category', categoryName]);
      this.filterProducts({ category: categoryName });
    } else {
      await this.getAllGoodsAndCategories();
    }
  }

  fetchEntriesDebounced (searchValue, searchingFn, delay = 500) {
    clearTimeout(this._searchTimerId);
    this._searchTimerId = setTimeout(() => {
      return searchingFn(searchValue);
    }, delay); /* delay ms throttle */
  }

  sliceList () {
    const firstIdx = (this.page - 1) * this.perPage;
    this.items = this.goods.slice(firstIdx, firstIdx + this.perPage);
  }

  changePage (num) {
    this.calcPage(num);
    this.sliceList();
  }

  changePerPage (num) {
    this.calcPerPage(num);
    this.sliceList();
    this.calculateTotalPages(this.goods);
  }

  showBtn () {
    return !(this.selectedCategoryValue || this.rating || this.isFree || this.sellerStatus || this.isContractPrice || this.isAvailable || this.priceMaxValue || this.sortNewOrUsed);
  }

  onScroll () {
    if (typeof window !== 'undefined') {
      this.goTop = window.pageYOffset > 500;
    }
  }

  toTop () {
    this.$vuetify.goTo(0);
  }

  clear () {
    this.rating = null;
    this.selectedCategoryValue = null;
    this.sortNewOrUsed = null;
    this.priceMinValue = null;
    this.priceMaxValue = null;
    this.sellerStatus = null;
    this.isAvailable = false;
    this.isContractPrice = false;
    this.isFree = false;
    this.clearOpt();
  }

  toggle () {
    this.visible = !this.visible;
  }

  select (option) {
    this.value = option;
    this.sortBy = option;
  }
}

</script>

<style scoped lang="scss">
@import '../../assets/variables';

.data-iterator-container {
  background-color: $secondary;
  position: relative;
}
.item{
  .status-list{
    padding: 6px 0 0;
    margin-top: 6px;
    border-top: 2px solid rgba($light, 0.4);
    @media (max-width: 899px) {
      border-top: 1px solid rgba($light, 0.4);
    }
    .status-item{
      p{
        font-size: 16px;
        @media (max-width: 899px) {
          font-size: 14px;
        }
        :not(:last-child){
          margin-bottom: 10px;
        }
        span{
          font-weight: 600;
          @media (max-width: 899px) {
            font-size: 14px;
          }
        }
        .greenText{
          color: $positive;
        }
        .redText{
          color: $negative;
        }
      }
    }
  }
}

.progress{
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.clearAndSortPrice{
  position: absolute;
  right: 12px;
  bottom: 23px;
}
.aselect {
  width: 100%;
  .selector {
    background: transparent;
    position: relative;
    z-index: 1;
    .arrow {
      position: absolute;
      right: 7px;
      top: 40%;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid teal;
      transform: rotateZ(0deg) translateY(0px);
      transition-duration: 0.3s;
      transition-timing-function: cubic-bezier(.59,1.39,.37,1.01);
    }
    .expanded {
      transform: rotateZ(180deg) translateY(2px);
    }
    .label {
      display: block;
      padding: 0 12px;
      font-size: 16px;
      color: teal;
      cursor: pointer;
    }
  }
  ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    position: absolute;
    z-index: 1;
    background: #fff;
  }
  li {
    padding: 0 12px;
    color: #666;
    cursor: pointer;
    &:first-child{
      border-top-right-radius:4px;
      border-top-left-radius: 4px;
    }
    &:last-child{
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:hover {
      color: white;
      background: #02bbbb;

    }
  }
  .current {
    color: white;
    background: teal;
  }
  .hidden {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
}
</style>
