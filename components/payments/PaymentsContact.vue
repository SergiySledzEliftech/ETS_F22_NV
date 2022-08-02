<template>
  <div class="col m-r-7">
    <div class="payments__list-title">
      <p class="payments__title-text">
        Сontacts
      </p>
    </div>
    <div class="payments__contact m-b-2">
      <div class="payments__contact-inner" :class="{payments__active:showFormBorder}">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row class="form-row">
              <v-col class="form-col" cols="12" sm="6" md="4">
                <v-text-field
                  v-model="phone"
                  label="Phone Number"
                  outlined
                  dense
                  :rules="[emptyValidation(), phoneNumberValidation()]"
                />
              </v-col>
              <v-col class="form-col" cols="12" sm="6" md="4">
                <v-text-field
                  v-model="name"
                  label="Name"
                  outlined
                  dense
                  :rules="[emptyValidation(), lengthValidation(10)]"
                />
              </v-col>
              <v-col class="form-col" cols="12" sm="6" md="4">
                <v-text-field
                  v-model="lastName"
                  label="Last Name"
                  outlined
                  dense
                  :rules="[emptyValidation(), lengthValidation(10)]"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </div>
    <div class="payments__list-title">
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
          </div>
        </div>
        <p>Secure online card payment</p>
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
        <p>Payment in cash upon receipt of the order</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import { phoneNumberValidation, emptyValidation, lengthValidation } from '../../helpers/validators';

export default @Component({
  name: 'PaymentsContact',
  components: {}
})

class PaymentsContact extends Vue {
  data () {
    return { phoneNumberValidation, emptyValidation, lengthValidation };
  }

  valid = true
  phone = ''
  name = ''
  lastName = ''
  showPaymentsCash = true
  showPaymentsCard = true
  showFormBorder = false

  @Watch('valid')
  formValid () {
    const inputsForm = this.$refs.form.inputs;
    const inputsValid = [];
    inputsForm.forEach((item) => {
      if (item.valid === true) {
        inputsValid.push(item.valid);
      }
    });
    if (inputsValid.length === inputsForm.length) {
      this.showFormBorder = true;
    } else {
      this.showFormBorder = false;
    }
  }

  methods () {
  }

  changeShowPaymentsCash () {
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

<style  lang="scss" scoped>
$gap: 5;
$vstep: 5;
$bradius: 10;

.payments{
  position: relative;
  margin-right: 0;
  margin-left: 0;
  padding: $gap * 3 * 1px;
  background: #f4f4f9;
  &__list-title{
    margin-left: $gap * 3 * -1px;
    margin-right: $gap * 3 * -1px;
    padding-top: $gap * 2 * 1px;
    padding-bottom: $gap * 2 * 1px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    @media only screen and (max-width: 820px){
      margin-bottom: 0px;
      padding-top: 0;
    }
  }
  &__title-text{
    margin-bottom: 0;
    font-weight: 700;
    font-size: 30px;
    @media only screen and (max-width: 820px){
      font-size: 20px;
    }
    @media only screen and (max-width: 320px){
      font-size: 18px;
    }
  }
  &__contact{
    margin-left: $gap * 3 * -1px;
    margin-right: $gap * 3 * -1px;
    padding-left: $gap * 3 * 1px;
    padding-right: $gap * 3 * 1px;
    padding-top: $gap * 3 * 1px;
    padding-bottom: $gap * 3 * 1px;
    border-radius: $bradius * 1px;
    background: #fff;
  }
  &__contact-inner{
    border: 3px solid yellow;
    border-radius: $bradius * 1px;
    padding: $gap * 3 * 1px;
  }
  &__type{
    padding: $gap * 3 * 1px;
    border: 3px solid yellow;
    border-radius: $bradius * 1px;
    min-height: 115px;
    @media only screen and (max-width: 320px){
      max-height: 40px;
    }
    p{
      margin-bottom: 0;
      padding-left: 24px;
      @media only screen and (max-width: 1264px){
        font-size: 12px;
        font-weight: 700;
      }
      @media only screen and (max-width: 820px){
        font-size: 10px;
        font-weight: 700;
      }
      @media only screen and (max-width: 320px){
        display: none;
      }
    }
  }
  &__active{
    border: 3px solid #183153;
    border-radius: $bradius * 1px;
    min-height: 115px;
    padding: $gap * 3 * 1px;
  }
  &__type-inner{
    display: flex;
    padding-left: 24px;
  }
  &__type-images{
    width: 70px;
    line-height: 0;
  }
  &__type-image{
    max-width: 100%;
  }
}

.form-row{
  flex-direction: column;
}
.form-col{
  max-width: 100%;
  @media only screen and (max-width: 1264px){
    padding-bottom: 0;
  }
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
