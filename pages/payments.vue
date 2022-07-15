<template lang="pug">
  .payments
    PaymentCard(
      v-if='modalCardVisible'
      )
    .row
      .col.m-r-2
        .payments__list-title.m-b-3
          .payments__title-number
            span
              <fa icon="1"/>
          .payments__title-text
            p Сontacts
        .payments__contact
          .payments__contact-inner
            <v-form>
              <v-container>
                v-row.form-row
                  v-col.form-col(
                    cols="12"
                    sm="6"
                    md="4"
                  )
                    v-text-field(
                      label="Phone Number"
                      outlined
                      dense
                      v-model="phone"
                      :rules="[rules.required, rules.phone]"
                    )
                  v-col.form-col(
                    cols="12"
                    sm="6"
                    md="4"
                  )
                    v-text-field(
                      label="Name"
                      outlined
                      dense
                      min:2
                    )
                  v-col.form-col(
                    cols="12"
                    sm="6"
                    md="4"
                  )
                    v-text-field(
                      label="Last Name"
                      outlined
                      dense
                    )
              </v-container>
            </v-form>
        .payments__list-title.m-b-3
          .payments__title-number
            span
              <fa icon="2"/>
          .payments__title-text
            p Payments
        .payments__contact.m-b-4(v-if='showPaymentsTypeCard')
          .payments__type(
            @click='changeShowPaymentsTypeCard'
            ref='observer'
            )
            .payments__type-inner.m-b-2
              .payments__type-images
                img(
                :src=" require('../assets/img/payments/mastercard-logo.png')" alt="mastercard"
                class="payments__type-image"
                )
              .payments__type-images
                img(
                :src=" require('../assets/img/payments/visa-logo.png')" alt="visa"
                class="payments__type-image"
                )
            p Безпечна онлайн-оплата карткою
        .payments__contact.m-b-4(v-if='showPaymentsType')
          .payments__type(
            @click='changeShowPaymentsType'
            )
            .payments__type-inner.m-b-2
              .payments__type-images
                img(
                :src=" require('../assets/img/payments/cash-pay-logo.png')" alt="cash-pay"
                class="payments__type-image"
                )
            p Оплата готівкою при отриманні замовлення
      .col.col-desktop-2-5
        .payments__orders.m-b-8
          .orders
            .orders__header
              .orders__header-title
                h4(class='header-text') Your order
              .orders__header-price
                h4(class='header-text') {{totalCost}} UAH
            .orders__items
              .orders__item.m-b-4(v-for='item in orderedGoods' :key='item.id')
                .orders__item-image
                  img(:src=" require('../assets/img/payments/' + item.img)", alt="item")
                .orders__item-content
                  .orders__item-inner.m-b-2
                    .orders__item-name {{item.name}}
                    .orders__item-quantity.m-r-2
                      span(class='orders__item-quantity--arithmetic') -
                      span(class='orders__item-quantity--number') {{item.quantity}}
                      span(class='orders__item-quantity--arithmetic') +
                  .orders__item-price.m-b-2 {{item.price}} uah
                  .orders__item-description.m-b-2 {{item.description}}
                  .orders__item-actions
                    <fa icon="trash-can"/>
        .payments__orders
           button(
            class='btn--payments'
            @click='showModalCard'
            ) PAY
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import PaymentCard from '../components/payments/PaymentCard'
const { State, Mutation } = namespace('ordered')

export default @Component({
  name: 'PaymentsPage',
  components: {
    PaymentCard
  },
  data () {
    return {
      title: 'Preliminary report',
      phone: '+(380)',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        phone: (value) => {
          const pattern = /\+[(][0-9]{3}[)][0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{3}/g
          return pattern.test(value) || 'Enter phone format +(380)XX-XX-XX-XXX.'
        }
      }
    }
  },
  computed: {
    totalCost () {
      let resalt = 0
      this.orderedGoods.forEach((element) => {
        resalt = resalt + element.price
      })
      return resalt
    }
  }
})

