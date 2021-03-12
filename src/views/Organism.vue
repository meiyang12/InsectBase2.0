<template>
  <div class="organism">
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <strong style="font-size: 1.2rem">Organism</strong> . Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>
      </q-card>
    </div>

    <div class="q-px-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <q-splitter v-model="splitterModel" style="height: 800px">
            <template v-slot:before>
              <div class="q-pa-md">
                <q-input ref="filterRef" filled v-model="filter" label="Search">
                  <template v-slot:append>
                    <q-icon
                      v-if="filter !== ''"
                      name="clear"
                      class="cursor-pointer"
                      @click="resetFilter"
                    />
                  </template>
                </q-input>
                <q-tree
                  :nodes="simple"
                  node-key="label"
                  selected-color="primary"
                  v-model:selected="selected"
                  :filter="filter"
                  default-expand-all
                />
              </div>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="selected"
                animated
                transition-prev="jump-up"
                transition-next="jump-up"
              >
                <q-tab-panel name="Strepsiptera">
                  <div class="text-h4 q-mb-md">Strepsiptera</div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                    praesentium cumque magnam odio iure quidem, quod illum numquam
                    possimus obcaecati commodi minima assumenda consectetur culpa fuga
                    nulla ullam. In, libero.
                  </p>
                </q-tab-panel>

                <q-tab-panel name="Food">
                  <div class="text-h4 q-mb-md">Food</div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                    praesentium cumque magnam odio iure quidem, quod illum numquam
                    possimus obcaecati commodi minima assumenda consectetur culpa fuga
                    nulla ullam. In, libero.
                  </p>
                  <q-btn>x</q-btn>
                </q-tab-panel>

                <q-tab-panel name="Room service">
                  <div class="text-h4 q-mb-md">Room service</div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                    praesentium cumque magnam odio iure quidem, quod illum numquam
                    possimus obcaecati commodi minima assumenda consectetur culpa fuga
                    nulla ullam. In, libero.
                  </p>
                </q-tab-panel>

                <q-tab-panel name="Room view">
                  <div class="text-h4 q-mb-md">Room view</div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                    praesentium cumque magnam odio iure quidem, quod illum numquam
                    possimus obcaecati commodi minima assumenda consectetur culpa fuga
                    nulla ullam. In, libero.
                  </p>
                </q-tab-panel>
              </q-tab-panels>
            </template>
          </q-splitter>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import genome from "../data/genome.json";

export default {
  setup() {
    const filter = ref("");
    const filterRef = ref(null);
    return {
      basic: ref(false),
      fixed: ref(false),

      filter,
      filterRef,
      splitterModel: ref(40),
      selected: ref("Food"),

      simple: genome,

      resetFilter() {
        filter.value = "";
        filterRef.value.focus();
      },
    };
  },
};
</script>
