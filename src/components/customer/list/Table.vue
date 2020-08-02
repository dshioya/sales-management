<template>
  <div class="customer-list-table">
    <q-table
      class="customer-table"
      :data="$store.getters['customerList/getItems']"
      :columns="columns"
      row-key="no"
      flat
    >
      <template v-slot:body="props">
        <q-tr
          :props="props"
          @dblclick.native="onRowDblClick(props)"
        >
          <q-td key="no">
            {{ props.row.no }}
          </q-td>
          <q-td key="name">
            {{ props.row.name }}
          </q-td>
          <q-td key="mid">
            {{ props.row.mid }}
          </q-td>
          <q-td key="mailAddress">
            {{ props.row.mailAddress }}
          </q-td>
          <q-td key="postalCode">
            {{ props.row.postalCode }}
          </q-td>
          <q-td key="address">
            {{ props.row.address }}
          </q-td>
          <q-td key="tel">
            {{ props.row.tel }}
          </q-td>
          <q-td key="fax">
            {{ props.row.fax }}
          </q-td>
          <q-td key="nearestStore">
            {{ props.row.nearestStore }}
          </q-td>
          <q-td
            key="isLargeCustomer"
            align="center"
          >
            <q-icon
              v-if="props.row.isLargeCustomer"
              name="check"
              size="xs"
              class="checked"
            />
          </q-td>
          <q-td
            key="isHardCustomer"
            align="center"
          >
            <q-icon
              v-if="props.row.isHardCustomer"
              name="check"
              size="xs"
              class="checked"
            />
          </q-td>
          <q-td
            key="isBan"
            align="center"
          >
            <q-icon
              v-if="props.row.isBan"
              name="check"
              size="xs"
              class="checked"
            >
              <q-tooltip>{{ props.row.banned }}</q-tooltip>
            </q-icon>
          </q-td>
          <q-td
            key="actions"
            align="center"
          >
            <q-btn
              color="grey-4"
              text-color="black"
              unelevated
            >
              詳細
            </q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          label: '顧客番号',
          field: 'no',
          align: 'left'
        },
        {
          label: '顧客名',
          field: 'name',
          align: 'left'
        },
        {
          label: '会員番号',
          field: 'mid',
          align: 'left'
        },
        {
          label: 'メールアドレス',
          field: 'mailAddress',
          align: 'left'
        },
        {
          label: '郵便番号',
          field: 'postalCode',
          align: 'left'
        },
        {
          label: '住所',
          field: 'address',
          align: 'left'
        },
        {
          label: '電話番号',
          field: 'tel',
          align: 'left'
        },
        {
          label: 'FAX',
          field: 'fax',
          align: 'left'
        },
        {
          label: 'よく利用する店舗',
          field: 'nearestStore',
          align: 'left'
        },
        {
          label: '大口顧客',
          field: 'isLargeCustomer',
          align: 'center'
        },
        {
          label: '要注意',
          field: 'isHardCustomer',
          align: 'center'
        },
        {
          label: '利用停止',
          field: 'isBan',
          align: 'center'
        },
        {
          field: 'actions'
        }
      ]
    }
  },

  methods: {
    onRowDblClick ({ row }) {
      const routeData = this.$router.resolve({ path: `/customer/${row.no}` })
      window.open(routeData.href, `customer_${row.no}`)
    }
  }
}
</script>

<style lang="scss">
.customer-list-table {
  position: relative;

  .customer-table {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    .checked {
      color: $accent;
      font-weight: bold;
    }
  }
}
</style>
