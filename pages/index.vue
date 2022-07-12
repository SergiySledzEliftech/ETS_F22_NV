<template>
  <div>
    <div v-if="loading" class="text-center progress-circular">
      <v-progress-circular
        :size="60"
        :width="6"
        color="teal"
        indeterminate
      />
    </div>
    <div v-if="!loading">
      <new-comment />
      <Carousel />
      <Map />
      <comment-item />
      <Info />
      <comments />
      <recommendations />
      <sharing-block />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Carousel from '~/components/good/Carousel/Carousel'
import Map from '~/components/good/Map'
import CommentItem from '~/components/good/CommentItem'
import Info from '~/components/good/Info'
import Description from '~/components/good/Description'
import SharingBlock from '~/components/good/SharingBlock'
import Recommendations from '~/components/good/Recommendations'
import Comments from '~/components/good/Comments'
import NewComment from '~/components/good/NewComment'

export default @Component({
  components: {
    Carousel,
    Map,
    CommentItem,
    Info,
    Description,
    NewComment,
    Comments,
    Recommendations,
    SharingBlock
  },
  data () {
    return {
      loading: true,
      progressInterval: {},
      value: 0
    }
  },
  created () {
    this.loading = false
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.progressInterval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
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
.progress-circular{
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
}
</style>
