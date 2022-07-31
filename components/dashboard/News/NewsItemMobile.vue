<template>
  <div :class="{rotateY : rotateY}" class="news-item-wrapper-mobile">
    <v-card
      class="mx-auto"
      max-width="100%"
      :class="{rotateY : rotateY}"
    >
      <v-img
        :src="img"
        height="400px"
        width="100%"
      />

      <v-card-title>
        {{ newsItemTitle }}
      </v-card-title>

      <v-card-actions>
        <v-btn
          color="var(--primary)"
          text
          @click="detailsClick"
        >
          {{ btnText }}
        </v-btn>
        <v-spacer />
        <v-btn
          color="var(--primary)"
          text
          :disabled="!isLast"
          @click="nextClick"
        >
          Next
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider />

          <v-card-text>
            {{ newsItemArticle }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class NewsItem extends Vue {
  @Prop({ required: true }) img
  @Prop({ required: true }) newsItemTitle
  @Prop({ required: true }) newsItemArticle
  @Prop({ type: Boolean, required: true }) isLast

  show = false
  btnText = 'More...'
  rotateY = false

  detailsClick () {
    this.show = !this.show;
    this.btnText = this.show ? 'Hide' : 'More...';
  }

  nextClick () {
    if (this.isLast) {
      this.$emit('nextArticle');
      this.rotateY = !this.rotateY;
    }
  }
}
</script>

<style scoped lang="scss">
  .news-item-text{
    padding: 30px;
    width: 45%;
    background-color: $bg;
    height:100%;
    border-radius: 30px 0px 0px 30px !important;
  }

  .card{
    border: none !important;
    box-shadow: none !important;
  }

  .btn-text{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    text-align: center;

    color: #FFFFFF;
  }

  .article-content{
    height: 200px;
    overflow: scroll;
    overflow-x: hidden;
  }

  .rotateY{
    transform: rotateY(180deg);
  }

  .news-item-wrapper-mobile{
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }
</style>
