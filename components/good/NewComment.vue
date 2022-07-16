<template>
  <div class="new-comment__form">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form-container"
    >
      <v-rating
        v-model="rating"
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
        v-model="advantages"
        solo
        flat
        outlined
        single-line
        counter="150"
        :rules="advantagesRules"
      />
      <p class="comment-subtitle mt-1 mb-1 ml-2">
        Disadvantages
      </p>
      <v-text-field
        v-model="disadvantages"
        solo
        flat
        outlined
        single-line
        counter="150"
        :rules="disadvantagesRules"
      />
      <p class="comment-subtitle mt-1 mb-1 ml-2">
        Comment
      </p>
      <v-textarea
        v-model="comment"
        solo
        flat
        outlined
        no-resize
        counter="2000"
        :rules="commentRules"
        type="string"
      />
      <div class="mt-3 btn-group">
        <v-btn
          :disabled="!valid"
          color="success"
          @click="validate"
        >
          Add
        </v-btn>
        <v-btn
          color="primary"
          @click="reset"
        >
          Cancel
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

export default @Component({
  name: 'NewComment',
  components: {
  },
  data: () => ({
    valid: true,
    advantages: '',
    rating: -1,
    advantagesRules: [
      v => (v && v.length <= 150) || (v.length === 0) || 'Advantages must be less than 150 characters'
    ],
    disadvantages: '',
    disadvantagesRules: [
      v => (v && v.length <= 150) || (v.length === 0) || 'Disadvantages must be less than 150 characters'
    ],
    comment: '',
    commentRules: [
      v => (v && v.length <= 2000) || (v.length === 0) || 'Comment must be less than 2000 characters'
    ]
  }),
  methods: {
    validate () {
      if (this.advantages === '' && this.disadvantages === '' && this.comment === '') {
        alert('There must be some text in your comment')
      }
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    }
  }
})

class NewComment extends Vue {

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
  gap: 30px;
  @media (max-width: 445px) {
    display: flex;
    justify-content: center;
  }
  .v-btn{
    @include responsive-value("width", 100, 80, 400);
    ::v-deep .v-btn__content{
      @include responsive-value("font-size", 14, 11, $bp_tablet)
    }
  }
}
</style>
