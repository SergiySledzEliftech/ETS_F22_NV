<template>
  <ProfileRents :content="content" />
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import ProfileRents from '~/components/profile/ProfileRents.vue';
const { State } = namespace('profile_myRents');
export default @Component({
  name: 'rent',
  layout: 'profile',
  components: { ProfileRents }
})

class Rent extends Vue {
  @State lent
  @State borrowed

  content = [
    {
      id: 1,
      title: 'Borrowed',
      component: 'borrow',
      data: []

    },
    {
      id: 2,
      title: 'Lent',
      component: 'borrow',
      data: this.lent
    }
  ]

  mounted () {
    this.content[0].data = this.borrowed;
    this.content[1].data = this.lent;
  }
}
</script>

<style scoped lang="scss">

.v-tabs-slider {
  background-color: $negative !important;
}

.tabs a {
  &:hover {
    background-color: rgba($negative, 0.5);
  }

  &[aria-selected="true"] {
    color: $negative;
    background-color: rgba($light, 0.5);
  }
}

</style>
