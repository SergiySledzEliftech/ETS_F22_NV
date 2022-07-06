<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto product-card"
      max-width="304px"
      height="304px"
      :elevation="hover && activeHover ? 10 : 2"
    >
      <v-img
        class="product-card-img"
        src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
        height="100%"
        width="100%"
      />

      <v-card-title
        class="product-card-title"
      >
        Interesting thing to rent
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class ProductCard extends Vue {
  @Prop({ required: true, type: Boolean })activeHover
}
</script>

<style scoped lang="scss">
  .product-card{
    cursor: pointer;

    &:hover{
      .product-card-title{
        opacity: 1;
      }
    }

    &:hover{
      .product-card-img{
        filter: brightness(35%);
      }
    }
  }

  .product-card-title{
    position: absolute;
    bottom: 5px;
    left: 5px;
    opacity: 0;
    color: white;
    transition: opacity 0.3s;
  }

  .product-card-img{
    filter: none;
    transition: filter 0.3s;
  }
</style>
