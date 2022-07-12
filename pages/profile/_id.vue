<template>
  <v-container class="profile">
    <v-row class="profile-row">
      <form id="profile-data" @submit.prevent="save">
        <div v-if="isMy" class="float-btn btn-edit">
          <v-btn-toggle v-model="fab">
            <v-btn
              :value="true"
              dark
              @click="cancelEdit"
            >
              <v-icon v-if="fab">
                mdi-close
              </v-icon>
              <v-icon v-else>
                mdi-pencil
              </v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>

        <div v-if="fab" class="float-btn btn-save">
          <v-btn type="submit" small>
            <v-icon>
              mdi-content-save
            </v-icon>
          </v-btn>
        </div>

        <v-col :cols="4">
          <v-card class="profile-avtr">
            <v-img :src="userData[currentIndex].avatar" alt="avtr" class="avtr" />
            <div v-if="fab" class="half">
              <input ref="username" :disabled="!fab" type="text" :value="userName">
              <input ref="lastname" :disabled="!fab" type="text" :value="lastName">
              <v-icon v-if="fab" class="edit-icon">mdi-pencil</v-icon>
            </div>
            <h5 v-else>
              {{ userName }} {{ lastName }}
            </h5>
          </v-card>
          <v-card>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Rating
                </v-list-item-subtitle>
                <v-list-item-title>
                  {{ rating }} from 10
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>

        <v-col :cols="8">
          <v-card>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Nickname
                </v-list-item-subtitle>
                <v-list-item-title>
                  <input ref="nickname" class="disable-input" :disabled="!fab" type="text" :value="nickname">
                  <v-icon v-if="fab" class="edit-icon">mdi-pencil</v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  E-mail
                </v-list-item-subtitle>
                <v-list-item-title>
                  <input ref="email" class="disable-input" :disabled="!fab" type="email" :value="email">
                  <v-icon v-if="fab" class="edit-icon">mdi-pencil</v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Phone
                </v-list-item-subtitle>
                <v-list-item-title>
                  <input ref="phone" class="disable-input" :disabled="!fab" type="number" :value="phone">
                  <v-icon v-if="fab" class="edit-icon">mdi-pencil</v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="optionalPhone" two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Optional Phone
                </v-list-item-subtitle>
                <v-list-item-title>
                  <input ref="optionalPhone" class="disable-input" :disabled="!fab" type="number" :value="optionalPhone">
                  <v-icon v-if="fab" class="edit-icon">mdi-pencil</v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Address
                </v-list-item-subtitle>
                <v-list-item-title>
                  <input ref="address" class="disable-input" :disabled="!fab" type="text" :value="address">
                  <v-icon v-if="fab" class="edit-icon">mdi-pencil</v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Location
                </v-list-item-subtitle>
                <v-list-item-title>
                  <div class="half">
                    <input ref="locationx" :disabled="!fab" type="text" :value="locationX">
                    <v-icon v-if="fab" class="edit-icon">mdi-pencil</v-icon>

                    <input ref="locationy" :disabled="!fab" type="text" :value="locationY">
                  </div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  About
                </v-list-item-subtitle>
                <v-list-item-title>
                  <textarea ref="about" class="disable-input" :disabled="!fab" :value="about" />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </form>
    </v-row>
  </v-container>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

export default @Component({
  name: 'config',
  layout: 'profile',
  components: {
  },
  computed: {
    isMy () {
      return this.myId === +this.$route.params.id
    }
  },
  methods: {
    cancelEdit () {
      if (this.fab) {
        this.$refs.username.value = ''
        this.$refs.lastname.value = ''
        this.$refs.nickname.value = ''
        this.$refs.email.value = ''
        this.$refs.phone.value = ''
        this.$refs.optionalPhone.value = ''
        this.$refs.address.value = ''
        this.$refs.locationx.value = ''
        this.$refs.locationy.value = ''
        this.$refs.about.value = ''
      }
    },
    save () {
      // const userNameIsOk
      // const userNameIsOk
      // const lastNameIsOk
      // const nickNameIsOk
      // const emailIsOk
      // const phoneIsOk
      // const optionalPhoneIsOk
      // const addressIsOk
      // const locationXIsOk
      // const locationYIsOk
      //
      // const formIsValid = userNameIsOk && lastNameIsOk && nickNameIsOk && emailIsOk && phoneIsOk && optionalPhoneIsOk && addressIsOk && locationXIsOk && locationYIsOk

      // if (formIsValid) {
      this.userName = this.$refs.username.value
      this.lastName = this.$refs.lastname.value
      this.nickname = this.$refs.nickname.value
      this.email = this.$refs.email.value
      this.phone = this.$refs.phone.value
      this.optionalPhone = this.$refs.optionalPhone.value
      this.address = this.$refs.address.value
      this.about = this.$refs.about.value
      this.locationX = this.$refs.locationx.value
      this.locationY = this.$refs.locationy.value
      alert('saved')
      this.fab = false
      // } else {
      //   alert('error')
      // }
    }
  }
  // mounted () {
  //   this.$emit('current', this.userData[this.currentId])
  // }
})

