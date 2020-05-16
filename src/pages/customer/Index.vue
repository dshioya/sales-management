<template>
  <q-page id="customer-list-page">
    <div class="page-inner row items-stretch">
      <div class="flex-1 column">
        <customer-header @clickDetailSearchButton="onClickDetailSearchButton" />
        <customer-table class="flex-1" />
      </div>
      <transition
        appear
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        @before-enter="onBeforeEnterTransition"
        @after-leave="onAfterLeaveTransition"
      >
        <customer-detail-search v-show="visibleDetailSearchPanel" />
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

  // preFetch ({ redirect }) {
  //   console.log(arguments)
  //   redirect('/order')
  // },

  data () {
    return {
      visibleDetailSearchPanel: false
    }
  },

  methods: {
    onClickDetailSearchButton () {
      this.visibleDetailSearchPanel = !this.visibleDetailSearchPanel
    },

    onBeforeEnterTransition () {
      document.body.style.overflow = 'hidden'
    },

    onAfterLeaveTransition () {
      document.body.style.overflow = ''
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
