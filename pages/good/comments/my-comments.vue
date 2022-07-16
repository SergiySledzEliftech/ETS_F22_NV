<template>
  <div class="card__list">
    <comment-item class="card__list-item" />
    <comment-item class="card__list-item" />
    <comment-item class="card__list-item" />
    <comment-item class="card__list-item" />
    <comment-item class="card__list-item" />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import CommentItem from '~/components/good/CommentItem'

export default @Component({
  name: 'MyCommentsTab',
  components: {
    CommentItem
  }
})
class MyCommentsTab extends Vue {

}
</script>

<style lang="scss" scoped>
.card__list{
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 60px;
  @media (max-width: $bp_tablet + px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: normal;
    @include responsive-value("gap", 50, 30, $bp_laptop);
  }
  .card__list-item{
    flex: 0 1 46.5%;
    @media (max-width: $bp_tablet + px) {
      flex: 0 1 100%;
    }
    &:nth-child(odd){
    }
  }
}

@include bp_tablet{

}
</style>
