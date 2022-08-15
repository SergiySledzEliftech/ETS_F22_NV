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
      <!--      <iframe-->
      <!--        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.63508428869!2d24.01223555!3d49.83268904999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2sLviv%2C%20Lviv%20Oblast%2C%2079000!5e0!3m2!1sen!2sua!4v1659354695668!5m2!1sen!2sua"-->
      <!--        class="map"-->
      <!--        loading="lazy"-->
      <!--        referrerpolicy="no-referrer-when-downgrade"-->
      <!--      />-->
      <div id="map" class="map" />
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
import tt from '@tomtom-international/web-sdk-maps';

export default @Component({
  components: {}
})

class Map extends Vue {
  loading = true

  created () {
    this.loading = false;
  }

  mounted () {
    // this.initMap();
    tt.setProductInfo('213', '1');
    tt.map({
      key: 'z7rneEtjGJ4Ggbr7hEiw3iTsQ3vK6yQB',
      container: 'map'
    });

    // map.addControl(new tt.FullscreenControl());
    // map.addControl(new tt.NavigationControl());
  }

  // initMap () {
  //   window.SS = window.SS || {};
  //   window.SS.Require = function (callback) {
  //     if (typeof callback === 'function') {
  //       if (window.SS && window.SS.EventTrack) {
  //         callback();
  //       } else {
  //         let siteSpect = document.getElementById('siteSpectLibraries');
  //         const head = document.getElementsByTagName('head')[0];
  //         if (siteSpect === null && typeof head !== 'undefined') {
  //           siteSpect = document.createElement('script');
  //           siteSpect.type = 'text/javascript';
  //           siteSpect.src = '/__ssobj/core.js+ssdomvar.js+generic-adapter.js';
  //           siteSpect.async = true; siteSpect.id = 'siteSpectLibraries';
  //           head.appendChild(siteSpect);
  //         }
  //         if (window.addEventListener) {
  //           siteSpect.addEventListener('load', callback, false);
  //         } else {
  //           siteSpect.attachEvent('onload', callback, false);
  //         }
  //       }
  //     }
  //   };
  // }
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
