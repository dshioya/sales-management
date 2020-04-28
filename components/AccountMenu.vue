<template>
  <div class="account-menu">
    <el-dropdown class="account-dropdown" @command="onCommandAccountMenu">
      <div class="account-dropdown-inner">
        <el-image :src="icon" class="icon" />
        <p class="username">{{ username }}</p>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="profile">ユーザー情報</el-dropdown-item>
        <el-dropdown-item command="logout">ログアウト</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <profile-dialog :visible.sync="visibleProfileDialog" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProfileDialog from '@/components/profile/Dialog'

export default {
  components: {
    ProfileDialog
  },

  data() {
    return {
      visibleProfileDialog: false
    }
  },

  computed: {
    ...mapGetters({
      username: 'auth/getName',
      icon: 'auth/getIcon'
    })
  },

  methods: {
    onCommandAccountMenu(command) {
      if (command === 'profile') {
        this.showProfileDialog()
      } else if (command === 'logout') {
        this.logout()
      }
    },
    showProfileDialog() {
      this.visibleProfileDialog = true
    },
    logout() {
      this.$store.commit('auth/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
.account-menu {
  background-color: $account-menu-background-color;
  padding: 12px 16px;

  .account-dropdown {
    width: 100%;

    .account-dropdown-inner {
      display: flex;
      align-items: center;

      .icon {
        width: 48px;
        border-radius: 50%;
      }

      .username {
        flex: 1;
        display: inline-block;
        color: #888;
        margin: 0 8px;
      }
    }
  }
}
</style>
