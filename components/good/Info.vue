<template>
  <div class="info">
    <div class="info-wrapper">
      <section class="carousel">
        <carousel :images="good.images" />
      </section>
      <section class="good">
        <div class="good__content">
          <div class="good__status">
            <div
              v-if="goodStatus === 'available'"
              class="good__status-item good__status-free"
            >
              <v-icon
                color="green"
                class="good__status-icon"
              >
                mdi-checkbox-marked-circle-outline
              </v-icon>
              <p class="good__status-text">
                In stock
              </p>
            </div>
            <div
              v-if="goodStatus === 'unavailable'"
              class="good__status-item good__status-ordered"
            >
              <v-icon
                color="red"
                class="good__status-icon"
              >
                mdi-close-circle-outline
              </v-icon>
              <p class="good__status-text">
                Rented
              </p>
            </div>
          </div>
          <h1 class="good-title">
            {{ good.title }}
          </h1>
          <div class="good__props">
            <p class="good__props-location good__props-item">
              Location: <span class="red-txt">{{ good.location }}</span>
            </p>
            <p class="good__props-date good__props-item">
              Published date: <span class="red-txt">{{ formatDate(good.date_created) }}</span>
            </p>
            <p class="good__props-rating good__props-item">
              Rating: <span class="red-txt"> {{ good.rating }} </span>
            </p>
            <p class="good__props-brand good__props-item">
              Brand: <span class="red-txt">{{ good.brand }}</span>
            </p>
            <p class="good__props-price good__props-item">
              Price:
              <span v-if="!good.isFree" class="red-txt">{{ good.price }} Fr</span>
              <span v-else class="red-txt"> Free </span>
            </p>
          </div>
          <div class="good__contacts">
            <p class="contacts-title">
              Contacts
            </p>
            <div class="contacts__list">
              <p class="contacts__list-name contacts__list-item">
                <span class="red-txt">
                  {{ user.firstName }} {{ user.lastName }}
                </span>
              </p>
              <div class="contacts__list-phone contacts__list-item">
                <p class="phone-number">
                  <span class="red-txt">
                    +380{{ user.phone }}
                  </span>
                </p>
                <ul class="phone__messengers pa-0">
                  <li
                    v-for="(messenger, index) in messengers"
                    :key="index"
                    class="phone__messengers-link"
                  >
                    <a :href="messenger.link">
                      <img :src="require('~/assets/img/good-page/' + messenger.name + '.svg')" :alt="messenger.name" class="phone__messengers-ico">
                    </a>
                  </li>
                </ul>
              </div>
              <a href="#" class="contacts__list-mail contacts__list-item"><span class="red-txt">{{ user.email }}</span></a>
            </div>
          </div>
          <div class="buttons">
            <rent-popup
              :good="good"
              :good-status="goodStatus"
              @changeStatus="onChangeStatus"
            />
            <v-tooltip bottom>
              <template #activator="{on, attrs}">
                <v-btn
                  icon
                  class="btn"
                  large
                  v-bind="attrs"
                  v-on="on"
                  @click.prevent="isFav.length > 0 ? removeFromFavs() : addToFavs(good)"
                >
                  <v-icon :color="isFav.length > 0 ? 'error' : 'disabled'">
                    mdi-heart
                  </v-icon>
                </v-btn>
              </template>
              <span>{{ tooltip }}</span>
            </v-tooltip>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop, namespace } from 'nuxt-property-decorator';
import moment from 'moment';
import Carousel from '~/components/good/Carousel/Carousel';
import RentPopup from '~/components/good/RentPopup';
const { State: FavsState, Action: FavsAction } = namespace('favorites');
export default @Component({
  components: {
    Carousel,
    RentPopup
  }
})

class Info extends Vue {
  @Prop() good;
  @Prop() userId;
  @FavsState isFav;
  @FavsAction addToFavorites;
  @FavsAction checkFavorite;
  @FavsAction removeFromFavorites;
  
  tooltip = '';
  @Prop() user;

  messengers = [
    {
      link: '#',
      name: 'viber'
    },
    {
      link: '#',
      name: 'telegram'
    },
    {
      link: '#',
      name: 'facebook'
    }
  ]

  goodStatus = '';

  onChangeStatus () {
    this.goodStatus = 'unavailable';
  }

  changeTooltip () {
    this.tooltip = this.isFav.length > 0
      ? 'Remove from favorites'
      : 'Add to favorites';
  }

  async addToFavs (item) {
    console.log('add');
    try {
      await this.addToFavorites({ userId: this.userId, item }).then(() => this.checkFavorite({ id: this.good._id, user: this.userId }));
    } catch (err) {
      console.log(err.message);
    } finally {
      this.changeTooltip();
    }
  }

  async removeFromFavs () {
    try {
      await this.removeFromFavorites(this.isFav[0]._id).then(() =>
        this.checkFavorite({ id: this.good._id, user: this.userId }));
    } catch (err) {
      console.log(err.message);
    } finally {
      this.changeTooltip();
    }
  }

