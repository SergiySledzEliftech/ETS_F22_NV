<template>
  <div class="top-goods-wrapper">
    <h3>Top-10 Goods</h3>
    <div class="d-flex d-lg-none">
      <v-carousel
        cycle
        height="420"
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="el in 5"
          :key="el"
        >
          <v-sheet
            color="#F9F9FA"
            height="100%"
          >
            <div class="d-md-flex d-none align-center justify-space-around">
              <ProductCard :active-hover="true"/>
              <ProductCard :active-hover="true"/>
            </div>
            <div class="d-flex d-md-none align-center justify-space-around">
              <ProductCard :active-hover="true"/>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="d-none d-lg-flex align-center flex-wrap justify-space-around">
      <div v-for="i in (showAll ? 10 : 6)" :key="i" class="mb-6 d-flex d-xl-none">
        <ProductCard :active-hover="true" v-if="!showAll"/>
        <ProductCard :active-hover="true" v-else class="changed-card"/>
      </div>
      <div v-for="i in 10" :key="i" class="mb-6 d-none d-xl-flex">
        <ProductCard :active-hover="true" />
      </div>
    </div>
    <div class="buttons-wrapper d-flex align-center justify-space-around mx-auto">
      <v-btn color="#E31F26">
        <span class="btn-white-text">See Other Goods</span>
      </v-btn>
      <v-btn color="white" class="button d-lg-flex d-none d-xl-none" @click="showAll = !showAll">
        <span class="btn-red-text">{{showAll ? 'Hide' : 'See'}} All Top Goods</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import ProductCard from '../ProductCard/ProductCard.vue';

export default @Component({
  components: { ProductCard }
})

class PremiumGoods extends Vue {
  data () {
    return {
      showAll: false
    };
  }
}
</script>

<style scoped lang="scss">
  h3{
    text-align: center;
    margin-bottom: 40px !important;
  }

  .top-goods-wrapper{
    padding-top: 80px;
    padding-bottom: 80px;
    background: $bg;
    margin-bottom: 100px;
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
    margin-top: 40px;
    width: 50%;
  }
</style>
