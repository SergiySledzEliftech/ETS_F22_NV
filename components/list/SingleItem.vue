<template>
  <div :class="{'isGrid': grid}">
    <div class="img_wrap">
      <img :src="item.images[0]" alt="image" class="item_img">
    </div>
    <div class="item_content">
      <div class="title_wrap">
        <h4 class="item_title">
          {{ item.title }}
        </h4>
        <a :href="item.location" target="_blank" class="item_location">
          <v-icon size="16" color="#C10015">mdi-map-marker-outline</v-icon>some location</a>
      </div>
      <div class="item_details">
        <p>Price:<span>{{ item.price }}$</span></p>
        <p>
          Rating:<span>{{ item.rating }} <v-icon
            size="20"
            color="yellow accent-4"
          >
            mdi-star
          </v-icon>
          </span>
        </p>
        <p>Term:<span>{{ item.term }} day(s)</span></p>
      </div>
      <div class="item_seller">
        <img
          :src="item.user.avatar"
          alt="avatar"
        >
        <p>{{ item.user.firstName }} {{ item.user.lastName }}</p>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
export default @Component({
  name: 'single-item',
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
class SingleItem extends Vue {
}
</script>

<style lang="scss" scoped>
    .img_wrap {
      width: 100%;
    }

    .item_img {
      display: block;
      width: 100%;
      aspect-ratio: 3/2;
      object-fit: cover;
    }
    .item_location {
      display: block;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 400;
      @media (max-width: 899px) {
        margin-bottom: 7px;
      }
      @media (max-width: 599px) {
        margin-top: 0;
      }
      i {
        margin-bottom: 5px;
      }
    }

    .item_title {
      margin-top: 10px;
      margin-bottom: 0;
      @media screen and (max-width: 899px) {
        font-size: 18px;
        font-weight: 600;
      }
    }
    .item_details {
      display: flex;
      justify-content: space-between;
      border-top: 2px solid rgba($light, 0.4);
      border-bottom: 2px solid rgba($light, 0.4);
      @media (max-width: 899px) {
        border-top: 1px solid rgba($light, 0.4);
        border-bottom: 1px solid rgba($light, 0.4);

      }
      p {
        padding: 10px 3px 6px;
        margin: 0;
        font-size: 16px;
        @media (max-width: 899px) {
          padding: 0 3px 4px;
          font-size: 14px;
        }
        &:first-of-type span{
          font-size: 20px;
          color: $positive;
          @media (max-width: 899px) {
            font-size: 16px;
          }
      }
      }
      span {
        display: block;
        text-align: center;
        padding-top: 5px;
        color: $negative;
        font-weight: 600;
        @media (max-width: 899px) {
          font-size: 14px;
        }
        i {
          margin-bottom: 3px;
        }
      }
    }
    .item_seller {
      display: flex;
      align-items: center;
      margin-top: 6px;
      @media (max-width: 499px) {
        max-width: 140px;
      }
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
        @media (max-width: 899px) {
          width: 35px;
          height: 35px;
        }
        @media (max-width: 499px) {
          width: 30px;
          height: 30px;
        }
      }
      p {
        margin: 0 0 0 5px;
        @media (max-width: 899px) {
          font-size: 16px;
        }
        @media (max-width: 499px) {
          font-size: 12px;
          line-height: 1.01;
        }
      }
    }

    .isGrid {
  display: flex;
  .item_content {
    margin-left: 20px;
      width: 60%
  }
  .img_wrap {
    width: 40%;
    height: 100%;
  }

  .item_img {
       height: 100%;
  }

  .title_wrap {
    display: flex;
    justify-content: space-between;
    @media (max-width: 599px) {
      flex-wrap: wrap;
    }
  }

  .item_title {
    @media (max-width: 599px) {
      margin-top: 0
    }
  }
  .item_details {
    display: block;
    border-bottom: none;
    span {
      display: inline-block;
      margin-left: 20px;
      padding: 0
    }
  }
}

</style>
