<template>
  <div class="payments">
    <payment-card
      v-if="modalCardVisible"
      :bill-order="billOrderData"
      :paid-goods="orderedGoods"
      @closeModal="closePaymentCard"
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
  billOrderData

  @State orderedGoods;
  @Mutation setOrderedGoods;

  mounted () {
    const orderGoods = this.$auth.$storage.getLocalStorage(this.$auth.user._id);
    const data = orderGoods.map((el) => {
      return el.good;
    });
    this.setOrderedGoods(data);
  }

  methods () {
  }

  showModalCard (data, bill) {
    this.billOrderData = bill;
    this.modalCardVisible = data;
  }

  closePaymentCard (data) {
    this.modalCardVisible = data;
  }

  PayValidateBtn (data) {
    this.PayValidBtn = data;
  }
}

</script>

<style lang="scss" scoped>

$gap: 5;
$vstep: 5;
$bradius: 10;

.payments{
  position: relative;
  margin-right: 0;
  margin-left: 0;
  padding: $gap * 4 * 1px;
  background: #f4f4f9;
  @media only screen and (max-width: 820px){
    padding-bottom: 0px;
    padding-top: 0px;
  }
}
.row__vertical{
  display: flex;
  flex-wrap: wrap;
}
.col{
  width: 100%;
  padding-left: $gap * 3 * 1px;
  padding-right: $gap * 3 * 1px;
  padding-bottom: $gap * 3 * 1px;
  padding-top: $gap * 3 * 1px;
  min-height: 100%;
}
.col-desktop-2-5{
  max-width: 100 / 2 * 1%;
}

@for $i from 1 through 10{
  .m-b-#{$i}{
    margin-bottom: $i * $vstep * 1px;
  }
  .m-r-#{$i}{
    margin-right: $i * $vstep * 1px;
  }
  .m-l-#{$i}{
    margin-left: $i * $vstep * 1px;
  }
}
</style>
