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
          <img src="~/assets/img/good-page/telegram.svg" width="40px" height="40px" alt="telegram" class="sharing__item-img">
        </a>
      </li>
      <li class="sharing__item">
        <a href="#" class="sharing__item-link">
          <img src="~/assets/img/good-page/twitter.svg" width="40px" height="40px" alt="twitter" class="sharing__item-img">
        </a>
      </li>
      <li class="sharing__item">
        <a href="#" class="sharing__item-link">
          <img src="~/assets/img/good-page/viber.svg" width="40px" height="40px" alt="viber" class="sharing__item-img">
        </a>
      </li>
      <li class="sharing__item">
        <a href="#" class="sharing__item-link">
          <img src="~/assets/img/good-page/vk.svg" width="40px" height="40px" alt="vk" class="sharing__item-img">
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
  margin-top: 60px;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: $bg;
  border-radius: 10px;
  .sharing-title{
    font-size: 35px;
    line-height: 100%;
  }
  .sharing__list{
    display: flex;
    gap: 20px;
  }
}
</style>
