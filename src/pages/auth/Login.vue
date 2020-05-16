<template>
  <q-layout>
    <q-page-container>
      <q-page id="login-page">
        <q-card class="login-card fixed-center">
          <q-card-section class="text-primary">
            <div class="text-h6">販売管理システム ログイン</div>
          </q-card-section>
          <q-separator />
          <div class="q-pa-lg">
            <q-form class="q-gutter-y-md column q-mb-md" @submit="onSubmit" greedy>
              <q-input v-model="userId"
                       name="userId"
                       label="ユーザーID"
                       stack-label
                       filled
                       :rules="[$validationRules.required]"/>
              <q-input v-model="password"
                       type="password"
                       name="password"
                       label="パスワード"
                       stack-label
                       filled
                       :rules="[$validationRules.required]"/>
              <q-btn type="submit" color="primary" class="full-width">ログイン</q-btn>
            </q-form>
            <q-btn flat color="secondary" class="full-width">パスワードをお忘れの方はこちら</q-btn>
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      userId: '',
      password: ''
    }
  },

  methods: {
    onSubmit () {
      this.$router.push('/customer')
    }
  }
}
</script>

<style lang="scss">
#login-page {
  background: rgba(0, 0, 0, 0.9) url("~assets/login_bg.jpg");
  background-blend-mode: darken;

  .login-card {
    width: 500px;

    .title {
      font-size: 20px;
      line-height: 1;
      margin: 0;
    }

    .links {
      text-align: center;
    }
  }
}
</style>
