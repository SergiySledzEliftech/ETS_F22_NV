<template>
  <div class="container">
    <div class="panel">
      <DisplayingButtons :model-value="view" />
    </div>
    <v-container>
      <v-tabs class="tabs">
        <v-tab v-for="el in content" :key="el.id">
          {{ el.title }}
        </v-tab>
        <v-tab-item v-for="el in content" :key="el.id">
          <component :is="el.component" :list="el.data" />
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import ItemsList from '@/components/list/List.vue'
import Borrow from '@/components/profile/history/Borrow.vue'
import Lend from '@/components/profile/history/Lend.vue'
import DisplayingButtons from '@/components/list/DisplayingButtons.vue'

export default @Component({
  name: 'my-rent',
  components: { ItemsList, Borrow, Lend, DisplayingButtons }
})

class MyRent extends Vue {
  view = 'grid'
  content = [
    {
      id: 1,
      title: 'Borrowed',
      component: 'borrow',
      data: [
        {
          id: 2,
          title: 'Some useful title 2',
          price: 400,
          location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
          img: 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=',
          term: 3,
          user: {
            userId: 12,
            avatar: 'https://tinypng.com/images/social/website.jpg',
            firstName: 'Some',
            lastName: 'Another User'
          },
          rating: 4.5
        },
        {
          id: 1,
          title: 'Some useful title 1',
          price: 300,
          location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
          img: 'https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?w=2000',
          term: 5,
          user: {
            userId: 123,
            avatar: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
            firstName: 'Some',
            lastName: 'User'
          },
          rating: 4
        }

      ]
    },
    {
      id: 2,
      title: 'Lent',
      component: 'lend',
      data: [
        {
          id: 5,
          title: 'Some useful title 1',
          price: 300,
          location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
          img: 'https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?w=2000',
          term: 5,
          user: {
            userId: 123,
            avatar: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
            firstName: 'Some',
            lastName: 'Guy'
          },
          rating: 4
        },
        {
          id: 4,
          title: 'Some useful title 2',
          price: 400,
          location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
          img: 'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=',
          term: 3,
          user: {
            userId: 12,
            avatar: 'https://tinypng.com/images/social/website.jpg',
            firstName: 'Some',
            lastName: 'Another User'
          },
          rating: 4.5
        },
        {
          id: 2,
          title: 'Some useful title 2',
          price: 400,
          location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
          img: 'https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg',
          term: 3,
          user: {
            userId: 12,
            avatar: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
            firstName: 'Some',
            lastName: 'Another User'
          },
          rating: 4.5
        },
        {
          id: 1,
          title: 'Some useful title 1',
          price: 300,
          location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
          img: 'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=',
          term: 5,
          user: {
            userId: 123,
            avatar: 'https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif',
            firstName: 'Some',
            lastName: 'User'
          },
          rating: 4
        },
        {
          id: 3,
          title: 'Some useful title 1',
          price: 300,
          location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
          img: 'https://freerangestock.com/thumbnail/137610/lonely-man-under-night-sky--starry-sky-over-the-horizon--conte.jpg',
          term: 5,
          user: {
            userId: 123,
            avatar: 'https://www.whoa.in/download/mobile-wallpapers-hd-images-background-wallpapers-5-mobile-wallpaper',
            firstName: 'Some',
            lastName: 'User'
          },
          rating: 4
        }

      ]
    }
  ]
}
</script>

<style scoped lang="scss">

.container {
  position: relative;
}

.panel {
  position: absolute;
  right: 0;
  z-index: 100;
}
.v-tabs-slider {
  background-color: $negative !important;
}

.tabs a {
  &:hover {
    background-color: rgba($negative, 0.5);
  }

  &[aria-selected="true"] {
    color: $negative;
    background-color: rgba($light, 0.5);
}
}

</style>
