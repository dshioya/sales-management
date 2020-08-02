<template>
  <q-page id="customer-list-page">
    <div class="page-inner row items-stretch">
      <div class="flex-1 column">
        <customer-header @detail-search-button-click="onDetailSearchButtonClick" />
        <customer-table class="flex-1" />
      </div>
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        @before-enter="onBeforeEnterTransition"
        @after-leave="onAfterLeaveTransition"
      >
        <customer-detail-search
          v-show="visibleDetailSearchPanel"
          @close-button-click="onCustomerDetailSearchCloseButtonClick"
          @search-button-click="onCustomerDetailSearchSearchButtonClick"
        />
      </transition>
    </div>
  </q-page>
</template>

<script>
import CustomerHeader from 'components/customer/list/Header'
import CustomerTable from 'components/customer/list/Table'
import CustomerDetailSearch from 'components/customer/list/DetailSearch'

export default {
  components: {
    CustomerHeader,
    CustomerTable,
    CustomerDetailSearch
  },

  meta: {
    title: '顧客一覧'
  },

  // preFetch ({ redirect }) {
  //   console.log(arguments)
  //   redirect('/order')
  // },

  data () {
    return {
      visibleDetailSearchPanel: false,
      hardCustomerOptions: [],
      banOptions: []
    }
  },

  created () {
    this.load()
  },

  methods: {
    async load (conditions) {
      this.$q.loading.show()

      await this.$store.dispatch('customerList/load', conditions)

      this.$q.loading.hide()
    },

    loadOptions () {
      this.$store.dispatch('shopOptions/load')
    },

    onDetailSearchButtonClick () {
      this.visibleDetailSearchPanel = !this.visibleDetailSearchPanel

      this.loadOptions()
    },

    onBeforeEnterTransition () {
      document.body.style.overflow = 'hidden'
    },

    onAfterLeaveTransition () {
      document.body.style.overflow = ''
    },

    onCustomerDetailSearchCloseButtonClick () {
      this.visibleDetailSearchPanel = false
    },

    onCustomerDetailSearchSearchButtonClick: function (conditions) {
      this.load(conditions)
    }
  }
}
</script>

<style lang="scss">
#customer-list-page {
  position: relative;

  .page-inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    > * {
      max-height: 100%;
    }
  }

  .customer-list-detail-search {
    min-width: 300px;
  }
}
</style>
