<template>
  <div :class="{'isGrid': grid}">
    <img :src="item.img" alt="image" class="item_img">
    <div class="item_content">
      <h4 class="item_title">
        {{ item.title }}
      </h4>
      <a :href="item.location" target="_blank" class="item_location">some location</a>
      <p>
        Rating: {{ item.rating }} <v-icon
          size="20"
          color="yellow accent-4"
        >
          mdi-star
        </v-icon>
      </p>
      <p>Price: <strong>{{ item.price }}$</strong></p>
      <p>Term: <strong>{{ item.term }} days</strong></p>
      <div class="item_seller">
        <img
          :src="item.user.avatar"
          alt="avatar"
        >
        <p>{{ item.user.firstName }} {{ item.user.lastName }}</p>
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
    },
    item: {
      type: Object,
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
      width: 320px;
      height: 240px;
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
