<template>
  <div class="description">
    <div class="description__common">
      <div class="description__common-item description__details">
        <h3 class="description__item-title">Description</h3>
        <div class="description__item-content">
          <p class="description__item-text">Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Amet cumque
            debitis doloremque dolorum enim, eos ex expedita ipsum
            laudantium minima, molestiae natus necessitatibus nihil
            nostrum quia quis quos tempora temporibus veniam voluptatibus.
            Autem culpa deserunt dignissimos, dolorem eius excepturi
            explicabo id, impedit inventore labore magni officiis
            pariatur repellat reprehenderit, voluptatum!
          </p>
          <button class="btn_more red-txt">More details</button>
          <button class="btn_less red-txt">Hide details</button>
        </div>
      </div>
      <div class="description__common-item">
        <h3 class="description__item-title">In map</h3>
        <div class="description__item-map">
          <Map />
        </div>
      </div>
    </div>
    <div class="description__tables">
      <template>
        <v-container class="lighten-5">
          <v-row>
            <v-col sm="5" class="pa-0 mr-8">
              <v-card
                class=""
                outlined
                tile
                style="border: 0"
              >
                <div class="description__tables-table description__params">
                  <h3 class="description__item-title">Good's properties</h3>
                  <v-simple-table>
                    <template v-slot:default>
                      <tbody>
                      <tr
                        v-for="prop in goodProps.goodParams"
                        :key="prop"
                        class="table-row"
                      >
                        <td style="border: 0">{{ prop.name }}</td>
                        <td style="border: 0">{{ prop.value }}</td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-card>
            </v-col>
            <v-col sm="5" class="pa-0 ml-8">
              <v-card
                class="mb-11"
                outlined
                tile
                style="border: 0"
              >
                <div class="description__tables-table description__location">
                  <h3 class="description__item-title">Location</h3>
                  <v-simple-table>
                    <template v-slot:default>
                      <tbody>
                      <tr
                        v-for="prop in goodProps.goodLocation"
                        :key="prop"
                        class="table-row"
                      >
                        <td style="border: 0">{{ prop.name }}</td>
                        <td style="border: 0">{{ prop.value }}</td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-card>
              <v-card
                class=""
                outlined
                tile
                style="border: 0"
              >
                <div class="description__tables-table description__another">
                  <h3 class="description__item-title">Another</h3>
                  <v-simple-table>
                    <template v-slot:default>
                      <tbody>
                      <tr
                        v-for="prop in goodProps.goodAnotherProps"
                        :key="prop"
                        class="table-row "
                      >
                        <td style="border: 0">{{ prop.name }}</td>
                        <td style="border: 0">{{ prop.value }}</td>
                      </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'
import Map from './Map'

export default @Component({
  name: 'Description',
  components: {
    Map
  }
})

class Description extends Vue {
  data () {
    return {
      goodProps: {
        goodParams: [
          {
            name: 'Model',
            value: 'RWER234'
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
}
</script>

<style lang="scss" scoped>
.description{
  margin-top: 60px;
  .description__common{
    display: flex;
    gap: 60px;
    margin-bottom: 60px;
    .description__common-item{
      flex: 0 1 45%;
    }
    .description__item-text{
      margin-bottom: 10px;
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
        background-image: url("../../assets/img/good-page/arrowDown.svg");
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
  .description__item-title{
    margin-bottom: 20px;
  }
}
.table-row{
  &:nth-child(even){
    background: $bg;
  }
}

</style>
