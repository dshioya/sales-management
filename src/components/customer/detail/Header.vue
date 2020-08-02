<template>
  <header class="customer-detail-header">
    <h2 class="customer-name">
      {{ customer.name }}
    </h2>
    <div>
      <label>顧客番号</label>
      <div>{{ customer.no }}</div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    customer: {
      type: Object,
      defaultValue: {}
    }
  }
}
</script>

<style lang="scss">
.customer-detail-header {
  padding: 16px;

  .customer-name {
    font-size: 28px;
    line-height: 1;
    margin: 0;
  }
}
</style>
