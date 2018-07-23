<template>
  <q-layout view="hHh Lpr fFf">
    <q-layout-header>
      <q-toolbar color="green" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          VLXD Trần Ngọc
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-layout-footer>
      <div class="text-white et-footer text-weight-light text-center">
        <small>
          <cite>© Copyright 2018 Elitetech Vietnam Co., Ltd. All rights reserved.</cite>
        </small>
      </div>
    </q-layout-footer>

    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <q-list no-border link inset-delimiter>
        <q-item to="/products">
          <q-item-side icon="shopping_basket" />
          <q-item-main label="Sản Phẩm" sublabel="Liệt Kê & Tìm Kiếm Sản Phẩm" />
        </q-item>
        <q-item to="/suppliers">
          <q-item-side icon="store" />
          <q-item-main label="Nhà Cung Cấp" sublabel="Liệt Kê & Tìm Kiếm Nhà Cung Cấp" />
        </q-item>
        <q-item to="/users">
          <q-item-side icon="security" />
          <q-item-main label="Tài Khoản Đăng Nhập" sublabel="Liệt Kê & Tìm Kiếm Tài Khoản" />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {openURL} from 'quasar'

export default {
  name: 'LayoutDefault',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    }
  },
  methods: {
    openURL,
  },
}
</script>

<style>
.et-footer {
  background-color: #0089d2;
  font-size: 0.8em;
}
</style>
