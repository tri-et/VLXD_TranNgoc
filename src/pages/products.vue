<template>
  <q-table
    :title="title"
    :data="getRecs"
    :columns="getCols"
    row-key="code"
    selection="multiple"
    :filter="filter"
  >
    <template slot="top-right" slot-scope="props">
      <q-search
        v-model="filter"
        :clearable="true"
        placeholder="Tìm kiếm ..."
      />
      <q-btn
        flat round dense
        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
        @click="props.toggleFullscreen"
      />
      <q-btn label="Refresh" @click="fetchRecs" />
    </template>

    <!-- gets displayed only when there's at least one row selected -->
    <template slot="top-selection" slot-scope="props">
      <q-btn color="secondary" flat label="Action 1" class="q-mr-sm" />
      <q-btn color="secondary" flat label="Action 2" />
      <div class="col" />
      <q-btn color="negative" flat round delete icon="delete"  />
    </template>
  </q-table>
</template>

<style>
</style>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data: () => ({
    title: `Thông Tin Sản Phẩm`,
    filter: '',
  }),
  computed: {
    ...mapGetters('product', ['getRecs', 'getCols']),
  },
  methods: {
    ...mapActions('product', ['fetchRecs']),
  },
}
</script>
