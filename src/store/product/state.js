export default {
  title: `Thông Tin Sản Phẩm`,
  isLoading: false,
  isModalOpened: false,
  editingRow: {},
  selected: [],
  recs: [],
  cols: [
    {
      name: 'edit',
      align: 'left',
      field: 'edit',
      width: '34px',
    },
    {
      name: 'code',
      label: 'Mã Hàng',
      align: 'left',
      field: 'code',
      sortable: true,
    },
    {
      name: 'name',
      label: 'Tên Sản Phẩm',
      align: 'left',
      field: 'name',
      sortable: true,
    },
    {
      name: 'unit',
      label: 'Đơn Vị',
      align: 'left',
      field: 'unit',
      sortable: true,
    },
    {
      name: 'listingPrice',
      label: 'Giá Tham Khảo',
      align: 'left',
      field: 'listingPrice',
      sortable: true,
    },
  ],
  fields: [
    {
      name: 'id',
      hidden: true,
    },
    {
      name: 'code',
      label: 'Mã Hàng',
      type: 'text',
      icon: 'outlined_flag',
    },
    {
      name: 'name',
      label: 'Tên Sản Phẩm',
      type: 'text',
      icon: 'import_contacts',
    },
    {
      name: 'unit',
      label: 'Đơn Vị',
      type: 'text',
      icon: 'store',
    },
    {
      name: 'listingPrice',
      label: 'Giá Niêm Yết',
      type: 'number',
      icon: 'attach_money',
    },
  ],
}
