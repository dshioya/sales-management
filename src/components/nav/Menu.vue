<template>
  <div class="nav-menu column">
    <q-list class="flex-1">
      <q-item
        v-for="(m, k) in menus"
        :key="k"
        :to="m.to"
        tag="a"
        exact
      >
        <q-item-section
          v-if="m.icon"
          avatar
        >
          <q-icon :name="m.icon" />
        </q-item-section>
        <q-item-section>{{ m.label }}</q-item-section>
      </q-item>
    </q-list>
    <account-menu />
  </div>
</template>

<script>
import AccountMenu from 'components/nav/AccountMenu'

export default {
  components: {
    AccountMenu
  },
  data () {
    return {
      menus: [
        {
          icon: 'people',
          label: '顧客管理',
          to: '/customer'
        },
        {
          icon: 'shopping_cart',
          label: '注文管理',
          to: '/order'
        },
        {
          icon: 'business',
          label: '店舗管理',
          to: '/store'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.nav-menu {
  height: 100%;

  .q-router-link--exact-active {
    background-color: #e0e0e0;
  }
}
</style>
