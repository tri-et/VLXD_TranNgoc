export default {
  title: `Thông Tin Tồn Kho`,
  isLoading: false,
  isModalOpened: false,
  editingRec: {},
  backupRec: {},
  selected: [],
  recs: [],
  icon: 'account_balance',
  cols: [
    {
      name: 'productName',
      label: 'Tên Sản Phẩm',
      align: 'left',
      field: 'productName',
      sortable: true,
    },
    {
      name: 'price',
      label: 'Giá Tham Khảo',
      align: 'left',
      field: 'price',
      sortable: true,
    },
    {
      name: 'quantity',
      label: 'Số Lượng',
      align: 'left',
      field: 'quantity',
      sortable: true,
    },
  ],
}
