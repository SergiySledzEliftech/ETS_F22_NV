<template>
  <div>
    <v-dialog
      max-width="400px"
    >
      <template #activator="{ on, attrs }">
        <div
          class="rent-btn"
          v-bind="attrs"
          v-on="on"
        >
          <button class="btn_primary active">
            Rent
          </button>
        </div>
      </template>
      <template #default="dialog">
        <v-card class="rounded-lg pa-4">
          <v-slider
            thumb-color="var(--light)"
            thumb-label
            dense
            hide-details
            max="30"
            min="1"
            class="pt-8"
          />
          <v-card-actions class="pt-5 d-flex justify-center">
            <v-btn
              class="btn-send mr-2"
              color="success"
            >
              Order
            </v-btn>
            <v-btn
              class="btn-close ml-2"
              color="primary"
              @click="dialog.value = false"
            >
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.rent-btn{
  @media only screen and (max-width: $bp_tablet + px){
    display: flex;
    justify-content: flex-end;
  }
  .btn_primary {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 17px !important;
    @include responsive-value('width', 210, 80, $bp_tablet);
    @include responsive-value_important('height', 50, 30, $bp_tablet);
    @include responsive-value_important('font-size', 16, 12, $bp_tablet);
    @include responsive-value_important('padding-right', 20, 10, $bp_tablet);
    @include responsive-value_important('padding-left', 20, 10, $bp_tablet);
    border-radius: 5px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
      opacity: 0.85;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    }
  }
}
</style>
