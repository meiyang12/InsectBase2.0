<template>
  <div class="search">
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <strong style="font-size: 1.2rem" class="text-green-8">Search</strong> . Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
      <br />
      <q-card class="my-card shadow-0 q-pa-lg">
        <q-card-section>
          <div class="q-gutter-md">
            <q-input
              style="max-width: 600px"
              v-model="text"
              label="Search"
              :dense="dense"
            >
              <template v-slot:append>
                <q-icon
                  v-if="text !== ''"
                  name="close"
                  @click="text = ''"
                  class="cursor-pointer"
                />
                <q-icon name="search" />
              </template>
            </q-input>
            <q-separator color="primary" size="0.2rem" />
            <q-chip color="primary" text-color="white" icon="search" outline>
              Advanced search
            </q-chip>
            <q-select
              style="max-width: 600px"
              outlined
              multiple
              use-chips
              stack-label
              v-model="modelMultiple1"
              :options="options1"
              label="Type"
            />
            <div class="row q-col-gutter-xs">
              <q-select
                class="col-3"
                outlined
                multiple
                use-chips
                stack-label
                v-model="modelMultiple"
                :options="options1"
                label="Order"
              />
              <q-select
                class="col-3"
                outlined
                multiple
                use-chips
                stack-label
                v-model="modelMultiple"
                :options="options1"
                label="Family"
              />
              <q-select
                class="col-3"
                outlined
                multiple
                use-chips
                stack-label
                v-model="modelMultiple"
                :options="options1"
                label="Genus"
              />
              <q-select
                class="col-3"
                outlined
                multiple
                use-chips
                stack-label
                v-model="modelMultiple"
                :options="options1"
                label="Species"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
      modelMultiple1: ref(["Protein coding gene", "miRNA", "lncRNA"]),
      options1: ["Protein coding gene", "miRNA", "lncRNA"],

      //  modelMultiple2: ref(["Protein coding gene", "miRNA", "lncRNA"]),
      options2: ["Protein coding gene", "miRNA", "lncRNA"],
    };
  },
};
</script>
