<template>
  <div class="q-pa-lg">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs col-8">
          <div class="text-overline">
            <q-breadcrumbs>
              <q-breadcrumbs-el
                label='Home'
                icon="home"
                to="/"
              />
              <q-breadcrumbs-el
                label="Organism"
                to="/Organism"
              />
              <q-breadcrumbs-el :label="data.OrganismName" />
            </q-breadcrumbs>

          </div>
          <div class="text-h5 q-ma-lg text-italic">{{data.OrganismName}}</div>
          <div class="text-caption q-mx-lg  text-grey-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div class="q-pa-md">
            <q-chip
              clickable
              icon="bookmark"
            >
              NCBI
            </q-chip>
            <q-chip
              clickable
              color="teal"
              text-color="white"
              icon="bookmark"
            >
              WIKI
            </q-chip>
          </div>
        </q-card-section>

        <q-card-section class="col-4 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="require('../assets/home/1.jpg')"
          >
            <q-icon
              class="absolute all-pointer-events"
              size="32px"
              name="info"
              color="white"
              style="bottom: 8px; right: 8px"
            >
              <q-tooltip>
                {{data.SpeciesImage}}
              </q-tooltip>
            </q-icon>
          </q-img>
        </q-card-section>
      </q-card-section>

      <q-separator />
      <q-card-actions class="q-pa-md row">
        <div class="q-px-lg text-h5 text-green-10 text-bold">
          Info
        </div>
        <q-separator vertical />
        <div class="col-10">
          <q-markup-table
            class="q-mx-md q-mb-md"
            style="width:500px"
          >
            <thead>
              <tr>
                <th class="text-center text-green-10">InsectBase ID</th>
                <th class="text-center text-green-10">Order</th>
                <th class="text-center text-green-10">Family</th>
                <th class="text-center text-green-10">Genus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">{{data.InsectBaseID}}</td>
                <td class="text-center">{{data.Order}}</td>
                <td class="text-center">{{data.Family}}</td>
                <td class="text-center text-italic">{{data.Genus}}</td>
              </tr>
            </tbody>
          </q-markup-table>
          <q-markup-table class="q-mx-md">
            <thead>
              <tr>
                <th class="text-center text-green-10">Genome Level</th>
                <th class="text-center text-green-10">Data Source</th>
                <th class="text-center text-green-10">Genome Size(MB)</th>
                <th class="text-center text-green-10">GenomeGC(%)</th>
                <th class="text-center text-green-10">Sequence Number</th>
                <th class="text-center text-green-10">BUSCOv4</th>
                <th class="text-center text-green-10">N50(MB)</th>
                <th class="text-center text-green-10">Protein Coding Gene</th>
                <th class="text-center text-green-10">miRNA</th>
                <th class="text-center text-green-10">lncRNA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">{{data.GenomeLevel}}</td>
                <td class="text-center">{{data.DataSource}}</td>
                <td class="text-center">{{data.GenomeSize}}</td>
                <td class="text-center">{{data.GenomeGC}}</td>
                <td class="text-center">{{data.SeqNumber}}</td>
                <td class="text-center">{{data.Busco}}</td>
                <td class="text-center">{{data.N50}}</td>
                <td class="text-center">15000</td>
                <td class="text-center">500</td>
                <td class="text-center">1000</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </q-card-actions>

      <q-separator />
      <q-card-actions class="q-pa-md row">
        <div class="q-px-lg text-h5 text-green-10 text-bold">
          Chromosomes
        </div>
        <q-separator vertical />
        <div class="col-10">
        </div>
      </q-card-actions>

      <q-separator />
      <q-card-actions class="q-pa-md row">
        <div class="q-px-lg text-h5 text-green-10 text-bold">
          Protein Coding Gene
        </div>
        <q-separator vertical />
        <div class="col-10">
        </div>
      </q-card-actions>

      <q-separator />
      <q-card-actions class="q-pa-md row">
        <div class="q-px-lg text-h5 text-green-10 text-bold">
          miRNA
        </div>
        <q-separator vertical />
        <div class="col-10">
        </div>
      </q-card-actions>

      <q-separator />
      <q-card-actions class="q-pa-md row">
        <div class="q-px-lg text-h5 text-green-10 text-bold">
          lncRNA
        </div>
        <q-separator vertical />
        <div class="col-10">
        </div>
      </q-card-actions>

      <q-separator />
      <q-card-actions class="q-pa-md row">
        <div class="q-px-lg text-h5 text-green-10 text-bold">
          Download
        </div>
        <q-separator vertical />
        <div class="col-10">
        </div>
      </q-card-actions>

      <q-separator />
      <q-card-actions class="q-pa-md row">
        <div class="q-px-lg text-h5 text-green-10 text-bold">
          Researchers
        </div>
        <q-separator vertical />
        <div class="col-10">
        </div>
      </q-card-actions>

      <q-separator />
      <q-card-actions class="q-pa-md row">
        <div class="q-px-lg text-h5 text-green-10 text-bold">
          Publications
        </div>
        <q-separator vertical />
        <div class="col-10">
        </div>
      </q-card-actions>

    </q-card>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import getData from '../utils'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const route = useRoute()
    const organismData = reactive({
      data: []
    })

    onMounted(() => {
      const routeId = route.params.id
      getData('organism', routeId).then(
        res => {
          organismData.data = res
        }
      )
    });

    return {
      ...toRefs(organismData)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>