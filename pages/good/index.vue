<template>
  <div class="description">
    <div class="description__common">
      <div class="description__common-item description__details">
        <h3 class="description__item-title">
          Description
        </h3>
        <div class="description__item-content">
          <p class="description__item-text">
            Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Amet cumque
            debitis doloremque dolorum enim, eos ex expedita ipsum
            laudantium minima, molestiae natus necessitatibus nihil
            nostrum quia quis quos tempora temporibus veniam voluptatibus.
            Autem culpa deserunt dignissimos, dolorem eius excepturi
            explicabo id, impedit inventore labore magni officiis
            pariatur repellat reprehenderit, voluptatum!
          </p>
          <button class="btn_more red-txt">
            More details
          </button>
          <button class="btn_less red-txt">
            Hide details
          </button>
        </div>
      </div>
      <div class="description__common-item">
        <h3 class="description__item-title">
          In map
        </h3>
        <div class="description__item-map">
          <Map />
        </div>
      </div>
    </div>
    <div class="description__tables">
      <v-container class="lighten-5">
        <v-row>
          <v-col class="pa-0" style="margin-right: 60px">
            <v-card
              class="description__tables-table"
              outlined
              tile
              style="border: 0"
            >
              <div class="description__tables-table description__params">
                <h3 class="description__item-title">
                  Good's properties
                </h3>
                <v-simple-table>
                  <tbody>
                    <tr
                      v-for="prop in goodProps.goodParams"
                      :key="prop"
                      class="table-row"
                    >
                      <td style="border: 0">
                        {{ prop.name }}
                      </td>
                      <td style="border: 0">
                        {{ prop.value }}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-card>
          </v-col>
          <v-col class="pa-0 ">
            <v-card
              class="mb-11 description__tables-table"
              outlined
              tile
              style="border: 0"
            >
              <div class="description__location">
                <h3 class="description__item-title">
                  Location
                </h3>
                <v-simple-table>
                  <tbody>
                    <tr
                      v-for="prop in goodProps.goodLocation"
                      :key="prop"
                      class="table-row"
                    >
                      <td style="border: 0">
                        {{ prop.name }}
                      </td>
                      <td style="border: 0">
                        {{ prop.value }}
                      </td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </div>
            </v-card>
            <v-card
              class="description__tables-table"
              outlined
              tile
              style="border: 0"
            >
              <div class="description__tables-table description__another">
                <h3 class="description__item-title">
                  Another
                </h3>
                <v-simple-table>
                  <tbody>
                    <tr
                      v-for="prop in goodProps.goodAnotherProps"
                      :key="prop"
                      class="table-row "
                    >
                      <td style="border: 0">
                        {{ prop.name }}
                      </td>
                      <td style="border: 0">
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
import { Vue, Component } from 'nuxt-property-decorator'
import Map from '~/components/good/Map'

export default @Component({
  name: 'DescriptionTab',
  components: {
    Map
  },
  data () {
    return {
      goodProps: {
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
    }
  }
})
class DescriptionTab extends Vue {}
</script>

<style lang="scss" scoped>
h3{
  @include responsive-value("font-size", 35, 20, $bp_laptop);
  @include responsive-value("margin-top", 30, 15, 960);
  @include responsive-value("margin-bottom", 15, 5, 960);
}
.description{
  @include responsive-value("margin-top", 30, 15, 960);
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
    .description__item-text{
      margin-bottom: 10px;
      @include responsive-value("font-size", 18, 12, $bp_laptop);
    }
    .btn_more,
    .btn_less{
      position: relative;
      line-height: 1.2rem;
      font-weight: 600;
      padding-right: 20px;
    }
    .btn_more,
    .btn_less{
      position: relative;
      line-height: 1.2rem;
      font-weight: 600;
      padding-right: 20px;
      &:after{
        content: "";
        display: block;
        position: absolute;
        right: 0;
        top: 15%;
        width: 11px;
        height: 16px;
        background-image: url("assets/img/good-page/arrowDown.svg");
      }
      &:hover{
        opacity: 0.85;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
    }
    .btn_less{
      &:after{
        content: "";
        transform: rotate(180deg);
      }
    }
  }
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
  }
}
</style>
