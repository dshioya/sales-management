<template>
  <div class="nav-menu">
    <el-menu @select="onSelect">
      <el-menu-item index="customer">
        <i class="el-icon-menu"></i>
        <span>顧客管理</span>
      </el-menu-item>
      <el-menu-item index="proposition">
        <i class="el-icon-menu"></i>
        <span>案件管理</span>
      </el-menu-item>
      <el-menu-item index="store">
        <i class="el-icon-menu"></i>
        <span>店舗管理</span>
      </el-menu-item>
    </el-menu>
    <account-menu />
  </div>
</template>

<script>
import AccountMenu from '@/components/AccountMenu'

export default {
  components: {
    AccountMenu
  },

  methods: {
    onSelect(index) {
      this.$router.push(`/${index}`)
    }
  }
}
</script>

<style lang="scss">
.nav-menu {
  display: flex;
  flex-direction: column;
  width: 200px;

  .el-menu {
    flex: 1;
  }
}
</style>
