<template>
  <q-toolbar class="customer-list-header page-header">
    <q-toolbar-title>顧客一覧</q-toolbar-title>
    <q-space />
    <q-btn
      color="primary"
      icon="add"
      label="新規作成"
      unelevated
    />
    <q-btn
      color="grey-4"
      text-color="black"
      label="詳細検索"
      class="q-ml-sm"
      unelevated
      @click="onDetailSearchButtonClick"
    />
  </q-toolbar>
</template>

<script>
export default {
  data () {
    return {
      query: ''
    }
  },

  methods: {
    onDetailSearchButtonClick () {
      this.$emit('detail-search-button-click')
    }
  }
}
</script>
