<template>
  <div class="category-card rounded" @click="addCategory(categories)">
    <v-avatar>
      <v-icon>
        {{ categories.icon }}
      </v-icon>
    </v-avatar>
    <p class="category-card__text">
      {{ categories.name }}
    </p>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
export default @Component({
  name: 'CategoryCard'
})

class CategoryCard extends Vue {
  @Prop()categories

  addCategory (item) {
    this.$emit('category', item);
  }
}
</script>

<style lang="scss" scoped>
.category-card{
  margin-bottom: 15px;
  padding: 15px;
  cursor: pointer;
  transition: all .5s;
  &:nth-child(4n+1){
    background-color: #E0F7FA;
  }
  &:nth-child(4n+2){
    background-color: #C5CAE9;
  }
  &:nth-child(4n+3){
    background-color: #FFECB3;
  }
  &:nth-child(4n+4){
    background-color: #FFCCBC;
  }
  &:hover{
    .category-card__text{
      font-weight: 700;
      transition: all .5s ease;
    }
    .v-icon{
      font-size: 30px;
    }
  }
  &__text{
    font-size: 16px;
    line-height: 20px;
    color: rgb(0, 47, 52);
    margin: 0px 0px 0px 16px;
    display: inline-block;
    min-height: 24px;
    transition: all .5s;
    text-transform: capitalize;
  }
}
.v-avatar{
  position: relative;
  z-index: 5;
  &::after{
    position: absolute;
    content: '';
    width: 48px;
    height: 48px;
    border-radius: 100%;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
  }
}
.v-icon{
  transition: all .5s ease;
}
</style>
