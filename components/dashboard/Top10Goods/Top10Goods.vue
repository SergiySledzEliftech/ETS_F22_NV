<template>
  <div class="top-goods-wrapper">
    <h3>Top-10 Goods</h3>
    <div class="d-flex d-lg-none">
      <v-carousel
        cycle
        height="420px"
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="el in 5"
          :key="el"
        >
          <v-sheet
            :color="colors.bg"
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
    <div class="d-none d-lg-flex align-center flex-wrap justify-space-around six-elements">
      <div v-for="i in 6" :key="i" class="mb-6 d-flex d-xl-none">
        <product-card />
      </div>
      <div class="other-top-goods d-xl-none six-elements" :class="{ otherTopGoodsShow : showAll }">
        <div v-for="i in 4" :key="i" class="mb-6">
          <product-card />
        </div>
      </div>
      <div v-for="i in 10" :key="i" class="mb-6 d-none d-xl-flex ten-elements">
        <product-card />
      </div>
    </div>
    <div class="buttons-wrapper d-flex align-center justify-space-around mx-auto">
      <v-btn :color="colors.primary">
        <span class="btn-white-text">See Other Goods</span>
      </v-btn>
      <v-btn
        color="white"
        class="button d-lg-flex d-none d-xl-none"
        @click="showAllClick"
      >
        <span class="btn-red-text">{{ showAllButtonText }} All Top Goods</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { Component, namespace, Vue } from 'nuxt-property-decorator'
import ProductCard from '../ProductCard/ProductCard.vue'

const { State } = namespace('colors')
export default @Component({
  components: { ProductCard }
})

class PremiumGoods extends Vue {
  showAll = false
  showAllButtonText = 'Hide'
  @State colors

  scrollTop () {
    if (!this.showAll) {
      this.$vuetify.goTo(0)
    }
  }

  showAllClick () {
    this.showAllButtonText = this.showAll ? 'Hide' : 'See'
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
    padding-top: 80px;
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
    margin-top: 40px;
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
    height: 660px !important;
    opacity: 1 !important;
  }

  .six-elements{
    div{
      margin-bottom: 55px;
    }
  }

  .ten-elements{
    div{
      margin-bottom: 20px;
    }
  }
</style>
