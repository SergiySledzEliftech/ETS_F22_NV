<template>
  <div class="payments__orders m-b-8">
    <div class="orders">
      <div class="orders__header">
        <div class="orders__header-title">
          <h4 class="header-text">
            Your order
          </h4>
        </div>
        <div class="orders__header-price">
          <h4 class="header-text">
            {{ totalCost }} UAH
          </h4>
        </div>
      </div>
      <div class="orders__items">
        <div v-for="item in orderGoods" :key="item.id" class="orders__item m-b-4">
          <div class="orders__item-image">
            <img :src=" require('../../assets/img/payments/' + item.img)" alt="item">
          </div>
          <div class="orders__item-content">
            <div class="orders__item-inner m-b-2">
              <div class="orders__item-name">
                {{ item.name }}
              </div>
              <div class="orders__item-quantity m-r-2">
                <span class="orders__item-quantity--arithmetic">-</span>
                <span class="orders__item-quantity--number">{{ item.quantity }}</span>
                <span class="orders__item-quantity--arithmetic">+</span>
              </div>
            </div>
            <div class="orders__item-price m-b-2">
              {{ item.price }} uah
            </div>
            <div class="orders__item-description m-b-2">
              {{ item.description }}
            </div>
            <div class="orders__item-actions" @click="deleteOrderedGoodFromList(item.id)">
              <fa icon="trash-can" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="payments__orders">
      <v-btn class="ma-2 btn--pay" outlined color="indigo" :disabled="BtnDisabled" @click="showModalCard">
        PAY
      </v-btn>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop, namespace } from 'nuxt-property-decorator';
const { State, Mutation, Action } = namespace('ordered');
// < button @click="showModalCard" class="btn--payments" : disabled = "BtnDisabled" > PAY</button >
export default @Component({
  name: 'PaymentsOrders',
  components: {}
})

class PaymentsOrders extends Vue {
  @Prop() BtnDisabled;
  @Prop() orderGoods

  @State orderedGoods;
  @Mutation setOrderedGoods;
  @Action deleteOrderedGood;

  get totalCost () {
    let resalt = 0;
    this.orderGoods.forEach((element) => {
      resalt = resalt + element.price;
    });
    return resalt;
  }

  methods () {
  }

  showModalCard () {
    this.$emit('modalCardVisible', true);
  }

  deleteOrderedGoodFromList (id) {
    this.deleteOrderedGood(id);
  }
}
</script>

<style lang="sass" scoped>

$gap: 5
$vstep: 5
$bradius: 10

.noactive
  display: none
.payments
  position: relative
  margin-right: 0
  margin-left: 0
  padding: $gap * 3 * 1px
  background: #f4f4f9
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
  &--pay
    width: 100%
    border-radius: 8px
    letter-spacing: 27px
    font-size: 25px
    color: #fff
    text-transform: none
    height: 50px
    padding: 0 20px
//.row
//  margin-left: $gap * -1px
//  margin-right: $gap * -1px
//  margin-bottom: $vstep * 1px
//  display: flex
//  flex-wrap: wrap
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
</style>
