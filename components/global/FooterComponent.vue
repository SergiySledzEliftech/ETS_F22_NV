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
            Lorem Ipsum text
          </p>
          <ul class="footer-social">
            <li>
              <a href="#" class="footer-instagram" />
            </li>
            <li>
              <a href="#" class="footer-youtube" />
            </li>
            <li>
              <a href="#" class="footer-facebook" />
            </li>
          </ul>
          <a href="#" class="footer-link-help"> Help and Feedback </a>
        </div>
        <div class="footer-column">
          <div class="footer-title">
            Services
          </div>
          <a href="#" class="footer-link"> Mobile applications </a>
          <a href="#" class="footer-link"> GloMaRe Premium </a>
          <a href="#" class="footer-link"> Paid services </a>
          <a href="#" class="footer-link"> Gift certificates </a>
        </div>
        <div class="footer-column">
          <div class="footer-title">
            To partners
          </div>
          <a href="#" class="footer-link"> Cooperation with us </a>
          <a href="#" class="footer-link"> Franchising </a>
          <a href="#" class="footer-link"> Delivery: rules and promotions </a>
          <a href="#" class="footer-link"> Privacy policy </a>
          <a href="#" class="footer-link"> Safety rules </a>
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
          <div class="footer-email">
            info@glomare.com
          </div>
          <a class="header-phone" href="tel:+375295967676">+375 (29) 596 76 76</a>
          <div class="footer-location">
            33 Nizhniy Val Street, Kyiv, 02000
          </div>
        </div>
      </div>
      <div class="footer-row-copypright">
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

    .footer-row-copypright{
      font-size: 0.75rem;
      text-align: center;
    }
  }

</style>
