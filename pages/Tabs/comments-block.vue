<template>
  <div>
    <v-tabs class="tabs" color="#E31F26" centered>
      <v-tab v-for="(tab, index) in tabs" :key="index" :to="tab.route" exact>
        {{ tab.name }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

export default @Component({

})

class Comments extends Vue {
  name = 'CommentsBlock'
  tabs = [
    { name: 'All comments', route: '/' },
    { name: 'My comments', route: '/my-comments' },
    { name: 'New Comment', route: '/new-comment' }
  ]
}

</script>

<style>

</style>
