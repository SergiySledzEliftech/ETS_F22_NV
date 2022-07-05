<template>
    <v-hover v-slot="{ hover }" class="product-card">
      <v-card
        class="mx-auto"
        max-width="304px"
        :elevation="hover && activeHover ? 10 : 2"
      >
        <v-img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          height="200px"
          width="100%"
        />

        <v-card-title>
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
  }
</style>
