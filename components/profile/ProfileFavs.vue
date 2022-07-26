<template>
  <div>
    <items-list :list="list" :change-view="changeView" :view="view">
      <li v-for="item in list" :key="item.id" class="item">
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
import { Vue, Component } from 'nuxt-property-decorator';
import ItemsList from '@/components/list/ItemsList.vue';
import SingleItem from '@/components/list/SingleItem.vue';
export default @Component({
  name: 'profile-favs',
  components: { ItemsList, SingleItem },
  props: {
    list: {
      type: Array,
      required: true
    }
  }
})
class ProfileFavs extends Vue {
  view = 'grid'

  changeView () {
    const v = this.view === 'grid' ? 'list' : 'grid';
    this.view = v;
  }
}
</script>

<style lang="scss" scoped>
 .btn {
   position: absolute;
   top: 0;
   right: 0;
           button {
       width: 30px;
       height: 30px;
     }

 }

 .isGrid .btn {
   top: -5px;
   right: -5px;
   @media (max-width: 599px) {
   right: 5px;
   top: calc(100% - 20px);
   }
 }
</style>
