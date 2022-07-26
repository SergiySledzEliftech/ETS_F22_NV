<template>
  <a href="#">
    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <v-card
          class="partners-item-wrapper ml-5 mr-5 mb-5 d-none d-md-flex"
          min-width="150px"
          height="150px"
          color="var(--bg)"
        >
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
    <v-card
      class="partners-item-wrapper ml-5 mr-5 mb-5 d-md-none"
      min-width="150px"
      color="var(--bg)"
    >
      <v-img
        :src="url"
        width="100px"
        height="100px"
        class="partners-item-img"
      />
      <div class="d-flex align-center justify-center mt-2">
        <span class="partner-title"> {{ companyName }} </span>
      </div>
    </v-card>
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
    background-color: $bg;
    cursor: pointer;
    padding: 25px;
    padding-bottom: 10px;
  }
</style>
