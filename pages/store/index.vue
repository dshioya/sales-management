<template>
  <div id="store-list-page" class="page">
    <el-header class="page-header">
      <h2 class="page-title">店舗一覧</h2>
      <div class="spacer" />
      <el-button type="primary" icon="el-icon-plus">新規作成</el-button>
    </el-header>
    <div class="page-body">
      <store-list-table />
    </div>
  </div>
</template>

<script>
import StoreListTable from '@/components/store/list/Table'

export default {
  components: {
    StoreListTable
  }
}
</script>

<style lang="scss">
#store-list-page {
  .search-input {
    max-width: 400px;
    margin: 0 16px;
  }
}
</style>
