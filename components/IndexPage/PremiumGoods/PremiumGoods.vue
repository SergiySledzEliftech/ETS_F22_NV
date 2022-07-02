<template>
  <div class="premium-goods-wrapper">
    <h3>Premium goods</h3>
    <div class="d-flex d-lg-none">
      <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="100%"
      >
        <v-slide-group
          class="pa-4"
          center-active
          show-arrows
        >
          <v-slide-item
            v-for="n in 100"
            :key="n"
            v-slot="{ toggle }"
          >
            <div
              class="ml-7 mr-7 pt-3 pr-3 pl-3 pb-3"
              @click="toggle"
            >
              <ProductCard :active-hover="true" />
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
    <div class="d-none d-lg-flex align-center flex-wrap justify-space-between">
      <div v-for="i in 6" :key="i" class="mb-6 d-flex d-xl-none">
        <ProductCard :active-hover="true" />
      </div>
      <div v-for="i in 10" :key="i" class="mb-6 d-none d-xl-flex">
        <ProductCard :active-hover="true" />
      </div>
    </div>
    <v-btn color="#E31F26" class="button">
      <span class="btn-text">See All Premium Goods</span>
    </v-btn>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import ProductCard from '../ProductCard/ProductCard.vue';

export default @Component({
  components: { ProductCard }
})

class PremiumGoods extends Vue {}
</script>

<style scoped>
  h3{
    text-align: center;
    padding-bottom: 55px;
  }

  .premium-goods-wrapper{
    padding-top: 80px;
    padding-bottom: 70px;
  }

  .btn-text{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;

    color: #FFFFFF;
  }

  .button{
    margin-top: 50px;
    left: 50%;
    transform: translate(-50%);
  }
</style>
