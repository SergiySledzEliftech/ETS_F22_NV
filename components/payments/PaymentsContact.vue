<template>
  <div class="col m-r-7">
    <div class="payments__list-title m-b-3">
      <p class="payments__title-text">
        Сontacts
      </p>
    </div>
    <div class="payments__contact m-b-2">
      <div class="payments__contact-inner">
        <v-form>
          <v-container>
            <v-row class="form-row">
              <v-col class="form-col" cols="12" sm="6" md="4">
                <v-text-field
                  v-model="phone"
                  label="Phone Number"
                  outlined
                  dense
                  :rules="[rules.required, rules.phone]"
                />
              </v-col>
              <v-col class="form-col" cols="12" sm="6" md="4">
                <v-text-field label="Name" outlined dense min:2 />
              </v-col>
              <v-col class="form-col" cols="12" sm="6" md="4">
                <v-text-field label="Last Name" outlined dense />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
    <div class="payments__list-title m-b-3">
      <p class="payments__title-text">
        Payments
      </p>
    </div>
    <div class="payments__contact m-b-4">
      <div class="payments__type" :class="{payments__active:!showPaymentsCash}" @click="changeShowPaymentsCard">
        <div class="payments__type-inner m-b-2">
          <div class="payments__type-images">
            <img
              :src=" require('../../assets/img/payments/mastercard-logo.png')"
              alt="mastercard"
              class="payments__type-image"
            >
          </div>
          <div class="payments__type-images">
            <img :src=" require('../../assets/img/payments/visa-logo.png')" alt="visa" class="payments__type-image">
          </div>>
        </div>
        <p>Безпечна онлайн-оплата карткою</p>
      </div>
    </div>
    <div class="payments__contact">
      <div class="payments__type" :class="{payments__active:!showPaymentsCard}" @click="changeShowPaymentsCash">
        <div class="payments__type-inner m-b-2">
          <div class="payments__type-images">
            <img
              :src=" require('../../assets/img/payments/cash-pay-logo.png')"
              alt="cash-pay"
              class="payments__type-image"
            >
          </div>
        </div>
        <p>Оплата готівкою при отриманні замовлення</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

export default @Component({
  name: 'PaymentsContact',
  components: {},
  data () {
    return {
      title: 'Preliminary report',
      phone: '+(380)',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        phone: (value) => {
          const pattern = /\+[(][0-9]{3}[)][0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{3}/g;
          return pattern.test(value) || 'Enter phone format +(380)XX-XX-XX-XXX.';
        }
      }
    };
  }
})

class PaymentsContact extends Vue {
  showPaymentsCash = true
  showPaymentsCard = true
  methods () {
  }

  changeShowPaymentsCash () {
    console.log(11111);
    this.showPaymentsCash = true;
    this.showPaymentsCard = true;
    this.showPaymentsCard = false;
    this.$emit('payValidBtn', true);
  }

  changeShowPaymentsCard () {
    this.showPaymentsCash = true;
    this.showPaymentsCard = true;
    this.showPaymentsCash = false;
    this.$emit('payValidBtn', false);
  }

  changePaymentData () {
    this.showPaymentsCash = true;
    this.showPaymentsCard = true;
  }
}
</script>

<style  lang="sass" scoped>
$gap: 5
$vstep: 5
$bradius: 10
.noactive
  display: none
.payments
  position: relative
  margin-right: 0
  margin-left: 0
  // border: 1px solid black
  padding: $gap * 3 * 1px
  background: #f4f4f9
  &__list-title
    margin-left: $gap * 3 * -1px
    margin-right: $gap * 3 * -1px
    padding-top: $gap * 2 * 1px
    padding-bottom: $gap * 2 * 1px
    display: flex
    align-items: center
    justify-content: space-between
    h5
      font-size: 19px
      margin-bottom: 0
      font-weight: 700
      cursor: pointer
  //&__title-number
  &__title-text
    margin-bottom: 0
    font-weight: 700
    font-size: 30px
  &__contact
    margin-left: $gap * 3 * -1px
    margin-right: $gap * 3 * -1px
    padding-left: $gap * 3 * 1px
    padding-right: $gap * 3 * 1px
    padding-top: $gap * 3 * 1px
    padding-bottom: $gap * 3 * 1px
    border-radius: $bradius * 1px
    background: #fff
  &__contact-inner
    border: 3px solid yellow
    border-radius: $bradius * 1px
    padding: $gap * 3 * 1px
  &__type
    padding: $gap * 3 * 1px
    border: 3px solid yellow
    border-radius: $bradius * 1px
    min-height: 115px
    p
      margin-bottom: 0
      padding-left: 24px
  &__active
    border: 3px solid #183153
    border-radius: $bradius * 1px
    min-height: 115px
    padding: $gap * 3 * 1px
    // p
    //   margin-bottom: 0
    //   padding-left: 24px
  &__type-inner
    display: flex
    padding-left: 24px
  &__type-images
    width: 70px
    line-height: 0
  &__type-image
    max-width: 100%
  &__orders
    margin-left: $gap * 3 * -1px
    margin-right: $gap * 3 * -1px
    margin-top: $gap * 3 * -1px
    margin-top: $gap * 3 * -1px
    padding-left: $gap * 3 * 1px
    padding-right: $gap * 3 * 1px
    padding-top: $gap * 3 * 1px
    padding-bottom: $gap * 3 * 1px
    border-radius: $bradius * 1px
    background: #fff
.btn
  &--payments
    width: 100%
    border-radius: 8px
    margin-bottom: 0
    letter-spacing: 27px
    font-size: 25px
    font-weight: 700
    background: #183153
    color: #fff
    border-color: #E31F26
    text-transform: none
    height: 50px
    padding: 0 20px
.col
  width: 100%
  padding-left: $gap * 3 * 1px
  padding-right: $gap * 3 * 1px
  padding-bottom: $gap * 3 * 1px
  padding-top: $gap * 3 * 1px
  min-height: 100%
.col-desktop-2-5
  max-width: 100 / 2 * 1%
.form-row
  flex-direction: column
.form-col
  max-width: 100%
@for $i from 1 through 10
  .m-b-#{$i}
    margin-bottom: $i * $vstep * 1px
  .m-r-#{$i}
    margin-right: $i * $vstep * 1px
  .m-l-#{$i}
    margin-left: $i * $vstep * 1px
  .p-b-#{i}
    padding-bottom: $i * $vstep * 1px
</style>
