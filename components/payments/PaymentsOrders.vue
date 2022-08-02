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
        <div v-for="item in orderGoods" :key="item._id" class="orders__item m-b-4">
          <div class="orders__item-image">
            <img :src="item.images[0]" alt="item">
          </div>
          <div class="orders__item-content">
            <div class="orders__item-inner m-b-2">
              <div class="orders__item-name" @click="openItem(item._id)">
                {{ item.title }}
              </div>
            </div>
            <div class="orders__item-price m-b-2">
              {{ item.price }} uah
            </div>
            <div class="orders__item-description m-b-2">
              {{ item.description }}
            </div>
            <div class="orders__item-actions" @click="deleteOrderedGoodFromList(item._id, item)">
              <fa icon="trash-can" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-btn
      block
      class="btn--pay"
      outlined
      color="indigo"
      :disabled="BtnDisabled"
      @click="showModalCard"
    >
      PAY
    </v-btn>
  </div>
</template>

<script>
import { Vue, Component, Prop, namespace } from 'nuxt-property-decorator';
const { State, Mutation, Action } = namespace('ordered');

export default @Component({
  name: 'PaymentsOrders',
  components: {}
})

class PaymentsOrders extends Vue {
  @Prop() BtnDisabled;
  @Prop() orderGoods

  @State orderedGoods;
  @Mutation setOrderedGoods;
  @Mutation setItemStatus;
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
    const bill = {
      billAmount: this.totalCost,
      billNumber: Math.floor(Math.random() * this.totalCost)
    };
    this.$emit('modalCardVisible', true, bill);
  }

  deleteOrderedGoodFromList (id, item) {
    this.deleteOrderedGood({ id, item });
  }

  openItem (id) {
    this.$router.push('/categories/' + id);
  }
}
</script>

<style lang="sass" scoped>

$gap: 5
$vstep: 5
$bradius: 10

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
    @media only screen and (max-width: 820px)
      font-size: 24px
    h4
      font-size: 30px
      font-weight: bold
      @media only screen and (max-width: 820px)
        font-size: 20px
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
    @media only screen and (max-width: 820px)
      max-height: 150px
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
    cursor: pointer
    @media only screen and (max-width: 820px)
      font-size: 24px
  &__item-price
    font-size: 30px
    font-weight: 600
    @media only screen and (max-width: 820px)
      font-size: 18px
  &__item-description
    font-size: 20px
    color: black
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    @media only screen and (max-width: 820px)
      font-size: 14px
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
    font-size: 25px
    text-transform: none
    padding: 20px 0px!important
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
