<template>
  <div class="container">
    <div v-if="loading">
      <v-progress-circular
        :size="60"
        :width="6"
        color="teal"
        indeterminate
      />
    </div>
    <div v-if="!loading">
      <test-component />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
import TestComponent from '~/components/TestComponent';

export default @Component({
  components: {
    TestComponent
  }
})

class Index extends Vue {
  loading = true

  created () {
    this.loading = false;
  }
}
</script>

<style lang="scss">
.progress-circular{
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
}
</style>
