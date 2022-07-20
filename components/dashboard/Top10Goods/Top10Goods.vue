<template>
  <div class="top-goods-wrapper">
    <h3>Top-10 Goods</h3>
    <div class="d-flex d-lg-none">
      <v-carousel
        cycle
        height="420px"
        :show-arrows="false"
        class="carousel"
      >
        <v-carousel-item
          v-for="el in 5"
          :key="el"
        >
          <v-sheet
            color="var(--bg)"
            height="100%"
          >
            <div class="d-md-flex d-none align-center justify-space-around">
              <product-card />
              <product-card />
            </div>
            <div class="d-flex d-md-none align-center justify-space-around">
              <product-card />
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="d-none d-lg-flex align-center flex-wrap justify-space-around">
      <div v-for="i in 6" :key="i" class="d-flex d-xl-none">
        <product-card class="six-elements-element" />
      </div>
      <div class="other-top-goods d-xl-none" :class="{ otherTopGoodsShow : showAll }">
        <div v-for="i in 4" :key="i">
          <product-card class="six-elements-element" />
        </div>
      </div>
      <div v-for="i in 10" :key="i" class="d-none d-xl-flex">
        <product-card class="ten-elements-element"/>
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
import { Component, Vue } from 'nuxt-property-decorator'
import ProductCard from '../ProductCard/ProductCard.vue'

export default @Component({
  components: { ProductCard }
})

class PremiumGoods extends Vue {
  showAll = false
  showAllButtonText = 'Show'

  scrollTop () {
    if (!this.showAll) {
      this.$vuetify.goTo(0)
    }
  }

  showAllClick () {
    this.showAllButtonText = this.showAll ? 'See' : 'Hide'
    this.showAll = !this.showAll
    setTimeout(() => {
      this.scrollTop()
    }, 100)
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
    margin-bottom: 80px;
  }

  .ten-elements-element{
    margin-bottom: 45px;
  }

  .carousel{
    margin-bottom: 45px;
  }

  .btn-other-margin{
    margin-top: -35px;
  }
</style>
