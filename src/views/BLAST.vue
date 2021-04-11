<template>
  <div>
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <span class="text-green-10 text-h5 text-bold">BLAST</span> . Lorem
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
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-pa-md"
          >
            <div class="row q-gutter-md">
              <q-select
                outlined
                v-model="blast"
                :options="blastoptions"
                style="max-width: 10%"
              />
              <q-select
                outlined
                v-model="evalue"
                :options="evalueoptions"
                style="max-width: 10%"
              />
            </div>
            <q-separator spaced />
            <div>
              <q-input
                v-model="text"
                outlined
                type="textarea"
              />
              or
              <q-file
                color="primary"
                outlined
                v-model="model"
                label="Upload"
                style="max-width: 150px"
              >
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" />
                </template>
              </q-file>
            </div>
            <q-separator spaced />
            <div>
              <q-btn
                label="Submit"
                type="submit"
                color="primary"
              />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                outline
                class="q-ml-sm"
              />
            </div>
          </q-form>
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
      blast: ref('blastn'),
      blastoptions: [
        'blastn', 'blastp', 'tblastn', 'blastx'
      ],

      evalue: ref('1e-5'),
      evalueoptions: [
        '1e-1', '1e-3', '1e-5', '1e-10'
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
</style>