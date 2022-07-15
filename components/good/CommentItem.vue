<template>
  <div class="card-item">
    <v-card
      flat
      class=""
      style="
        border: 1px solid #d7d7d7;
        border-radius: 5px;
        box-shadow: 0 0 2px rgba(33, 33, 33, 0.25);
      "
    >
      <v-card-title class="py-2 pr-2" style="display:flex; align-items:center;">
        <v-avatar size="40">
          <img
            alt="user"
            src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
          >
        </v-avatar>
        <p class="ma-0 ml-2">
          John Doe
        </p>
        <v-spacer></v-spacer>
        <p class="ma-0 mr-1" style="font-size: 14px;">07.07.2022</p>
        <v-card-actions
          class="pa-0"
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

      <v-divider></v-divider>

      <v-card-text class="mt-2 py-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="20"
        ></v-rating>
        <p class="ma-0 mt-2 fs-14">
          Мав до цього 24 дюймовий вигнутий Самсунг.
          Взяв цей монітор як основний, Самсунг поставив поруч.
          Якість картинки не гірша, а чорний колір вигляає
          навіть ще більш чорним. Сподіваюсь по надійності цей
          монітор не гірше за брендовий. Бо перший служить мені
          вже більш 3 років і жодного вигорілого пікселя
        </p>
      </v-card-text>

      <v-card-title class="py-0 pt-2 fs-16">Advantages</v-card-title>
      <v-card-text class="py-0">
        <p class="ma-0 fs-14">
          Мав до цього 24 дюймовий вигнутий Самсунг.
          Взяв цей монітор як основний, Самсунг поставив поруч.
        </p>
      </v-card-text>
      <v-card-title class="py-0 pt-2 fs-16">Disadvantages</v-card-title>
      <v-card-text class="py-0">
        <p class="ma-0 fs-14">
          Мав до цього 24 дюймовий вигнутий Самсунг.
        </p>
      </v-card-text>
      <v-card-actions
        class="py-2"
      >
        <v-row class="ma-0 d-flex align-center" justify="end">
          <v-btn
            class="ma-0 mr-1"
            style="width: 30px; height: 30px"
            text
            icon
            color="blue lighten-1"
          >
            <v-icon size="18">mdi-thumb-up</v-icon>
          </v-btn>
          <p class="fs-14 ma-0 mr-2">2</p>
          <v-btn
            class="ma-0 mr-1"
            style="width: 30px; height: 30px"
            text
            icon
            color="red lighten-1"
          >
            <v-icon size="18">mdi-thumb-down</v-icon>
          </v-btn>
          <p class="fs-14 ma-0">0</p>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

export default @Component({
  name: 'CommentItem',
  components: {

  }
})

class CommentItem extends Vue {

}
</script>

<style lang="scss" scoped>
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
}
.fs-16{
  font-size: 16px;
  font-weight: 600;
}
.fs-14{
  font-size: 14px;
}
</style>
