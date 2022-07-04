<template>
  <a href="#">
    <v-card class="partners-item-wrapper ml-5 mr-5 mb-5">
    <v-img
    :src="url"
    width="150px"
    height="150px"
    class="partners-item-img"/>
  </v-card>
  </a>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class PartnersItem extends Vue {
  @Prop({ type: String, required: true }) url
}
</script>

<style scoped lang="scss">
  .partners-item-wrapper{
    width: 200px;
    height: 200px;
    background-color: $bg;
    cursor: pointer;
    padding: 25px;
  }

  .partners-item-wrapper:hover{
    .partners-item-img{
      filter: none;
      transition: 500ms;
    }
  }

  .partners-item-img{
    filter: grayscale(100%);
  }
</style>
