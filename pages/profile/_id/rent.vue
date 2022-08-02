<template>
  <div>
    <v-tabs class="tabs">
      <v-tab v-for="el in content" :key="el.id">
        {{ el.title }}
      </v-tab>
      <v-tab-item v-for="el in content" :key="el.id">
        <component :is="el.component" :view="view" />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import Lend from '~/components/profile/Lend.vue';
import Borrow from '~/components/profile/Borrow.vue';

const { State, Action } = namespace('profile');
export default @Component({
  name: 'profile-rents',
  components: { Lend, Borrow }

})
class ProfileRents extends Vue {
  @State view
  @Action setLoad
  content = [
    {
      id: 1,
      title: 'Borrowed',
      component: 'borrow'
    },
    {
      id: 2,
      title: 'Lent',
      component: 'lend'
    }
  ]
}
</script>
