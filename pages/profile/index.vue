<template>
  <ProfileAds />
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import ProfileAds from '~/components/profile/ProfileAds.vue';
const { State, Mutation } = namespace('profile_myAds');
export default @Component({
  name: 'ads',
  layout: 'profile',
  components: { ProfileAds }
})

class Ads extends Vue {
  @State itemsData
  @Mutation deleteItem
}

</script>

<style scoped lang="scss">
</style>
