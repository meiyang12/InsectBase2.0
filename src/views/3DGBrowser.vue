<template>
  <div>
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <span class="text-green-10 text-h5 text-bold">3D Genome Browser</span> . Lorem
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
      <q-card class="my-card shadow-0">
        <q-card-section>
          <iframe
            style="width:100%;height:700px;"
            frameBorder="1"
            src=''
          ></iframe>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref('blastn'),
      options: [
        'blastn', 'blastp', 'tblastn', 'blastx'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>