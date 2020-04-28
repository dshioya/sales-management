<template>
  <div id="customer-list-page" class="page">
    <el-header class="page-header">
      <h2 class="page-title">顧客一覧</h2>
      <div class="spacer" />
      <el-input class="search-input">
        <i slot="prepend" class="el-icon-search" />
      </el-input>
      <el-button type="primary" icon="el-icon-plus">新規作成</el-button>
    </el-header>
    <div class="page-body">
      <customer-list-table />
    </div>
  </div>
</template>

<script>
import CustomerListTable from '@/components/customer/list/Table'

export default {
  components: {
    CustomerListTable
  }
}
</script>

<style lang="scss">
#customer-list-page {
  .search-input {
    max-width: 400px;
    margin: 0 16px;
  }
}
</style>
