<template>
  <div class="links">
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <strong class="text-green-8 text-h4">Links</strong> . Lorem
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
          <q-splitter
            v-model="splitterModel"
            style="height: 250px"
          >
            <template v-slot:before>
              <q-tabs
                v-model="tab"
                vertical
                class="text-teal"
              >
                <q-tab
                  name="mails"
                  label="NCBI"
                />
                <q-tab
                  name="alarms"
                  label="FlyBase"
                />
                <q-tab
                  name="movies"
                  label="LepBase"
                />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
              >
                <q-tab-panel name="mails">
                  <div class="text-h4 q-mb-md">NCBI</div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                    praesentium cumque magnam odio iure quidem, quod illum numquam
                    possimus obcaecati commodi minima assumenda consectetur culpa fuga
                    nulla ullam. In, libero.
                  </p>
                </q-tab-panel>

                <q-tab-panel name="alarms">
                  <div class="text-h4 q-mb-md">FlyBase</div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                    praesentium cumque magnam odio iure quidem, quod illum numquam
                    possimus obcaecati commodi minima assumenda consectetur culpa fuga
                    nulla ullam. In, libero.
                  </p>
                </q-tab-panel>

                <q-tab-panel name="movies">
                  <div class="text-h4 q-mb-md">LepBase</div>
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

export default {
  setup () {
    return {
      tab: ref("mails"),
      splitterModel: ref(20),
    };
  },
};
</script>
