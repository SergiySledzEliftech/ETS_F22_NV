<template>
  <div :class="{'isGrid': grid}">
    <img :src="item.img" alt="image" class="item_img">
    <div class="item_content">
      <h4 class="item_title">
        {{ item.title }}
      </h4>
      <a :href="item.location" target="_blank" class="item_location">
        <v-icon size="20" color="#C10015">mdi-map-marker-outline</v-icon>some location</a>
      <div class="item_details">
        <p>
          Rating:<span>{{ item.rating }} <v-icon
            size="20"
            color="yellow accent-4"
          >
            mdi-star
          </v-icon>
          </span>
        </p>
        <p>Price:<span>{{ item.price }}$</span></p>
        <p>Term:<span>{{ item.term }} days</span></p>
      </div>
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
      margin-top: 10px;
    }

    .item_title {
      margin-top: 10px;
      margin-bottom: 0;
    }
    .item_details {
      display: flex;
      justify-content: space-between;
      border-top: 2px solid rgba($light, 0.4);
      border-bottom: 2px solid rgba($light, 0.4);
      p {
        padding: 10px 3px 6px;
        margin: 0;
      }
      span {
        display: block;
        text-align: center;
        padding-top: 5px;
        color: $negative;
        font-weight: 600;
      }
    }
    .item_seller {
      display: flex;
      align-items: center;
      margin-top: 6px;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
      }
      p {
        margin: 0 0 0 5px;
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
