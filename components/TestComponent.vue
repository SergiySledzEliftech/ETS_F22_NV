<template>
  <div>
    <p> Basic components </p>
    <h1> Title h1</h1>
    <h2> Title h2 </h2>
    <h3> Title h3 </h3>
    <h4> Title h4 </h4>
    <h5> Title h5 </h5>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dignissim scelerisque nisi a imperdiet. Ut malesuada vel nunc id suscipit. Nullam dapibus orci a orci faucibus aliquet.</p>
    <a href="#"> Link to</a>
    <br>
    <v-btn class="btn_primary" depressed color="primary">
      Primary button
    </v-btn>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import TestComp from '../components/TestComponent'

export default @Component({
  components: { TestComp }
})

class Index extends Vue {
    title = 'Welcome to the ETS_F22_NV project!';
}
</script>

<style>

</style>
