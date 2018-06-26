<template>
  <q-table
    :title="getTitle"
    :data="getRecs"
    :columns="getCols"
    row-key="code"
    selection="multiple"
    :filter="filter"
  >
    <template slot="top-left" slot-scope="props">
      <q-btn :loading="getIsLoading" color="green" @click="fetchRecs" style="margin-right:5px">
        <q-icon name="refresh" size="25px"/>
        <q-spinner-pie slot="loading" size="25px"/>
      </q-btn>
      <q-search
        v-model="filter"
        :clearable="true"
        placeholder="Tìm kiếm ..."
      />
    </template>
    <template slot="top-right" slot-scope="props">
      <nobr>
        <span class="form-label"><i class="q-item-icon material-icons">shopping_basket</i>{{getTitle}}</span>
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
        />
      </nobr>
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
    filter: '',
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
/* making label text to be vertivally align with the icon  */
.form-label {
  margin-right: 10px;
}
.form-label i {
  vertical-align: sub;
}
</style>
