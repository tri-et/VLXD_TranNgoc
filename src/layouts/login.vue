<template>
  <q-card inline class="fixed-center">
    <q-card-media>
      <svg id="logo" viewBox="0 0 483 483"
        width="128px" height="128px" v-html="getLoginLogo">
      </svg>
    </q-card-media>
    <q-card-title>
      VLXD Trần Ngọc
      <div slot="right" class="row items-center">
        <q-icon name="vpn_key" class="q-mr-sm"/>Đăng Nhập
      </div>
    </q-card-title>
    <q-card-main>
      <p>$・Italian, Cafe</p>
      <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
    </q-card-main>
    <q-card-separator />
    <q-card-actions>
      <q-btn flat round dense icon="event" />
      <q-btn flat label="5:30PM" />
      <q-btn flat label="7:30PM" />
      <q-btn flat label="9:00PM" />
      <q-btn flat color="primary" label="Reserve" />
    </q-card-actions>
  </q-card>
</template>

<script type="text/javascript">
/* eslint-disable */
import logoData from '../assets/logoData'
import {Platform} from 'quasar'
import Vivus from 'vivus'
export default {
  data() {
    return {
      logo: 'Digitalizer',
      vivus: '',
    }
  },
  mounted() {
    this.startAnimation()
  },
  computed: {
    getLoginLogo() {
      return logoData[this.logo]
    },
  },
  methods: {
    startAnimation() {
      this.vivus = new Vivus(
        'logo',
        {
          duration: 400,
          forceRender: false,
        },
        function(myVivus) {
          for (let item of myVivus.el.children[0].children) {
            item.setAttribute('style', 'fill:white')
          }
        }
      )
    },
  },
}
</script>
<style>
.q-card {
  width: 350px;
  margin-top: -20px;
}
.q-card-media {
  background: url('../assets/bridge.jpg') no-repeat center center;
  background-size: cover;
  height: 230px;
  text-align: center;
  position: relative;
}

@media (max-width: 601px) {
  .q-card {
    width: 100%;
    height: 100%;
  }
}
</style>