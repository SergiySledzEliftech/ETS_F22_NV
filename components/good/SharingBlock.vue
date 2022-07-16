<template>
  <div class="sharing">
    <p class="sharing-title">
      Share on social networks
    </p>
    <ul class="sharing__list">
      <li class="sharing__item">
        <a href="#" class="sharing__item-link">
          <img src="~/assets/img/good-page/facebook.svg" width="40px" height="40px" alt="facebook" class="sharing__item-img">
        </a>
      </li>
      <li class="sharing__item">
        <a href="#" class="sharing__item-link">
          <img src="~/assets/img/good-page/telegram.svg" alt="telegram" class="sharing__item-img">
        </a>
      </li>
      <li class="sharing__item">
        <a href="#" class="sharing__item-link">
          <img src="~/assets/img/good-page/twitter.svg" alt="twitter" class="sharing__item-img">
        </a>
      </li>
      <li class="sharing__item">
        <a href="#" class="sharing__item-link">
          <img src="~/assets/img/good-page/viber.svg" alt="viber" class="sharing__item-img">
        </a>
      </li>
      <li class="sharing__item">
        <a href="#" class="sharing__item-link">
          <img src="~/assets/img/good-page/vk.svg" alt="vk" class="sharing__item-img">
        </a>
      </li>
      <li class="sharing__item">
        <a href="#" class="sharing__item-link">
          <img src="~/assets/img/good-page/classmates.svg" alt="classmates" class="sharing__item-img">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

export default @Component({
  name: 'Sharing',
  components: {

  }
})

class SharingBlock extends Vue {

}
</script>

<style lang="scss" scoped>
@import "assets/css/good-media.scss";

.container{
  padding: 0;
}
ul, li{
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
}
.sharing{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include responsive-value("gap", 20, 10, $bp_laptop);
  @include responsive-value("padding", 60, 20, $bp_laptop);
  background: $bg;
  border-radius: 10px;
  .sharing-title{
    text-align: center;
    line-height: 100%;
    margin: 0;
    @include responsive-value("font-size", 35, 20, $bp_laptop);
  }
  .sharing__list{
    display: flex;
    @include responsive-value("gap", 20, 10, $bp_laptop);
  }
  .sharing__item img{
    @include responsive-value("width", 40, 20, $bp_laptop);
    @include responsive-value("height", 40, 20, $bp_laptop);
  }
}
</style>
