<template>
  <div>
    <v-tabs class="tabs">
      <v-tab v-for="el in content" :key="el.id">
        {{ el.title }}
      </v-tab>
      <v-tab-item v-for="el in content" :key="el.id">
        <component :is="el.component" :list="el.data" />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
import Borrow from '~/components/profile/history/Borrow.vue';
import Lend from '~/components/profile/history/Lend.vue';
export default @Component({
  name: 'profile-rents',
  props: {
    content: {
      type: Array,
      required: true
    }
  },
  components: { Borrow, Lend }

})
class ProfileRents extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
