<template>
  <q-layout view="lhh Lpr lff">
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="shadow-10">
      <!-- drawer content -->
      <q-scroll-area
        style="height: calc(100%)"
        class="bg-green-10 text-white text-center text-body2"
      >
        <h5>
          <i><strong>InscetBase2.0</strong></i>
        </h5>
        <hr />
        <q-list padding class="text-white text-left" style="font-size: 1.1em">
          <q-item clickable v-ripple to="/">
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/Search">
            <q-item-section>Search</q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/Organism">
            <q-item-section>Organism</q-item-section>
          </q-item>

          <q-expansion-item
            :content-inset-level="0.8"
            expand-separator
            label="Gene"
            default-opened
          >
            <q-item clickable v-ripple>
              <q-item-section class="text-grey-5">Protein coding gene</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section class="text-grey-5">miRNA</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section class="text-grey-5">lncRNA</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section class="text-grey-5">Transcipts</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item clickable v-ripple>
            <q-item-section>Gene family</q-item-section>
          </q-item>

          <q-expansion-item :content-inset-level="0.8" expand-separator label="Tools">
            <q-item clickable v-ripple>
              <q-item-section class="text-grey-5">JBrowse</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section class="text-grey-5">BLAST</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section class="text-grey-5">Genome synteny</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section class="text-grey-5">Gene family prediction</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item clickable v-ripple>
            <q-item-section>Download</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Links</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Help</q-item-section>
          </q-item>
          <q-item
            clickable
            tag="a"
            target="_blank"
            href="https://person.zju.edu.cn/en/lifei"
          >
            <q-item-section>About us</q-item-section>
          </q-item>
        </q-list>

        <hr />

        <span>Copy right ©2020 InsectBase2.0. <br />Designed by <i> Li F. Lab.</i></span>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-blue-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

import * as echarts from "echarts";
import { provide } from "vue";

export default {
  components: {},
  setup() {
    const leftDrawerOpen = ref(false);

    provide("ec", echarts);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style></style>
