<template>
  <v-app class="advertisement pt-12 pb-15">
    <v-container>
      <v-card class="advertisement__box mx-auto" max-width="1200">
        <v-card-title
          class="text-h6 font-weight-regular justify-space-between"
        >
          <h3 class="advertisement__form-title mb-5">
            Describe the advertisement
          </h3>
          <v-avatar
            v-model="step"
            color="primary lighten-2"
            class="subheading white--text"
            size="24"
          >
            {{ step }}
          </v-avatar>
        </v-card-title>
        <v-form>
          <v-window
            v-model="step"
            class="mb-5"
          >
            <!-- Step 1 -->
            <v-window-item :value="1" class="flex-column">
              <v-card-text class="d-flex flex-column flex-shrink-1 flex-grow-1">
                <div class="advertisement__form-item rounded py-7 px-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1 d-flex flex-column justify-center">
                  <span class="advertisement__input-pretitle text-caption grey--text text--darken-1 mb-2 d-block">Enter name*</span>
                  <v-text-field
                    placeholder="Title"
                    hint="The title plays an important role, don't forget to add it"
                    class="advertisement__form-input rounded"
                    flat
                    solo
                    :counter="30"
                  />
                </div>
                <div class="advertisement__form-item rounded py-7 px-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1">
                  <span class="advertisement__input-pretitle text-caption grey--text text--darken-1 mb-2 d-block">Category*</span>
                  <div>
                    <v-dialog
                      v-model="dialog"
                      width="1070"
                    >
                      <template #activator="{ on, attrs }">
                        <div
                          v-if="!selectedCategory"
                          class="advertisement__form-category white py-2 px-2 rounded"
                          v-bind="attrs"
                          v-on="on"
                        >
                          Select a category
                        </div>
                        <div
                          v-else
                          class="advertisement__form-category advertisement__form-category-active white py-2 px-2 rounded d-flex align-center"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <!-- <v-icon left>
                            {{ selectedCategory.icon }}
                          </v-icon> -->
                          <v-avatar color="indigo" width="40" height="40" min-width="35" class="mr-2">
                            <v-icon dark>
                              {{ selectedCategory.icon }}
                            </v-icon>
                          </v-avatar>
                          <p class="mb-0 text-capitalize">
                            {{ selectedCategory.name }}
                          </p>
                        </div>
                      </template>

                      <v-card class="pt-4">
                        <v-card-title class="text-h3 mb-10">
                          Select a category
                        </v-card-title>

                        <v-card-text class="d-flex flex-wrap justify-space-around">
                          <category-card
                            v-for="category in categories"
                            :key="category.name"
                            :categories="category"
                            class="advertisement__category-item"
                            @category="newCategory"
                          />
                        </v-card-text>

                        <v-divider />

                        <v-card-actions>
                          <v-spacer />
                          <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                          >
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </v-card-text>
            </v-window-item>
            <!-- Step 2 -->
            <v-window-item :value="2" class="flex-column">
              <v-card-text class="d-flex flex-column flex-shrink-1 flex-grow-1">
                <div class="advertisement__form-item rounded py-7 px-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1 text-center">
                  <span class="advertisement__input-label text-caption grey--text text--darken-1 mb-2 d-block text-left">Photo*</span>
                  <div class="advertisement__form-photos">
                    <label
                      class="ma-4 white--text blue-grey py-2 px-3 rounded pointer"
                      for="file"
                      style="cursor: pointer;"
                    >
                      Upload
                      <v-icon
                        right
                        dark
                      >
                        mdi-cloud-upload
                      </v-icon>
                    </label>
                    <v-file-input
                      id="file"
                      type="file"
                      accept="image/*"
                      hide-input
                      multiple
                      class="d-none"
                      @change="uploadImg"
                    />
                  </div>
                  <div class="advertisement__form-elements mt-6">
                    <div v-for="(item,index) in imgUrl" :key="index" class="advertisement__form-box">
                      <label class="advertisement__form-photo advertisement__form-photo--active" for="img">
                        <img :src="item.url" alt="">
                        <div class="advertisement__form-btns d-flex justify-space-around align-center">
                          <v-btn class="advertisement__form-btn--edit">
                            <label for="img" @click="idNumber(item.id)"><v-icon>mdi-pencil</v-icon></label>
                          </v-btn>
                          <v-btn class="advertisement__form-btn--delete" @click="remove(index)"><v-icon>mdi-delete</v-icon></v-btn>
                        </div>
                      </label>
                      <v-file-input
                        id="img"
                        type="file"
                        accept="image/*"
                        hide-input
                        class="d-none"
                        :disabled="!isDisabled"
                        @change="updateImg($event)"
                      />
                    </div>
                    <div v-for="(n,index) in numberOfBoxes - imgUrl.length" :key="index + Math.random()" class="advertisement__form-box">
                      <label class="advertisement__form-photo" for="img">
                        <img src="../../assets/img/photo-camera-svgrepo-com.svg" alt="">
                      </label>
                    </div>
                  </div>
                  <v-alert
                    :key="infoAlertForPhoto"
                    type="info"
                    dismissible
                    :value="infoAlertForPhoto"
                  >
                    I'm an info alert.
                  </v-alert>
                </div>
              </v-card-text>
            </v-window-item>
            <!-- Step 3 -->
            <v-window-item :value="3" class="flex-column">
              <v-card-text class="d-flex flex-column flex-shrink-1 flex-grow-1">
                <div class="advertisement__form-item rounded pt-7 pb-7 pl-3 pr-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1">
                  <span class="advertisement__input-label text-caption grey--text text--darken-1 mb-2 d-block">Brand*</span>
                  <v-switch
                    v-model="isBrand"
                    inset
                    class="ml-1 d-inline-block"
                  />
                  <v-text-field
                    placeholder="Brand"
                    hint="The title plays an important role, don't forget to add it"
                    class="advertisement__form-input rounded"
                    flat
                    solo
                    required
                    :counter="30"
                    :disabled="!isBrand"
                  />
                </div>
                <div class="advertisement__form-item rounded pt-7 pb-7 pl-3 pr-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1">
                  <span class="advertisement__input-label text-caption grey--text text--darken-1 mb-2 d-block">Description*</span>
                  <v-textarea
                    name="input-7-4"
                    placeholder="Description"
                    class="advertisement__form-input rounded"
                    flat
                    solo
                    no-resize
                    hint="Think about what you would like to learn from the announcement and add it"
                    :counter="9000"
                    height="100"
                  />
                </div>
              </v-card-text>
            </v-window-item>
            <!-- Step 4 -->
            <v-window-item :value="4" class="flex-column">
              <v-card-text class="d-flex flex-column flex-shrink-1 flex-grow-1">
                <div class="advertisement__form-item rounded pt-7 pb-7 pl-3 pr-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1">
                  <span class="advertisement__input-label text-caption grey--text text--darken-1 mb-2 d-block">Contact person*</span>
                  <v-text-field
                    placeholder="Name"
                    hint="The given name will appear in this ad"
                    class="advertisement__form-input rounded"
                    flat
                    solo
                    :counter="30"
                  />
                </div>
                <div class="advertisement__form-item rounded pt-7 pb-7 pl-3 pr-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1">
                  <span class="advertisement__input-label text-caption grey--text text--darken-1 mb-2 d-block">Location*</span>
                  <v-autocomplete
                    :items="countries"
                    placeholder="Select..."
                    class="advertisement__form-input rounded"
                    required
                    flat
                    solo
                  />
                </div>
              </v-card-text>
            </v-window-item>
            <!-- Step 5 -->
            <v-window-item :value="5" class="flex-column">
              <v-card-text class="d-flex flex-column flex-shrink-1 flex-grow-1">
                <div class="advertisement__form-item rounded pt-7 pb-7 pl-3 pr-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1">
                  <span class="advertisement__input-label text-caption grey--text text--darken-1 mb-2 d-block">Email address*</span>
                  <v-text-field
                    placeholder="Email"
                    hint="The title plays an important role, don't forget to add it"
                    class="advertisement__form-input rounded"
                    flat
                    solo
                    required
                    :counter="30"
                  />
                </div>
                <div class="advertisement__form-item rounded pt-7 pb-7 pl-3 pr-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1">
                  <span class="advertisement__input-label text-caption grey--text text--darken-1 mb-2 d-block">Phone number*</span>
                  <v-text-field
                    placeholder="Number"
                    hint="The specified number will be displayed in this advertisement"
                    class="advertisement__form-input rounded d-block"
                    flat
                    solo
                    type="number"
                    :counter="7"
                  />
                </div>
              </v-card-text>
            </v-window-item>
            <!-- Step 6 -->
            <v-window-item :value="6" class="flex-column">
              <v-card-text class="d-flex flex-column flex-shrink-1 flex-grow-1">
                <div class="advertisement__form-item rounded pt-7 pb-7 pl-3 pr-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1">
                  <span class="advertisement__input-label text-caption grey--text text--darken-1 mb-2 d-block">
                    Price*
                  </span>
                  <v-chip-group
                    v-model="price"
                    active-class="cyan darken-4 white--text mb-3"
                    column
                    color="#002f34"
                  >
                    <v-chip value="price" class="white dark--text">
                      Price
                    </v-chip>
                    <v-chip value="free" class="white">
                      Free
                    </v-chip>
                    <v-chip value="exchange" class="white">
                      Exchange
                    </v-chip>
                  </v-chip-group>
                  <div>
                    <v-text-field
                      placeholder="Price"
                      hint="The title plays an important role, don't forget to add it"
                      class="advertisement__form-input rounded"
                      flat
                      solo
                      prefix="$"
                      :counter="20"
                      :disabled="price !== 'price'"
                    />
                  </div>
                  <div class="d-flex align-center">
                    <label class="mr-5" for="switch">Сontract price</label>
                    <v-switch
                      id="switch"
                      v-model="isContractPrice"
                      inset
                      color="cyan darken-4"
                      class="white--text"
                      :disabled="price !== 'price'"
                    />
                  </div>
                </div>
                <div class="advertisement__form-item rounded pt-7 pb-7 pl-3 pr-3 blue-grey lighten-5 mb-2 flex-shrink-1 flex-grow-1">
                  <span class="advertisement__input-label text-caption grey--text text--darken-1 mb-2 d-block">
                    Individual or business*
                  </span>
                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                  >
                    <v-chip value="individual" class="white">
                      Individual
                    </v-chip>
                    <v-chip value="business" class="white">
                      Business
                    </v-chip>
                  </v-chip-group>
                </div>
              </v-card-text>
            </v-window-item>
            <!-- Step End -->
          </v-window>
          <v-divider />
          <v-card-actions>
            <v-btn :disabled="step === 1" text @click="step--">
              Back
            </v-btn>
            <v-spacer />
            <template v-if="step == 6">
              <v-btn color="primary" dark @click="step = 1">
                Clear
              </v-btn>
              <v-btn color="green" dark>
                Publish
              </v-btn>
            </template>
            <template v-else>
              <v-btn :disabled="step === 6" color="primary" @click="step++">
                Next
              </v-btn>
            </template>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-container>
  </v-app>
