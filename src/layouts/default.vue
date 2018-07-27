<template>
  <q-layout view="hHh Lpr fFf">
    <q-layout-header>
      <q-toolbar color="green-8" :inverted="$q.theme === 'ios'">
        <q-btn dense @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          VLXD Trần Ngọc
        </q-toolbar-title>
        <q-btn dense round @click="logout" aria-label="Menu">
          <q-icon name="power_off" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>
    <q-layout-footer>
      <div class="text-white et-footer text-weight-light text-center bg-grey-8">
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
         <q-item to="/clients">
          <q-item-side icon="people" />
          <q-item-main label="Khách Hàng" sublabel="Liệt Kê & Tìm Kiếm Khách Hàng" />
        </q-item>
        <q-item to="/stockins">
          <q-item-side icon="archive" />
          <q-item-main label="Nhập Kho" sublabel="Liệt Kê & Tìm Kiếm Nhập Kho" />
        </q-item>
        <q-item to="/stocks">
          <q-item-side icon="account_balance" />
          <q-item-main label="Tồn Kho" sublabel="Liệt Kê & Tìm Kiếm Tồn Kho" />
        </q-item>
        <q-item to="/users">
          <q-item-side icon="security" />
          <q-item-main label="Tài Khoản Đăng Nhập" sublabel="Liệt Kê & Tìm Kiếm Tài Khoản" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('auth-token')
      this.$router.push('/login')
    },
  },
}
</script>

<style>
.et-footer {
  font-size: 0.8em;
}
</style>
