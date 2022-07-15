<template>
  <div class="sharing">
    <p class="sharing-title">Share on social networks</p>
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
ul, li{
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
}
.sharing{
  margin-top: 30px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: $bg;
  border-radius: 10px;
  @media only screen and (max-width: 1264px) {
    display: flex;
    gap: calc(5px + (20 - 5) * (100vw - 320px) / (1280 - 320));
    padding: calc(20px + (60 - 20) * (100vw - 320px) / (1280 - 320));
  }
  .sharing-title{
    text-align: center;
    font-size: 35px;
    line-height: 100%;
    margin: 0;
    @media only screen and (max-width: 1264px) {
      font-size: calc(20px + (35 - 20) * (100vw - 320px) / (1280 - 320));
    }
  }
  .sharing__list{
    display: flex;
    gap: 20px;
    @media only screen and (max-width: 1264px) {
      gap: calc(10px + (20 - 10) * (100vw - 320px) / (1280 - 320));
    }
  }
  .sharing__item img{
    width: 40px;
    height: 40px;
    @media only screen and (max-width: 1264px) {
      width: calc(20px + (40 - 20) * (100vw - 320px) / (1280 - 320));
      height: calc(20px + (40 - 20) * (100vw - 320px) / (1280 - 320));
    }
  }
}
</style>
