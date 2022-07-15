<template>
  <div class="info">
    <div class="info-wrapper">
      <section class="carousel">
        <carousel />
      </section>
      <section class="good">
        <div class="good__content">
          <div class="good__status">
            <p class="good__status-text">
              Rented
            </p>
          </div>
          <h1 class="good-title">
            2-комнатная квартира на Пролетарской, 6А
          </h1>
          <div class="good__props">
            <p class="good__props-size">
              WxHxL (mm): <span class="red-txt">450x500x900</span>
            </p>
            <p class="good__props-date">
              Published date: <span class="red-txt">4.07.2020</span>
            </p>
            <p class="good__props-rating">
              Rating: <span class="red-txt">9.5/10</span>
            </p>
            <p class="good__props-price">
              Price: <span class="red-txt">67 000$</span> | <span class="red-txt">174 267UAN</span>
            </p>
          </div>
          <div class="good__contacts">
            <p class="contacts-title">
              Contacts
            </p>
            <div class="contacts__list">
              <p class="contacts__list-name">
                <span class="red-txt">
                  Nina Plynska
                </span>
              </p>
              <div class="contacts__list-phone">
                <p class="phone-number">
                  <span class="red-txt">
                    +375 (29) 867-33-86
                  </span>
                </p>
                <div class="phone__messengers">
                  <a href="#" class="phone__messengers-link">
                    <img src="~/assets/img/good-page/viber.svg" alt="viber" class="phone__messengers-ico">
                  </a>
                  <a href="#" class="phone__messengers-link">
                    <img src="~/assets/img/good-page/telegram.svg" alt="telegram" class="phone__messengers-ico">
                  </a>
                  <a href="#" class="phone__messengers-link">
                    <img src="~/assets/img/good-page/facebook.svg" alt="facebook" class="phone__messengers-ico">
                  </a>
                </div>
              </div>
              <a href="#" class="contacts__list-mail"><span class="red-txt">nina-pv@gmail.com</span></a>
            </div>
          </div>
          <button class="btn_primary active">
            Rent
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Carousel from '~/components/good/Carousel/Carousel'

export default @Component({
  name: 'Info',
  components: {
    Carousel
  },
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]

    }
  }
})

class Info extends Vue {

}
</script>

<style lang="scss" scoped>
p{
  color: $dark;
  font-weight: 500;
  margin: 0;
}
a{
  font-weight: 500;
}
.info{
  margin-top: 30px;
  .info-wrapper{
    display: flex;
    background: #fff;
  }
}
.carousel{
  max-width: 610px;
  margin-right: 60px;
}
.good{
  position: relative;
  min-width: 1000px;
  background: $bg;
  border-radius: 30px 0 0 30px;
  .good__content{
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0 40px 20px;
    .good__status{
    }
    .good-title{
      font-size: 35px;
      line-height: 100%;
      color: $secondary;
    }
    .good__props{
      display: flex;
      flex-direction: column;
      gap: 10px;
      .good__props-price{
        font-weight: 600;
      }
    }
    .good__contacts{
      display: flex;
      flex-direction: column;
      gap: 10px;
      .contacts-title{
        font-size: 24px;
        line-height: 100%;
      }
      .contacts__list{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .contacts__list-phone{
        display: flex;
        align-items: center;
        gap: 20px;
        .phone__messengers{
          display: flex;
          gap: 8px;
          .phone__messengers-link{
            width: 18px;
            height: 18px;
          }
        }
      }
    }
    .btn_primary{
      width: 210px;
      height: 50px;
      border-radius: 5px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
      &:hover{
        opacity: 0.85;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
    }
  }

}
.carousel{
    ::v-deep .v-carousel__controls__item .v-icon{
      color: #C10015;
    }
}
</style>
