<template>
  <div>
    <div class="google-map" ref="googleMap" style="height: 300px; width: 300px;"></div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default @Component({
  name: 'Description',
  components: {},
  props: {
    mapConfig: Object,
    apiKey: String
  },
  data () {
    return {
      google: null,
      map: null
    }
  },
  async mounted () {
    this.google = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.initializeMap()
  },
  methods: {
    initializeMap () {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
    }
  }
})

class Map extends Vue {}
</script>

<style></style>
