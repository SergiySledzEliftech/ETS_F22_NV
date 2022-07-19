<template>
  <v-container class="profile">
    <v-row class="profile-row" no-gutters>
      <v-form class="row" ref="form" id="profile-data" @submit.prevent="save">
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

        <v-col lg="4" md="4" sm="12" xs="12">
          <v-card class="profile-avtr">
            <v-img :src="user.avatar" alt="avtr" class="avtr" />
            <v-row v-if="fab" class="half row no-gutters">
              <v-col lg="6" md="6" sm="12" xs="12" class="col-xs-12">
                <v-text-field
                  v-model="firstName"
                  :disabled="!fab"
                  type="text"
                  :rules="ruleName"
                  append-icon="mdi-pencil"
                />
              </v-col>
              <v-col xs="12" sm="12" md="6" lg="6" class="col-xs-12">
                <v-text-field
                  v-model="lastName"
                  :disabled="!fab"
                  type="text"
                  :rules="ruleName"
                  append-icon="mdi-pencil"
                />
              </v-col>
            </v-row>
            <h5 v-else>
              {{ user.firstName }} {{ user.lastName }}
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

        <v-col lg="8" md="8" sm="12" xs="12">
          <v-card>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Nickname
                </v-list-item-subtitle>
                <v-list-item-title>
                  <v-text-field
                    v-model="nickname"
                    class="disable-input"
                    :disabled="!fab"
                    type="text"
                    :rules="ruleNickname"
                    append-icon="mdi-pencil"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  E-mail
                </v-list-item-subtitle>
                <v-list-item-title>
                  <v-text-field
                    v-model="email"
                    class="disable-input"
                    :disabled="!fab"
                    :rules="ruleEmail"
                    type="email"
                    append-icon="mdi-pencil"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="isMy" two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Password
                </v-list-item-subtitle>
                <v-list-item-title>
                  <v-text-field
                    v-model="password"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    class="disable-input"
                    :disabled="!fab"
                    :rules="rulePassword"
                    :type="showPass ? 'text' : 'password'"
                    @click:append="showPass = !showPass"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Phone
                </v-list-item-subtitle>
                <v-list-item-title>
                  <v-text-field
                    v-model="phone"
                    class="disable-input"
                    :disabled="!fab"
                    type="text"
                    :rules="rulePhone"
                    append-icon="mdi-pencil"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="user.optionalPhone" two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Optional Phone
                </v-list-item-subtitle>
                <v-list-item-title>
                  <v-text-field
                    v-model="optionalPhone"
                    class="disable-input"
                    :disabled="!fab"
                    type="text"
                    :rules="ruleOptionalPhone"
                    append-icon="mdi-pencil"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Address
                </v-list-item-subtitle>
                <v-list-item-title>
                  <v-text-field
                    v-model="address"
                    class="disable-input"
                    :disabled="!fab"
                    type="text"
                    :rules="ruleAddress"
                    append-icon="mdi-pencil"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-subtitle>
                  Location
                </v-list-item-subtitle>
                <v-list-item-title>
                  <div class="half row no-gutters">
                    <v-col xs="12" sm="12" md="6" lg="6">
                      <v-text-field
                        v-model="locationX"
                        class="disable-input"
                        :disabled="!fab"
                        type="text"
                        :rules="ruleLocation"
                        append-icon="mdi-pencil"
                      />
                    </v-col>
                    <v-col xs="12" sm="12" md="6" lg="6">
                      <v-text-field
                        v-model="locationY"
                        class="disable-input"
                        :disabled="!fab"
                        type="text"
                        :rules="ruleLocation"
                        append-icon="mdi-pencil"
                      />
                    </v-col>
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
                  <v-textarea
                    v-model="about"
                    class="disable-input"
                    :disabled="!fab"
                    maxlength="240"
                    rows="4"
                    counter
                    :rules="ruleAbout"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import {
  emailValidation, emptyValidation, preventHtmlValidation, preventCapitalsValidation,
  phoneNumberValidation, allowDigitsOnlyValidation, minLengthValidation, lengthValidation,
  numberValidation
} from '~/helpers/validators.js'

