<template>
  <div class="comments">
    <v-tabs
      class="tabs"
      color="var(--primary)"
      right
    >
      <v-tab :to="{name: 'good-comments'}" nuxt exact>
        All
      </v-tab>
      <v-tab :to="{name: 'good-comments-my-comments'}" nuxt>
        My
      </v-tab>
      <v-tab :to="{name: 'good-comments-add-comment'}" nuxt>
        Add
      </v-tab>
    </v-tabs>
    <nuxt-child />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

export default @Component({
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
