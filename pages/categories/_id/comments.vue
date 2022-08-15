<template>
  <div class="comments">
    <v-tabs
      class="tabs"
      color="var(--primary)"
      right
    >
      <v-tab :to="{name: 'categories-id-comments'}" nuxt exact>
        All
      </v-tab>
      <v-tab
        :to="{name: 'categories-id-comments-my-comments'}"
        nuxt
        :disabled="$auth.user === null"
      >
        My
      </v-tab>
      <v-tab
        :to="{name: 'categories-id-comments-add-comment'}"
        nuxt
        :disabled="$auth.user === null"
      >
        Add
      </v-tab>
    </v-tabs>
    <nuxt-child />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

export default @Component({
  auth: false
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
  a {
    @include responsive-value("font-size", 14, 12, $bp_tablet);
    @include responsive-value("padding", 16, 10, $bp_tablet);
    font-weight: 500;
    height: 100%;
    &:hover {
      background-color: #aaaaaa2b;
    }
  }
}
.no-comments{
  font-size: 22px !important;
  @include responsive-value_important('font-size', 22, 16, 1310)
}
</style>
