<template>
  <q-table :data="getRecs" :columns="getCols" :filter="filter" :rows-per-page-options="[15,20,25,50,0]" :loading="getIsLoading" :pagination.sync="pagination" :selected-rows-label="selectedLabel" :selected.sync="selected" :selection="hideSelection?'none':'multiple'" table-class="et-grid" dense row-key="id" color="purple" separator="cell" no-results-label="Không tìm thấy kết quả nào ..." rows-per-page-label="Hiện">
    <template slot="top-left" slot-scope="props">
      <q-btn :loading="getIsLoading" color="primary" @click="fetchRecs" class="q-mr-sm">
        <q-icon name="refresh" size="25px" />
        <q-spinner-pie slot="loading" size="25px" />
      </q-btn>
      <q-btn wait-for-ripple :disabled="getIsLoading" color="green" @click="setEditingRec({})" class="q-mr-sm" :class="{'q-hide-add':hideAdd}">
        <q-icon name="add" size="25px" />
      </q-btn>
      <q-icon :name="getIcon" size="25px" />
      <cite>{{getTitle}}</cite>
    </template>
    <template slot="top-right" slot-scope="props">
      <div style="width:300px" class="q-mr-sm">
        <q-search v-model="filter" :clearable="true" placeholder="Tìm kiếm ..." color="blue" inverted />
      </div>
      <q-btn flat round dense :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="props.toggleFullscreen" />
    </template>

    <!-- slot name syntax: body-cell-<column_name> -->
    <q-td class="q-pa-none" auto-width slot="body-cell-edit" slot-scope="props" :props="props">
      <q-btn round flat wait-for-ripple dense icon="settings"  color="orange-10" @click="setEditingRec(props.row)">
      </q-btn>
    </q-td>

    <!-- gets displayed only when there's at least one row selected -->
    <template slot="top-selection" slot-scope="props">
      <div class="q-table-control">
        <!-- wrap with div.q-table-control to fix jumpimg padding-->
        <q-btn :loading="getIsLoading" color="red" style="margin-right:5px" @click="deleteRecs">
          <q-icon name="delete" size="25px" />
          <q-spinner-pie slot="loading" size="25px" />
        </q-btn>
        <q-icon :name="getIcon" size="25px" />
        <cite>{{getTitle}}</cite>
      </div>
    </template>
  </q-table>
</template>

<style>
</style>

<script>
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'

export default {
  props: {
    type: {
      default: 'xxx',
      type: String,
    },
    hideSelection: Boolean,
    hideAdd: Boolean,
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
    ...mapGetters('product', {getRecsProduct: 'getRecs'}),
    ...mapGetters('supplier', {getRecsSuplier: 'getRecs'}),
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
      getIcon(state, getters) {
        return getters[this.type + '/getIcon']
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
    ...mapActions('product', {fetchRecsProduct: 'fetchRecs'}),
    ...mapActions('supplier', {fetchRecsSupplier: 'fetchRecs'}),
    ...mapActions({
      fetchRecs(dispatch, payload) {
        return dispatch(this.type + '/fetchRecs', payload)
      },
      deleteRecs(dispatch, payload) {
        return dispatch(this.type + '/deleteRecs', payload)
      },
    }),
    ...mapMutations({
      setEditingRec(dispatch, payload) {
        if (this.type === 'stockin' && (this.getRecsProduct.length === 0 || this.getRecsSuplier.length === 0)) {
          this.fetchRecsProduct()
          this.fetchRecsSupplier()
        }
        return dispatch(this.type + '/setEditingRec', payload)
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

.q-pa-none {
  padding: 0 !important;
}
.q-hide-add {
  display: none;
}
</style>
