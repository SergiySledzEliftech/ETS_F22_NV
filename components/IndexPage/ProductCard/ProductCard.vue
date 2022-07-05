<template>
  <div>
    <v-hover v-if="activeHover" v-slot="{ hover }">
      <v-card
        class="mx-auto"
        max-width="304px"
        :elevation="hover ? 10 : 2"
      >
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/3/32/Dessert_Spoon.jpg"
          height="200px"
          width="100%"
        />

        <v-card-title>
          Interesting thing to rent
        </v-card-title>

        <v-card-subtitle>
          Price: 300$
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="#E31F26"
            text
          >
            Details
          </v-btn>

          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-hover>
    <v-card
      v-else
      class="mx-auto"
      max-width="304px"
    >
      <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/3/32/Dessert_Spoon.jpg"
        height="200px"
        width="100%"
      />

      <v-card-title>
        Interesting thing to rent
      </v-card-title>

      <v-card-subtitle>
        Price: 300$
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="#E31F26"
          text
        >
          Details
        </v-btn>

        <v-spacer />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

export default @Component

class ProductCard extends Vue {
  @Prop({ required: true, type: Boolean })activeHover
}
</script>
