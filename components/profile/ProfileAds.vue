<template>
  <div>
    <ItemsList :list="itemsData" :change-view="changeView" :view="view">
      <li v-for="item in itemsData" :key="item.id" class="item">
        <single-item :item="item" :grid="view === 'list'">
          <div class="buttons">
            <v-tooltip bottom>
              <template #activator="{on, attrs}">
                <v-btn v-bind="attrs" icon small v-on="on" @click.prevent="">
                  <v-icon :class="view">
                    mdi-pencil
                  </v-icon>
                </v-btn>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template #activator="{on,attrs}">
                <v-btn v-bind="attrs" icon small v-on="on" @click.prevent="() => deleteItem(itemsData, item.id)">
                  <v-icon :class="view">
                    mdi-trash-can
                  </v-icon>
                </v-btn>
              </template>
              <span>Delete</span>
            </v-tooltip>
          </div>
        </single-item>
      </li>
    </ItemsList>
  </div>
</template>

<script>
import { Vue, Component, namespace } from 'nuxt-property-decorator';
import ItemsList from '~/components/list/ItemsList.vue';
import SingleItem from '~/components/list/SingleItem.vue';
const { State, Mutation } = namespace('profile_myAds');

export default @Component({
  name: 'profile-ads',
  components: { ItemsList, SingleItem }
})
class ProfileAds extends Vue {
  @State view
  @State itemsData
  @Mutation deleteItem
  @Mutation changeView
}

</script>

<style lang="scss" scoped>
.buttons {
  padding: 20px;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  button {
    margin-left: 5px;
  }
  i.list {
    color: $secondary
  }
  i.grid {
    color: $bg
  }
  i:hover, i:focus {
    color: $light
  }
}

.isGrid .buttons {
  padding: 20px;
  top: calc(100% - 68px);
  @media (max-width: 599px) {
    display: flex;
    flex-direction: column;
    top: calc(100% - 68px);
    padding: 5px
  }
}

</style>
