<template>
  <div class="customer-list-detail-search column">
    <q-toolbar class="header">
      <q-toolbar-title>詳細検索</q-toolbar-title>
      <q-btn
        color="grey-7"
        label="検索"
        unelevated
        class="q-mr-sm"
      />
      <q-btn
        color="white"
        text-color="black"
        label="クリア"
        unelevated
      />
    </q-toolbar>
    <q-form class="flex-1 q-pa-md">
      <q-input
        label="顧客番号"
        stack-label
        outlined
      />
      <q-input
        label="顧客名"
        stack-label
        outlined
      />
      <q-input
        label="会員番号"
        stack-label
        outlined
      />
      <q-input
        label="メールアドレス"
        stack-label
        outlined
      />
      <q-input
        label="郵便番号"
        stack-label
        outlined
      />
      <q-input
        label="住所"
        stack-label
        outlined
      />
      <q-input
        label="電話番号"
        stack-label
        outlined
      />
      <q-input
        label="FAX"
        stack-label
        outlined
      />
      <q-input
        label="よく利用する店舗"
        stack-label
        outlined
      />
      <q-select
        v-model="largeCustomer"
        :options="largeCustomerOptions"
        label="大口顧客"
        outlined
        clearable
      />
      <q-select
        v-model="hardCustomer"
        :options="hardCustomerOptions"
        label="要注意"
        outlined
        clearable
      />
      <q-select
        v-model="ban"
        :options="banOptions"
        label="利用停止"
        outlined
        clearable
      />
    </q-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      largeCustomer: '',
      hardCustomer: '',
      ban: '',
      largeCustomerOptions: [
        { label: '大口顧客のみ', value: '1' },
        { label: '大口顧客を含めない', value: '2' }
      ],
      hardCustomerOptions: [
        { label: '要注意のみ', value: '1' },
        { label: '要注意を含めない', value: '2' }
      ],
      banOptions: [
        { label: '利用停止のみ', value: '1' },
        { label: '利用停止を含めない', value: '2' }
      ]
    }
  }
}
</script>

<style lang="scss">
.customer-list-detail-search {
  border-left: 1px solid $grey-4;

  .header {
    background-color: $grey-4;
    z-index: 100;
  }

  .q-form {
    overflow: auto;

    > *:not(:last-child) {
      margin-bottom: $flex-gutter-md;
    }
  }
}
</style>
