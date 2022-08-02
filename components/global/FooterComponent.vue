<template>
  <footer>
    <div class="container">
      <div class="footer-row">
        <div class="footer-column">
          <h3 class="footer-logo">
            GloMaRe
          </h3>
          <p class="footer-text">
            GloMaRe service helps you buy or sell almost anything from hand to hand.
          </p>
          <p class="footer-text">
            Follow as:
          </p>
          <ul class="footer-social">
            <li>
              <a href="https://www.instagram.com/" class="footer-instagram" target="_blank" />
            </li>
            <li>
              <a href="https://www.youtube.com/" class="footer-youtube" target="_blank" />
            </li>
            <li>
              <a href="https://www.facebook.com/" class="footer-facebook" target="_blank" />
            </li>
          </ul>
          <NuxtLink :to="{ name: 'Services-Help'}" class="footer-link-help">
            Help and Feedback
          </NuxtLink>
        </div>
        <div class="footer-column">
          <div class="footer-title">
            Services
          </div>
          <nuxt-link :to="{ name: 'Services-MobileApplication'}" class="footer-link">
            Mobile application
          </nuxt-link>
          <NuxtLink :to="{name:'Services-GlomarePremium'}" class="footer-link">
            GloMaRe Premium
          </NuxtLink>
          <NuxtLink :to="{name:'Services-PaidServices'}" class="footer-link">
            Paid services
          </NuxtLink>
          <NuxtLink :to="{name:'Services-GiftSertificates'}" class="footer-link">
            Gift certificates
          </NuxtLink>
          <NuxtLink :to="{name:'Chat'}" class="footer-link">
            Chat
          </NuxtLink>
        </div>
        <div class="footer-column">
          <div class="footer-title">
            To partners
          </div>
          <NuxtLink :to="{name:'to-partners-Cooperations'}" class="footer-link">
            Cooperation with us
          </NuxtLink>
          <NuxtLink :to="{name:'to-partners-Franchising'}" class="footer-link">
            Franchising
          </NuxtLink>
          <NuxtLink :to="{name:'to-partners-Delivery'}" class="footer-link">
            Delivery: rules and promotions
          </NuxtLink>
          <NuxtLink :to="{name:'to-partners-Policy'}" class="footer-link">
            Privacy policy
          </NuxtLink>
          <NuxtLink :to="{name:'to-partners-SafetyRules'}" class="footer-link">
            Safety rules
          </NuxtLink>
        </div>
        <div class="footer-column">
          <div class="footer-title">
            Contacts:
          </div>
          <div class="footer-time">
            Пн – Пт: 09:00 – 19:00
          </div>
          <div class="footer-time">
            Сб: 09:00 – 15:00
          </div>
          <a class="footer-email" href="mailto:info@glomare.com">info@glomare.com</a>
          <a class="header-phone" href="tel:+375295967676">+38 (067) 111-33-88</a>
          <a class="footer-location" href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9+%D0%92%D0%B0%D0%BB,+33,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/data=!4m2!3m1!1s0x40d4ce6b2ddd9b35:0xc4bb50f80bfb300c?sa=X&ved=2ahUKEwi4gonQ5In5AhUFqIsKHS0nD4wQ8gF6BAgTEAE">33 Nizhniy Val Street, Kyiv, 02000</a>
        </div>
      </div>
      <div class="footer-row-copyright">
        &copy; 2022 GloMaRe.com
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer{
    background: $secondary;
    color: white;
    padding: 50px 20px 20px 20px;

    @media only screen and (max-width: 992px) {
      padding: 20px 0;
    }

    .footer-row{
      display: flex;
      margin-bottom: 50px;

      @media only screen and (max-width: 1264px) {
        flex-wrap: wrap;
        margin-bottom: 10px;
      }
      @media only screen and (max-width: 992px) {
        flex-direction: column;
      }
    }

    .footer-column{
      display: flex;
      flex-direction: column;
      width: 20%;
      padding: 0 20px 0 0;

      @media only screen and (max-width: 1264px) {
        width: 50%;
        margin-bottom: 20px;
      }

      @media only screen and (max-width: 992px) {
        width: 100%;
      }

      &:first-child{
        width: 40%;

        @media only screen and (max-width: 1264px) {
          width: 50%;
        }

        @media only screen and (max-width: 992px) {
          padding: 0;
          width: 100%;
        }
      }

      &:nth-child(2){
        @media only screen and (max-width: 1264px) {
          margin-top: 50px;
        }

        @media only screen and (max-width: 992px) {
          margin-top: 0;
        }
      }
    }
    .footer-logo{
      color: $primary;
      font-weight: 600;
    }
    .footer-text{
      color: white;
    }
    .footer-title{
      margin-bottom: 10px;
      font-weight: bold;
    }
    .footer-link{

    }
    .footer-link-help{
      text-decoration: underline;
    }
    .footer-social{
      display: flex;
      margin-bottom: 20px;
      list-style: none;
      padding: 0;

      li{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        margin-right: 14px;
        border-radius: 50%;

        &:hover{
          background: $primary;
        }
      }

      li a{
        width: 40px;
        height: 40px;
        display: block;
        margin-bottom: 0;
      }
    }

    .footer-instagram{
      background-image: url("~assets/img/instagram.png");
    }
    .footer-youtube{
      background-image: url("~assets/img/youtube.png");
    }
    .footer-facebook{
      background-image: url("~assets/img/facebook.png");
    }

    a{
      color: white;
      font-weight: normal;
      margin-bottom: 10px;
    }

    .header-phone{
      margin-left: 16px;
      position: relative;

      &:before{
        content: "";
        position: absolute;
        top: 3px;
        left: -17px;
        height: 16px;
        width: 14px;
        background-image: url("~assets/img/phone-white.png");
      }
    }

    .footer-location{
      position: relative;
      margin-left: 16px;
      margin-bottom: 10px;

      &:before{
        content: "";
        position: absolute;
        top: 3px;
        left: -17px;
        height: 20px;
        width: 15px;
        background-image: url("~assets/img/marker-white.png");
      }
    }

    .footer-time{
      position: relative;
      margin-left: 16px;
      margin-bottom: 10px;

      &:before{
        content: "";
        position: absolute;
        top: 5px;
        left: -17px;
        height: 20px;
        width: 15px;
        background-image: url("~assets/img/clock.png");
      }
    }

    .footer-email{
      position: relative;
      margin-left: 16px;
      margin-bottom: 10px;

      &:before{
        content: "";
        position: absolute;
        top: 6px;
        left: -17px;
        height: 20px;
        width: 20px;
        background-image: url("~assets/img/email.png");
      }
    }

    .footer-row-copyright{
      font-size: 0.75rem;
      text-align: center;
    }

    h3, p {
      margin-bottom: 16px!important;
    }
  }
</style>
