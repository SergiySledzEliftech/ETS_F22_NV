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
            <v-img :src="user.avatar" alt="avtr" class="avtr" />
            <div v-if="fab" class="half">
              <input ref="username" :disabled="!fab" type="text" :value="user.name">
              <input ref="lastname" :disabled="!fab" type="text" :value="user.lastName">
              <v-icon v-if="fab" class="edit-icon">
                mdi-pencil
              </v-icon>
            </div>
            <h5 v-else>
              {{ user.name }} {{ user.lastName }}
            </h5>
          </v-card>
          <v-card>
            <v-list-item two-line>
              <v-list-item-content class="rating">
                <v-list-item-subtitle>
                  Rating
                </v-list-item-subtitle>
                <v-list-item-title>
                  {{ user.rating }} from 10
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
                  <input ref="nickname" class="disable-input" :disabled="!fab" type="text" :value="user.nickname">
                  <v-icon v-if="fab" class="edit-icon">
                    mdi-pencil
                  </v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  E-mail
                </v-list-item-subtitle>
                <v-list-item-title>
                  <input ref="email" class="disable-input" :disabled="!fab" type="email" :value="user.email">
                  <v-icon v-if="fab" class="edit-icon">
                    mdi-pencil
                  </v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Phone
                </v-list-item-subtitle>
                <v-list-item-title>
                  <input ref="phone" class="disable-input" :disabled="!fab" type="number" :value="user.phone">
                  <v-icon v-if="fab" class="edit-icon">
                    mdi-pencil
                  </v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="user.optionalPhone" two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Optional Phone
                </v-list-item-subtitle>
                <v-list-item-title>
                  <input ref="optionalPhone" class="disable-input" :disabled="!fab" type="number" :value="user.optionalPhone">
                  <v-icon v-if="fab" class="edit-icon">
                    mdi-pencil
                  </v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Address
                </v-list-item-subtitle>
                <v-list-item-title>
                  <input ref="address" class="disable-input" :disabled="!fab" type="text" :value="user.address">
                  <v-icon v-if="fab" class="edit-icon">
                    mdi-pencil
                  </v-icon>
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
                    <input ref="locationx" :disabled="!fab" type="text" :value="user.locationX">
                    <v-icon v-if="fab" class="edit-icon">
                      mdi-pencil
                    </v-icon>

                    <input ref="locationy" :disabled="!fab" type="text" :value="user.locationY">
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
                  <textarea ref="about" class="disable-input" :disabled="!fab" :value="user.about" />
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
  name: 'profileIndex',
  layout: 'profile',
  components: {
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    isMy: {
      type: Boolean,
      required: true
    }
  },
  computed: {

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
      this.user.name = this.$refs.username.value
      this.user.lastName = this.$refs.lastname.value
      this.user.nickname = this.$refs.nickname.value
      this.user.email = this.$refs.email.value
      this.user.phone = this.$refs.phone.value
      this.user.optionalPhone = this.$refs.optionalPhone.value
      this.user.address = this.$refs.address.value
      this.user.about = this.$refs.about.value
      this.user.locationX = this.$refs.locationx.value
      this.user.locationY = this.$refs.locationy.value
      alert('saved')
      this.fab = false
      // } else {
      //   alert('error')
      // }
    }
  }
})

class Config extends Vue {
  fab = false // toggle for edit button
}

</script>

<style lang="scss">

.profile {
  .profile-row {
    position: relative;
    .v-card {
      margin-bottom: 10px;
      box-shadow: none;
      background-color: transparent;

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

        &.rating {
          text-align: center;
        }
      }

      .v-list-item__title {
        min-height: 30px;
        position: relative;
      }
    }
  }

  #profile-data {
    display: flex;
    width: 100%;
  }

  .float-btn {
    position: absolute;
    top: -10px;

    &.btn-edit {
      right: 0;

      button {
      }
    }

    &.btn-save {
      right: 60px;

      button {
        height: 48px;
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
