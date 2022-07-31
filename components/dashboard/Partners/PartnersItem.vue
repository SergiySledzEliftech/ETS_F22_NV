<template>
  <div>
    <v-tooltip top>
      <template #activator="{ on, attrs }">
        <v-card
          to="/Services/About"
          class="partners-item-wrapper ml-5 mr-5 mb-5 d-none d-md-flex"
          min-width="150px"
          height="150px"
          color="var(--bg)"
        >
          <v-img
            v-if="!isLoading"
            :src="img"
            width="100px"
            height="100px"
            class="partners-item-img"
            v-bind="attrs"
            v-on="on"
          />
          <div v-else class="circle-wrapper" v-bind="attrs" v-on="on">
            <v-progress-circular class="circle" indeterminate :size="70" />
          </div>
        </v-card>
      </template>
      <span>{{ companyName }}</span>
    </v-tooltip>
    <v-card
      to="/Services/About"
      class="partners-item-wrapper ml-5 mr-5 mb-5 d-md-none"
      min-width="150px"
      color="var(--bg)"
    >
      <v-img
        v-if="!isLoading"
        :src="img"
        width="100px"
        height="100px"
        class="partners-item-img"
      />
      <div v-else class="circle-wrapper">
        <v-progress-circular class="circle" indeterminate :size="70" />
      </div>
      <div class="d-flex align-center justify-center mt-2">
        <span class="partner-title"> {{ companyName }} </span>
      </div>
    </v-card>
  </div>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class PartnersItem extends Vue {
  @Prop({ required: true }) img
  @Prop({ type: String, required: true, default: 'Loading...' }) companyName
  @Prop() isLoading
}
</script>

<style scoped lang="scss">
  .partners-item-wrapper{
    background-color: $bg;
    padding: 25px;
    padding-bottom: 10px;
  }

  .circle-wrapper{
    min-width: 100px;
    height: 100px;

    .circle{
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: $bg;
    }
  }

  .partner-title{
    font-weight: normal;
  }
</style>