export default @Component({
  name: 'profileIndex',
  components: {}
})

class Config extends Vue {
  @Prop({ type: Object, required: true }) isMy
  @Prop({ type: Object, required: true }) user;

  mounted () {
    this.defaultUser = Object.assign(this.user)
    this.nickname = this.user.nickname
    this.firstName = this.user.firstName
    this.lastName = this.user.lastName
    this.password = this.user.password
    this.about = this.user.about
    this.email = this.user.email
    this.phone = this.user.phone
    this.optionalPhone = this.user.optionalPhone
    this.locationX = this.user.location.locationX
    this.locationY = this.user.location.locationY
    this.address = this.user.location.address
  }

  fab = false; // toggle for edit button
  showPass = false

  firstName = ''
  lastName = ''
  nickname = ''
  password = ''
  about = ''
  email = ''
  phone = ''
  optionalPhone = ''
  locationX = ''
  locationY = ''
  address = ''
  defaultUser = {}

  ruleEmail = [
    emailValidation(),
    emptyValidation(),
    preventHtmlValidation()
  ]

  ruleName = [
    preventHtmlValidation(),
    emptyValidation(),
    preventCapitalsValidation(),
    minLengthValidation(3)
  ]

  ruleNickname = [
    preventHtmlValidation(),
    minLengthValidation(3)
  ]

  ruleAbout = [
    preventHtmlValidation(),
    minLengthValidation(20),
    lengthValidation(240)
  ]

  ruleLocation = [
    preventHtmlValidation(),
    numberValidation()
  ]

  rulePhone = [
    preventHtmlValidation(),
    phoneNumberValidation(),
    emptyValidation(),
    allowDigitsOnlyValidation()
  ]

  ruleOptionalPhone = [
    preventHtmlValidation(),
    phoneNumberValidation(),
    allowDigitsOnlyValidation()
  ]

  ruleAddress = [
    preventHtmlValidation(),
    preventCapitalsValidation(),
    minLengthValidation(3)
  ]

  rulePassword = [
    emptyValidation(),
    minLengthValidation(8),
    lengthValidation(32)
  ]

  cancelEdit () {
    if (this.fab) {
      this.nickname = this.defaultUser.nickname
      this.firstName = this.defaultUser.firstName
      this.lastName = this.defaultUser.lastName
      this.password = this.defaultUser.password
      this.about = this.defaultUser.about
      this.email = this.defaultUser.email
      this.phone = this.defaultUser.phone
      this.optionalPhone = this.defaultUser.optionalPhone
      this.locationX = this.defaultUser.location.locationX
      this.locationY = this.defaultUser.location.locationY
      this.address = this.defaultUser.location.address

      this.showPass = false
    }
  };

  save () {
    if (this.$refs.form.validate()) {
      alert('Saved')
      this.fab = false
      this.showPass = false
    } else {
      alert('Please enter valid data')
    }
  }
}

</script>

<style lang="scss">
@media screen and (max-width: 960px) {
  .profile {
    .profile-row {
      .v-card {
        .half {
          display: block;

          & > :first-child {
            padding-right: 0 !important;
          }
        }
      }
    }
  }
}

.profile {
  .profile-row {
    position: relative;
    .v-card {
      margin-bottom: 10px;
      box-shadow: none;
      background-color: transparent;

      .half {

        //display: flex;
        //position: relative;
        width: 100%;
        //justify-content: center;

        input {
          //width: 50%;
        }

        & > :first-child {
          padding-right: 5px;
        }
      }

      .edit-icon {
        position: absolute;
        right: 0;
        bottom: 50%;
      }

      .v-text-field {
        padding-top: 0;
        margin-top: 0;
      }

      .v-input--is-disabled  {
        input, textarea {
          color: black;
        }
        .v-counter, .v-input__append-inner {
          visibility: hidden;
        }
        .v-input__slot:before {
          content: none;
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

    h5 {
      margin-bottom: 35px;
    }

    .avtr {
      margin-bottom: 10px;
      max-width: 200px;
    }
  }
}
</style>
