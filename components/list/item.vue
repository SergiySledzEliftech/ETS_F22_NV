<template>
  <div :class="{'isGrid': grid}">
    <img src="https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0" alt="image" class="item_img">
    <div class="item_content">
      <h4 class="item_title">
        Some useful title
      </h4>
      <a href="https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0" target="_blank" class="item_location">some location</a>
      <p>
        Rating: 0 <v-icon
          size="20"
          color="yellow accent-4"
        >
          mdi-star
        </v-icon>
      </p>
      <p>Price: <strong>400$</strong></p>
      <p>Term: <strong>5 days</strong></p>
      <div class="item_seller">
        <img
          src="https://th.bing.com/th/id/OIP.boU0VLtfyLfKIbp_1YIWJgHaFj?pid=ImgDet&rs=1"
          alt="avatar"
        >
        <p>UserName</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
export default @Component({
  name: 'list-item',
  props: {
    grid: {
      type: Boolean,
      required: true
    }
  }
})
class ListItem extends Vue {
}
</script>

<style lang="scss" scoped>

    .item_img {
      display: block;
      width: 360px;
      height: 270px;
      object-fit: cover;
    }
    .item_location {
      display: block;
      margin-top: 20px;
    }

    .item_title {
      margin-top: 10px;
    }
    .item_seller {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
      }
      p {
        margin: 0 0 0 15px;
      }
    }

    .isGrid {
  display: flex;
  .item_content {
    margin-left: 20px;
  }
  .item_img {
    width: 300px;
    height: 200px;
  }
}

</style>
