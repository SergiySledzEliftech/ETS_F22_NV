<template>
  <div>
    <v-card
    class="d-none d-md-flex d-align-center justify-space-between card"
    height="400px">
    <v-img
    src="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=20&m=149060607&s=612x612&w=0&h=To8zlQbIQ66ep7g-C-19aAFi2CdK98sFnLdSWL8zrl4="
    max-width="45%"
    height="100%" />
    <div class="news-item-text d-flex align-start flex-column justify-space-around">
      <h4>{{newsItemTitle}}</h4>
      <div class="article-content">
        <p>{{newsItemArticle}}</p>
      </div>
      <v-btn color="#E31F26">
        <span class="btn-text">Details</span>
      </v-btn>
    </div>
  </v-card>
  <v-card
      class="mx-auto d-md-none"
      max-width="100%"
    >
      <v-img
        src="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=20&m=149060607&s=612x612&w=0&h=To8zlQbIQ66ep7g-C-19aAFi2CdK98sFnLdSWL8zrl4="
        height="400px"
        width="100%"
      />

      <v-card-title>
        {{newsItemTitle}}
      </v-card-title>

      <v-card-subtitle>
        {{newsItemArticle.slice(0, 150)+"..."}}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="#E31F26"
          text
        >
          Details
        </v-btn>

        <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      </v-card-actions>
       <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{newsItemArticle}}
        </v-card-text>
      </div>
    </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

export default @Component

class NewsItem extends Vue {
  data () {
    return {
      newsItemTitle: 'Lorem ipsum dolor sit amet',
      newsItemArticle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quos molestias soluta odit accusamus qui fugit voluptatem tempore? Ratione totam nulla accusamus consectetur dicta tenetur odit minus nesciunt eaque mollitia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga molestias odit eaque at aspernatur id quas voluptatum obcaecati incidunt in et autem ullam ducimus sit, architecto molestiae mollitia sed asperiores.',
      show: false
    };
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
</style>
