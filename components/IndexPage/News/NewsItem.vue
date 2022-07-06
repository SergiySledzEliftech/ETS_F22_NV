<template>
  <div>
    <v-card
      class="d-flex d-align-center justify-space-between card"
      height="400px"
      :class="{showAllContent : showAllContent}"
    >
      <v-img
        src="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=20&m=149060607&s=612x612&w=0&h=To8zlQbIQ66ep7g-C-19aAFi2CdK98sFnLdSWL8zrl4="
        max-width="45%"
        height="100%"
        class="news-item-img"
      />
      <div class="news-item-text d-flex align-start flex-column justify-space-around">
        <h4>{{ newsItemTitle }}</h4>
        <div class="article-content">
          <p>{{ newsItemArticle }}</p>
        </div>
        <v-btn
          text
          color="#E31F26"
          @click="()=>{
            showAllContent = !showAllContent
            scroll ()
            return null
          }"
        >
          <span class="btn-text">{{ showAllContent ? 'Hide' : 'Details' }}</span>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class NewsItem extends Vue {
  @Prop({ type: String, required: true }) newsItemTitle
  @Prop({ type: String, required: true }) newsItemArticle

  data () {
    return {
      showAllContent: false
    };
  }

  scroll () {
    document.getElementById('news-header').scrollIntoView();
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

    transition: height 0.6s;
  }

  .showAllContent{
    height: 90vh !important;

    flex-direction: column;
    .news-item-text{
      height: 70% !important;
      min-width: 100% !important;
    }
    .news-item-img{
      height: 25% !important;
      min-width: 100% !important;
      margin-bottom: 5% !important;
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
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #dedede;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
