<template>
  <q-table
    :data="getRecs"
    :columns="getCols"
    :filter="filter"
    :rows-per-page-options="[15,20,25,50,0]"
    :loading="getIsLoading"
    :pagination.sync="pagination"
    :selected-rows-label="selectedLabel"
    :selected.sync="selected"
    selection="multiple"
    table-class="et-grid"
    dense
    row-key="id"
    color="purple"
    separator="cell"
    no-results-label="Không tìm thấy kết quả nào ..."
    rows-per-page-label="Hiện"
  >
    <template slot="top-left" slot-scope="props">
      <q-btn :loading="getIsLoading" color="green" @click="fetchRecs" class="q-mr-sm">
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

    <!-- slot name syntax: body-cell-<column_name> -->
    <q-td auto-width slot="body-cell-edit" slot-scope="props" :props="props">
      <q-btn size="sm" round dense color="orange-10" icon="build" @click="setEditingRow(props.row)" />
    </q-td>

    <!-- gets displayed only when there's at least one row selected -->
    <template slot="top-selection" slot-scope="props">
      <div class="q-table-control">  <!-- wrap with div.q-table-control to fix jumpimg padding-->
        <q-btn :loading="getIsLoading" color="red" style="margin-right:5px" @click="deleteRecs">
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
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
  props: {
    type: {
      default: 'xxx',
      type: String,
    },
  },
  data() {
    return {
      filter: '',
      pagination: {
        sortBy: null, // String, column "name" property value
        descending: false,
        page: 1,
        rowsPerPage: 25, // current rows per page being displayed
      },
    }
  },
  computed: {
    // ...mapGetters('product', ['getRecs', 'getCols', 'getIsLoading', 'getTitle']),
    ...mapState({
      getRecs(state, getters) {
        return getters[this.type + '/getRecs']
      },
      getCols(state, getters) {
        return getters[this.type + '/getCols']
      },
      getIsLoading(state, getters) {
        return getters[this.type + '/getIsLoading']
      },
      getTitle(state, getters) {
        return getters[this.type + '/getTitle']
      },
    }),
    selected: {
      get() {
        return this.$store.getters[this.type + '/getSelected']
      },
      set(val) {
        this.$store.commit(this.type + '/setSelected', val)
      },
    },
  },
  methods: {
    // ...mapActions('product', ['fetchRecs', 'deleteRecs']),
    ...mapActions({
      fetchRecs(dispatch, payload) {
        return dispatch(this.type + '/fetchRecs', payload)
      },
      deleteRecs(dispatch, payload) {
        return dispatch(this.type + '/deleteRecs', payload)
      },
    }),
    ...mapMutations({
      setEditingRow(dispatch, payload) {
        return dispatch(this.type + '/setEditingRow', payload)
      },
    }),
    selectedLabel(rowsNo) {
      return `Đã chọn ${rowsNo}`
    },
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
