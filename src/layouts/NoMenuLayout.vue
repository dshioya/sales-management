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
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'NoMenuLayout'
}
</script>
