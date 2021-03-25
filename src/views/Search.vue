<template>
  <div class="search">
    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <strong class="text-green-8 text-h5">Search</strong> . Lorem
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
          <div class="q-gutter-md">
            <q-input
              style="max-width: 600px"
              v-model="text"
              label="Search"
              :dense="dense"
            >
              <template v-slot:append>
                <q-icon
                  v-if="text !== ''"
                  name="close"
                  @click="text = ''"
                  class="cursor-pointer"
                />

              </template>
              <template v-slot:after>
                <q-btn
                  color="primary"
                  label="Search"
                />
              </template>
            </q-input>
            <q-expansion-item
              v-model="expanded"
              icon="search"
              label="Advanced search"
              header-class="bg-blue-4 text-white"
            >
              <q-card>
                <q-card-section class="q-col-gutter-xs">
                  <q-select
                    style="max-width: 600px"
                    outlined
                    multiple
                    use-chips
                    stack-label
                    v-model="modelMultiple1"
                    :options="options2"
                    label="Type"
                  />
                  <div class="row q-col-gutter-xs">
                    <q-select
                      class="col-3"
                      outlined
                      multiple
                      use-chips
                      stack-label
                      v-model="modelMultiple"
                      :options="options2"
                      label="Order"
                    />
                    <q-select
                      class="col-3"
                      outlined
                      multiple
                      use-chips
                      stack-label
                      v-model="modelMultiple"
                      :options="options2"
                      label="Family"
                    />
                    <q-select
                      class="col-3"
                      outlined
                      multiple
                      use-chips
                      stack-label
                      v-model="modelMultiple"
                      :options="options2"
                      label="Genus"
                    />
                    <q-select
                      class="col-3"
                      outlined
                      multiple
                      use-chips
                      stack-label
                      v-model="modelMultiple"
                      :options="options1"
                      label="Species"
                    />
                  </div>

                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </q-card-section>
        <q-separator spaced />
        <q-card-section>
          <q-banner class="bg-grey-4">
            <template v-slot:avatar>
              <q-icon
                name="south_east"
                color="primary"
              />
            </template>
            Maybe you are interested in these genes
          </q-banner>

        </q-card-section>
        <q-card-section
          id="main"
          style="width: 100%; height: 600px"
        >
        </q-card-section>
        <q-page-sticky
          position="bottom-right"
          :offset="[50, 50]"
        >
          <q-btn
            fab
            @click="update"
            icon="refresh"
            color="green-5"
          />
        </q-page-sticky>
      </q-card>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import * as echarts from 'echarts'
import 'echarts-wordcloud';
import word_Cloud from '../data/wordCloud.json'

export default {

  setup () {
    const text = ref("");
    const echart = () => {
      var myChart = echarts.init(document.getElementById("main"));

      var data = word_Cloud;
      var option = {
        // backgroundColor: '#012248',
        series: [{
          type: 'wordCloud',
          shape: 'circle',
          // maskImage: maskImage,
          gridSize: 20,
          sizeRange: [10, 60],
          rotationRange: [-90, 90],
          // rotationStep: 45,
          left: 'center',
          top: 'center',
          width: '90%',
          height: '90%',
          right: null,
          bottom: null,
          // width: '100%',
          // height: '100%',
          drawOutOfBound: false,
          layoutAnimation: true,

          textStyle: {
            fontFamily: 'sans-serif',
            // fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: function () {
              // Random color
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            focus: 'self',

            textStyle: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: data
        }]

      };
      myChart.setOption(option);
      myChart.on('click', function (params) {
        // alert(params.data.name)
        text.value = params.data.name
      })
    };

    onMounted(() => {
      echart();
    });

    const update = () => {
      echart();
    };

    return {
      text,
      ph: ref(""),
      dense: ref(false),
      modelMultiple1: ref(["Protein coding gene", "miRNA", "lncRNA"]),
      options1: ["Protein coding gene", "miRNA", "lncRNA"],

      //  modelMultiple2: ref(["Protein coding gene", "miRNA", "lncRNA"]),
      options2: [],

      echart,
      update,

      expanded: ref(false)
    };
  },
};
</script>
