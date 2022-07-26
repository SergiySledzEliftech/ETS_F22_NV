<template>
  <div class="card">
    <div class="wrapper">
      <div class="conteiner">
        <div class="card-header">
          <div class="card-header__info-sum">
            <div>
              <p>До сплати</p>
            </div>
            <div>
              <p>
                <span>520.00</span>
                <span> uah</span>
              </p>
            </div>
          </div>
          <div class="card-header__info-text">
            <p>Оплата за замовлення №740070864 на суму 520 грн, в т.ч. ПДВ</p>
          </div>
        </div>
        <div class="card-form">
          <div class="card-form__inner">
            <div class="card-form__count">
              <div class="card-form__card">
                <label>Номер картки</label>
                <input type="text" class="input" placeholder="**** **** **** ****">
              </div>
              <div class="card-form__validaty">
                <div class="card-form__validity-date validate">
                  <div class="validity-date__inner">
                    <label>Термін дії:</label>
                    <input type="text" class="input input--validate" placeholder="MM / YY">
                  </div>
                </div>
                <div class="card-form__validity-cvv validate">
                  <div class="validity-date__inner">
                    <label>CVV</label>
                    <input type="text" class="input input--validate" placeholder="XXX">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-button">
          <v-btn
            class="ma-2 btn--card"
            outlined
            color="indigo"
          >
            PAYMENTS
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

export default @Component({
  name: 'PaymentCard',
  components: {}
})

class PaymentCard extends Vue {

}
</script>

<style lang="sass" scoped>
.card
  position: absolute
  top: 0px
  bottom: 0px
  right: 0
  left: 0
  background: rgba(249, 249, 250, 0.9)
  padding-top: 12px
  padding-bottom: 50px
  z-index: 11
label
  margin-bottom: 10px
.wrapper
  margin-left: auto
  margin-right: auto
  max-width: 580px
  width: 100%
  height: 600px
  padding: 5px
  background: #F9F9FA
  box-shadow: 0px 0px 10px rgba(33, 33, 33, 0.25)
  border-radius: 8px
.card-header
  border: 1px solid rgb(224, 230, 237)
  padding: 16px
  border-radius: 15px
  margin-bottom: 16px
  &__info-sum
    display: flex
    justify-content: space-between
.card-form
  border: 1px solid rgb(224, 230, 237)
  padding: 16px
  border-radius: 15px
  margin-bottom: 50px
  &__card
    display: flex
    flex-direction: column
    margin-bottom: 15px
  &__validaty
    display: flex
    flex-wrap: wrap
.card-button
  padding: 16px
  text-align: center
.validate
  max-width: 50%
  flex: 1
  padding: 5px
  width: 50%
.validity-date
  &__inner
    margin: 0 -5px
    display: flex
    flex-direction: column
.input
  display: block
  width: 60%
  height: 60px
  padding: 10px
  font-size: 28px
  line-height: 30
  color: black
  background-color: #fff
  border: 1px solid #ced4da
  border-radius: 8px
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
  outline: none
  &:focus
    box-shadow: 0px 0px 0px 3px #ced4da
  &--validate
    width: 100%
    text-align: center
    &:focus
      box-shadow: 0px 0px 0px 3px #ced4da
.btn
  &--card
    width: 100%
    border-radius: 8px
    letter-spacing: 27px
    font-size: 25px
    color: #fff
    text-transform: none
    height: 50px
    padding: 0 20px
</style>
