<template>
  <div>
    <q-table
      :title="title"
      :data="tableData"
      :columns="columns"
      row-key="code"
      selection="single"
      :filter="filter"
    >
      <template slot="top-right" slot-scope="props">
        <q-search
          v-model="filter"
          clearable="true"
          placeholder="Tìm kiếm ..."
        />
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
        />
      </template>

      <!-- gets displayed only when there's at least one row selected -->
      <template slot="top-selection" slot-scope="props">
        <q-btn color="secondary" flat label="Action 1" class="q-mr-sm" />
        <q-btn color="secondary" flat label="Action 2" />
        <div class="col" />
        <q-btn color="negative" flat round delete icon="delete"  />
      </template>
    </q-table>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: () => ({
    title: `Thông Tin Sản Phẩm`,
    filter: '',
    columns: [
      {
        name: 'code',
        required: true,
        label: 'Mã',
        align: 'left',
        field: 'code',
        sortable: true,
      },
      {
        name: 'name',
        required: true,
        label: 'Tên Sản Phẩm',
        align: 'left',
        field: 'name',
        sortable: true,
      },
      {
        name: 'unit',
        required: true,
        label: 'Đơn Vị',
        align: 'left',
        field: 'unit',
        sortable: true,
      },
      {
        name: 'listingPrice',
        required: true,
        label: 'Giá Tham Khảo',
        align: 'left',
        field: 'listingPrice',
        sortable: true,
      },
    ],
    tableData: [
      {
        code: 'XX1',
        name: 'Frozen Yogurt',
        unit: 'cái',
        listingPrice: 130000,
      },
      {
        code: 'XX2',
        name: 'Frozen Yogurt',
        unit: 'cái',
        listingPrice: 140000,
      },
      {
        code: 'XX3',
        name: 'Frozen Yogurt',
        unit: 'cái',
        listingPrice: 150000,
      },
      {
        code: 'XX4',
        name: 'Frozen Yogurt',
        unit: 'cái',
        listingPrice: 160000,
      },
      {
        code: 'XX5',
        name: 'Frozen Yogurt',
        unit: 'cái',
        listingPrice: 170000,
      },
      {
        code: 'XX6',
        name: 'Frozen Yogurt',
        unit: 'cái',
        listingPrice: 180000,
      },
    ],
  }),
}
</script>