</template>
<script>

import { Vue, Component } from 'nuxt-property-decorator';
import categoryCard from '../../components/new-advertisement/category-card.vue';

export default @Component({
  name: 'CreateNewAnnouncement',
  components: { categoryCard }
})

class CreateNewAnnouncement extends Vue {
  step = 1;
  isDisabled = false;
  selection = 'individual'
  price = 'price'
  numberOfBoxes = 8
  isBrand = true
  dialog= false
  imgUrl = []
  selectedCategory = ''
  id = ''
  isContractPrice = false
  infoAlertForPhoto = false
  categories = [
    { name: 'realty', icon: 'mdi-home-city-outline' },
    { name: 'automobile', icon: 'mdi-car' },
    { name: 'clothing', icon: 'mdi-hanger' },
    { name: 'electronics', icon: 'mdi-cellphone' },
    { name: 'musical instruments', icon: 'mdi-guitar-electric' },
    { name: 'children"s goods', icon: 'mdi-baby-carriage' },
    { name: 'sports and hobbies', icon: 'mdi-weight-lifter' },
    { name: 'traveling', icon: 'mdi-rv-truck' },
    { name: 'household goods', icon: 'mdi-sofa-single' },
    { name: '1', icon: 'mdi-car' },
    { name: '2', icon: 'mdi-car' },
    { name: '3', icon: 'mdi-car' }
  ];

