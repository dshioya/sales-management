<template>
  <div class="customer-list-detail-search column">
    <q-toolbar class="header">
      <q-toolbar-title>詳細検索</q-toolbar-title>
      <q-btn
        round
        flat
        icon="clear"
        @click="onCloseButtonClick"
      />
    </q-toolbar>
    <q-form class="flex-1 q-pa-md">
      <q-input
        v-model="no"
        label="顧客番号"
        stack-label
        outlined
        clearable
      />
      <q-input
        v-model="name"
        label="顧客名"
        stack-label
        outlined
        clearable
      />
      <q-input
        v-model="mid"
        label="会員番号"
        stack-label
        outlined
        clearable
      />
      <q-input
        v-model="mailAddress"
        label="メールアドレス"
        stack-label
        outlined
        clearable
      />
      <q-input
        v-model="postalCode"
        label="郵便番号"
        stack-label
        outlined
        clearable
      />
      <q-input
        v-model="address"
        label="住所"
        stack-label
        outlined
        clearable
      />
      <q-input
        v-model="tel"
        label="電話番号"
        stack-label
        outlined
        clearable
      />
      <q-input
        v-model="fax"
        label="FAX"
        stack-label
        outlined
        clearable
      />
      <q-select
        v-model="oftenUseShop"
        :options="$store.getters['shopOptions/getItems']"
        label="よく利用する店舗"
        option-value="id"
        option-label="name"
        outlined
        clearable
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
    <q-toolbar class="footer">
      <q-btn
        color="grey-7"
        label="検索"
        unelevated
        class="q-mr-sm"
        @click="onSearchButtonClick"
      />
      <q-btn
        color="white"
        text-color="black"
        label="クリア"
        unelevated
        @click="onClearButtonClick"
      />
    </q-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      no: '',
      name: '',
      mid: '',
      mailAddress: '',
      postalCode: '',
      address: '',
      tel: '',
      fax: '',
      oftenUseShop: '',
      largeCustomer: '',
      hardCustomer: '',
      ban: '',
      largeCustomerOptions: [
        {
          label: '大口顧客のみ',
          value: '1'
        },
        {
          label: '大口顧客を含めない',
          value: '2'
        }
      ],
      hardCustomerOptions: [
        {
          label: '要注意のみ',
          value: '1'
        },
        {
          label: '要注意を含めない',
          value: '2'
        }
      ],
      banOptions: [
        {
          label: '利用停止のみ',
          value: '1'
        },
        {
          label: '利用停止を含めない',
          value: '2'
        }
      ]
    }
  },

  methods: {
    onCloseButtonClick () {
      this.$emit('close-button-click')
    },

    /**
     * 検索ボタンclickイベント時の処理。
     */
    onSearchButtonClick () {
      this.$emit('search-button-click', {
        no: this.no,
        name: this.name,
        mid: this.mid,
        mailAddress: this.mailAddress,
        postalCode: this.postalCode,
        address: this.address,
        tel: this.tel,
        fax: this.fax,
        oftenUseShop: this.oftenUseShop,
        largeCustomer: this.largeCustomer,
        hardCustomer: this.hardCustomer,
        ban: this.ban
      })
    },

    onClearButtonClick () {
      this.no = ''
      this.name = ''
      this.mid = ''
      this.mailAddress = ''
      this.postalCode = ''
      this.address = ''
      this.tel = ''
      this.fax = ''
      this.oftenUseShop = ''
      this.largeCustomer = ''
      this.hardCustomer = ''
      this.ban = ''
    }
  }
}
</script>

<style lang="scss">
.customer-list-detail-search {
  border-left: 1px solid $grey-4;

  .header {
    background-color: $grey-3;
  }

  .footer {
    background-color: $grey-3;
  }

  .q-form {
    overflow: auto;

    > *:not(:last-child) {
      margin-bottom: $flex-gutter-md;
    }
  }
}
</style>
