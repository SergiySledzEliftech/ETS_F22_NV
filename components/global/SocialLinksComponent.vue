<template>
  <div class="header-social">
    <a href="#">
      <img src="~/assets/img/viber.png" alt="viber">
    </a>
    <a href="#">
      <img src="~/assets/img/telegram.png" alt="telegram">
    </a>
    <a href="#">
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
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
</style>
