<template>
  <div>
    <v-dialog
      max-width="400px"
    >
      <template #activator="{ on, attrs }">
        <div
          class="rent-btn"
          v-bind="attrs"
          v-on="goodStatus === 'available' && $auth.user !== null? on : {}"
        >
          <v-btn
            :disabled="goodStatus === 'unavailable' || $auth.user === null"
            class="btn_primary active"
          >
            Rent
          </v-btn>
        </div>
      </template>
      <template #default="dialog">
        <v-card class="rounded-lg pa-6">
          <v-card-text class="rent-text pa-0 pl-1">
            Choose renting term
          </v-card-text>
          <v-slider
            v-model="term"
            thumb-color="var(--light)"
            thumb-label
            dense
            hide-details
            max="30"
            min="1"
            class="pt-10"
          />
          <v-card-actions class="pt-5 d-flex justify-center">
            <v-btn
              class="btn-close ml-2"
              color="primary"
              @click="dialog.value = false"
            >
              Cancel
            </v-btn>
            <v-btn
              class="btn-send mr-2"
              color="success"
              @click="onRentedGood(); dialog.value = false; $emit ('changeStatus')"
            >
              Order
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
import { Vue, Component, Prop, namespace } from 'nuxt-property-decorator';

const { Mutation, Action } = namespace('good');

export default @Component({
  components: {
  }
})

class RentPopup extends Vue {
  @Prop() good;
  @Prop() goodStatus;

  @Mutation setGoodStatus;
  @Action updateGood;
  @Action updateStatistic;

  term = 1;

  mounted () {
    this.goodRented = this.good.status;
  }

  created () {
    // this.$auth.$storage.removeLocalStorage(this.$auth.user._id);
    // console.log(this.$auth.$storage.getLocalStorage(this.$auth.user._id));
  }

  async onRentedGood () {
    try {
      this.setGoodStatus('unavailable');
      this.addToLocalStorage();
      await this.updateGood(this.good);
      await this.updateStatistic();
    } catch (err) {
      console.error(err.message);
    }
  };

  addToLocalStorage () {
    const localRents = this.$auth.$storage.getLocalStorage(this.$auth.user._id);
    let goodsRented = [];
    if (localRents === null) {
      goodsRented.push({
        lease_term: this.term,
        good: this.good
      });
      this.$auth.$storage.setLocalStorage(this.$auth.user._id, goodsRented);
    } else {
      this.$auth.$storage.removeLocalStorage(this.$auth.user._id);
      goodsRented = localRents;
      goodsRented.push({
        lease_term: this.term,
        good: this.good
      });
      this.$auth.$storage.setLocalStorage(this.$auth.user._id, goodsRented);
    }
  }
}
</script>

<style lang="scss" scoped>
.rent-btn{
  @media only screen and (max-width: $bp_tablet + px){
    display: flex;
    justify-content: flex-end;
  }
  .btn_primary {
    text-transform: uppercase;
    letter-spacing: 2px !important;
    font-size: 17px !important;
    @include responsive-value('width', 210, 80, $bp_tablet);
    @include responsive-value_important('height', 50, 30, $bp_tablet);
    @include responsive-value_important('font-size', 16, 12, $bp_tablet);
    @include responsive-value_important('padding-right', 20, 10, $bp_tablet);
    @include responsive-value_important('padding-left', 20, 10, $bp_tablet);
    box-shadow: none !important;
    border-radius: 5px !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s !important;

    &:hover {
      opacity: 0.85 !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s !important;
    }
  }
}
.rent-text{
  font-size: 18px;
}
</style>
