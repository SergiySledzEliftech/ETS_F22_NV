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
      ></v-rating>
      <p class="comment-subtitle mt-2 mb-1 ml-2" style="font-size: 16px">Advantages</p>
      <v-text-field
        solo
        flat
        outlined
        single-line
        v-model="advantages"
        :rules="advantagesRules"
      ></v-text-field>
      <p class="comment-subtitle mt-2 mb-1 ml-2" style="font-size: 16px">Disadvantages</p>
      <v-text-field
        solo
        flat
        outlined
        single-line
        v-model="disadvantages"
        :rules="disadvantagesRules"
      ></v-text-field>
      <p class="comment-subtitle mt-2 mb-1 ml-2" style="font-size: 16px">Comment</p>
      <v-textarea
        solo
        flat
        outlined
        v-model="comment"
        :rules="commentRules"
        type="string"
      ></v-textarea>
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
    rating: 0,
    advantagesRules: [
      v => (v && v.length <= 50) || (v.length === 0) || 'Advantages must be less than 50 characters'
    ],
    disadvantages: '',
    disadvantagesRules: [
      v => (v && v.length <= 50) || (v.length === 0) || 'Disadvantages must be less than 50 characters'
    ],
    comment: '',
    commentRules: [
      v => (v && v.length <= 2000) || (v.length === 0) || 'Comment must be less than 2000 characters'
    ]
  }),
  methods: {
    validate () {
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
  margin-top: 60px;
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
    display: none;
  }
  ::v-deep .v-input__slot{
    min-height: 40px;
  }
}
v-text-field{
}
</style>
