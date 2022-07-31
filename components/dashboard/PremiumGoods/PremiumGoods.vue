<template>
  <div class="carousel-wrapper">
    <h3>Premium Goods</h3>
    <v-carousel
      height="450px"
      hide-delimiters
      class="d-none d-lg-block"
    >
      <v-carousel-item
        v-for="el of goodsData3"
        :key="el._id"
      >
        <v-sheet
          color="#213342"
          height="100%"
          class="d-flex justify-center align-center"
        >
          <div class="d-flex justify-space-around align-center carousel-content-wrapper">
            <product-card
              v-for="e of el"
              :key="e._id"
              :title="e.title"
              :img="e.images && e.images[0]"
              :is-loading="loading"
              :id-prop="e._id"
            />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-carousel
      height="450px"
      hide-delimiters
      class="d-lg-none d-none d-md-block"
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="el of goodsData2"
        :key="el._id"
      >
        <v-sheet
          color="#213342"
          height="100%"
          class="d-flex justify-center align-center"
        >
          <div class="d-flex justify-space-around align-center carousel-content-wrapper">
            <product-card
              v-for="e of el"
              :key="e._id"
              :title="e.title"
              :img="e.images && e.images[0]"
              :is-loading="loading"
              :id-prop="e._id"
            />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-carousel
      height="450px"
      hide-delimiters
      class="d-md-none"
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="el of goodsData1"
        :key="el._id"
      >
        <v-sheet
          color="#213342"
          height="100%"
          class="d-flex justify-center align-center"
        >
          <div class="d-flex justify-space-around align-center carousel-content-wrapper">
            <product-card
              :key="el._id"
              :title="el.title"
              :img="el.images && el.images[0]"
              :is-loading="loading"
              :id-prop="el._id"
            />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { Component, Vue, namespace } from 'nuxt-property-decorator';
import ProductCard from '../ProductCard/ProductCard.vue';

const { Action, State } = namespace('dashboard');

export default @Component({
  components: { ProductCard }
})

class Top10Goods extends Vue {
  goodsData3 = [...Array(3).keys()]
  goodsData2 = [...Array(2).keys()]
  goodsData1 = [...Array(1).keys()]

  @Action loadPremium

  @State premium
  @State loading

  index = 0

  async mounted () {
    const goodsData = await this.getPremiumGoods();
    this.goodsData3 = this.splitForNum(goodsData, 3);
    this.goodsData2 = this.splitForNum(goodsData, 2);
    this.goodsData1 = goodsData;
  }

  async getPremiumGoods () {
    try {
      await this.loadPremium();
      return this.premium;
    } catch (err) {
      return [...Array(3).keys()];
    }
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
  .carousel-wrapper{
    padding-top: 40px;
    background-color: $secondary;
  }

  h3{
    color: white;
    text-align: center;
    margin-bottom: 5px !important;
  }
  .carousel-content-wrapper{
    width: 85%;
    height: 100%;
  }

  @media screen and (max-width: 350px){
    .carousel-content-wrapper{
      width: 100%;
    }
  }
</style>
