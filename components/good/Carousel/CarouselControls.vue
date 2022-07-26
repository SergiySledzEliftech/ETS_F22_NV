<template>
  <div>
    <button class="carousel-control btn-next" @click="$emit('next')">
      <v-icon
        color="var(--dark)"
        class="btn-next-ico"
      >
        mdi-arrow-right
      </v-icon>
    </button>
    <button class="carousel-control btn-prev" @click="$emit('prev')">
      <v-icon
        color="var(--dark)"
        class="btn-prev-ico"
      >
        mdi-arrow-left
      </v-icon>
    </button>
    <v-dialog
      max-width="1200px"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          class="carousel-control btn-fullscreen"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon
            color="var(--dark)"
            class="btn-fullscreen-ico"
          >
            mdi-eye
          </v-icon>
        </v-btn>
      </template>
      <template #default="dialog">
        <v-card class="popup rounded-lg">
          <v-img
            max-width="1200"
            max-height="900"
            :src="slides[currentSlide]"
            alt=""
          >
            <v-card-actions class="close-card">
              <v-btn
                class="btn-close"
                @click="dialog.value = false"
              >
                <v-icon
                  color="black"
                  class="btn-close-icon"
                >
                  mdi-close
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-img>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

export default @Component({
  components: {}
})
class CarouselControls extends Vue {
  @Prop() currentSlide;
  @Prop() slides;
}
</script>
<style lang="scss" scoped>
.btn-next-ico,
.btn-prev-ico{
  @include responsive-value_important('font-size', 40, 25, $bp_tablet)
}

.btn-fullscreen-ico{
  @include responsive-value_important('font-size', 20, 18, $bp_tablet)
}

.btn-next,
.btn-prev,
.btn-fullscreen,
.btn-close{
  position: absolute;
  border-radius: 50%;
  background-color: #fff !important;
  opacity: 0.7 !important;
  box-shadow: 0 0 5px rgba(119, 152, 181, 0.25) !important;
  transition: all 0.25s linear;
  &:hover{
    opacity: 1 !important;
    box-shadow: 0 0 5px rgba(119, 152, 181, 0.5) !important;
    transition: all 0.25s linear;
  }
}

.btn-next{
  width: 60px;
  height: 60px;
  top: calc(50% - 25px);
  right: 10px;
}
.btn-prev{
  width: 60px;
  height: 60px;
  top: calc(50% - 25px);
  left: 10px;
}

.btn-next,
.btn-prev{
  @media only screen and (max-width: $bp_tablet + px) {
    @include responsive-value('width', 60, 40, $bp_tablet);
    @include responsive-value('height', 60, 40, $bp_tablet);
  }
}
.btn-fullscreen{
  padding: 16px !important;
  width: 40px;
  height: 40px;
  top: 10px;
  right: 10px;
  @media only screen and (max-width: $bp_tablet + px) {
    @include responsive-value_important('width', 40, 25, $bp_tablet);
    @include responsive-value_important('height', 40, 25, $bp_tablet);
  }
}

.v-btn{
  min-width: 0 !important;
  ::v-deep &:focus::before{
    opacity: 0 !important;
  }
}

.popup{
  .close-card{
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0 !important;
  }
  .btn-close{
    position: relative;
    width: 40px !important;
    height: 40px !important;
  }
}
</style>
