<template>
  <div>
    <div v-if="loading" class="text-center progress-circular">
      <v-progress-circular
        :size="60"
        :width="6"
        color="teal"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-if="!loading">
      <Info />
      <Description />
      <Comments />
      <Recommendations />
      <SharingBlock />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Info from '~/components/good/Info'
import Description from '~/components/good/Description'
import Comments from '~/components/good/Comments'
import SharingBlock from '~/components/good/SharingBlock'
import Recommendations from '~/components/good/Recommendations'

export default @Component({
  components: {
    Info,
    Description,
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
