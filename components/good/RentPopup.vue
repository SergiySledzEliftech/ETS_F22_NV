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

const { Mutation: MutationGood, Action: ActionGood } = namespace('good');
const { State: StateOrders, Action: ActionOrders } = namespace('ordered');

export default @Component({
  components: {}
})

class RentPopup extends Vue {
  @Prop() good;
  @Prop() goodStatus;

  @StateOrders orderedGoods;
  @ActionOrders addGoodToOrderList;

  @MutationGood setGoodStatus;
  @ActionGood updateGood;
  @ActionGood updateStatistic;

  term = 1;

  async onRentedGood () {
    try {
      this.setGoodStatus('unavailable');
      await this.addGoodToOrderList({
        userId: this.$auth.user._id,
        good: {
          term: this.term,
          goodId: this.$route.params.id
        }
      });
      await this.updateGood(this.good);
      await this.updateStatistic();
    } catch (err) {
      console.error(err.message);
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
    @include responsive-value_important('height', 50, 20, 1310);
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
