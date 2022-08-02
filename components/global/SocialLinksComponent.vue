<template>
  <div class="header-social">
    <a href="https://www.viber.com/ua/" target="_blank">
      <img src="~/assets/img/viber.png" alt="viber">
    </a>
    <a href="https://web.telegram.org/k/" target="_blank">
      <img src="~/assets/img/telegram.png" alt="telegram">
    </a>
    <a href="https://www.whatsapp.com/?lang=uk" target="_blank">
      <img src="~/assets/img/whatsapp.png" alt="whatsapp">
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .header-social {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 992px) {
      display: none;
    }

    a {
      display: flex;
      margin-right: 10px;
      margin-bottom: 0;

      @media only screen and (max-width: 992px) {
        display: inline-block;
      }
    }
  }
</style>
