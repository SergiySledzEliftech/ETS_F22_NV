<template>
  <div class="text-center progress-circular">
    <v-progress-circular
      :size="60"
      :width="6"
      color="teal"
      indeterminate
      class="progress-circular text-center"
    />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

export default @Component({
  components: {
  }
})

class ProgressCircular extends Vue {

}
</script>

<style lang="scss" scoped>
.progress-circular{
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
