<template>
  <div>
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <span class="text-h5 text-green-10 text-bold">
            Gene family
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </q-card-section>
      </q-card>
      <br>
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section class="q-pt-lg">
          <div class="q-gutter-xs q-pa-md">
            <q-checkbox
              v-for="item in items"
              :key="item"
              v-model="selection"
              :label="item"
              :val="item"
              color="teal"
            />
          </div>
          <q-separator />
          <br>
          <q-select
            outlined
            v-model="model"
            :options="options"
            class="text-center"
            style="max-width: 20%"
          />
          <q-btn
            class="q-ma-md"
            color="primary"
            label="Search"
          />
          <q-btn
            class="q-ma-md"
            color="primary"
            outline
            label="Reset"
            @click="resetModels"
          />
          <q-separator />
          <br>
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="name"
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const selection = ref(['ABC transporter']);

    const columns = [
      {
        name: 'name',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
      { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
      { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
      { name: 'protein', label: 'Protein (g)', field: 'protein' },
      { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
      { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
    ]

    const rows = [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%'
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%'
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%'
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%'
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%'
      }
    ]

    return {
      selection,

      resetModels () {
        selection.value = []
      },

      items: ["ABC transporter",
        "acetylcholine receptor",
        "Acetylcholinesterase",
        "alkaline phosphatase",
        "aminopeptidase",
        "carboxylesterase",
        "Chitinase",
        "chloride channel",
        "CTL",
        "cuticular protein",
        "cytochrome p450",
        "DNA methyltransferase",
        "ecdysone receptor",
        "G protein",
        "GABA",
        "glutamate-gated chloride channel",
        "glutathione s-transferase",
        "glycosyltransferase",
        "gustatory receptor",
        "heat shock protein",
        "hydrolase",
        "immunoglobulin",
        "low density lipoprotein",
        "odorant receptor",
        "odorant-binding protein",
        "Painless",
        "pheromone",
        "protease inhibitor",
        "Ryanodine receptor",
        "sensory neuron membrane protein",
        "serpin",
        "sirtuin",
        "sodium channel",
        "sugar transporter",
        "superoxide dismutase",
        "Vitellogenin receptor",],

      model: ref('Mengenilla moldrzyki'),
      options: [],

      columns,
      rows
    }
  }
}
</script>

<style lang="scss" scoped>
</style>