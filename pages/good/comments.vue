<template>
  <div>
    <v-tabs class="tabs" color="#E31F26" right>
      <v-tab to="/good/comments/" nuxt exact>
        All Comments
      </v-tab>
      <v-tab to="/good/comments/my-comments" nuxt>
        My Comments
      </v-tab>
      <v-tab to="/good/comments/new-comment" nuxt>
        Add comment
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
.tabs {
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  &:hover{
    background-color: #aaaaaa2b;
  }
}
</style>
