<template>
  <q-layout view="lhh Lpr lff">
    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      class="shadow-10"
      :width="230"
    >
      <q-scroll-area
        style="height: calc(100%);background-color:#393e46"
        class="text-white text-center text-body2"
      >
        <div
          class="text-h5 q-pa-lg shadow-10 text-italic text-bold"
          style="font-family:Times New Roman;background-color:#222831"
        >

          InsectBase 2.0
        </div>
        <q-list
          padding
          class="text-white text-left text-weight-light"
          style="font-size: 1.2em"
        >
          <q-item
            clickable
            v-ripple
            active-class="my-menu-link"
            to="/"
          >
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-item
            clickable
            v-ripple
            active-class="my-menu-link"
            to="/Search"
          >
            <q-item-section>Search</q-item-section>
          </q-item>

          <q-expansion-item
            :content-inset-level="0"
            expand-separator
            label="Organism"
            group="group"
          >
            <q-item
              clickable
              v-ripple
              style="background-color:#f8f4e1"
              to="/Organism"
            >
              <q-item-section class="text-black">Tree</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              style="background-color:#f8f4e1"
              to="Classify"
            >
              <q-item-section class="text-black">Classification</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            :content-inset-level="0"
            expand-separator
            label="Gene"
            group="group"
          >
            <q-item
              clickable
              v-ripple
              style="background-color:#f8f4e1"
              to="/Pcg"
            >
              <q-item-section class="text-black">Protein coding gene</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              style="background-color:#f8f4e1"
            >
              <q-item-section class="text-black">miRNA</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              style="background-color:#f8f4e1"
            >
              <q-item-section class="text-black">lncRNA</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              style="background-color:#f8f4e1"
            >
              <q-item-section class="text-black">Transposon</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item
            clickable
            v-ripple
            active-class="my-menu-link"
          >
            <q-item-section>Chromosome</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            active-class="my-menu-link"
          >
            <q-item-section>Transcriptome</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            active-class="my-menu-link"
          >
            <q-item-section>KEGG pathway</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            active-class="my-menu-link"
            to="/geneFamily"
          >
            <q-item-section>Gene family</q-item-section>
          </q-item>

          <q-expansion-item
            :content-inset-level="0"
            expand-separator
            label="Tools"
            group="group"
          >
            <q-item
              clickable
              v-ripple
              to=""
              style="background-color:#f8f4e1"
            >
              <q-item-section class="text-black">3D genome brower</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              to="/JBrowse"
              style="background-color:#f8f4e1"
            >
              <q-item-section class="text-black">JBrowse</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              to="/Blast"
              style="background-color:#f8f4e1"
            >
              <q-item-section class="text-black">BLAST</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              to="/Synteny"
              style="background-color:#f8f4e1"
            >
              <q-item-section class="text-black">Genome synteny</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              to="/GeneAnno"
              style="background-color:#f8f4e1"
            >
              <q-item-section class="text-black">Gene family prediction</q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            :content-inset-level="0"
            expand-separator
            label="Links"
            group="group"
          >
            <q-item
              clickable
              v-ripple
              style="background-color:#f8f4e1"
              to="/Links"
            >
              <q-item-section class="text-black">Database</q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              style="background-color:#f8f4e1"
            >
              <q-item-section class="text-black">Entomologist</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-item
            clickable
            v-ripple
            active-class="my-menu-link"
          >
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
        <q-separator color="white" />
        <br>
        <span>©2021 InsectBase. <br />Designed by <i> Li F. Lab.</i></span>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-light-green-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  components: {},
  setup () {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="sass">
.my-menu-link
  background: #cfc5a5
  opacity: 0.8
</style>
