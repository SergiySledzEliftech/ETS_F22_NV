<template>
  <div>
    <v-card
      flat
      class="card__item"
    >
      <v-card-title class="py-2 pr-2 d-flex align-center">
        <v-avatar class="card__item-avatar">
          <img
            alt="user"
            src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
          >
        </v-avatar>
        <p class="ma-0 ml-2 card__item-name">
          John Doe
        </p>
        <v-spacer />
        <p class="ma-0 mr-1 card__item-date">
          07.07.2022
        </p>
        <v-card-actions
          class="pa-0 btn-basket basket_active"
        >
          <v-btn
            text
            icon
            color="gray lighten-2"
          >
            <v-icon>mdi-delete-empty</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card-title>

      <v-divider />

      <v-card-text class="mt-2 py-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="20"
        />
        <p class="ma-0 mt-2 card__item-text">
          Мав до цього 24 дюймовий вигнутий Самсунг.
          Взяв цей монітор як основний, Самсунг поставив поруч.
          Якість картинки не гірша, а чорний колір вигляає
          навіть ще більш чорним. Сподіваюсь по надійності цей
          монітор не гірше за брендовий. Бо перший служить мені
          вже більш 3 років і жодного вигорілого пікселя
        </p>
      </v-card-text>

      <v-card-title class="py-0 pt-2 card__item-subtitle">
        Advantages
      </v-card-title>
      <v-card-text class="py-0">
        <p class="ma-0 card__item-text">
          Мав до цього 24 дюймовий вигнутий Самсунг.
          Взяв цей монітор як основний, Самсунг поставив поруч.
        </p>
      </v-card-text>
      <v-card-title class="py-0 pt-2 card__item-subtitle">
        Disadvantages
      </v-card-title>
      <v-card-text class="py-0">
        <p class="ma-0 card__item-text">
          Мав до цього 24 дюймовий вигнутий Самсунг.
        </p>
      </v-card-text>
      <v-card-actions
        class="py-2"
      >
        <v-row class="ma-0 d-flex align-center" justify="end">
          <v-btn
            class="ma-0 mr-1"
            width="30"
            height="30"
            text
            icon
            color="blue lighten-2"
          >
            <v-icon size="18" class="like">
              mdi-thumb-up
            </v-icon>
          </v-btn>
          <p class="ma-0 mr-2 card__item-text">
            2
          </p>
          <v-btn
            class="ma-0 mr-1"
            width="30"
            height="30"
            text
            icon
            color="red lighten-2"
          >
            <v-icon size="18" class="dislike">
              mdi-thumb-down
            </v-icon>
          </v-btn>
          <p class="ma-0 card__item-text">
            0
          </p>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

export default @Component({
  name: 'CommentItem',
  components: {},
  data () {
    return {
      like: true
    }
  }
})

class CommentItem extends Vue {

}
</script>

<style lang="scss" scoped>
.card__item{
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(33, 33, 33, 0.25);
}
.v-btn{
  ::v-deep &:before{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    border-radius: inherit;
    background-color: currentColor;
    opacity: 0;
    color: inherit;
    pointer-events: none;
    transition: opacity .2s cubic-bezier(.4, 0, .6, 1);
  }
  /*
  ::v-deep .like{
    background-color: rgba(10, 127, 229, 0.63) !important;
    border-radius: 50%;
  }
  ::v-deep .dislike{
    background-color: #dc2113 !important;
    border-radius: 50%;
  }
  */
}

.btn-basket{
  padding: 0 !important;
  overflow: hidden;
  opacity: 0;
}
.basket_active{
  opacity: 1;
  overflow: visible;
}

.card__item-subtitle,
.card__item-name{
  @include responsive-value_important("font-size", 16, 12, $bp_tablet);
  font-weight: 600;
}

.card__item-text,
.card__item-date {
  @include responsive-value_important("font-size", 14, 10, $bp_tablet);
}

.card__item-avatar{
  @include responsive-value_important("width", 40, 30, $bp_tablet);
  @include responsive-value_important("height", 40, 30, $bp_tablet);
}

.v-card__title,
.v-card__text,
.v-card__actions{
  @include responsive-value_important("padding-right", 16, 12, $bp_tablet);
  @include responsive-value_important("padding-left", 16, 12, $bp_tablet);
}

</style>
