<template>
  <v-container class="profile">
    <v-row class="profile-row" no-gutters>
      <v-form id="profile-data" ref="form" class="row" @submit.prevent="saveForm">
        <div v-if="isMy" class="float-btn btn-edit">
          <v-btn-toggle v-model="fab">
            <v-btn
              :value="true"
              dark
              @click="edit"
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
            <div class="editing" :class="{ active: fab }">
              <v-img :src="user.avatar" alt="avtr" class="avtr" />

              <v-form v-if="fab" id="form-avatar" ref="formAvatar" class="row" @submit.prevent="saveAvatar">
                <v-dialog
                  v-model="dialogAvatar"
                  persistent
                  max-width="600px"
                >
                  <template #activator="{ on, attrs }">
                    <v-icon
                      class="avtr-edit"
                      v-bind="attrs"
                      v-on="on"
                    >
                      mdi-pencil
                    </v-icon>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Change avatar</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-file-input
                              v-model="avatarUpload"
                              :rules="ruleAvatar"
                              accept="image/png, image/jpeg, image/bmp"
                              placeholder="Pick an avatar"
                              prepend-icon="mdi-camera"
                              label="New avatar"
                            />
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="dialogAvatar = false"
                      >
                        Close
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="saveAvatar"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-form>
            </div>
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
            <v-list-item v-if="optionalPhone" two-line>
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
                  Location
                </v-list-item-subtitle>
                <v-list-item-title>
                  <v-text-field
                    v-model="location"
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
                  About
                </v-list-item-subtitle>
                <v-list-item-title>
                  <v-textarea
                    v-model="about"
                    class="disable-input"
                    :disabled="!fab"
                    maxlength="240"
                    rows="2"
                    counter
                    :rules="ruleAbout"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="isMy" two-line>
              <v-list-item-content>
                <v-list-item-title>
                  <v-form id="change-pass" ref="formPass" class="row" @submit.prevent="savePass">
                    <v-row justify="left">
                      <v-dialog
                        v-if="fab"
                        v-model="dialog"
                        persistent
                        max-width="600px"
                      >
                        <template #activator="{ on, attrs }">
                          <v-btn
                            color="var(--secondary)"
                            dark
                            v-bind="attrs"
                            v-on="on"
                          >
                            Change password
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Change password</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12">
                                  <v-text-field
                                    v-model="oldPass"
                                    label="Old password*"
                                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="rulePassword"
                                    :type="showPass ? 'text' : 'password'"
                                    required
                                    @click:append="showPass = !showPass"
                                  />
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    v-model="newPass"
                                    label="New password*"
                                    :append-icon="showPass2 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="rulePassword"
                                    :type="showPass2 ? 'text' : 'password'"
                                    required
                                    @click:append="showPass2 = !showPass2"
                                  />
                                </v-col>
                              </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer />
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="savePass"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-form>
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
import { Vue, Component, Prop, namespace } from 'nuxt-property-decorator';
import {
  emailValidation, emptyValidation, preventHtmlValidation, preventCapitalsValidation,
  phoneNumberValidation, allowDigitsOnlyValidation, minLengthValidation, lengthValidation, avatarValidation
} from '~/helpers/validators.js';
const { Action } = namespace('profile');

export default @Component({
  name: 'profileIndex',
  components: {}
})

class Config extends Vue {
  @Prop({ type: Boolean, required: true }) isMy
  @Prop({ type: Object, required: true }) user;

  // link for open http://localhost:3000/profile/62dbeb38d387887c0b416ab6

  // @State user
  @Action updateUser

  fab = false; // toggle for edit button
  showPass = false
  showPass2 = false
  dialog = false
  dialogAvatar = false
  avatarUpload = ''

  defaultUser = {}

  get firstName () {
    return this.user.firstName;
  }

  get lastName () {
    return this.user.lastName;
  }

  get nickname () {
    return this.user.nickname;
  }

  get email () {
    return this.user.email;
  }

  get about () {
    return this.user.about;
  }

  get phone () {
    return this.user.phone;
  }

  get optionalPhone () {
    return this.user.optionalPhone;
  }

  get location () {
    return this.user.location;
  }

  set firstName (value) {
    this.$store.commit('profile/updateFirstName', value);
  }

  set lastName (value) {
    this.$store.commit('profile/updateLastName', value);
  }

  set nickname (value) {
    this.$store.commit('profile/updateNickname', value);
  }

  set email (value) {
    this.$store.commit('profile/updateEmail', value);
  }

  set about (value) {
    this.$store.commit('profile/updateAbout', value);
  }

  set phone (value) {
    this.$store.commit('profile/updatePhone', value);
  }

  set optionalPhone (value) {
    this.$store.commit('profile/updateOptionalPhone', value);
  }

  set location (value) {
    this.$store.commit('profile/updateLocation', value);
  }

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
    // emptyValidation(),
    minLengthValidation(8),
    lengthValidation(32)
  ]

  ruleAvatar = [
    avatarValidation()
  ]

  edit () {
    if (this.fab) { // if click cancel
      this.nickname = this.defaultUser.nickname;
      this.firstName = this.defaultUser.firstName;
      this.lastName = this.defaultUser.lastName;
      this.passHash = this.defaultUser.password;
      this.about = this.defaultUser.about;
      this.email = this.defaultUser.email;
      this.phone = this.defaultUser.phone;
      this.optionalPhone = this.defaultUser.optionalPhone;
      this.location = this.defaultUser.location;

      this.showPass = false;
    } else {
      this.defaultUser = Object.assign({}, this.user);
    }
  };

  async saveForm () {
    if (this.$refs.form.validate()) {
      await this.updateUser(this.$route.params.id);
      alert('Saved');
      this.fab = false;
      this.showPass = false;
    } else {
      alert('Please enter valid data');
    }
  };

  savePass () {
    if (this.$refs.formPass.validate()) {
      // this.updatePass(this.$route.params.id, this.user)
      alert('Saved');
      this.fab = false;
      this.showPass = false;
      this.dialog = false;
    } else {
      alert('Please enter valid data');
    }
  };

  saveAvatar () {
    if (this.$refs.formAvatar.validate()) {
      // this.updatePass(this.$route.params.id, this.user)
      // console.log(this.avatarUpload)
      alert('Saved');
      this.fab = false;
      this.showPass = false;
      this.dialogAvatar = false;
    } else {
      alert('Please enter valid data');
    }
  };

  // async updateUser (id, obj) {
  //   try {
  //     await this.$axios.put('http://localhost:3001/users/' + id, obj)
  //   } catch (e) {
  //     console.log('Error update')
  //   }
  // };

  async updatePass (id, obj) {
    try {
      await this.$axios.put('http://localhost:3001/users/' + id, obj);
    } catch (e) {
      console.log('Error update');
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
        width: 100%;

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

    .editing {
      position: relative;

      .theme--light.v-icon:focus::after {
        opacity: 0;
      }

      .hidden {
         display: none;
      }

      &.active {
        .v-image__image {
          filter: brightness(0.8);
        }

        .avtr-edit {

        }
      }
      .avtr-edit {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        color: $secondary;

        &:hover {
          font-size: 200%;
        }
      }
    }

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
