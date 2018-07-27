<template>
  <q-card square class="et-login center">
    <q-card-media>
      <svg class="center" id="logo" viewBox="0 0 483 483"
        width="128px" height="128px" v-html="getLoginLogo">
      </svg>
    </q-card-media>
    <q-card-title>
      VLXD Trần Ngọc
      <div slot="right" class="row items-center">
        <q-icon name="vpn_key" class="q-mr-sm"/>Đăng Nhập
      </div>
    </q-card-title>
    <q-card-main class="q-mb-md">
      <q-input clearable v-model="username" float-label="Tên Người Dùng" class="q-mb-lg" color="light-green-9"/>
      <q-input v-model="password" float-label="Mật Khẩu" color="red-9" type="password"/>
    </q-card-main>
    <q-card-actions>
      <div class="row justify-center" style="height:160px;width:100%;">
        <q-btn :loading="getIsLoading" color="green" label="Sign In" class="q-ma-sm col-10" @click="loginUser({username,password})">
          <q-spinner-pie slot="loading" size="25px"/>
        </q-btn>
        <q-btn color="primary" label="Visit Facebook" class="q-ma-sm col-10"/>
        <q-btn color="negative" label="Visit Instagram" class="q-ma-sm col-10"/>
      </div>
    </q-card-actions>
  </q-card>
</template>
<script type="text/javascript">
import logoData from '../assets/logoData'
import Vivus from 'vivus'
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      logo: 'Digitalizer',
      vivus: '',
      username: '',
      password: '',
    }
  },
  mounted() {
    this.startAnimation()
  },
  computed: {
    getLoginLogo() {
      return logoData[this.logo]
    },
    ...mapGetters('user', ['getIsLoading']),
  },
  methods: {
    ...mapActions('user', ['loginUser']),
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
}
.q-card-media {
  background: url('../assets/bridge.jpg') no-repeat center center;
  background-size: cover;
  height: 230px;
  padding: 40px 0;
}
.center {
  margin: auto;
  display: block;
}

@media (max-width: 601px) {
  .et-login {
    width: 100%;
  }
  .q-card-actions {
    height: calc(100vh - 439px) !important;
  }
}
@media (min-width: 602px) {
  .q-card-actions {
    height: 240px !important;
  }
}
</style>
