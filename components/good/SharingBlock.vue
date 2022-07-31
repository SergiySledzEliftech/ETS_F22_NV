<template>
  <div class="sharing">
    <p class="sharing-title">
      Share on social networks
    </p>
    <ul class="sharing__list">
      <li
        v-for="(icon, index) in icons"
        :key="index"
        class="sharing__item"
      >
        <a :href="icon.link" class="sharing__item-link">
          <img :src="require('~/assets/img/good-page/' + icon.name + '.svg')" :alt="icon.name" class="sharing__item-img">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

export default @Component({
})

class SharingBlock extends Vue {
  icons = [
    {
      link: 'https://www.facebook.com/',
      name: 'facebook'
    },
    {
      link: 'https://web.telegram.org/',
      name: 'telegram'
    },
    {
      link: 'https://twitter.com/',
      name: 'twitter'
    },
    {
      link: 'https://www.viber.com/',
      name: 'viber'
    }
  ]
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
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include responsive-value("gap", 20, 10, $bp_laptop);
  @include responsive-value("padding", 60, 20, $bp_laptop);
  background: $bg;
  border-radius: 10px;
  @media only screen and (max-width: $bp_tablet + px) {
    border-radius: 0;
  }
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
