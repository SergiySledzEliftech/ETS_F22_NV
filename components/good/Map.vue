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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.63508428869!2d24.01223555!3d49.83268904999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2sLviv%2C%20Lviv%20Oblast%2C%2079000!5e0!3m2!1sen!2sua!4v1659354695668!5m2!1sen!2sua"
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
