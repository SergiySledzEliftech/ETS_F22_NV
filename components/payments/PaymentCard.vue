<template>
  <div class="card">
    <div class="wrapper">
      <div class="conteiner">
        <v-row no-gutters justify="end" class="mb-2">
          <v-icon large color="#213342" @click="closeModal">
            mdi-close-circle
          </v-icon>
        </v-row>
        <div class="card-header">
          <div class="card-header__info-sum">
            <div>
              <p>Payable</p>
            </div>
            <div>
              <p>
                <span>{{ billOrder.billAmount }}</span>
                <span> UAH</span>
              </p>
            </div>
          </div>
          <div class="card-header__info-text">
            <p>Payment for order №{{ billOrder.billNumber }} in the amount of {{ billOrder.billAmount }} UAH</p>
          </div>
        </div>
        <div class="card-form">
          <div class="card-form__inner">
            <div class="card-form__count">
              <div class="card-form__card">
                <label>Номер картки</label>
                <div class="card-form__count-inner">
                  <input
                    v-model="cardNumber"
                    v-mask="'#### #### #### ####'"
                    type="text"
                    placeholder="**** **** **** ****"
                    class="input"
                  >
                  <v-img
                    class="ml-4"
                    contain
                    max-height="59"
                    max-width="145"
                    :src="require('../../assets/img/payments/' + getCardType + '-logo.png')"
                  />
                </div>
              </div>
              <div class="card-form__validaty">
                <div class="card-form__validity-date">
                  <div class="validity-date__inner">
                    <label>Термін дії:</label>
                    <div>
                      <span>
                        <input
                          v-model="cardMonth"
                          v-mask="'##'"
                          type="text"
                          class="input input--validate"
                          placeholder="month"
                        >
                      </span>
                      <span>
                        <input
                          v-model="cardYear"
                          v-mask="'####'"
                          type="text"
                          class="input input--validate"
                          placeholder="year"
                        >
                      </span>
                    </div>
                  </div>
                </div>
                <div class="card-form__validity-cvv validate">
                  <div class="validity-date__inner">
                    <label>CVV</label>
                    <input
                      v-model="cardCvv"
                      v-mask="'###'"
                      type="password"
                      class="input input--validate"
                      placeholder="XXX"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-btn
          class="btn--card"
          block
          outlined
          color="indigo"
          @click="sendPaymentsDataToBase"
        >
          PAYMENTS
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { mask } from 'vue-the-mask';
import { serverApiUrl } from '@/settings/config';

export default @Component({
  name: 'PaymentCard',
  directives: { mask },
  components: { }
})

class PaymentCard extends Vue {
  cardNumber = ''
  cardMonth = ''
  cardYear = ''
  cardCvv = ''

  @Prop() billOrder
  @Prop() paidGoods

  get getCardType () {
    const number = this.cardNumber;
    let re = /^4/;
    if (number.match(re) != null) {
      return 'visa';
    };

    re = /^5[1-5]/;
    if (number.match(re) != null) {
      return 'mastercard';
    };

    return 'visa'; // default type
  }

  methods () {
  }

  closeModal () {
    this.$emit('closeModal', false);
  }

  async sendPaymentsDataToBase () {
    try {
      const PaymentsData = {
        cardNumber: this.cardNumber,
        cardMonth: this.cardMonth,
        cardYear: this.cardYear,
        cardCvv: this.cardCvv,
        paidAmount: this.billOrder.billAmount,
        billNumber: this.billOrder.billNumber,
        paidGoods: []
      };
      this.paidGoods.forEach((element) => {
        PaymentsData.paidGoods.push(element);
      });
      await this.$axios.post(`${serverApiUrl}, PaymentsData`);
      const localRents = this.$auth.$storage.getLocalStorage(this.$auth.user._id);
      console.log(localRents, 111111111111);
      this.$router.push('/');
    } catch (err) {
    }
  }
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
  &__validity-date
    width: 70%
  &__count-inner
    display: flex
  &__validity-cvv
    max-width: 20%
    margin-left: 35px
.card-button
  padding: 16px
  text-align: center
.validity-date
  &__inner
    display: flex
    flex-direction: column
    div
      display: flex
      justify-content: space-between
      span
        width: 40%
.input
  display: block
  width: 100%
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
    font-size: 25px
    text-transform: none
    padding: 20px 0px!important
</style>
