<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto product-card"
      max-width="304px"
      height="304px"
      :elevation="hover ? 16 : 2"
    >
      <v-img
        class="product-card-img"
        :src="img"
        height="100%"
        width="100%"
      />

      <v-card-title
        :title="title.length>20 ? title: null"
        class="product-card-title"
      >
        {{ formatString(title) }}
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
export default @Component

class ProductCard extends Vue {
  @Prop({ default: 'Loading...' }) title
  @Prop({ default: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' }) img

  formatString (str) {
    return str.length > 20 ? str.slice(0, 20) + '...' : str;
  }
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
