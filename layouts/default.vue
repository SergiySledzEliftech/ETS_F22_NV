<template>
  <div>
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

export default @Component({
  name: 'default',
  components: {}
})

class Default extends Vue {}
</script>
