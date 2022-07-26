<template>
  <div>
    <items-list :list="list">
      <li v-for="item in list" :key="item.id" class="item">
        <single-item :item="item" :grid="view === 'list'">
          <p class="expire">
            Expires at: {{ item.expired }}
          </p>
        </single-item>
      </li>
    </items-list>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator';
import ItemsList from '@/components/list/ItemsList.vue';
import SingleItem from '~/components/list/SingleItem.vue';

export default @Component({
  name: 'history',
  components: { ItemsList, SingleItem },
  props: {
    list: {
      type: Array,
      required: true
    },
    view: {
      type: String,
      required: true
    }
  }

})

class History extends Vue {
}
</script>

<style lang="scss" scoped>
.expire {
  margin: 0;
  position: absolute;
  padding: 10px;
  right: 0;
  top: 0;
  font-weight: 500;
  font-size: 14px;
  color: $bg;
  background: rgba($light, 0.9);
  border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;

}

.isGrid .expire {
  top: calc(100% - 44px);
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  left: 0;
  padding: 5px 10px;
}

</style>
