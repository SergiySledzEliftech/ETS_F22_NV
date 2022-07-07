<template>
  <a href="#">
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-card class="partners-item-wrapper ml-5 mr-5 mb-5">
          <v-img
            :src="url"
            width="100px"
            height="100px"
            class="partners-item-img"
            v-bind="attrs"
            v-on="on"
          />
          </v-card>
        </template>
      <span>{{ companyName }}</span>
    </v-tooltip>
  </a>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class PartnersItem extends Vue {
  @Prop({ type: String, required: true }) url
  @Prop({ type: String, required: true }) companyName
}
</script>

<style scoped lang="scss">
  .partners-item-wrapper{
    width: 150px;
    height: 150px;
    background-color: $bg;
    cursor: pointer;
    padding: 25px;
  }

  .partners-item-wrapper:hover{
    .partners-item-img{
      filter: none;
    }
  }

  .partners-item-img{
    filter: grayscale(100%);
    transition: 500ms;
  }
</style>