  async mounted () {
    this.goodStatus = this.good.status;
    await this.checkFavorite({ id: this.good._id, user: this.userId });
    this.changeTooltip();
  }

  formatDate (date) {
    return moment(date).format('DD.MM.YYYY');
  }
}
</script>

<style lang="scss" scoped>
p{
  color: $dark;
  font-weight: 500;
  margin: 0;
  @include responsive-value_restrained('font-size', 18, 14, $bp_tablet, 1310);
  @media only screen and (max-width: $bp_tablet + px) {
    @include responsive-value('font-size', 18, 12, $bp_tablet);
  }
}
a{
  font-weight: 500;
  @include responsive-value_restrained('font-size', 18, 14, $bp_tablet, 1310);
  @media only screen and (max-width: $bp_tablet + px) {
    @include responsive-value('font-size', 18, 12, $bp_tablet);
  }
}
.info{
  margin-top: 30px;
  background: transparent !important;
  @media only screen and (max-width: 1310px) {
    padding: 0 12px;
  }
  .info-wrapper{
    display: flex;
    background: #fff;
    @media only screen and (max-width: $bp_tablet + px) {
      display: block;
    }
  }
}
.carousel{
  @include responsive-value_restrained('width', 610, 400, 960, 1310);
  @include responsive-value_restrained('height', 534, 434, 960, 1310);
  margin-right: 60px;
  @media only screen and (max-width: $bp_tablet + px) {
    width: 100%;
    @include responsive-value('height', 500, 200, $bp_tablet);
    @include responsive-value('margin-bottom', 30, 20, $bp_tablet);
  }
}
.good{
  position: relative;
  min-width: 50vw;
  background: $bg;
  border-radius: 30px 0 0 30px;
  @media only screen and (max-width: $bp_tablet + px) {
    border-radius: 10px;
    min-width: 0;
    width: 100%;
  }
  .good__content {
    position: absolute;
    @include responsive-value_restrained('width', 470, 270, $bp_tablet, 1310);
    max-width: 470px;
    width: 100%;
    display: flex;
    flex-direction: column;
    @include responsive-value_restrained('gap', 20, 10, $bp_tablet, 1310);
    padding: 20px 0 20px 20px;
    @media only screen and (max-width: $bp_tablet + px) {
      @include responsive-value('gap', 20, 5, $bp_tablet);
      max-width: 100%;
      position: static;
      width: 100%;
      padding: 20px;
    }
    .good__status-item {
      display: flex;
      align-items: center;
      gap: 5px;
      .good__status-icon{
        @include responsive-value_important('font-size', 24, 10, 1310);
        @media only screen and (max-width: $bp_tablet + px){
          @include responsive-value_important('font-size', 24, 15, $bp_tablet);
        }
      }
    }
    .good-title {
      @include responsive-value_restrained('font-size', 30, 20, $bp_tablet, 1310);
      line-height: 100%;
      color: $secondary;
      @media only screen and (max-width: $bp_tablet + px) {
        @include responsive-value('font-size', 30, 18, $bp_tablet);
      }
    }
    .good__props {
      display: flex;
      flex-direction: column;
      gap: 10px;
      @media only screen and (max-width: $bp_tablet + px) {
        flex-direction: row;
        flex-wrap: wrap;
      }
      @media only screen and (max-width: 475px) {
        flex-direction: column;
        gap: 5px;
      }
        .good__props-item{
        @media only screen and (max-width: $bp_tablet + px) {
          flex: 1 1 45%;
        }
      }
      .good__props-price {
        font-weight: 600;
      }
    }
    .good__contacts {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .contacts-title {
        @include responsive-value_restrained('font-size', 24, 18, $bp_tablet, 1310);
        line-height: 100%;
        @media only screen and (max-width: $bp_tablet + px) {
          @include responsive-value('font-size', 24, 16, $bp_tablet);
        }
      }

      .contacts__list {
        display: flex;
        flex-direction: column;
        @include responsive-value('gap', 10, 5, $bp_tablet);
        @media only screen and (max-width: $bp_tablet + px) {
          flex-direction: row;
          flex-wrap: wrap;
        }
        @media only screen and (max-width: 550px) {
          flex-direction: column;
          flex-wrap: nowrap;
        }
        .contacts__list-item{
          @media only screen and (max-width: $bp_tablet + px) {
            flex: 1 1 45%;
          }
        }
      }
      .contacts__list-phone {
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        @media only screen and (max-width: 540px) {
        }
        .phone__messengers {
          display: flex;
          gap: 8px;
          .phone__messengers-link{
            @include responsive-value('width', 18, 16, $bp_tablet);
            @include responsive-value('height', 18, 16, $bp_tablet);
          }
          .phone__messengers-ico {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .buttons {
    display: flex;
    align-items: center;

    .btn {
      margin-left: 15px;
    }
  }
}
</style>
