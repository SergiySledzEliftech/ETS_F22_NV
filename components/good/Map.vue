<template>
  <div>
    <div v-if="loading" class="text-center progress-circular">
      <v-progress-circular
        :size="60"
        :width="6"
        color="teal"
        indeterminate
      />
    </div>
    <div v-if="!loading">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12231.209376627701!2d35.048986790194945!3d48.44425437001344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe32dca8e7e2d%3A0x98d4c7bc5179934a!2z0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutC40Lkg0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIg0LLQvdGD0YLRgNC10L3QvdC40YUg0LTQtdC7!5e0!3m2!1sru!2sua!4v1657624276685!5m2!1sru!2sua"
        class="map"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';

export default @Component({
  components: {}
})

class Map extends Vue {
  loading = true
  created () {
    this.loading = false;
  }
}
</script>

<style lang="scss" scoped>
.map{
  max-width: 610px;
  width: 100%;
  height: 335px;
  border: 0;
  border-radius: 10px;
  @media (max-width: $bp_tablet + px) {
    max-width: $bp_tablet + px;
    @include responsive-value("height", 400, 200, $bp_tablet);
  }
}
</style>
