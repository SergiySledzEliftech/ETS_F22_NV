<template>
  <div >
    <comments />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Comments from '~/components/good/Comments'

export default @Component({
  name: 'MyCommentsPage',
  layout: 'good',
  components: {
    Comments
  }
})

class MyCommentsPage extends Vue {

}
</script>

<style>

</style>
