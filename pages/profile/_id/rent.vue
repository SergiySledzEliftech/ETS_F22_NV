<template>
  <div>
    <v-tabs class="tabs">
      <v-tab v-for="el in content" :key="el.id">
        {{ el.title }}
      </v-tab>
      <v-tab-item v-for="el in content" :key="el.id">
        <component :is="el.component" :list="el.data" :view="view" />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import History from '~/components/profile/History.vue';
const { State, Action } = namespace('profile');
export default @Component({
  name: 'profile-rents',
  components: { History }

})
class ProfileRents extends Vue {
  @State data
  @State view
  @Action setLoad
  content = [
    {
      id: 1,
      title: 'Borrowed',
      component: 'history',
      data: []
    },
    {
      id: 2,
      title: 'Lent',
      component: 'history',
      data: []
    }
  ]

  mounted () {
    this.content[0].data = this.data;
    this.content[1].data = this.data;
    this.setLoad(false);
  }
}
</script>

<style lang="scss" scoped>

</style>
