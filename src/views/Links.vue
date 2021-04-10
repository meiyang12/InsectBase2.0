<template>
  <div class="links">
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <span class="text-h5 text-green-10 text-bold"> Links</span>.
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
      <br />
      <q-card class="my-card shadow-0 q-pa-lg">
        <q-card-section>
          <q-list
            class="rounded-borders shadow-2 q-pa-md"
            v-for="link in links"
            :key="link.name"
            :name="link.name"
          >
            <q-item>
              <q-item-section avatar>
                <q-icon
                  name="language"
                  color="green-8"
                  size="34px"
                />
              </q-item-section>
              <q-item-section class="col-2 gt-sm">
                <q-item-label class="q-mt-sm text-bold text-h6">{{link.name}}</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  <span class="text-grey-8">{{link.info}}</span>
                </q-item-label>
              </q-item-section>
              <q-item-section
                top
                side
              >
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn
                    icon-right="send"
                    color="teal-4"
                    type="a"
                    target="_blank"
                    :href="link.url"
                  />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import links from "../data/links.json";

export default {
  setup () {
    return {
      tab: ref("flybase"),
      splitterModel: ref(20),
      links
    };
  },
};
</script>
