<template>
  <div class="home">
    <div class="row justify-center">
      <div class="q-px-lg q-pt-lg justify-center col-12">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="true"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            :name="1"
            :style="{ backgroundImage: 'url(' + require('../assets/home/1.jpg') + ')' }"
          />
          <q-carousel-slide
            :name="2"
            :style="{ backgroundImage: 'url(' + require('../assets/home/2.jpg') + ')' }"
          />
          <q-carousel-slide
            :name="3"
            :style="{ backgroundImage: 'url(' + require('../assets/home/3.jpg') + ')' }"
          />
          <q-carousel-slide
            :name="4"
            :style="{ backgroundImage: 'url(' + require('../assets/home/4.jpg') + ')' }"
          />
          <q-carousel-slide
            :name="5"
            :style="{ backgroundImage: 'url(' + require('../assets/home/5.jpg') + ')' }"
          />
        </q-carousel>
      </div>
    </div>

    <div class="q-pa-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section>
          <span class="text-h5 text-green-10 text-bold">
            InsectBase
            <q-badge
              align="middle"
              color="green-10"
            > v2 </q-badge>
          </span>
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
    </div>

    <div class="row q-px-md q-pb-md q-col-gutter-sm">
      <div class="col-9">
        <q-card class="my-card q-pb-md shadow-0">
          <q-card-section
            class="q-pb-md"
            id="main"
            style="width: 100%; height: 400px"
          > </q-card-section>
        </q-card>
      </div>
      <div class="col-3">
        <q-card class="my-card shadow-0">
          <q-card-section>
            <q-item-label
              header
              class="text-h5"
            >News</q-item-label>
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label>New genome</q-item-label>
                  <q-item-label
                    caption
                    lines="2"
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                </q-item-section>

                <q-item-section
                  side
                  top
                >
                  <q-item-label caption>June 6th</q-item-label>
                  <q-icon
                    name="campaign"
                    color="blue"
                  />
                </q-item-section>
              </q-item>

              <q-separator
                spaced
                inset
              />

              <q-item>
                <q-item-section>
                  <q-item-label>New miRNA</q-item-label>
                  <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                </q-item-section>

                <q-item-section
                  side
                  top
                >
                  <q-item-label caption>May 6th</q-item-label>
                  <q-icon
                    name="campaign"
                    color="blue"
                  />
                </q-item-section>
              </q-item>

            </q-list>

          </q-card-section>
        </q-card>
      </div>

    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

export default {
  setup () {
    const echart_genome = () => {
      var myChart = echarts.init(document.getElementById("main"));
      var dataName = [
        "Diptera",
        "Hymenoptera",
        "Lepidoptera",
        "Hemiptera",
        "Coleoptera",
        "Phasmatodea",
        "Trichoptera",
        "Blattodea",
        "Orthoptera",
        "Ephemeroptera",
        "Odonata",
        "Plecoptera",
        "Thysanoptera",
        "Archaeognatha",
        "Dermaptera",
        "Phthiraptera",
        "Siphonaptera",
        "Strepsiptera",
      ];
      var dataValue = [163, 140, 102, 52, 39, 13, 6, 4, 4, 3, 3, 3, 3, 1, 1, 1, 1, 1];
      var option = {
        title: {
          text: "Genome Statics",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "1%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: dataName,
            nameLocation: "end",
            axisLabel: {
              interval: 0,
              rotate: "35",
            },
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Genome Number",
            type: "bar",
            barWidth: "50%",
            data: dataValue,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      myChart.setOption(option);
    };

    onMounted(() => {
      echart_genome();
    });
    return {
      slide: ref(1),
      echart_genome,
    };
  },
};
</script>