  countries = ['Київ', 'Одеса', 'Львів', 'Харків', 'Херсон']

  newCategory (data) {
    this.selectedCategory = data;
    this.dialog = false;
  }

  uploadImg = (files) => {
    const file = files;
    if (file.length > 8) {
      if (this.imgUrl.length <= 8) {
        this.imgToBit(file.slice(0, 8 - this.imgUrl.length));
        this.infoAlertForPhoto = true;
        console.log(this.infoAlertForPhoto);
      } else {
        this.infoAlertForPhoto = true;
      }
    } else {
      console.log('Hello');
      if (this.imgUrl.length <= 8) {
        this.imgToBit(file.slice(0, 8 - this.imgUrl.length));
        this.infoAlertForPhoto = true;
      } else {
        this.imgToBit(file);
        this.infoAlertForPhoto = true;
      }
    }
  }

  updateImg (files) {
    this.imgUrl.forEach((item) => {
      if (item.id === this.id) {
        const reader = new FileReader();
        reader.readAsDataURL(files);
        reader.onload = function () {
          const url = this.result.substring(this.result.indexOf(',') + 1);
          item.url = 'data:image/png;base64,' + url;
        };
      }
    });
    this.isDisabled = false;
  }

  remove=(index) => {
    this.imgUrl.splice(index, 1);
  }

