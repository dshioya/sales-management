<template>
  <div v-if="!isAuthenticated" id="login-page">
    <el-card v-loading="loading">
      <template slot="header">
        <h2 class="page-title">顧客管理システム ログイン</h2>
      </template>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        @submit.native.prevent="onSubmit"
      >
        <el-form-item label="ユーザーID" prop="userId" required>
          <el-input v-model="form.userId" clearable autofocus />
        </el-form-item>
        <el-form-item label="パスワード" prop="password" required>
          <el-input v-model="form.password" type="password" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-button" native-type="submit"
            >ログイン</el-button
          >
        </el-form-item>
      </el-form>
      <el-button type="text">パスワードを忘れた場合はこちら</el-button>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    const values = this.$store.getters['page/login/getValues']
    return {
      loading: false,
      form: {
        userId: values.userId,
        password: ''
      },
      rules: {
        userId: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }]
      }
    }
  },

  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated'
    })
  },

  methods: {
    onSubmit() {
      this.loading = true

      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$axios.post('/login').then((res) => {
            this.loading = false

            if (res.data.success) {
              this.$store.commit('page/login/setValues', res.data)
              this.$store.commit('auth/authenticated', res.data)
              this.$router.push('/customer')
            }
          })
        } else {
          this.loading = false
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
#login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .page-title {
    color: $--color-primary;
    font-size: 18px;
    font-weight: normal;
    margin: 0;
  }

  .el-card {
    width: 400px;
  }

  .login-button {
    margin-top: 50px !important;
  }

  .el-button {
    width: 100%;
  }
}
</style>
