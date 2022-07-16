<template>
  <div class="comments">
    <v-tabs
      class="tabs"
      color="#E31F26"
      right
    >
      <v-tab to="/good/comments/" nuxt exact>
        All
      </v-tab>
      <v-tab to="/good/comments/my-comments" nuxt>
        My
      </v-tab>
      <v-tab to="/good/comments/new-comment" nuxt>
        Add
      </v-tab>
    </v-tabs>
    <nuxt-child />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

export default @Component({
  name: 'Comments',
  components: {}
})
class Comments extends Vue {

}
</script>

<style lang="scss" scoped>
.comments{
  @media only screen and (max-width: 1310px) {
    padding: 0 12px;
  }
}
.v-tabs{
  margin-top: 10px;
}
</style>
