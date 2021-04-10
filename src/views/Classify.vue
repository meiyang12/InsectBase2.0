<template>
  <div>
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <span class="text-green-10 text-h5 text-bold">Classification</span> . Lorem
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
          <div class="row q-col-gutter-md">
            <div class="col-3">
              <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom">
                    <div class="text-h6">Our Changing Planet</div>
                  </div>
                </q-img>
                <q-card-actions>
                  <q-btn flat>Learn more</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-3">
              <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom">
                    <div class="text-h6">Our Changing Planet</div>
                  </div>
                </q-img>
                <q-card-actions>
                  <q-btn flat>Learn more</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-3">
              <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom">
                    <div class="text-h6">Our Changing Planet</div>
                  </div>
                </q-img>
                <q-card-actions>
                  <q-btn flat>Learn more</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-3">
              <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom">
                    <div class="text-h6">Our Changing Planet</div>
                  </div>
                </q-img>
                <q-card-actions>
                  <q-btn flat>Learn more</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-3">
              <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom">
                    <div class="text-h6">Our Changing Planet</div>
                  </div>
                </q-img>
                <q-card-actions>
                  <q-btn flat>Learn more</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-3">
              <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom">
                    <div class="text-h6">Our Changing Planet</div>
                  </div>
                </q-img>
                <q-card-actions>
                  <q-btn flat>Learn more</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-3">
              <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom">
                    <div class="text-h6">Our Changing Planet</div>
                  </div>
                </q-img>
                <q-card-actions>
                  <q-btn flat>Learn more</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-3">
              <q-card class="my-card">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                  <div class="absolute-bottom">
                    <div class="text-h6">Our Changing Planet</div>
                  </div>
                </q-img>
                <q-card-actions>
                  <q-btn flat>Learn more</q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
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