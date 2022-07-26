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

    <template>
      <v-form action="" method="post" @submit.prevent="addTestProduct">
        <v-container>
          <h5> Форма для додавання тестового товару до бази монго (https://glomare.herokuapp.com/test-product)</h5>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="testProductData.name"
                label="First name"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="testProductData.price"
                label="Price"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-checkbox
                v-model="testProductData.isAvailable"
                label="isAvailable"
              />
            </v-col>

            <v-col cols="12" md="4">
              <input class="btn_primary" type="submit" value="add">
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </template>

    <div v-for="prod in testProducts" :key="prod.id">
      <div style="border: 1px solid var(--secondary)">
        <div>ID: {{ prod._id }}</div>
        <div>Name: {{ prod.name }}</div>
        <div>Price: {{ prod.price }}</div>
        <div>Available: {{ prod.isAvailable }}</div>
      </div>

      <v-btn class="btn_primary" depressed color="primary" @click="deleteTestProduct(prod._id)">
        Delete
      </v-btn>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
import { consoleError } from 'vuetify';
import TestComp from '../components/TestComponent';
import { serverApiUrl } from '~/settings/config';

export default @Component({
  components: { TestComp }
})

class Index extends Vue {
  title = 'Welcome to the ETS_F22_NV project!';
  testProducts = [];

  testProductData = {
    name: '',
    price: '',
    isAvailable: false
  };

  async mounted () {
    console.log(serverApiUrl);
    console.log(await this.$axios(`${serverApiUrl}test-product`));
    await this.GetAllTestProducts();
  }

  // Отримати всі товари з бази
  // https://glomare.herokuapp.com/test-product
  async GetAllTestProducts () {
    try {
      const daraProduct = await this.$axios(`${serverApiUrl}test-product`);
      this.testProducts = daraProduct.data;
      console.log(daraProduct.data);
    } catch (error) {
      this.error = error.message;
      consoleError(error.message);
    }
  }

  // Додавання товару
  async addTestProduct () {
    await this.$axios({
      method: 'post',
      url: `${serverApiUrl}test-product`,
      data: {
        name: this.testProductData.name,
        price: this.testProductData.price,
        isAvailable: this.testProductData.isAvailable
      }
    })
      .then((response) => {
        console.log(response);
        this.testProductData.name = '';
        this.testProductData.price = '';
        this.testProductData.isAvailable = '';
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Выдалення товару
  async deleteTestProduct (idProduct) {
    await this.$axios({
      method: 'delete',
      url: `${serverApiUrl}test-product/${idProduct}`
    })
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>

<style>

</style>
