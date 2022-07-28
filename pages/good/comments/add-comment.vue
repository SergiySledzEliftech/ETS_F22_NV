<template>
  <div class="new-comment__form">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form-container"
    >
      <v-rating
        v-model="commentData.rating"
        color="yellow darken-3"
        background-color="grey darken-1"
        half-increments
        hover
        large
        class="mb-2"
      />
      <p class="comment-subtitle mt-1 mb-1 ml-2">
        Advantages
      </p>
      <v-text-field
        v-model="commentData.advantages"
        solo
        flat
        outlined
        single-line
        counter="150"
        :rules="[advantagesRule()]"
      />
      <p class="comment-subtitle mt-1 mb-1 ml-2">
        Disadvantages
      </p>
      <v-text-field
        v-model="commentData.disadvantages"
        solo
        flat
        outlined
        single-line
        counter="150"
        :rules="[disadvantagesRule()]"
      />
      <p class="comment-subtitle mt-1 mb-1 ml-2">
        Comment
      </p>
      <v-textarea
        v-model="commentData.comment"
        solo
        flat
        outlined
        no-resize
        counter="2000"
        :rules="[commentRule()]"
        type="string"
      />
      <div class="mt-3 btn-group">
        <v-btn
          :disabled="!valid"
          color="success"
          @click="validation(); onAddComment();"
        >
          Add
        </v-btn>
        <v-btn
          color="primary"
          @click="clear"
        >
          Cancel
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import { disadvantagesRule, advantagesRule, commentRule } from '~/helpers/comment-validation';

const { Action } = namespace('good_comments');

export default @Component({
})

class AddComment extends Vue {
  valid = true
  commentData = {
    advantages: '',
    disadvantages: '',
    comment: '',
    rating: -1
  }

  data () {
    return {
      disadvantagesRule,
      advantagesRule,
      commentRule
    };
  }

  validation () {
    this.$refs.form.validate();
  }

  clear () {
    this.commentData.comment = '';
    this.commentData.advantages = '';
    this.commentData.disadvantages = '';
    this.commentData.rating = null;
    const date = new Date();
    console.log(date);
    console.log(date.getTime());
  }

  @Action createComment
  async onAddComment () {
    const date = new Date();
    console.log(date);
    console.log(date.getTime());
    this.commentData.date_created = date.getTime();
    try {
      await this.createComment(this.commentData);
    } catch (err) {
      console.error(err.message);
    }
  }

  async mounted () {
    try {
      await this.loadUserComments();
    } catch (err) {
      console.error(err.message);
    }
  }
}
</script>

<style lang="scss" scoped>
.new-comment__form{
  margin: 30px 0 0;
}
.comment-subtitle{
  @include responsive-value("font-size", 18, 12, $bp_laptop);
}
.form-container{
  margin: 0 auto;
  max-width: 800px;
  @include responsive-value("padding", 30, 15, $bp_laptop);
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(33, 33, 33, 0.25);
}
.v-rating{
  @include responsive-value("width", 800, 320, $bp_laptop);
  ::v-deep button{
    margin: 0;
    padding: 0;
  }
  button{
    ::v-deep &:before{
      @include responsive-value("font-size", 40, 25, $bp_laptop);
      @include responsive-value("padding", 8, 4, $bp_laptop);
    }
  }
}
.v-text-field{
  ::v-deep .v-text-field__details{
    margin: 0;
  }
  ::v-deep .v-input__slot{
    min-height: 40px;
  }
  ::v-deep input{
    @include responsive-value("font-size", 16, 12, $bp_laptop);
  }
}
.v-textarea{
  ::v-deep .v-input__slot{
    @include responsive-value("height", 120, 60, $bp_laptop);
  }
  ::v-deep textarea{
    @include responsive-value("font-size", 16, 12, $bp_laptop);
  }
}
.btn-group{
  display: flex;
  gap: 25px;
  @media (max-width: 445px) {
    display: flex;
    justify-content: center;
  }
  .v-btn{
    @include responsive-value('width', 100, 80, 400);
    ::v-deep .v-btn__content{
      @include responsive-value('font-size', 14, 11, $bp_tablet)
    }
  }
}
</style>
