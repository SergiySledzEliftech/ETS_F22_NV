<template>
  <div class="payments">
    <payment-card
      v-if="modalCardVisible"
    />
    <div class="row__vertical">
      <payments-contact
        @payValidBtn="PayValidateBtn"
      />
      <div class="col col-desktop-2-5">
        <payments-orders
          :order-goods="orderedGoods"
          :btn-disabled="PayValidBtn"
          @modalCardVisible="showModalCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import PaymentCard from '../components/payments/PaymentCard';
import PaymentsContact from '../components/payments/PaymentsContact';
import PaymentsOrders from '../components/payments/PaymentsOrders';
const { State, Mutation } = namespace('ordered');

export default @Component({
  name: 'PaymentsPage',
  components: {
    PaymentCard,
    PaymentsContact,
    PaymentsOrders
  }
})

class PaymentsPage extends Vue {
  PayValidBtn = true
  modalCardVisible = false

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

  @State orderedGoods;
  @Mutation setOrderedGoods;

  mounted () {
    this.setOrderedGoods(this.products);
  }

  methods () {
  }

  showModalCard (data) {
    this.modalCardVisible = data;
  }

  PayValidateBtn (data) {
    this.PayValidBtn = data;
    console.log(this.PayValidBtn);
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
  padding: $gap * 4 * 1px
  background: #f4f4f9
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
.row__vertical
  display: flex
  flex-wrap: wrap
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
