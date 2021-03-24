<template>
  <div>
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <strong class="text-green-8 text-h4">Gene family annotation</strong> . Lorem
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
            class="q-gutter-md q-pa-md"
          >
            <q-select
              rounded
              outlined
              v-model="model"
              :options="options"
              style="max-width: 10%"
            />
            <div style="max-width: 80%;">
              <q-input
                v-model="text"
                outlined
                type="textarea"
              />
              or
              <q-file
                color="teal"
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
                flat
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
      model: ref('GR'),
      options: [
        'GR', 'OR', 'OBP', 'IR'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>