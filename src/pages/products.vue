<template>
  <q-table
    :data="getRecs"
    :columns="getCols"
    :filter="filter"
    :rows-per-page-options="[15,20,25,50,0]"
    :loading="getIsLoading"
    :pagination.sync="pagination"
    :selected.sync="selected"
    selection="multiple"
    table-class="et-grid"
    dense
    row-key="id"
    color="green"
    separator="cell"
    no-results-label="Không tìm thấy kết quả nào ..."
  >
    <template slot="top-left" slot-scope="props">
      <q-btn :loading="getIsLoading" color="green" @click="fetchRecs" style="margin-right:5px">
        <q-icon name="refresh" size="25px"/>
        <q-spinner-pie slot="loading" size="25px"/>
      </q-btn>
      <q-icon name="shopping_basket" size="25px"/><cite>{{getTitle}}</cite>
    </template>
    <template slot="top-right" slot-scope="props">
      <div style="width:300px" class="q-mr-sm">
        <q-search
          v-model="filter"
          :clearable="true"
          placeholder="Tìm kiếm ..."
          color="blue"
          inverted
        />
      </div>
      <q-btn
        flat round dense
        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
        @click="props.toggleFullscreen"
      />
    </template>

    <!-- gets displayed only when there's at least one row selected -->
    <template slot="top-selection" slot-scope="props">
      <div class="q-table-control">  <!-- wrap with div.q-table-control to fix jumpimg padding-->
        <q-btn :loading="getIsLoading" color="red" style="margin-right:5px">
          <q-icon name="delete" size="25px"/>
          <q-spinner-pie slot="loading" size="25px"/>
        </q-btn>
        <q-icon name="shopping_basket" size="25px"/><cite>{{getTitle}}</cite>
      </div>
    </template>
  </q-table>
</template>

<style>
</style>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data: () => ({
    filter: '',
    selected: [],
    pagination: {
      sortBy: null, // String, column "name" property value
      descending: false,
      page: 1,
      rowsPerPage: 25, // current rows per page being displayed
    },
  }),
  computed: {
    ...mapGetters('product', ['getRecs', 'getCols', 'getIsLoading', 'getTitle']),
  },
  methods: {
    ...mapActions('product', ['fetchRecs']),
  },
}
</script>

<style>
@media (max-width: 601px) {
  .et-grid {
    height: calc(100vh - 232px) !important;
  }
}
@media (min-width: 602px) {
  .et-grid {
    height: calc(100vh - 180px) !important;
  }
}
</style>
