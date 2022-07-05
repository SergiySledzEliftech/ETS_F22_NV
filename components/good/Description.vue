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
          <button class="btn_more">More details</button>
          <button class="btn_less">Hide details</button>
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
      <div class="description__tables-table description__params">
        <h3 class="description__item-title">Good's properties</h3>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr
                v-for="prop in goodProps.goodParams"
                :key="prop"
                height='50px'
                class="table-row"
              >
                <td style="border: 0">{{ prop.name }}</td>
                <td style="border: 0">{{ prop.value }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <div class="description__tables-table description__location">
        <h3 class="description__item-title">Location</h3>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
            <tr
              v-for="prop in goodProps.goodLocation"
              :key="prop"
              height='50px'
              class="table-row"
            >
              <td style="border: 0">{{ prop.name }}</td>
              <td style="border: 0">{{ prop.value }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <div class="description__tables-table description__another">
        <h3 class="description__item-title">Another</h3>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
            <tr
              v-for="prop in goodProps.goodAnotherProps"
              :key="prop"
              height='50px'
              class="table-row"
            >
              <td style="border: 0">{{ prop.name }}</td>
              <td style="border: 0">{{ prop.value }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
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
.table-row{
  &:nth-child(even){
    background: $bg;
  }
}
</style>
