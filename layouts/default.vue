<template>
  <el-container class="app-container">
    <app-header v-if="isAuthenticated" />
    <el-container class="app-body">
      <el-aside v-if="isAuthenticated" class="app-aside">
        <nav-menu />
      </el-aside>
      <el-main class="app-main">
        <nuxt />
      </el-main>
    </el-container>
    <app-footer v-if="isAuthenticated" />
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import NavMenu from '@/components/nav/Menu'
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'

export default {
  components: {
    NavMenu,
    AppHeader,
    AppFooter
  },

  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated'
    })
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  background-color: #f3f4f7;
  font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
    'Hiragino Sans', Meiryo, sans-serif;
}

.app-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;

  .app-header {
    display: flex;
    align-items: center;
    background-color: $app-header-background-color;
    border-bottom: 1px solid $app-border-color;

    .brand {
      flex: 1;
      color: #fff;
      font-size: 20px;
      font-weight: normal;
      line-height: 1;
      width: 200px;
      margin: 0;
      box-sizing: border-box;
    }

    .account-dropdown {
      color: #fff;
    }
  }

  .app-body {
    flex: 1;
    background-color: #fff;

    .app-aside {
      height: 100%;
      width: auto !important;

      .nav-menu {
        height: 100%;
      }
    }

    .app-main {
      padding: 0;
    }
  }

  .app-footer {
    height: auto !important;
    padding: 8px;
    text-align: right;
    border-top: 1px solid $app-border-color;

    .copyright {
      color: #ccc;
      font-size: 12px;
      padding: 0 8px;
    }
  }
}
</style>
