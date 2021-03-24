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
          <strong><i class="text-green-8 text-h5"> InsectBase2.0</i></strong>
          . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
    <div class="q-px-md">
      <q-card class="my-card shadow-0 q-px-lg">
        <q-card-section
          id="main"
          style="width: 100%; height: 400px"
        > </q-card-section>
      </q-card>
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
          bottom: "3%",
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
