<template>
  <q-layout view="hHh Lpr fFf">
    <q-header class="app-header">
      <q-toolbar>
        <q-toolbar-title>
          販売管理システム
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="200"
      content-class="bg-grey-1"
    >
      <nav-menu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavMenu from 'components/nav/Menu'

export default {
  name: 'MainLayout',

  components: {
    NavMenu
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
