<template>
  <div class="pageService">
    <h2>Paid Services</h2>
    <img src="~/assets/img/services.jpg" alt="Hello, we are from Ukraine">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis rutrum felis sit amet condimentum. Etiam id tellus et tortor tincidunt tincidunt. Praesent eget metus et quam ultricies viverra. Curabitur vestibulum enim nec dui vehicula malesuada. Nam mattis viverra justo, eu lacinia dolor pretium dictum. Aliquam volutpat arcu erat. Aenean consectetur vulputate sapien, quis gravida urna dignissim non. Nullam nisi sem, tempus vel congue vel, condimentum at purus. Etiam varius arcu quis felis tincidunt elementum.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis rutrum felis sit amet condimentum. Etiam id tellus et tortor tincidunt tincidunt. Praesent eget metus et quam ultricies viverra. Curabitur vestibulum enim nec dui vehicula malesuada. Nam mattis viverra justo, eu lacinia dolor pretium dictum. Aliquam volutpat arcu erat. Aenean consectetur vulputate sapien, quis gravida urna dignissim non. Nullam nisi sem, tempus vel congue vel, condimentum at purus. Etiam varius arcu quis felis tincidunt elementum.</p>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';

export default @Component({
  auth: false
})

class PaidServices extends Vue {

}
</script>

<style lang="scss" scoped>
  .pageService{
    h2{
      margin-bottom: 16px;
    }

    img{
      display: block;
      width: 100%;
      margin-bottom: 16px;
    }
  }
</style>
