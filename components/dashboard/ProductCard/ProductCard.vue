<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :to="{ name : 'categories-id', params: { id : idProp }}"
      class="mx-auto product-card"
      max-width="304px"
      height="304px"
      :elevation="hover ? 16 : 2"
    >
      <v-img
        v-if="!isLoading"
        class="product-card-img"
        :src="img"
        height="100%"
        width="100%"
      />

      <div v-else class="circle-wrapper">
        <v-progress-circular class="circle" indeterminate :size="100" />
      </div>

      <v-tooltip top color="black">
        <template #activator="{ on, attrs }">
          <v-card-title
            class="product-card-title"
            v-bind="attrs"
            v-on="on"
          >
            {{ formatString(title) }}
          </v-card-title>
        </template>
        <span>{{ title }}</span>
      </v-tooltip>
    </v-card>
  </v-hover>
</template>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
export default @Component

class ProductCard extends Vue {
  @Prop({ default: 'Loading...' }) title
  @Prop() img
  @Prop() isLoading
  @Prop() idProp

  formatString (str) {
    return str.length > 17 ? str.slice(0, 17) + '...' : str;
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
        filter: brightness(25%);
      }
    }

    &:hover{
      .circle-wrapper{
        filter: brightness(25%);
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
    padding-top: 0 !important;

    font-size: 20px;
    font-weight: bold;
    line-height: 1.4rem;
  }

  .product-card-img{
    filter: none;
    transition: filter 0.3s;
  }

  .circle-wrapper{
    min-width: 304px;
    filter: none;
    transition: filter 0.3s;
    height: 100%;
    background-color: white;

    .circle{
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