class IndexPaymentsPage extends Vue {
  modalCardVisible = false
  showPaymentsType = true
  showPaymentsTypeCard = true
  products = [
    {
      id: 1,
      price: 250,
      name: 'velobike',
      img: 'velobike.png',
      quantity: 1,
      description: 'bike for cyti bike for cyti bike for cyti bike for cyti bike for cyti '
    },
    {
      id: 2,
      price: 270,
      name: 'bmxbike',
      img: 'bmxbike.png',
      quantity: 1,
      description: 'bike for mountain'
    }
  ]

  methods () {
  }

  showModalCard () {
    this.modalCardVisible = true
  }

  changeShowPaymentsType () {
    this.showPaymentsTypeCard = false
  }

  changeShowPaymentsTypeCard () {
    this.showPaymentsType = false
  }

  @State orderedGoods;
  @Mutation setOrderedGoods;

  mounted () {
    this.setOrderedGoods(this.products)
  }
}
</script>

<style lang="sass" scoped>
$gap: 5
$vstep: 5
$bradius: 8

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
    padding-left: $gap * 3 * 1px
    padding-right: $gap * 3 * 1px
    padding-top: $gap * 2 * 1px
    padding-bottom: $gap * 2 * 1px
    display: flex
    align-items: center
  &__title-number
    line-height: 0
    margin-left: 7px
    span
      position: relative
      z-index: 10
      svg
        margin-top: auto
        margin-bottom: auto
        color: #fff
      &::after
        content: ''
        position: absolute
        width: 22px
        height: 22px
        background: #183153
        bottom: 0
        left: 0
        transform: translateX(-35%) translateY(7%)
        border-radius: 50%
        z-index: -3
  &__title-text
    padding-left: $gap * 3 * 1px
    p
      margin-bottom: 0
      font-weight: 700
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
  &__type-inner
    display: flex
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
.orders
  width: 100%
  &__header
    display: flex
    justify-content: space-between
    padding-bottom: $gap * 2 * 1px
    padding-top: $gap * 2 * 1px
    h4
      font-size: 30px
      font-weight: bold
  &__items
    width: 100%
    padding: $gap * 2 * 1px
  &__item
    border-color: #dadae8
    box-shadow: 0 1px 10px #dadae8
    padding: $gap * 2 * 1px
    display: flex
    justify-content: space-between
    height: 230px
  &__item-image
    // border: 1px solid green
    // flex: 1
    width: 35%
    padding: 0 5px
    display: flex
    img
      max-width: 100%
      max-height: 100%
      margin-bottom: auto
      margin-top: auto
      margin-left: auto
      margin-right: auto
  &__item-content
    // border: 1px solid yellow
    // flex: 2
    width: 65%
    padding: 0 10px
  &__item-inner
    display: flex
    justify-content: space-between
  &__item-name
    font-size: 40px
    font-weight: 400
  &__item-quantity
    font-size: 20px
    font-weight: 400
    margin-top: auto
    margin-bottom: auto
    &--number
      margin-left: 10px
      margin-right: 10px
      cursor: inherit
    &--arithmetic
      cursor: pointer
  &__item-price
    font-size: 30px
    font-weight: 600
  &__item-description
    font-size: 20px
    color: black
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
  &__item-actions
    position: relative
    svg
      position: absolute
      right: 10px
      height: 25px
      opacity: 0.2
      &:hover
        opacity: 1
        color: red
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
.row
  margin-left: $gap * -1px
  margin-right: $gap * -1px
  margin-bottom: $vstep * 1px
  display: flex
  flex-wrap: wrap
.col
  width: 100%
  padding-left: $gap * 3 * 1px
  padding-right: $gap * 3 * 1px
  padding-bottom: $gap * 3 * 1px
  padding-top: $gap * 3 * 1px
  min-height: 100%
  // border: 1px solid red
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
</style>
