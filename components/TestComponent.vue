<template>
  <div>
    <p> Basic components </p>
    <h1> Title h1</h1>
    <h2> Title h2 </h2>
    <h3> Title h3 </h3>
    <h4> Title h4 </h4>
    <h5> Title h5 </h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim scelerisque nisi a imperdiet. Ut
      malesuada vel nunc id suscipit. Nullam dapibus orci a orci faucibus aliquet.
    </p>
    <a href="#"> Link to</a>
    <br>
    <v-btn class="btn_primary" depressed color="primary">
      Primary button
    </v-btn>
    <div v-for="prod in testProducts" :key="prod.id">
      <div style="border: 1px solid orangered">
        <div>ID: {{ prod._id }} </div>
        <div>Name:  {{ prod.name }} </div>
        <div>Price: {{ prod.price }} </div>
        <div>Available: {{ prod.isAvailable }} </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
// import { consoleError } from 'vuetify'
import { consoleError } from 'vuetify'
import TestComp from '../components/TestComponent'
import { serverApiUrl } from '../settings/config'

export default @Component({
  components: { TestComp }
})

class Index extends Vue {
    title = 'Welcome to the ETS_F22_NV project!';
    testProducts = [];

    async mounted () {
      console.log(serverApiUrl)
      console.log(await this.$axios(`${serverApiUrl}test-product`))
      await this.callAPI()
    }

    // https://glomare.herokuapp.com/test-product
    async callAPI () {
      try {
        const daraProduct = await this.$axios(`${serverApiUrl}test-product`)
        this.testProducts = daraProduct.data
        console.log(daraProduct.data)
      } catch (error) {
        this.error = error.message
        consoleError(error.message)
      }
    }
}
</script>

<style>

</style>
