<template>
  <div class="carousel-wrapper">
    <h3>Premium Goods</h3>
    <v-carousel
      cycle
      height="500px"
      hide-delimiters
    >
      <v-carousel-item
        v-for="(slide) in 6"
        :key="slide"
      >
        <v-sheet
          color="#213342"
          height="100%"
          class="d-flex justify-center align-center"
        >
          <div class="d-none d-lg-flex justify-space-around align-center carousel-content-wrapper">
            <ProductCard :active-hover="false" />
            <ProductCard :active-hover="false" />
            <ProductCard :active-hover="false" />
          </div>
          <div class="d-md-flex d-lg-none d-none justify-space-around align-center carousel-content-wrapper">
            <ProductCard :active-hover="false" />
            <ProductCard :active-hover="false" />
          </div>
          <div class="d-flex d-md-none justify-space-around align-center carousel-content-wrapper">
            <ProductCard :active-hover="false" />
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import ProductCard from '../ProductCard/ProductCard.vue';

export default @Component({
  components: { ProductCard }
})

class Top10Goods extends Vue {}
</script>

<style scoped lang="scss">
  .carousel-wrapper{
    padding-top: 80px;
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
