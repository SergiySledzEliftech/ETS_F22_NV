<template>
  <div :class="{rotateY : rotateY}" class="news-item-wrapper">
    <v-card
      class="d-flex d-align-center justify-space-between card"
      :class="{showAllContent : showAllContent}"
      :height="showAllContent ? 'auto' : '400px'"
    >
      <v-img
        :src="img"
        max-width="45%"
        height="100%"
        class="news-item-img"
      />
      <div class="news-item-text d-flex align-start flex-column justify-space-around">
        <h4>{{ newsItemTitle }}</h4>
        <div class="article-content">
          <p>{{ newsItemArticle }}</p>
        </div>
        <div class="d-flex align-center justify-space-between btn-wrapper">
          <v-btn
            text
            color="var(--primary)"
            @click="detailsClick"
          >
            <span class="btn-text">{{ detailsButtonText }}</span>
          </v-btn>
          <v-btn
            text
            color="var(--primary)"
            :disabled="!isLast"
            @click="nextClick"
          >
            <span class="btn-text">Next</span>
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class NewsItem extends Vue {
  @Prop({ type: String, required: true }) img
  @Prop({ type: String, required: true }) newsItemTitle
  @Prop({ type: String, required: true }) newsItemArticle
  @Prop({ type: Boolean, required: true }) isLast

  showAllContent = false
  rotateY = false
  detailsButtonText = 'More...'

  scroll () {
    this.$vuetify.goTo('#news-header', {
      duration: 0
    });
  }

  detailsClick () {
    this.scroll();
    this.detailsButtonText = this.showAllContent ? 'More...' : 'Hide';
    this.showAllContent = !this.showAllContent;
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
    transition: transform 0.5s;
    transform-style: preserve-3d;
  }
  .showAllContent{
    flex-direction: column-reverse;
    transform: rotateX(180deg);
    .news-item-text{
      height: auto !important;
      min-width: 100% !important;
      transform: rotateX(180deg) !important;
      border-radius: 0px 0px 30px 30px !important;

      .article-content{
        margin-top: 27.2px;
        height: auto;
        overflow: visible;
      }
    }
    .news-item-img{
      min-width: 100% !important;
      height: 300px !important;
      transform: rotateX(180deg) !important;
      border-radius: 30px 30px 0px 0px !important;
    }
  }

  .btn-text{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    text-align: center;
  }

  .article-content{
    height: 200px;
    overflow: scroll;
    overflow-x: hidden;
  }

  .article-content::-webkit-scrollbar { width: 0 !important }

  .btn-wrapper{
    width: 100%;
  }

  .news-item-wrapper{
    transition: transform 0.5s;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
  }

  .rotateY{
    transform: rotateY(360deg);
    .news-item-text, .news-item-img{
      transform:  rotateX(360deg);
    }
  }
</style>
