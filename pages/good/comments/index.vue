<template>
  <div>
    <div v-if="loading" class="progress-circular">
      <progress-circular />
    </div>
    <div v-else>
      <comment-list
        :comments-list="comments"
      />
    </div>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import CommentList from '~/components/good/CommentList';
import ProgressCircular from '~/components/good/Progress';

const { State, Action } = namespace('good_comments');

export default @Component({
  components: {
    CommentList,
    ProgressCircular
  }
})
class AllComments extends Vue {
  @State comments
  @State loading

  @Action loadComments
  @Action setLoading

  async mounted () {
    try {
      await this.loadComments();
    } catch (err) {
      console.error(err.message);
    }
  }

  created () {
    this.setLoading(false);
  }
}
</script>

<style lang="scss" scoped>

</style>