class Config extends Vue {
  userData = [
    {
      id: 1,
      name: 'John',
      lastName: 'Doe',
      nickname: 'GloMaRe',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero quidem quos ullam! Commodi, eius.',
      avatar: 'https://avatars.githubusercontent.com/u/17836236',
      email: 'JohnDoe@glomail.com',
      phone: '0987773377',
      optionalPhone: '0677773377',
      address: 'Ukraine, Kyiv, Bohdana Khmelnytskogo St., 3',
      locationX: '50.44469383287712',
      locationY: '30.52002110354918',
      rating: 10
    },
    {
      id: 2,
      name: 'Jane',
      lastName: 'Doe',
      nickname: 'GloBale',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero quidem quos ullam! Commodi, eius.',
      avatar: 'https://avatars.githubusercontent.com/u/1783623',
      email: 'JohnDoe@glomail.com',
      phone: '0987773377',
      optionalPhone: '0677773377',
      address: 'Ukraine, Kyiv, Bohdana Khmelnytskogo St., 3',
      locationX: '50.44469383287712',
      locationY: '30.52002110354918',
      rating: 10
    },
    {
      id: 3,
      name: 'Jone',
      lastName: 'Doe',
      nickname: 'GloMaLe',
      about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt libero quidem quos ullam! Commodi, eius.',
      avatar: 'https://avatars.githubusercontent.com/u/17836262',
      email: 'JohnDoe@glomail.com',
      phone: '0987773377',
      optionalPhone: '0677773377',
      address: 'Ukraine, Kyiv, Bohdana Khmelnytskogo St., 3',
      locationX: '50.44469383287712',
      locationY: '30.52002110354918',
      rating: 10
    }
  ];

  myId = 1;
  currentIndex = this.$route.params.id - 1
  userName = this.userData[this.currentIndex].name
  lastName = this.userData[this.currentIndex].lastName
  nickname = this.userData[this.currentIndex].nickname
  email = this.userData[this.currentIndex].email
  phone = this.userData[this.currentIndex].phone
  optionalPhone = this.userData[this.currentIndex].optionalPhone
  address = this.userData[this.currentIndex].address
  about = this.userData[this.currentIndex].about
  rating = this.userData[this.currentIndex].rating
  locationX = this.userData[this.currentIndex].locationX
  locationY = this.userData[this.currentIndex].locationY
  fab = false;
}

</script>

<style lang="scss">

.profile {
  .v-card {
    background-color: $bg;
    margin-bottom: 10px;

    .half {
      display: flex;
      position: relative;
      justify-content: center;

      input {
        width: 50%;
      }

      & :first-child {
        margin-right: 5px;
      }
    }

    .edit-icon {
      position: absolute;
      right: 5px;
    }

    input, textarea {
      padding: 5px 0;
      border-bottom: 1px solid black;
      width: 100%;

      &:disabled {
        border-bottom: 1px solid transparent;
        color: black;
      }

      &:focus-visible {
        outline-color: transparent;
      }
    }

    .avtr {
      max-width: 200px;
    }

    .v-list-item:last-child {
      padding-bottom: 10px;
    }

    .v-list-item:first-child {
      padding-top: 10px;
    }

    .v-list-item__content {
      padding: 0;
    }

    .v-list-item__title {
      min-height: 30px;
      position: relative;
    }
  }

  .profile-row {
    position: relative;
  }

  #profile-data {
    display: flex;
    width: 100%;
  }

  .float-btn {
    position: absolute;

    &.btn-edit {
      top: -50px;
      right: 0;

      button {
        top: 35px;
      }
    }

    &.btn-save {
      top: -50px;
      right: 60px;

      button {
        height: 48px;
        top: 35px;
      }
    }

    button {
      background-color: $secondary !important;
      border-radius: 50px !important;
      position: relative;
      right: 20px;
      z-index: 1;
      box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0px 2 2px 0px rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);

      i {
        color: $bg !important;
      }
    }

    .v-item-group {
      background: transparent !important;
    }
  }

  .profile-avtr {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .avtr {
      margin-bottom: 10px;
    }
  }
}
</style>
