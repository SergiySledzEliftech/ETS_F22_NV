<template>
  <div>
    <v-card
      flat
      class="card__item"
    >
      <div class="card__body">
        <div class="card__body-header">
          <v-card-title class="py-2 pr-2 d-flex align-center">
            <v-avatar class="card__item-avatar">
              <img
                alt="User's avatar"
                :src="comment.avatar"
              >
            </v-avatar>
            <p class="ma-0 ml-2 card__item-name">
              {{ comment.userNickname }}
            </p>
            <v-spacer />
            <p class="ma-0 mr-1 card__item-date">
              {{ date }}
            </p>
            <v-card-actions
              class="pa-0 btn-basket basket_active"
            >
              <v-btn
                text
                icon
                color="gray lighten-2"
                @click="
                  $emit('onDelete', index);
                  onDeleteComment();
                "
              >
                <v-icon>mdi-delete-empty</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card-title>
          <v-divider />
        </div>
        <div class="card__body-content">
          <v-card-text class="mt-2 py-0">
            <v-rating
              :value="comment.rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              dense
              half-increments
              readonly
              size="20"
            />
            <p class="ma-0 mt-2 card__item-text">
              {{ comment.comment }}
            </p>
          </v-card-text>
          <v-card-title
            class="py-0 pt-2 card__item-subtitle"
            :class="{ d_none: comment.disadvantages === '' || comment.disadvantages === null}"
          >
            Advantages
          </v-card-title>
          <v-card-text
            class="py-0"
            :class="{ d_none: comment.disadvantages === '' || comment.disadvantages === null}"
          >
            <p class="ma-0 card__item-text">
              {{ comment.advantages }}
            </p>
          </v-card-text>
          <v-card-title
            class="py-0 pt-2 card__item-subtitle"
            :class="{ d_none: comment.disadvantages === '' || comment.disadvantages === null}"
          >
            Disadvantages
          </v-card-title>
          <v-card-text
            class="py-0"
            :class="{ d_none: comment.disadvantages === '' || comment.disadvantages === null}"
          >
            <p class="ma-0 card__item-text">
              {{ comment.disadvantages }}
            </p>
          </v-card-text>
        </div>
        <div class="card__body-emotions">
          <v-card-actions
            class="py-2"
          >
            <v-row class="ma-0 d-flex align-center" justify="end">
              <v-btn
                class="ma-0 mr-1"
                width="30"
                height="30"
                text
                icon
                color="blue lighten-2"
              >
                <v-icon size="18" class="like">
                  mdi-thumb-up
                </v-icon>
              </v-btn>
              <p class="ma-0 mr-2 card__item-text">
                {{ comment.like }}
              </p>
              <v-btn
                class="ma-0 mr-1"
                width="30"
                height="30"
                text
                icon
                color="red lighten-2"
              >
                <v-icon size="18" class="dislike">
                  mdi-thumb-down
                </v-icon>
              </v-btn>
              <p class="ma-0 card__item-text">
                {{ comment.dislike }}
              </p>
            </v-row>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { Vue, Component, Prop, namespace } from 'nuxt-property-decorator';

const { Action } = namespace('good_comments');

export default @Component({
  components: {}
})

class CommentItem extends Vue {
  @Prop() comment
  @Prop() index;
  date = ''

  mounted () {
    // converting time according to utc
    const localOffset = new Date().getTimezoneOffset() * 60000;
    this.date = new Date(this.comment.date_created - localOffset).toJSON().slice(0, 10).replace(/-/g, '.').split('.').reverse().join('.');
  }

  @Action removeComment
  async onDeleteComment () {
    try {
      await this.removeComment(this.comment._id);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message);
    }
  }
}
</script>

<style lang="scss" scoped>
.card__item{
  height: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(33, 33, 33, 0.25);
  .card__body{
    height: 100%;
    display: flex;
    flex-direction: column;
    .card__body-content{
      flex: 1 1 auto;
    }
    .card__body-emotions{
    }
  }
}
.v-btn{
  ::v-deep &:before{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    border-radius: inherit;
    background-color: currentColor;
    opacity: 0;
    color: inherit;
    pointer-events: none;
    transition: opacity .2s cubic-bezier(.4, 0, .6, 1);
  }
  /*
  ::v-deep .like{
    background-color: rgba(10, 127, 229, 0.63) !important;
    border-radius: 50%;
  }
  ::v-deep .dislike{
    background-color: #dc2113 !important;
    border-radius: 50%;
  }
  */
}

.btn-basket{
  padding: 0 !important;
  overflow: hidden;
  opacity: 0;
}
.basket_active{
  opacity: 1;
  overflow: visible;
}

.card__item-subtitle,
.card__item-name{
  @include responsive-value_important("font-size", 16, 12, $bp_tablet);
  font-weight: 600;
}

.card__item-text,
.card__item-date {
  @include responsive-value_important("font-size", 14, 10, $bp_tablet);
}

.card__item-avatar{
  @include responsive-value_important("width", 40, 30, $bp_tablet);
  @include responsive-value_important("height", 40, 30, $bp_tablet);
}

.v-card__title,
.v-card__text,
.v-card__actions{
  @include responsive-value_important("padding-right", 16, 12, $bp_tablet);
  @include responsive-value_important("padding-left", 16, 12, $bp_tablet);
}

</style>
