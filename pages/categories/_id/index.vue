<template>
  <div class="description">
    <div class="description__common">
      <div class="description__common-item description__details">
        <h4 class="description__item-title">
          Details
        </h4>
        <div class="description__item-content">
          <p class="description__item-text">
            {{ detailsContent }}
          </p>
          <button
            ref="btn_more"
            class="description__item-btn btn_more"
            :class="{ d_none: detailsShowAll || !detailsMore}"
            @click="
              onMoreDetails();
              onChangeBtns();
            "
          >
            <p class="btn_more-text red-txt">
              More details
            </p>
            <v-icon
              color="red"
              class="btn_more-ico"
            >
              mdi-arrow-down
            </v-icon>
          </button>
          <button
            ref="btn_less"
            class="description__item-btn btn_less"
            :class="{ d_none: detailsShowAll || detailsMore}"
            @click="
              onLessDetails();
              onChangeBtns();
            "
          >
            <p class="btn_less-text red-txt">
              Hide details
            </p>
            <v-icon
              color="red"
              class="btn_less-ico"
            >
              mdi-arrow-up
            </v-icon>
          </button>
        </div>
      </div>
      <div class="description__common-item">
        <h4 class="description__item-title">
          In map
        </h4>
        <div class="description__item-map">
          <Map />
        </div>
      </div>
    </div>
    <div class="description__tables">
      <v-container class="lighten-5">
        <v-row class="d-flex justify-space-between">
          <v-col
            cols="12"
            md="6"
            lg="6"
            class="pa-0 px-4 pr-md-8"
          >
            <v-card
              class="description__tables-table rounded-0"
              outlined
              tile
            >
              <div class="description__tables-table description__params">
                <h4 class="description__item-title">
                  Good's properties
                </h4>
                <v-simple-table>
                  <tbody>
                    <tr
                      v-for="(prop, index) in goodProps.goodParams"
                      :key="index"
                      class="table-row"
                    >
                      <td class="rounded-0">
                        {{ prop.name }}
                      </td>
                      <td class="rounded-0">
                        {{ prop.value }}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="6"
            lg="6"
            class="pa-0 px-4 pl-md-8"
          >
            <v-card
              class="mb-11 description__tables-table rounded-0"
              outlined
              tile
            >
              <div class="description__location">
                <h4 class="description__item-title">
                  Location
                </h4>
                <v-simple-table>
                  <tbody>
                    <tr
                      v-for="(prop, index) in goodProps.goodLocation"
                      :key="index"
                      class="table-row"
                    >
                      <td class="rounded-0">
                        {{ prop.name }}
                      </td>
                      <td class="rounded-0">
                        {{ prop.value }}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-card>
            <v-card
              class="description__tables-table rounded-0"
              outlined
              tile
            >
              <div class="description__tables-table description__another">
                <h4 class="description__item-title">
                  Another
                </h4>
                <v-simple-table>
                  <tbody>
                    <tr
                      v-for="(prop, index) in goodProps.goodAnotherProps"
                      :key="index"
                      class="table-row "
                    >
                      <td class="rounded-0">
                        {{ prop.name }}
                      </td>
                      <td class="rounded-0">
                        {{ prop.value }}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import Map from '~/components/good/Map';

export default @Component({
  components: {
    Map
  },
  auth: false
})
class DescriptionTab extends Vue {
  @Prop() good
  goodProps = {
    goodParams: [
      {
        name: 'Model',
        value: 'ROWER234'
      },
      {
        name: 'Count',
        value: 2
      },
      {
        name: 'Power',
        value: 440
      },
      {
        name: 'Power',
        value: 440
      },
      {
        name: 'Power',
        value: 440
      },
      {
        name: 'Power',
        value: 440
      },
      {
        name: 'Date',
        value: 2022
      }
    ],
    goodLocation: [
      {
        name: 'Country',
        value: 'Ukraine'
      },
      {
        name: 'Dnipro',
        value: 2
      },
      {
        name: 'District',
        value: 'pr. Polya'
      },
      {
        name: 'Address',
        value: '555d'
      }
    ],
    goodAnotherProps: [
      {
        name: 'Damage',
        value: 'Ukraine'
      },
      {
        name: 'In use',
        value: 'Yes'
      }
    ]
  }

  details = ''
  detailsContent = ''
  detailsLength = 500
  detailsShowAll = null
  detailsMore = null

  created () {
    this.details = { ...this.good.description };
    this.details = Object.keys(this.details).map(key => this.details[key]);
    this.details = this.details.join('');
    this.checkDetailsLength();
  }

  checkDetailsLength () {
    if (this.details.length > this.detailsLength) {
      this.onLessDetails();
    } else {
      this.onMoreDetails();
    }
  }

  onMoreDetails () {
    this.detailsContent = this.details;
    this.detailsShowAll = true;
    this.detailsMore = false;
  }

  onLessDetails () {
    this.detailsContent = this.details.slice(0, this.detailsLength - 1);
    this.detailsContent += ' ...';
    this.detailsShowAll = false;
    this.detailsMore = true;
  }

  onChangeBtns () {
    this.$refs.btn_more.classList.toggle('d_none');
    this.$refs.btn_less.classList.toggle('d_none');
  }
}
</script>

<style lang="scss">

img{
  font-size: 14px !important;
}
h4{
  @include responsive-value("font-size", 30, 18 , $bp_laptop);
  @include responsive-value("margin-top", 30, 15, $bp_tablet);
  @include responsive-value("margin-bottom", 15, 5, $bp_tablet);
}
p{
  margin: 0 !important;
  padding: 0 !important;
}
.description{
  @include responsive-value("margin-top", 30, 15, $bp_tablet);
  @media only screen and (max-width: 1310px) {
    padding: 0 12px;
  }
  .description__common{
    display: flex;
    gap: 60px;
    margin-bottom: 30px;
    @media (max-width: $bp_tablet + px) {
      display: flex;
      gap: 0;
      flex-direction: column;
    }
    .description__common-item{
      width: 100%;
    }
    .description__item-content{
      .description__item-text{
        margin-bottom: 10px;
        @include responsive-value("font-size", 18, 12, $bp_laptop);
      }
      .description__item-btn{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        float: right;
      }
    }
    .btn_more,
    .btn_less{
      position: relative;
      line-height: 1.2rem;
      font-weight: 600;
      &:hover{
        opacity: 0.85;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
      .btn_more-text,
      .btn_less-text{
        line-height: 1.2rem;
        font-weight: 600;
        @include responsive-value_restrained('font-size', 16, 13, 960, 1310);
        @media only screen and (max-width: $bp_tablet + px) {
          @include responsive-value('font-size', 16, 11, $bp_tablet);
        }
      }
      .btn_more-ico,
      .btn_less-ico{
        @include responsive-value_important('font-size', 20, 10, 1310);
        @media only screen and (max-width: $bp_tablet + px) {
          @include responsive-value_important('font-size', 20, 12, $bp_tablet);
        }
      }
    }
  }
}
.description__tables-table{
  border: 0 !important;
}
.table-row{
  &:nth-child(even){
    background: $bg;
  }
}
tbody {
  tr{
    &:hover:nth-child(even) {
      background-color: $bg !important;
    }
    &:hover:nth-child(odd){
      background-color: #fff !important;
    }
    td{
      width: 50% !important;
      @include responsive-value_important("font-size", 14, 12, $bp_tablet);
    }
  }
}

.v-tabs{
  margin-top: 30px;
}
ul, li{
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
}
.d_none{
  display: none !important;
}
</style>
