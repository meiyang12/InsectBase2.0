<template>
  <div class="organism">
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <strong style="font-size: 1.2rem" class="text-green-8">Organism</strong> . Lorem
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
    </div>

    <div class="q-px-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <q-splitter v-model="splitterModel" style="height: 800px">
            <template v-slot:before>
              <div class="q-pa-md">
                <q-input ref="filterRef" rounded outlined v-model="filter" label="Search">
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
                <q-tab-panel v-for="item in genome_list" :key="item.id" :name="item.name">
                  <q-card class="my-card">
                    <q-card-section horizontal>
                      <q-card-section class="q-pt-xs">
                        <div class="text-overline text-orange-9">Overline</div>
                        <div
                          class="text-h5 q-mt-sm q-mb-xs text-italic"
                          v-if="item.class == 'genus' || item.class == 'species'"
                        >
                          {{ item.name }}
                        </div>
                        <div class="text-h5 q-mt-sm q-mb-xs" v-else>
                          {{ item.name }}
                        </div>
                        <div class="text-caption">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                      </q-card-section>
                      <q-card-section class="col-5 flex flex-center">
                        <q-img
                          class="rounded-borders"
                          src="https://cdn.quasar.dev/img/parallax2.jpg"
                        />
                      </q-card-section>
                    </q-card-section>
                    <div v-if="item.class == 'species'">
                      <q-separator />
                      <q-card-actions class="justify-center">
                        <q-btn outline color="secondary" label="Learn More" />
                      </q-card-actions>
                    </div>
                  </q-card>
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
import genome_list from "../data/genome_list.json";

export default {
  components: {},
  setup() {
    const filter = ref("");
    const filterRef = ref(null);
    return {
      genome_list,

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
