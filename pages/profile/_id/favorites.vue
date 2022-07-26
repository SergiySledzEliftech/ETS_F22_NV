<template>
  <div>
    <items-list :list="fav">
      <li v-for="item in fav" :key="item.id" class="item">
        <single-item :item="item" :grid="view === 'list'">
          <div class="btn">
            <v-tooltip bottom>
              <template #activator="{on, attrs}">
                <v-btn fab class="btn" small v-bind="attrs" v-on="on">
                  <v-icon color="error">
                    mdi-heart
                  </v-icon>
                </v-btn>
              </template>
              <span>Remove from favorites</span>
            </v-tooltip>
          </div>
        </single-item>
      </li>
    </items-list>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import ItemsList from '~/components/list/ItemsList.vue';
import SingleItem from '~/components/list/SingleItem.vue';
const { State } = namespace('profile');

export default @Component({
  name: 'Favorites',
  components: { ItemsList, SingleItem }
})

class Favorites extends Vue {
  @State view
  fav = [
    {
      id: 2,
      title: 'Some useful title 1',
      price: 300,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      images: ['https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0'],
      term: 5,
      user: {
        userId: 123,
        avatar: 'https://th.bing.com/th/id/OIP.boU0VLtfyLfKIbp_1YIWJgHaFj?pid=ImgDet&rs=1',
        firstName: 'Some',
        lastName: 'User'
      },
      rating: 4
    },
    {
      id: 1,
      title: 'Some useful title 2',
      price: 400,
      location: 'https://th.bing.com/th/id/R.d9b27dfdff5a2a8182304ed921f7fe67?rik=iH9rCXLTvhfxYg&pid=ImgRaw&r=0',
      images: ['https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'],
      term: 3,
      user: {
        userId: 12,
        avatar: 'https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        firstName: 'Some',
        lastName: 'Another User'
      },
      rating: 4.5
    }
  ]
}

</script>

<style scoped lang="scss">
.btn {
  position: absolute;
  top: -5px;
  right: -5px;
}
</style>
