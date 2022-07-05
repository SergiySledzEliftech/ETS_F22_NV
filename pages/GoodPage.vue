<template>
  <div class="">
    <Info />
    <Description />
    <Comments />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Info from '~/components/good/Info'
import Description from '~/components/good/Description'
import Comments from '~/components/good/Comments'

export default @Component({
  components: {
    Info,
    Description,
    Comments
  }
})

class Index extends Vue {
  title = 'Goods page';
}
</script>

<style lang="scss">
.container{
  max-width: 75rem;
}
</style>