  idNumber (data) {
    this.isDisabled = true;
    this.id = data;
  }

  imgToBit (data) {
    data.forEach((item) => {
      const that = this;
      const reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = function () {
        const url = this.result.substring(this.result.indexOf(',') + 1);
        that.imgUrl.push({
          id: that.imgUrl.length + 1,
          url: 'data:image/png;base64,' + url
        });
      };
    });
  }
}
</script>

<style lang="scss" scoped>
.advertisement{
  &__form-category{
    position: relative;
    max-width: 680px;
    height: 48px;
    display: flex;
    align-items: center;
    &::after{
      position: absolute;
      content: '';
      width: 10px;
      height: 10px;
      background-image: url('../../assets/img/arrow-dark.png');
      background-repeat: no-repeat;
      right: 20px;
      top: 50%;
      transform: translateX(-50%);
    }
  }
  &__form-category-active{
    &::after{
      background-image: url('../../assets/img/arrow-dark-right.png');
    }
  }
  &__form-input{
    max-width: 680px;
  }
  &__category-item{
    width: 30%;
    height: 100%;
  }
  &__form-box{
    width: 24%;
    height: 120px;
    img{
      width: 159px;
      height: 100%;
    }
  }
  &__form-photo{
      border-radius: 4px;
      background: #fff;
      width: 159px;
      height: 120px;
      padding: 0px 20px;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
      position: relative;
      position: relative;
      &::after{
          position: absolute;
          transition: all .5s ease;
          content:'';
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba($color: #000000, $alpha: 0.5);
          opacity: 0;
      }
      img{
        width: 40px;
        height: auto;
      }
  }
  &__form-photo--active{
    padding: 0;
    position: relative;
    &:hover{
      &::after{
        opacity: 1;
      }
      .advertisement__form-btn--delete{
        display: block;
        opacity: 1;
        z-index: 2;
      }
      .advertisement__form-btn--edit{
        display: block;
        opacity: 1;
        z-index: 2;
      }
    }
    img{
      width: 100%;
      padding: 0;
      height: 100%;
      object-fit: cover;
    }
  }
  &__form-radio{
    cursor: pointer;
    padding: 6px 12px;
    background-color: rgb(3, 75, 75);
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    color: white;
  }
  &__form-btn--delete{
    background-color: inherit;
    opacity: 0;
    display: none;
    transition: all .5s ease;
  }
  &__form-btn--edit{
    background-color: inherit;
    opacity: 0;
    display: none;
    transition: all .5s ease;
  }
  &__form-btns{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  &__form-elements{
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 16px;
    justify-content: center;
  }
  &__form-price{
    max-width: 300px;
  }
  &__form-currency{
    max-width: 100px;
  }
}
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow:none;
}
.v-dialog__content{
  align-items: flex-start;
  top: 50px;
}
.v-window-item{
  min-height: 450px;
  display: flex;
}
.v-input--radio{
  display: block;
  ::v-deep .v-input--radio-group--column .v-input--radio-group__input {
    flex-direction: row;
  }
  ::v-deep .v-input--radio-group__input{
    display: block;
  }
}
.v-radio{
  ::v-deep .v-input--selection-controls__input{
    display: none;
  }
}
.v-text-field{
  ::v-deep .v-text-field__slot {
    flex-direction: row-reverse;
  }
}
.v-input{
  flex: 0 0 auto;
}

</style>
