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
      <p class="comment-subtitle mt-1 mb-1 ml-2" style="font-size: 16px">
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
      <p class="comment-subtitle mt-1 mb-1 ml-2" style="font-size: 16px">
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
      <p class="comment-subtitle mt-1 mb-1 ml-2" style="font-size: 16px">
        Comment
      </p>
      <v-textarea
        v-model="comment"
        solo
        flat
        outlined
        :rules="commentRules"
        type="string"
      />
      <div class="mt-3">
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Add comment
        </v-btn>
        <v-btn
          color="primary"
          class="mr-4"
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
      v => (v && v.length <= 50) || (v.length === 0) || 'Advantages must be less than 150 characters'
    ],
    disadvantages: '',
    disadvantagesRules: [
      v => (v && v.length <= 50) || (v.length === 0) || 'Disadvantages must be less than 150 characters'
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
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-container{
  width: 600px;
  padding: 30px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(33, 33, 33, 0.25);
}
.v-text-field{
  ::v-deep .v-text-field__details{
    margin: 0;
  }
  ::v-deep .v-input__slot{
    min-height: 40px;
  }
}
v-text-field{
}
</style>
