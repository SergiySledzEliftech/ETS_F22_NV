<template>
  <div class="top-goods-wrapper">
    <h3>Top-10 Goods</h3>
    <div class="d-flex d-lg-none">
      <v-carousel
        height="420px"
        :show-arrows="false"
        class="carousel d-md-block d-none"
      >
        <v-carousel-item
          v-for="el of goodsData2"
          :key="el._id"
        >
          <v-sheet
            color="var(--bg)"
            height="100%"
          >
            <div class="d-flex align-center justify-space-around">
              <product-card v-for="e of el" :key="e._id" :img="e.images && e.images[0]" :title="e.title" />
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-carousel
        height="420px"
        :show-arrows="false"
        class="carousel d-md-none dashboard-carousel-mobile"
      >
        <v-carousel-item
          v-for="el of goodsData"
          :key="el._id"
        >
          <v-sheet
            color="var(--bg)"
            height="100%"
          >
            <div class="d-flex align-center justify-space-around">
              <product-card :img="el.images && el.images[0]" :title="el.title" />
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="d-none d-lg-flex align-center flex-wrap justify-space-around">
      <div v-for="el of goodsData.slice(0, 6)" :key="el._id" class="d-flex d-xl-none">
        <product-card class="six-elements-element" :img="el.images && el.images[0]" :title="el.title" />
      </div>
      <div class="other-top-goods d-xl-none" :class="{ otherTopGoodsShow : showAll }">
        <div v-for="el of goodsData.slice(6)" :key="el._id">
          <product-card class="six-elements-element" :img="el.images && el.images[0]" :title="el.title" />
        </div>
      </div>
      <div v-for="el of goodsData" :key="el._id + '1'" class="d-none d-xl-flex">
        <product-card class="ten-elements-element" :img="el.images && el.images[0]" :title="el.title" />
      </div>
    </div>
    <div class="buttons-wrapper d-lg-flex d-none d-xl-none align-center justify-space-around mx-auto btn-other-margin">
      <v-btn color="var(--primary)">
        <span class="btn-white-text">See Other Goods</span>
      </v-btn>
      <v-btn
        color="white"
        class="button"
        @click="showAllClick"
      >
        <span class="btn-red-text">{{ showAllButtonText }} All Top Goods</span>
      </v-btn>
    </div>
    <div class="buttons-wrapper d-flex d-lg-none d-xl-flex align-center justify-space-around mx-auto">
      <v-btn color="var(--primary)">
        <span class="btn-white-text">See Other Goods</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import ProductCard from '../ProductCard/ProductCard.vue';
import { serverApiUrl } from '@/settings/config';

export default @Component({
  components: { ProductCard }
})

class PremiumGoods extends Vue {
  showAll = false
  showAllButtonText = 'Show'
  goodsData = [...Array(10).keys()]
  goodsData2 = [...Array(5).keys()]

  scrollTop () {
    if (!this.showAll) {
      this.$vuetify.goTo(0);
    }
  }

  showAllClick () {
    this.showAllButtonText = this.showAll ? 'See' : 'Hide';
    this.showAll = !this.showAll;
    setTimeout(() => {
      this.scrollTop();
    }, 100);
  }

  async mounted () {
    try {
      const res = await this.$axios.get(`${serverApiUrl}top10`);
      this.goodsData = res.data;
      this.goodsData2 = this.splitForNum(res.data, 2);
    } catch (error) {}
  }

  splitForNum (arr, num) {
    const res = [];
    let temp = [];
    arr.forEach((e) => {
      temp.push(e);

      if (temp.length === num) {
        res.push(temp);
        temp = [];
      }
    });

    return res;
  }
}
</script>

<style scoped lang="scss">
  h3{
    text-align: center;
    margin-bottom: 40px !important;
  }

  .top-goods-wrapper{
    margin-top: -10px;
    padding-top: 40px;
    padding-bottom: 80px;
    background: $bg;
  }

  .btn-red-text{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;

    color: #E31F26;
  }

  .btn-white-text{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;

    color: white;
  }

  .buttons-wrapper{
    width: 50%;
  }

  .other-top-goods{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 0px;
    opacity: 0;

    transition: 1s;
  }

  .otherTopGoodsShow{
    height: 768px !important;
    opacity: 1 !important;
  }

  .six-elements-element{
    margin-bottom: 75px;
  }

  .ten-elements-element{
    margin-bottom: 43.4px;
  }

  .carousel{
    margin-bottom: 43.4px;
  }

  .btn-other-margin{
    margin-top: -31.6px;
  }

  .carousel-content{
    background-color: red;
    width: 100%;
  }
</style>

<style lang="scss">
  .dashboard-carousel-mobile{
    .v-carousel__controls{
      height: 70px !important;
    }
  }
</style>
